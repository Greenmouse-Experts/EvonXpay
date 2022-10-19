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
              Transaction History
              <span> 03/08/2022 </span>
            </h4>
          </div>
        </div>
      </div>
      <!-- begin row -->
      <!-- Advertising -->
      <div class="row">
        <div class="col-lg-12">
          <div class="color" style="background-color: #fff">
            <div class="text">
              <h4>Total No. of Transaction</h4>
              <h5>57 +</h5>
              <div class="user">From Users</div>
              <div class="btn-div">
                <img
                  src="@/assets/user/img/transaction-history.png"
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="normal"></div>
        </div>
      </div>
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
  name: "UserTransaction",
  setup() {
    onMounted(() => {});
  },
};
</script>

<style></style>
