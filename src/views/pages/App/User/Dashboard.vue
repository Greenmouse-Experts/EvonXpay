<template>
  <!-- begin app-main -->
  <div class="app-main" id="main">
    <!-- begin container-fluid -->
    <div class="container-fluid">
      <!-- begin row -->
      <title-layout title="User Dashboard" />
      <!-- begin row -->
      <!-- Advertising -->
      <div class="row leant">
        <div class="col-lg-3">
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
        <div class="col-lg-3">
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
        <div class="col-lg-3">
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
        <div class="col-lg-3">
          <div
            class="color"
            style="
              background: linear-gradient(100deg, #643ed9, #d02fcc, #83d1ed);
            "
          >
            <div class="text">
              <h4 style="color: #fff">Total Balance</h4>
              <h5 style="color: #fff">$ 415,038.05</h5>
              <div class="user" style="color: #fff">My Wallet</div>
              <div class="btn-div">
                <img src="@/assets/user/img/circle.png" draggable="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Advertising Ends -->

      <!-- Services -->
      <div class="row">
        <div class="col-lg-6">
          <div class="card card-statistics ledtdt">
            <div class="card-header">
              <div class="card-heading">
                <h4 class="card-title">Statictics</h4>
              </div>
            </div>
            <div class="card-body">
              <div class="c3chart-wrapper">
                <div id="c3demo1"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card card-statistics">
            <div class="card-header">
              <div class="card-heading">
                <h4 class="card-title">Utility Bills</h4>
              </div>
            </div>
            <div class="card-body">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      <img src="@/assets/user/img/101.png" draggable="false" />
                      Tv
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">Placeholder.</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      <img src="@/assets/user/img/102.png" draggable="false" />
                      Electricity
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">Placeholder</div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      <img src="@/assets/user/img/103.png" draggable="false" />
                      Internet
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">Placeholder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card card-statistics">
            <div class="card-header">
              <div class="card-heading">
                <h4 class="card-title">Live Rates</h4>
              </div>
            </div>
            <div class="card-body">
              <div class="live">
                <img
                  src="@/assets/user/img/Group1.png"
                  draggable="false"
                  alt=""
                />
                <span>BTC</span>
                <span style="color: rgba(255, 0, 0, 0.829)">$480 (0.04%)</span>
                <i
                  class="bi bi-caret-down-fill font-20"
                  style="color: rgba(255, 0, 0, 0.829)"
                ></i>
              </div>
              <div class="live">
                <img
                  src="@/assets/user/img/Group2.png"
                  draggable="false"
                  alt=""
                />
                <span>BTC</span>
                <span style="color: #00e668">$78 (0.04%)</span>
                <i
                  class="bi bi-caret-up-fill font-20"
                  style="color: #00d19e"
                ></i>
              </div>
              <div class="live">
                <img src="@/assets/user/img/e.png" draggable="false" alt="" />
                <span>USDT</span>
                <span style="color: #00e668">$0. (0.04%)</span>
                <i
                  class="bi bi-caret-up-fill font-20"
                  style="color: #00d19e"
                ></i>
              </div>
              <div class="live">
                <img src="@/assets/user/img/pm.png" draggable="false" alt="" />
                <span>PM</span>
                <span style="color: rgba(255, 0, 0, 0.829)">$80 (0.04%)</span>
                <i
                  class="bi bi-caret-down-fill font-20"
                  style="color: rgba(255, 0, 0, 0.829)"
                ></i>
              </div>
              <div class="live">
                <img src="@/assets/user/img/p.png" draggable="false" />
                <span>Pay</span>
                <span style="color: rgba(255, 0, 0, 0.829)">$90 (0.04%)</span>
                <i
                  class="bi bi-caret-down-fill font-20"
                  style="color: rgba(255, 0, 0, 0.829)"
                ></i>
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
  name: "UserDashboard",
  setup() {
    onMounted(() => {})(() => {});
  },
};
</script>

<style></style>
