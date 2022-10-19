<template>
  <main>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center">
          <div class="details-box login-details-box">
            <RouterLink to="/">
              <img
                class="logo-area"
                src="@/assets/images/auth/logo.png"
                alt="Evonex Pay Logo"
              />
            </RouterLink>
            <h5>Crypto Transactions With Ease & Speed!</h5>
            <img class="main-img" src="@/assets/images/auth/svglogin.svg" />
            <p>We Buy, Sell And Provide Instant Exchange</p>
          </div>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-5">
          <div class="auth-box">
            <h1>Login</h1>
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
                <div class="col-lg-12 mb-2">
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
                <!--Terms & Privacy-->
                <div class="col-lg-12 mb-2">
                  <p class="text-terms">
                    <a href="#">Forgot Password?</a>
                  </p>
                  <div>
                    <font-awesome-icon
                      v-if="loading"
                      style="margin-top: 21px; color: #fff; border: 0"
                      icon="fa-solid fa-spinner"
                      spin
                    />
                  </div>
                </div>

                <div class="col-lg-12 mb-4">
                  <button :disabled="disable" type="submit">Login</button>
                </div>
              </div>
            </form>
            <!--Line-Rule-->
            <!-- <div class="hr-div"><span>Or Login With</span></div> -->
            <!--Sign Up Options-->
            <!-- <div class="col-lg-12 signup-option text-center">
              <a href="#" title="Login With Your Google Account"
                ><img src="@/assets/images/auth/icon-google.png" /> Google</a
              >
              <a href="#" title="Login With Your Facebook Account"
                ><img src="@/assets/images/auth/icon-facebook.png" />
                Facebook</a
              >
            </div> -->
            <!--Alternate-->
            <div class="col-lg-12 text-center alternate">
              <p>
                Don't have an account?
                <RouterLink to="/auth/signup"
                  >Sign Up <i class="bi bi-box-arrow-in-right"></i
                ></RouterLink>
              </p>
            </div>
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
            "https://evonxpay-backend.herokuapp.com/api/signin-user",
            formData
          )
          .then((res) => {
            disable.value = false;
            loading.value = false;
            let data = res.data;
            logUser(data);
            router.replace("/user/dashboard");
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
