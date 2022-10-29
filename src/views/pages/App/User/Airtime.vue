<template>
  <!-- begin app-main -->
  <div class="app-main" id="main">
    <!-- begin container-fluid -->
    <div class="container-fluid">
      <!-- begin row -->
      <div class="row">
        <div class="col-lg-12">
          <div class="line-div">
            <h4 class="hey">
              Airtime
              <span> 21/10/2022 </span>
            </h4>
          </div>
        </div>
      </div>
      <!-- begin row -->
      <!-- Advertising -->
      <!-- Advertising -->
      <div class="row">
        <div class="col-lg-6">
          <div class="color icon" style="background-color: #ffe2fd">
            <div class="text">
              <h4>Airtime</h4>
              <h5>700</h5>
              <div class="user">Users</div>
              <div class="btn-div">
                <img src="@/assets/user/img/icon3.png" draggable="false" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="color icon" style="background-color: #23e97b">
            <div class="text">
              <h4>Balance</h4>
              <h5>00,00</h5>
              <div class="user">User</div>
              <div class="btn-div">
                <img src="@/assets/user/img/gross.png" draggable="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Advertising Ends -->
      <div class="row">
        <div class="col-xxl-6 mb-30">
          <div class="card card-statistics h-100 mb-0">
            <div class="card-header d-flex justify-content-between">
              <div class="card-heading">
                <h4 class="card-title">Airtime</h4>
              </div>
              <div class="dropdown">
                <a
                  class="p-2"
                  href="#!"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="ti ti-more-alt"></i>
                </a>
                <div
                  class="dropdown-menu custom-dropdown dropdown-menu-right p-4"
                >
                  <!-- <h6 class="mb-1">Export</h6>
                  <a class="dropdown-item" href="#!"
                    ><i class="fa-fw fa fa-file-pdf-o pr-2"></i>Export to PDF</a
                  >
                  <a class="dropdown-item" href="#!"
                    ><i class="fa-fw fa fa-file-excel-o pr-2"></i>Export to
                    CSV</a
                  > -->
                </div>
              </div>
            </div>
            <div class="card-body pt-0">
              <!-- <p class="text-dark text-center mt-2">
                  Renew your data subscription here
                </p> -->
              <div class="mt-2 mb-3">
                <label class="text-dark">Provider</label>
                <div class="input-group">
                  <select
                    v-model="provider"
                    @change="selectDataProvider"
                    class="form-control"
                  >
                    <option value="">Select Provider</option>
                    <option
                      v-for="item in billerProvider"
                      :key="item"
                      :value="item.biller_name"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="mt-2 mb-3">
                <label class="text-dark">Amount</label>
                <div class="input-group">
                  <div class="input-group">
                    <input
                      type="number"
                      v-model="bundleAmount"
                      class="form-control"
                      placeholder="Enter your Number"
                    />
                  </div>
                </div>
              </div>
              <div class="mt-2 mb-3">
                <label class="text-dark">Receiver Phone Number</label>
                <div class="input-group">
                  <input
                    type="tel"
                    class="form-control"
                    v-model="customer"
                    placeholder="Enter your Number"
                  />
                </div>
              </div>
              <div class="col-12" style="text-align: right">
                <font-awesome-icon
                  v-if="loading"
                  style="
                    margin-top: 21px;
                    color: rgb(0, 0, 0);
                    border: 0px;
                    font-size: 26px;
                    width: auto !important;
                  "
                  icon="fa-solid fa-spinner"
                  spin
                />
                <button
                  v-if="validating"
                  @click="validatePayment"
                  class="btn btn-success text-uppercase mt-1"
                >
                  Continue
                </button>
                <button
                  v-if="!validating && !loading"
                  @click="BuyAirtime"
                  class="btn btn-success text-uppercase mt-1"
                >
                  Buy Airtime
                </button>
              </div>
              <!-- <div class="mt-2 mb-3">
                  <label class="text-dark">Notification Phone Details</label>
                  <div class="input-group">
                    <input
                      type="tel"
                      class="form-control"
                      placeholder="Enter your Number"
                    />
                  </div>
                </div>
                <div class="mt-2 mb-3">
                  <label class="text-dark">Email</label>
                  <div class="input-group">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Enter your email Optional"
                    />
                  </div>
                </div> -->
            </div>
          </div>
        </div>
        <!-- <div class="col-xxl-6 mb-30">
            <div class="card card-statistics h-100 mb-0">
              <div class="card-header d-flex justify-content-between">
                <div class="card-heading">
                  <h4 class="card-title">Data Bundle</h4>
                </div>
                <div class="dropdown">
                  <a
                    class="p-2"
                    href="#!"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="ti ti-more-alt"></i>
                  </a>
                  <div
                    class="dropdown-menu custom-dropdown dropdown-menu-right p-4"
                  >
                    <h6 class="mb-1">Export</h6>
                    <a class="dropdown-item" href="#!"
                      ><i class="fa-fw fa fa-file-pdf-o pr-2"></i>Export to PDF</a
                    >
                    <a class="dropdown-item" href="#!"
                      ><i class="fa-fw fa fa-file-excel-o pr-2"></i>Export to
                      CSV</a
                    >
                  </div>
                </div>
              </div>
              <div class="card-body pt-0">
                <div class="mt-2 mb-3">
                  <label class="text-dark">Amount</label>
                  <div class="input-group">
                    <div class="input-group">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="Enter your Number"
                      />
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label>Choose Payment Method</label>
                  <div class="input-group">
                    <select class="form-control" id="visa">
                      <option>VISA Card</option>
                      <option>Credit Card</option>
                      <option>Debit Card</option>
                      <option>Master Card</option>
                    </select>
                  </div>
                </div>
                <div class="col-12">
                  <button class="btn btn-success text-uppercase mt-1">Pay</button>
                </div>
              </div>
            </div>
          </div> -->
      </div>
    </div>
    <!-- end container-fluid -->
  </div>
  <!-- end app-main -->
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
  name: "UserAirtime",
  setup() {
    const provider = ref("");
    const dataProvider = ref([]);
    const billerProvider = ref([]);
    const bundle = ref("");
    const bundleAmount = ref(0);
    const validating = ref(true);
    const customer = ref("");
    const loading = ref(false);
    onMounted(() => {
      axios
        .get("https://evonxpay-backend.herokuapp.com/api/getBiller")
        .then((res) => {
          //console.log(res.data.data.data);
          dataProvider.value = res.data.data.data;
          const billerName = dataProvider.value.filter(
            (item) => item.biller_code == "BIL099"
          );
          billerProvider.value = billerName;
        });
    });
    const validatePayment = () => {
      validating.value = false;
      loading.value = true;
      const payload = {
        item_code: "AT099",
        code: "BIL009",
        customer: customer.value,
      };
      axios
        .post(
          "https://evonxpay-backend.herokuapp.com/api/validateBill",
          payload
        )
        .then((res) => {
          console.log(res.data.data.message);
          if (res.data.data.message == "Item validated successfully") {
            loading.value = false;
            validating.value = false;
          } else {
            loading.value = false;
            validating.value = true;
          }
        });
    };
    const BuyAirtime = () => {
      const payload = {
        type: "AIRTIME",
        biller_name: provider.value,
        customer: customer.value,
        amount: bundleAmount.value,
      };
      axios
        .post("https://evonxpay-backend.herokuapp.com/api/createBill", payload)
        .then((res) => {
          console.log(res);
        });
    };
    return {
      provider,
      bundle,
      dataProvider,
      billerProvider,
      bundleAmount,
      validating,
      validatePayment,
      customer,
      loading,
      BuyAirtime,
    };
  },
};
</script>

<style></style>
