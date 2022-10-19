<template>
  <!-- begin app -->
  <div class="app">
    <!-- begin app-wrap -->
    <div class="app-wrap">
      <UserNavBar />
      <div class="app-container">
        <UserSideBar />
        <RouterView />
      </div>
      <!-- begin footer -->
      <footer class="footer">
        <div class="row">
          <div class="col-12 col-sm-12 text-center">
            <div class="text-center">
              Copyright © 2022 EvonexPay | All Right Reserved
            </div>
          </div>
        </div>
      </footer>
      <!-- end footer -->
    </div>
  </div>
</template>

<script>
import UserNavBar from "@/layouts/User/UserNavBar.vue";
import UserSideBar from "@/layouts/User/UserSideBar.vue";
import { onMounted } from "vue";
export default {
  name: "UserDashboard",
  components: {
    UserNavBar,
    UserSideBar,
  },
  setup() {
    onMounted(() => {
      const recaptchaScript = document.createElement("script");
      recaptchaScript.setAttribute("src", "/vendors.js");
      document.head.appendChild(recaptchaScript);
      const toggleJs = document.createElement("script");
      toggleJs.setAttribute("src", "/app.js");
      document.head.appendChild(toggleJs);
    });
  },
};
</script>

<style>
@import "@/assets/user/css/style.css";
@import "@/assets/user/css/vendors.css";
</style>
