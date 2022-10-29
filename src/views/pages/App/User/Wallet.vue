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
              <h5>{{ totalbalance }}</h5>

              <div class="btn-div">
                <img src="@/assets/user/img/gross.png" draggable="false" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="color" style="background-color: #ffe2fd">
            <div class="text">
              <h4>Total Spent</h4>
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
              <h4>Total Deposit</h4>
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
      <div class="page-account-form col-md-12 mb-3">
        <div class="row">
          <div class="col-md-4">
            <button
              @click="showPrice"
              style="
                width: 100%;
                padding: 10px;
                text-align: center;
                border: none;
                background-color: #000;
                color: #fff;
                border-radius: 10px;
                display: grid;
              "
            >
              <div>
                <span>Deposit</span>
              </div>
            </button>
          </div>

          <div class="col-md-8" style="text-align: left">
            <font-awesome-icon
              v-if="loading"
              style="margin-top: 11px; color: #000; border: 0; max-width: 2%"
              icon="fa-solid fa-spinner"
              spin
            />
          </div>
        </div>
      </div>
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
import { onMounted, ref } from "vue";
import Swal from "sweetalert2";
import axios from "axios";
import { useRoute } from "vue-router";
import moment from "moment";

export default {
  name: "UserWallet",
  setup() {
    const user = ref(JSON.parse(localStorage.getItem("userData")));
    const route = useRoute();
    const transaction = ref([]);
    const loading = ref(false);
    const totalbalance = ref(0);
    onMounted(() => {
      let message = route.query.message;
      if (message != undefined) {
        Swal.fire({
          icon: "success",
          text: `${JSON.stringify(message)}`,
        });
      }
      axios
        .get("https://evonxpay-backend.herokuapp.com/api/dashboard/profile", {
          headers: {
            Authorization: `${user.value.access_token}`,
          },
        })
        .then((res) => {
          totalbalance.value = res.data.data.balance;
        });
      axios
        .get("https://evonxpay-backend.herokuapp.com/api/user/transaction", {
          headers: {
            Authorization: `${user.value.access_token}`,
          },
        })
        .then((res) => {
          //console.log(res.data.data);
          transaction.value = res.data.data;
        });
    });
    const getDate = (value) => {
      return moment(value).format("lll");
    };
    const showPrice = async () => {
      const { value: amount } = await Swal.fire({
        title: "Input Deposit Amount",
        input: "number",
        inputLabel: "Your amount to deposite",
        inputPlaceholder: "Enter amount to deposite",
        inputValidator: (value) => {
          if (!value) {
            return "You need to input an amount!";
          }
        },
      });
      if (parseInt(amount) >= 1000) {
        loading.value = true;
        axios
          .post(
            "https://evonxpay-backend.herokuapp.com/api/deposit-wallet",
            {
              amount: amount,
            },
            {
              headers: {
                Authorization: `${user.value.access_token}`,
              },
            }
          )
          .then((res) => {
            //console.log(res.data.transaction.link);
            loading.value = false;
            window.location.href = `${res.data.transaction.link}`;
          });
      } else {
        loading.value = false;
        Swal.fire({
          text: "Amount cannot be less than 1000",
        });
      }
    };
    return {
      showPrice,
      user,
      transaction,
      getDate,
      totalbalance,
      loading,
    };
  },
};
</script>

<style>
.swal2-actions .swal2-confirm {
  background-color: #000000 !important;
}
.swal2-popup .swal2-title {
  display: block;
  position: relative;
  max-width: 100%;
  margin: 22px 0 0.4em !important;
  padding: 0;
  color: #595959;
  font-size: 1.875em;
  font-weight: 600;
  text-align: center;
  text-transform: none;
  word-wrap: break-word;
}
</style>
