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
                <div class="col-lg-12 mb-4">
                  <label>Password</label>
                  <i class="bi bi-file-lock"></i>
                  <input
                    type="password"
                    placeholder="Enter password"
                    required
                  />
                </div>
                <div class="col-lg-12">
                  <button type="submit">Login</button>
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
export default {};
</script>

<style></style>
