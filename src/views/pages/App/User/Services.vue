<template>
  <!-- begin app-main -->
  <div class="app-main" id="main">
    <!-- begin container-fluid -->
    <div class="container-fluid">
      <!-- begin row -->
      <title-layout title="Services" />
      <!-- begin row -->
      <!-- Advertising -->
      <!-- Advertising -->
      <div class="row">
        <div class="col-lg-4">
          <div class="color" style="background-color: #ffe5e2">
            <div class="text">
              <h4>E-Currencies</h4>
              <h5>1540</h5>
              <div class="user">Users</div>
              <div class="btn-div">
                <img src="@/assets/user/img/icon1.png" draggable="false" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="color" style="background-color: #e2e8ff">
            <div class="text">
              <h4>Airtime Purchase</h4>
              <h5>560</h5>
              <div class="user">Users</div>
              <div class="btn-div">
                <img src="@/assets/user/img/icon2.png" draggable="false" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="color" style="background-color: #ffe2fd">
            <div class="text">
              <h4>Utility Bills</h4>
              <h5>700</h5>
              <div class="user">Users</div>
              <div class="btn-div">
                <img src="@/assets/user/img/icon3.png" draggable="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Services -->
      <div class="row">
        <div class="col-lg-12">
          <div class="card card-statistics">
            <div class="card-header">
              <div class="card-heading">
                <h4 class="card-title">Statictics</h4>
              </div>
            </div>
            <div class="card-body">
              <div class="c3chart-wrapper">
                <div id="c3demo3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Services Ends -->
      <!-- end row -->
    </div>
    <!-- end container-fluid -->
  </div>
  <!-- end app-main -->
</template>

<script>
import { onMounted } from "vue";

export default {
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

<style></style>
