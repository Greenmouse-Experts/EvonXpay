<template>
  <!-- begin app-main -->
  <div class="app-main" id="main">
    <!-- begin container-fluid -->
    <div class="container-fluid">
      <!-- begin row -->
      <title-layout title="My Wallet" />
      <!-- begin row -->
      <!-- Advertising -->
      <!-- Advertising -->
      <div class="row">
        <div class="col-lg-4">
          <div class="color" style="background-color: #ffe5e2">
            <div class="text">
              <h4>Total Balance</h4>
              <h5>1540</h5>

              <div class="btn-div">
                <img src="@/assets/user/img/gross.png" draggable="false" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="color" style="background-color: #ffe2fd">
            <div class="text">
              <h4>Total Send</h4>
              <h5>500</h5>

              <div class="btn-div">
                <img src="@/assets/user/img/send-money.png" draggable="false" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="color" style="background-color: #e2e8ff">
            <div class="text">
              <h4>Total Received</h4>
              <h5>560</h5>
              <div class="btn-div">
                <img
                  src="@/assets/user/img/money-transfer.png"
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Advertising Ends -->

      <!-- Services -->
      <div class="row editable-wrapper">
        <div class="col-lg-12">
          <div class="card card-statistics">
            <div class="card-body">
              <div class="table-responsive">
                <table
                  id="tableedit"
                  class="table display responsive nowrap table-light table-bordered"
                >
                  <thead class="thead-light">
                    <tr>
                      <th>Status</th>
                      <th>Reference</th>
                      <th>Transaction Information</th>
                      <th>Channel</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
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
