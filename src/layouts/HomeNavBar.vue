<template>
  <header>
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <RouterLink class="navbar-brand" to="/">
          <img src="@/assets/images/logo.png" alt="Evonex Pay Logo" />
        </RouterLink>
        <RouterLink to="auth/login" class="btn-login mobile-login"
          >Login</RouterLink
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <i class="bi bi-list"></i>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="offcanvas-header">
            <button
              type="button"
              class="btn-offcanvas-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i class="bi bi-x-square"></i>
            </button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav me-auto mb-2">
              <li class="nav-item">
                <RouterLink class="nav-link" to="/">Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/about">About</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/send-money"
                  >Send Money</RouterLink
                >
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/blog">Blog</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/faq">FAQs</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
              </li>
            </ul>
            <div class="nav-auth">
              <RouterLink to="/auth/login" class="btn-login">Login</RouterLink>
              <RouterLink to="/auth/signup" class="btn-signup"
                >Sign Up</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="css"></style>
