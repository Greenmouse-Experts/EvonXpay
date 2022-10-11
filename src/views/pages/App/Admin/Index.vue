<template>
  <!-- begin app -->
  <div class="app">
    <!-- begin app-wrap -->
    <div class="app-wrap">
      <AdminNav />
      <div class="app-container">
        <AdminSideBar />
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
import AdminNav from "@/layouts/Admin/AdminNav.vue";
import AdminSideBar from "@/layouts/Admin/AdminSideBar.vue";
import { onMounted } from "vue";
export default {
  name: "IndexAdmin",
  components: {
    AdminNav,
    AdminSideBar,
  },
  setup() {
    onMounted(() => {
      const recaptchaScript = document.createElement("script");
      recaptchaScript.setAttribute(
        "src",
        "http://127.0.0.1:5500/assets/js/vendors.js"
      );
      document.head.appendChild(recaptchaScript);
      const toggleJs = document.createElement("script");
      toggleJs.setAttribute("src", "http://127.0.0.1:5500/assets/js/app.js");
      document.head.appendChild(toggleJs);
    });
  },
};
</script>

<style>
@import "@/assets/admin/css/style.css";
@import "@/assets/admin/css/vendors.css";
</style>
