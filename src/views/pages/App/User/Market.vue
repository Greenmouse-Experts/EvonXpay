<template>
  <!-- begin app-main -->
  <div class="app-main" id="main">
    <!-- begin container-fluid -->
    <div class="container-fluid">
      <!-- begin row -->
      <title-layout title="Stock Market" />
      <!-- begin row -->
      <div class="row">
        <div class="col-sm-12">
          <div class="card card-statistics">
            <div class="card-body">
              <div class="owl-wrapper">
                <div
                  class="owl-carousel owl-theme"
                  data-nav-dots="false"
                  data-items="10"
                  data-xl-items="10"
                  data-lg-items="10"
                  data-md-items="6"
                  data-sm-items="4"
                  data-xs-items="4"
                  data-xx-items="2"
                >
                  <div class="item">
                    <div class="p-2 text-center">
                      <i class="fab text-success fa-ethereum font-26"></i>
                      <small class="text-uppercase d-block mt-1">Etherem</small>
                      <strong
                        >-1.985 <i class="fa fa-arrow-down text-danger pl-1"></i
                      ></strong>
                    </div>
                  </div>
                  <div class="item">
                    <div class="p-2 text-center">
                      <i class="fa fa-bitcoin text-warning font-26"></i>
                      <small class="text-uppercase d-block mt-1">bitcoin</small>
                      <strong
                        >-1.985
                        <i class="fa fa-arrow-down text-success pl-1"></i
                      ></strong>
                    </div>
                  </div>
                  <div class="item">
                    <div class="p-2 text-center">
                      <i class="fa fa-rouble text-primary font-26"></i>
                      <small class="text-uppercase d-block mt-1">USDT </small>
                      <strong
                        >-1.985 <i class="fa fa-arrow-down text-danger pl-1"></i
                      ></strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end row -->
      <!-- Total Sale -->
      <div class="row">
        <div class="col-lg-6 col-xxl-2">
          <div class="card card-statistics">
            <div class="card-header">
              <h4 class="card-title">Total Sale</h4>
            </div>
            <div class="card-body pb-0">
              <div class="row">
                <div class="col">
                  <small class="text-uppercase d-block">Value</small>
                  <strong class="text-dark">100.82K</strong>
                </div>
                <div class="col text-right">
                  <small class="text-uppercase d-block">Target</small>
                  <strong class="text-dark">150.32K</strong>
                </div>
              </div>
              <div class="mb-2 text-center">
                <div class="progress my-3" style="height: 2px">
                  <div
                    class="progress-bar bg-pink"
                    role="progressbar"
                    style="width: 80%"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h5>
                  <b class="text-pink">72.10%</b> <small> of Target </small>
                </h5>
              </div>
            </div>
            <div class="apexchart-wrapper o-hidden">
              <div id="stockmarketdemo1" class="chart-fit"></div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-xxl-2">
          <div class="card card-statistics">
            <div class="card-header">
              <h4 class="card-title">Total Income</h4>
            </div>
            <div class="card-body pb-0">
              <div class="row">
                <div class="col">
                  <small class="text-uppercase d-block">Value</small>
                  <strong class="text-dark">325.45K</strong>
                </div>
                <div class="col text-right">
                  <small class="text-uppercase d-block">Target</small>
                  <strong class="text-dark">456.78K</strong>
                </div>
              </div>
              <div class="mb-2 text-center">
                <div class="progress my-3" style="height: 2px">
                  <div
                    class="progress-bar bg-primary"
                    role="progressbar"
                    style="width: 98%"
                    aria-valuenow="98"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <h5>
                  <b class="text-primary">98.10%</b> <small> of Target </small>
                </h5>
              </div>
            </div>
            <div class="apexchart-wrapper o-hidden">
              <div id="stockmarketdemo2" class="chart-fit"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Total Sale Ends -->
    </div>
    <!-- end container-fluid -->
  </div>
  <!-- end app-main -->
</template>

<script>
import { onMounted } from "vue";

export default {
  name: "UserMarket",
  setup() {
    onMounted(() => {});
  },
};
</script>

<style></style>
