<template>
  <div class="app-main" id="main">
    <!-- begin container-fluid -->
    <div class="container-fluid">
      <!-- begin row -->
      <div class="row">
        <div class="col-lg-12">
          <div class="line-div">
            <h4 class="hey">
              Utility Bills
              <span> 19/08/2022 </span>
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
              <h4>Utility Bills</h4>
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
              <h4>Total Amount</h4>
              <h5>$10,00</h5>
              <div class="user">Buying</div>
              <div class="btn-div">
                <img src="@/assets/user/img/gross.png" draggable="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Advertising Ends -->

      <!-- Services -->
      <div class="row">
        <div class="col-xxl-12 mb-30">
          <div class="card card-statistics h-100 mb-0 currency-price">
            <div class="card-header d-flex justify-content-between">
              <div class="card-heading">
                <h4 class="card-title">Utility Category</h4>
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
                  <h6 class="mb-1">Action</h6>
                  <a class="dropdown-item" href="#!"
                    ><i class="fa-fw fa fa-file-o pr-2"></i>View reports</a
                  >
                  <a class="dropdown-item" href="#!"
                    ><i class="fa-fw fa fa-edit pr-2"></i>Edit reports</a
                  >
                  <a class="dropdown-item" href="#!"
                    ><i class="fa-fw fa fa-bar-chart-o pr-2"></i>Statistics</a
                  >
                  <h6 class="mb-1 mt-3">Export</h6>
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
              <div class="tab nav-border-bottom">
                <ul class="nav nav-tabs nav-fill" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active show"
                      id="home-02-tab"
                      data-toggle="tab"
                      href="#home-02"
                      role="tab"
                      aria-controls="home-02"
                      aria-selected="true"
                    >
                      <b>Commercial</b>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="profile-02-tab"
                      data-toggle="tab"
                      href="#profile-02"
                      role="tab"
                      aria-controls="profile-02"
                      aria-selected="false"
                      ><b>Electricity Bills</b>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="rice-03-tab"
                      data-toggle="tab"
                      href="#rice-03"
                      role="tab"
                      aria-controls="rice-03"
                      aria-selected="false"
                      ><b>TV Subscription</b>
                    </a>
                  </li>
                </ul>
                <div class="tab-content">
                  <div
                    class="tab-pane fade active show pt-3"
                    id="home-02"
                    role="tabpanel"
                    aria-labelledby="home-02-tab"
                  >
                    <div class="row">
                      <div class="col-xs-6">
                        <div class="mb-3">
                          <label>Select Your Bills Paying</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <label class="input-group-text px-3" for="bacs"
                                >M</label
                              >
                            </div>
                            <select
                              v-model="commercial"
                              @change="selectCommercial"
                              class="form-control"
                              id="bacs"
                            >
                              <option value="">Select Biller</option>
                              <option value="BIL130">FIRS</option>
                              <option value="BIL127">
                                Lekki Concession Company
                              </option>
                              <option value="BIL136">MTN Hynet Payment</option>
                              <option value="BIL131">
                                DHL Courier Service
                              </option>
                              <option value="BIL128">
                                Airtel Dealer payment
                              </option>
                              <option value="BIL146">
                                Catholic Archdiocese of Lagos
                              </option>
                              <option value="BIL147">Christ Embassy</option>
                              <option value="BIL148">GRACE ASSEMBLY</option>
                              <option value="BIL150">RCCG</option>
                              <option value="BIL151">
                                Salvation Ministries
                              </option>
                              <option value="BIL152">WINNERS CHAPEL</option>
                            </select>
                          </div>
                        </div>
                        <div class="mb-3">
                          <label>Select Payment</label>

                          <div class="input-group">
                            <select
                              v-model="commPlan"
                              @change="selectCommercialBundle"
                              class="form-control"
                              id="visa1"
                            >
                              <option
                                v-for="item in commercialBundles"
                                :value="item.item_code"
                                :key="item"
                              >
                                {{ item.name }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-xs-6">
                        <div class="mb-3">
                          <label>TIN/Number/LCC Number</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <select class="form-control text-primary">
                                <option selected>A</option>
                              </select>
                            </div>
                            <input
                              type="text"
                              v-model="commNumber"
                              class="form-control"
                              placeholder="Enter TIN/LCC NUMBER/Number"
                            />
                          </div>
                        </div>
                        <div class="mb-3">
                          <label>Amount</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <select class="form-control text-primary">
                                <option selected>A</option>
                              </select>
                            </div>
                            <input
                              type="text"
                              class="form-control"
                              v-model="commAmount"
                              placeholder="Enter amount buying"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <button class="btn btn-success text-uppercase mt-1">
                          Make Payment
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade pt-3"
                    id="profile-02"
                    role="tabpanel"
                    aria-labelledby="profile-02-tab"
                  >
                    <div class="row">
                      <div class="col-xs-6">
                        <div class="mb-3">
                          <label>--Select a Service--</label>
                          <div class="input-group">
                            <select
                              class="form-control"
                              v-model="electric"
                              @change="selectElectricity"
                              id="bacs1"
                            >
                              <option value="BIL117">
                                BENIN DISCO ELECTRICITY
                              </option>
                              <option value="BIL115">
                                ENUGU DISCO ELECTRICITY
                              </option>
                              <option value="BIL112">
                                EKO DISCO ELECTRICITY
                              </option>
                              <option value="BIL114">
                                IBADAN DISCO ELECTRICITY
                              </option>
                              <option value="BIL113">
                                IKEJA DISCO ELECTRICITY
                              </option>
                              <option value="BIL120">
                                KANO DISCO ELECTRICITY
                              </option>
                              <option value="BIL116">
                                PORT-HARCOURT DISCO ELECTRICITY
                              </option>
                              <option value="BIL118">
                                YOLA DISCO ELECTRICITY
                              </option>
                            </select>
                          </div>
                        </div>
                        <div class="mb-3" v-if="electricBundles.length > 0">
                          <label>Choose Plan</label>
                          <div class="inpuBIL115t-group">
                            <select
                              v-model="elecPlan"
                              @change="selectElectricityBundle"
                              class="form-control"
                              id="visa"
                            >
                              <option
                                v-for="item in electricBundles"
                                :value="item.item_code"
                                :key="item"
                              >
                                {{ item.name }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-xs-6">
                        <div class="mb-3">
                          <label>*Meter Number</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <label class="input-group-text px-3"
                                ><i class="ti ti-wallet"></i
                              ></label>
                            </div>
                            <input
                              type="text"
                              v-model="elecMeterNum"
                              class="form-control"
                              placeholder="Mgwe7856fweF5fwfe5457KuFG"
                              aria-label="Username"
                            />
                          </div>
                        </div>

                        <div class="mb-3">
                          <label>Amount</label>
                          <div class="input-group">
                            <input
                              v-model="elecAmount"
                              type="number"
                              class="form-control"
                              placeholder="Enter your amount"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-12" style="text-align: right">
                        <font-awesome-icon
                          v-if="elecloading"
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
                          v-if="elecvalidating"
                          @click="validateElecPayment"
                          class="btn btn-success text-uppercase mt-1"
                        >
                          Validate
                        </button>
                        <button
                          v-if="!elecvalidating && !elecloading"
                          class="btn btn-success text-uppercase mt-1"
                        >
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade pt-3"
                    id="rice-03"
                    role="tabpanel"
                    aria-labelledby="rice-03-tab"
                  >
                    <div class="row">
                      <div class="col-xs-6">
                        <div class="mb-3">
                          <label>Select Your Tv Decoder</label>
                          <div class="input-group">
                            <select
                              v-model="tv"
                              @change="selectTv"
                              class="form-control"
                              id="bacs"
                            >
                              <option value="">Select Your Decoder</option>
                              <option value="BIL121">Dstv</option>
                              <option value="BIL122">Gotv</option>
                              <option value="BIL123">Startime</option>
                            </select>
                          </div>
                        </div>
                        <div class="mb-3">
                          <label>Choose Package</label>
                          <div class="input-group">
                            <select
                              @change="selectTvBundle"
                              v-model="tvPackage"
                              class="form-control"
                              id="visa1"
                            >
                              <option
                                v-for="item in tvPackageBundles"
                                :value="item.item_code"
                                :key="item"
                              >
                                {{ item.name }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-xs-6">
                        <div class="mb-3">
                          <label>Smart Card Number</label>
                          <div class="input-group">
                            <input
                              type="tel"
                              v-model="tvcardNum"
                              class="form-control"
                              placeholder="Smart Card Number"
                            />
                          </div>
                        </div>
                        <div class="mb-3">
                          <label>Amount</label>
                          <div class="input-group">
                            <input
                              type="text"
                              readonly
                              v-model="tvAmount"
                              class="form-control"
                              placeholder="Package Amount"
                            />
                          </div>
                          <span style="color: #9b9b9b"
                            >Hint: Package amount + fee</span
                          >
                        </div>
                      </div>
                      <div class="col-12">
                        <button class="btn btn-success text-uppercase mt-1">
                          Subscribe
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="row crypto-currency">
          <div class="col-xxl-8">
            <div class="card card-statistics apexchart-tool-force-top">
              <div class="card-header">
                <h4 class="card-title">Ripple Live Chart</h4>
              </div>
              <div class="card-body pt-0">
                <div class="apexchart-wrapper">
                  <div id="crypto-demo1-candlestick"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-4">
            <div class="card card-statistics apexchart-tool-force-top">
              <div class="card-header">
                <h4 class="card-title">Recent Transaction</h4>
              </div>
              <div class="card-body">
                <div class="bg-light p-3 rounded m-b-20">
                  <div class="d-sm-flex justify-content-between">
                    <div class="transition-left">
                      <span>Dec 12 2018</span>
                      <h5 class="mt-2 mb-0">4012001036275556</h5>
                    </div>
                    <div class="transition-right text-sm-right">
                      <strong class="text-dark d-block mb-1">
                        <i class="fa fa-long-arrow-right pr-2"></i> 0.567 BTC
                      </strong>
                      <a class="text-primary" href="#!"> View more</a>
                    </div>
                  </div>
                </div>
                <div class="bg-light p-3 rounded m-b-20">
                  <div class="d-sm-flex justify-content-between">
                    <div class="transition-left">
                      <span>Dec 18 2018</span>
                      <h5 class="mt-2 mb-0">4012001038488884</h5>
                    </div>
                    <div class="transition-right text-sm-right">
                      <strong class="text-dark d-block mb-1">
                        <i class="fa fa-long-arrow-right pr-2"></i> 1.567 LTC
                      </strong>
                      <a class="text-primary" href="#!"> View more</a>
                    </div>
                  </div>
                </div>
                <div class="bg-light p-3 rounded m-b-20">
                  <div class="d-sm-flex justify-content-between">
                    <div class="transition-left">
                      <span>Dec 31 2018</span>
                      <h5 class="mt-2 mb-0">4012001038443335</h5>
                    </div>
                    <div class="transition-right text-sm-right">
                      <strong class="text-dark d-block mb-1">
                        <i class="fa fa-long-arrow-right pr-2"></i> 67 NEO
                      </strong>
                      <a class="text-primary" href="#!"> View more</a>
                    </div>
                  </div>
                </div>
                <div class="bg-light p-3 rounded">
                  <div class="d-sm-flex justify-content-between">
                    <div class="transition-left">
                      <span>Jan 08 2019</span>
                      <h5 class="mt-2 mb-0">4012001036983332</h5>
                    </div>
                    <div class="transition-right text-sm-right">
                      <strong class="text-dark d-block mb-1">
                        <i class="fa fa-long-arrow-right pr-2"></i> 2.7 RIP
                      </strong>
                      <a class="text-primary" href="#!"> View more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
      <!-- Services Ends -->
      <!-- end row -->
    </div>
    <!-- end container-fluid -->
  </div>
  <!-- end app-main -->
</template>

<script>
import axios from "axios";
import { onMounted, ref } from "vue";

export default {
  name: "UserUtility",
  setup() {
    const electric = ref("");
    const dataProvider = ref([]);
    const elecPlan = ref("");
    const tv = ref("");
    const tvPackage = ref("");
    const tvcardNum = ref("");
    const tvPackageBundles = ref("");
    const tvAmount = ref("");
    const elecAmount = ref("");
    const elecMeterNum = ref("");
    const electricBundles = ref([]);
    const elecChargeFee = ref([]);
    const elecvalidating = ref(true);
    const elecloading = ref(false);
    const commercial = ref("");
    const commPlan = ref([]);
    const commercialBundles = ref([]);
    const commAmount = ref(0);
    const commvalidating = ref(false);
    const commloading = ref(false);
    const commNumber = ref("");
    const commAmountCharges = ref(0);
    onMounted(() => {
      axios
        .get("https://evonxpay-backend.herokuapp.com/api/getBiller")
        .then((res) => {
          //console.log(res.data.data.data);
          dataProvider.value = res.data.data.data;
        });
    });
    const selectElectricity = () => {
      //console.log(provider.value, dataProvider.value);
      const bundles = dataProvider.value.filter(
        (item) => item.biller_code == electric.value
      );
      //console.log(dataProvider.value);
      electricBundles.value = bundles;
    };
    const selectElectricityBundle = () => {
      elecvalidating.value = true;
      const amountCharge = dataProvider.value.filter(
        (item) => item.item_code == elecPlan.value
      );
      elecChargeFee.value = amountCharge[0].fee;
      console.log(elecChargeFee.value);
    };
    const validateElecPayment = () => {
      elecvalidating.value = false;
      elecloading.value = true;
      const payload = {
        /* item_code: bundle.value,
        code: provider.value,
        customer: customer.value, */
      };
      axios
        .post(
          "https://evonxpay-backend.herokuapp.com/api/validateBill",
          payload
        )
        .then((res) => {
          console.log(res.data.data.message);
          if (res.data.data.message == "Item validated successfully") {
            elecloading.value = false;
            elecvalidating.value = false;
          } else {
            elecloading.value = false;
            elecvalidating.value = true;
          }
        });
    };
    const selectTv = () => {
      //console.log(provider.value, dataProvider.value);
      const bundles = dataProvider.value.filter(
        (item) => item.biller_code == tv.value && item.country == "NG"
      );
      //console.log(dataProvider.value);
      tvPackageBundles.value = bundles;
    };
    const selectTvBundle = () => {
      elecvalidating.value = true;
      const amountCharge = dataProvider.value.filter(
        (item) => item.item_code == tvPackage.value
      );
      tvAmount.value = amountCharge[0].fee + amountCharge[0].amount;
      console.log(tvAmount.value);
    };
    const validateTvPayment = () => {
      elecvalidating.value = false;
      elecloading.value = true;
      const payload = {
        /* item_code: bundle.value,
        code: provider.value,
        customer: customer.value, */
      };
      axios
        .post(
          "https://evonxpay-backend.herokuapp.com/api/validateBill",
          payload
        )
        .then((res) => {
          console.log(res.data.data.message);
          if (res.data.data.message == "Item validated successfully") {
            elecloading.value = false;
            elecvalidating.value = false;
          } else {
            elecloading.value = false;
            elecvalidating.value = true;
          }
        });
    };
    const selectCommercial = () => {
      //console.log(provider.value, dataProvider.value);
      const bundles = dataProvider.value.filter(
        (item) => item.biller_code == commercial.value
      );
      //console.log(dataProvider.value);
      commercialBundles.value = bundles;
      console.log(commercialBundles.value);
    };
    const selectCommercialBundle = () => {
      elecvalidating.value = true;
      const amountCharge = dataProvider.value.filter(
        (item) => item.item_code == commPlan.value
      );
      commAmountCharges.value = amountCharge[0].fee;
    };
    const validateCommercialPayment = () => {
      commvalidating.value = false;
      commloading.value = true;
      const payload = {
        /* item_code: bundle.value,
        code: provider.value,
        customer: customer.value, */
      };
      axios
        .post(
          "https://evonxpay-backend.herokuapp.com/api/validateBill",
          payload
        )
        .then((res) => {
          console.log(res.data.data.message);
          if (res.data.data.message == "Item validated successfully") {
            elecloading.value = false;
            elecvalidating.value = false;
          } else {
            elecloading.value = false;
            elecvalidating.value = true;
          }
        });
    };
    return {
      electric,
      electricBundles,
      elecPlan,
      dataProvider,
      selectElectricityBundle,
      selectElectricity,
      elecChargeFee,
      elecvalidating,
      validateElecPayment,
      elecloading,
      elecAmount,
      elecMeterNum,
      tv,
      tvcardNum,
      tvPackage,
      tvAmount,
      tvPackageBundles,
      selectTv,
      selectTvBundle,
      validateTvPayment,
      selectCommercial,
      selectCommercialBundle,
      validateCommercialPayment,
      commercial,
      commercialBundles,
      commPlan,
      commAmount,
      commvalidating,
      commloading,
      commNumber,
    };
  },
};
</script>

<style></style>
