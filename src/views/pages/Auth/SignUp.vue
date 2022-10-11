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
        <div class="col-md-1"></div>
        <div class="col-md-5">
          <div class="auth-box">
            <h1>Sign Up</h1>
            <form>
              <div class="row">
                <!--Email-->
                <div class="col-lg-12 mb-4">
                  <label>Email Address</label>
                  <i class="bi bi-envelope"></i>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    required
                  />
                </div>
                <!--First Name-->
                <div class="col-lg-6 mb-4">
                  <label>First Name</label>
                  <i class="bi bi-person-circle"></i>
                  <input type="text" placeholder="Enter first name" required />
                </div>
                <!--Last Name-->
                <div class="col-lg-6 mb-4">
                  <label>Last Name</label>
                  <i class="bi bi-person-circle"></i>
                  <input type="text" placeholder="Enter last name" required />
                </div>
                <!--Phone Number-->
                <div class="col-lg-12 mb-4">
                  <label>Phone Number</label>
                  <i class="bi bi-phone-vibrate"></i>
                  <input type="tel" placeholder="Enter phone number" required />
                </div>
                <!--Password-->
                <div class="col-lg-12 mb-4">
                  <label>Password</label>
                  <i class="bi bi-file-lock"></i>
                  <input
                    type="password"
                    placeholder="Enter password"
                    required
                  />
                </div>
                <!--Confirm Password-->
                <div class="col-lg-12 mb-3">
                  <label>Confirm Password</label>
                  <i class="bi bi-file-lock"></i>
                  <input
                    type="password"
                    placeholder="Re-type password"
                    required
                  />
                </div>
                <!--Terms & Privacy-->
                <div class="col-lg-12 mb-3">
                  <p class="text-terms">
                    By clicking Sign Up, you agree to the
                    <RouterLink to="/terms">Terms & Conditions</RouterLink> and
                    <RouterLink to="/privacy">Privacy Policy</RouterLink>
                  </p>
                </div>
                <div class="col-lg-12 mb-4">
                  <button type="submit">Sign Up</button>
                </div>
              </div>
            </form>
            <!--Line-Rule-->
            <div class="hr-div"><span>Or Sign Up With</span></div>
            <!--Sign Up Options-->
            <div class="col-lg-12 signup-option text-center">
              <a href="#" title="Sign Up With Your Google Account"
                ><img src="@/assets/images/auth/icon-google.png" /> Google</a
              >
              <a href="#" title="Sign Up With Your Facebook Account"
                ><img src="@/assets/images/auth/icon-facebook.png" /> Facebook</a
              >
            </div>
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
export default {};
</script>

<style></style>
