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
                <!--Password-->
                <div class="col-lg-12 mb-2">
                  <label>Password</label>
                  <i class="bi bi-file-lock"></i>
                  <input
                    type="password"
                    placeholder="Enter password"
                    required
                  />
                </div>
                <!--Terms & Privacy-->
                <div class="col-lg-12 mb-2">
                  <p class="text-terms">
                    <a href="forgot.html">Forgot Password?</a>
                  </p>
                </div>
                <div class="col-lg-12 mb-4">
                  <button type="submit">Login</button>
                </div>
              </div>
            </form>
            <!--Line-Rule-->
            <div class="hr-div"><span>Or Login With</span></div>
            <!--Sign Up Options-->
            <div class="col-lg-12 signup-option text-center">
              <a href="#" title="Login With Your Google Account"
                ><img src="@/assets/images/auth/icon-google.png" /> Google</a
              >
              <a href="#" title="Login With Your Facebook Account"
                ><img src="@/assets/images/auth/icon-facebook.png" />
                Facebook</a
              >
            </div>
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
export default {};
</script>

<style></style>
