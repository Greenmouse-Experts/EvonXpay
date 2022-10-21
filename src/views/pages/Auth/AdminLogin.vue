<template>
  <main>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5">
          <RouterLink to="/">
            <img
              class="admin-logo"
              src="@/assets/images/auth/logo.png"
              alt="Evonex Pay Logo"
            />
          </RouterLink>
          <div class="auth-box">
            <h1>Admin Login</h1>
            <form @submit.prevent="loginFunction">
              <div class="row">
                <!--Email-->
                <div class="col-lg-12 mb-4">
                  <label>Email Address</label>
                  <BIconEnvelope />
                  <input
                    type="email"
                    v-model="formData.email"
                    placeholder="Enter email address"
                  />
                  <span
                    class="error"
                    v-for="error in v$.email.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </span>
                </div>
                <!--Password-->
                <div class="col-lg-12 mb-4">
                  <label>Password</label>
                  <BIconFileLock />
                  <input
                    type="password"
                    v-model="formData.password"
                    placeholder="Enter password"
                  />
                  <span
                    class="error"
                    v-for="error in v$.password.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </span>
                </div>
                <div class="col-lg-12">
                  <div>
                    <font-awesome-icon
                      v-if="loading"
                      style="margin-top: 21px; color: #fff; border: 0"
                      icon="fa-solid fa-spinner"
                      spin
                    />
                  </div>
                  <button :disabled="disable" type="submit">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { required, minLength, email, helpers } from "@vuelidate/validators";
import { ref, reactive, computed, onMounted } from "vue";
import { AuthData } from "@/stores/auth";
import { useRoute, useRouter } from "vue-router";
import Swal from "sweetalert2";
export default {
  setup() {
    const { logUser } = AuthData();
    const router = useRouter();
    const route = useRoute();
    const loading = ref(false);
    const formData = reactive({
      email: "",
      password: "",
    });
    const disable = ref(false);
    const rules = computed(() => {
      return {
        email: {
          required: helpers.withMessage("Email field can't be empty", required),
          email: helpers.withMessage("Email is invalid", email),
        },
        password: {
          required: helpers.withMessage(
            "Password field can't be empty",
            required
          ),
          minLength: helpers.withMessage(
            ({ $params }) =>
              `Password should be at least ${$params.min} characters long`,
            minLength(6)
          ),
        },
      };
    });

    const v$ = useVuelidate(rules, formData);
    const loginFunction = async () => {
      const result = await v$.value.$validate();
      if (result) {
        disable.value = true;
        loading.value = true;
        axios
          .post(
            "https://evonxpay-backend.herokuapp.com/api/signin-admin",
            formData
          )
          .then((res) => {
            disable.value = false;
            loading.value = false;
            let data = res.data;
            logUser(data);
            router.replace("/admin/dashboard");
          })
          .catch((err) => {
            disable.value = false;
            loading.value = false;
            Swal.fire({
              icon: "error",
              text: `${err.response.data.message}`,
            });
          });
      }
    };
    onMounted(() => {
      let message = route.query.message;
      if (message != undefined) {
        Swal.fire({
          icon: "success",
          text: `${JSON.stringify(message)}`,
        });
      }
    });
    return {
      loginFunction,
      formData,
      disable,
      v$,
      loading,
    };
  },
};
</script>

<style></style>
