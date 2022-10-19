<template>
  <main>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center">
          <div class="details-box">
            <RouterLink to="/">
              <img
                class="logo-area"
                src="@/assets/images/auth/logo.png"
                alt="Evonex Pay Logo"
              />
            </RouterLink>
            <h5>Crypto Transactions With Ease & Speed!</h5>
            <img class="main-img" src="@/assets/images/auth/svgsignup.svg" />
            <p>We Buy, Sell And Provide Instant Exchange</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="auth-box">
            <h1>Sign Up</h1>
            <form @submit.prevent="signUp">
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
                <!--First Name-->
                <div class="col-lg-6 mb-4">
                  <label>First Name</label>
                  <BIconPersonCircle />
                  <input
                    type="text"
                    v-model="formData.firstname"
                    placeholder="Enter first name"
                  />
                  <span
                    class="error"
                    v-for="error in v$.firstname.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </span>
                </div>
                <!--Last Name-->
                <div class="col-lg-6 mb-4">
                  <label>Last Name</label>
                  <BIconPersonCircle />
                  <input
                    type="text"
                    v-model="formData.lastname"
                    placeholder="Enter last name"
                  />
                  <span
                    class="error"
                    v-for="error in v$.lastname.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </span>
                </div>
                <!--Phone Number-->
                <div class="col-lg-12 mb-4">
                  <label>Phone Number</label>
                  <BIconPhoneVibrate />
                  <input
                    v-model="formData.phone_no"
                    type="tel"
                    placeholder="Enter phone number"
                  />
                  <span
                    class="error"
                    v-for="error in v$.phone_no.$errors"
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
                    placeholder="Enter password"
                    v-model="formData.password"
                  />
                  <span
                    class="error"
                    v-for="error in v$.password.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </span>
                </div>
                <!--Confirm Password-->
                <div class="col-lg-12 mb-3">
                  <label>Confirm Password</label>
                  <BIconFileLock />
                  <input
                    type="password"
                    v-model="formData.confirmPassword"
                    placeholder="Re-type password"
                  />
                  <span
                    class="error"
                    v-for="error in v$.confirmPassword.$errors"
                    :key="error.$uid"
                  >
                    {{ error.$message }}
                  </span>
                </div>
                <!--Terms & Privacy-->
                <div class="col-lg-12 mb-3">
                  <p class="text-terms">
                    By clicking Sign Up, you agree to the
                    <RouterLink to="/terms">Terms & Conditions</RouterLink> and
                    <RouterLink to="/privacy">Privacy Policy</RouterLink>
                  </p>
                </div>
                <div class="col-lg-12 mb-2">
                  <button :disabled="disable" type="submit">Sign Up</button>
                </div>
              </div>
            </form>
            <!--Line-Rule-->
            <!-- <div class="hr-div"><span>Or Sign Up With</span></div> -->
            <!--Sign Up Options-->
            <!-- <div class="col-lg-12 signup-option text-center">
              <a href="#" title="Sign Up With Your Google Account"
                ><img src="@/assets/images/auth/icon-google.png" /> Google</a
              >
              <a href="#" title="Sign Up With Your Facebook Account"
                ><img src="@/assets/images/auth/icon-facebook.png" /> Facebook</a
              >
            </div> -->
            <!--Alternate-->
            <div class="col-lg-12 text-center alternate">
              <p>
                Already have an account?
                <RouterLink to="/auth/login"
                  >Login <i class="bi bi-box-arrow-in-right"></i
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
import { computed, reactive, ref } from "vue";
import Swal from "sweetalert2";
import useVuelidate from "@vuelidate/core";
import {
  required,
  sameAs,
  minLength,
  email,
  helpers,
  numeric,
} from "@vuelidate/validators";
import { useRouter } from "vue-router";
export default {
  setup() {
    const disable = ref(false);
    const router = useRouter();
    const formData = reactive({
      email: "",
      firstname: "",
      lastname: "",
      phone_no: "",
      password: "",
      confirmPassword: "",
    });
    const rules = computed(() => {
      return {
        email: {
          required: helpers.withMessage("Email field is required", required),
          email: helpers.withMessage("Email is invalid", email),
        },
        password: {
          required: helpers.withMessage("Password is required", required),
          minLength: helpers.withMessage(
            ({ $params }) =>
              `Password should be at least ${$params.min} characters long`,
            minLength(6)
          ),
        },
        firstname: {
          required: helpers.withMessage(
            "Firstname field cannot be empty",
            required
          ),
        },
        lastname: {
          required: helpers.withMessage(
            "Lastname field cannot be empty",
            required
          ),
        },
        phone_no: {
          required: helpers.withMessage(
            "Phone number field cannot be empty",
            required
          ),
          numeric: helpers.withMessage(
            "Phone number cannot be character",
            numeric
          ),
        },
        confirmPassword: {
          required: helpers.withMessage(
            "Confirm Password is required",
            required
          ),
          sameAs: helpers.withMessage(
            () => `Password not match`,
            sameAs(formData.password)
          ),
        },
      };
    });

    const v$ = useVuelidate(rules, formData);
    const signUp = async () => {
      const result = await v$.value.$validate();
      if (result) {
        axios
          .post(
            "https://evonxpay-backend.herokuapp.com/api/register-user",
            formData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            Swal.fire({
              text: `${res.data.message}`,
              confirmButtonText: "Ok",
            }).then((result) => {
              if (result.isConfirmed) {
                router.replace("/auth/login");
              }
            });
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              text: `${err.response.data.message}`,
            });
          });
      }
    };
    return {
      formData,
      disable,
      signUp,
      v$,
    };
  },
};
</script>

<style>
.error {
  color: #ef0505;
}
</style>
