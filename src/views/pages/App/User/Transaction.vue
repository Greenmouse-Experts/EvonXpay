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
              <h5>{{ transaction.length }}</h5>
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
                      <th>Amount</th>
                      <th>Transaction Information</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in transaction" :key="item.id">
                      <td>{{ item.status }}</td>
                      <td>{{ item.ref_no }}</td>
                      <td>{{ item.price }}</td>
                      <td>{{ item.description }}</td>
                      <td>{{ getDate(item.createdAt) }}</td>
                    </tr>
                  </tbody>
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
import axios from "axios";
import moment from "moment";
import { onMounted, ref } from "vue";

export default {
  name: "UserTransaction",
  setup() {
    const user = ref(JSON.parse(localStorage.getItem("userData")));
    const transaction = ref([]);
    onMounted(() => {
      axios
        .get("https://evonxpay-backend.herokuapp.com/api/user/transaction", {
          headers: {
            Authorization: `${user.value.access_token}`,
          },
        })
        .then((res) => {
          console.log(res.data.data);
          transaction.value = res.data.data;
        });
    });
    const getDate = (value) => {
      return moment(value).format("lll");
    };
    return {
      user,
      transaction,
      getDate,
    };
  },
};
</script>

<style></style>
