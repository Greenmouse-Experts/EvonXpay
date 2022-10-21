<template>
  <!-- begin app-main -->
  <div class="app-main" id="main">
    <!-- begin container-fluid -->
    <div class="container-fluid">
      <!-- begin row -->
      <title-layout title="Super Admin Dashboard" />
      <!-- begin row -->
      <!-- Advertising -->
      <div class="row">
        <div class="col-lg-3">
          <div class="color" style="background-color: #e2fff1">
            <div class="text">
              <h4>Total No. of Users</h4>
              <h5>{{ users.length }}</h5>
              <div class="user">Users</div>
              <div class="btn-div">
                <img src="@/assets/admin/img/User-a.png" draggable="false" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="color" style="background-color: #ffe5e2">
            <div class="text">
              <h4>Data Bundle</h4>
              <h5>1540</h5>
              <div class="user">Users</div>
              <div class="btn-div">
                <img src="@/assets/admin/img/icon1.png" draggable="false" />
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
                <img src="@/assets/admin/img/icon2.png" draggable="false" />
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
                <img src="@/assets/admin/img/icon3.png" draggable="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Advertising Ends -->
      <!-- Advertising Ends -->
      <div class="row">
        <div class="col-lg-12">
          <div class="tables">
            <div class="card-header">
              <div class="mainHeader">
                <h4 class="card-title">
                  Users
                  <!-- <button>CVS</button>
                  <button>PDF</button>
                  <button>Print</button> -->
                </h4>
                <form class="searchHeader">
                  <!-- <input type="text" placeholder="Search" required /> -->
                  <!-- <button type="submit"><BIconSearch /></button> -->
                </form>
              </div>
            </div>
            <div class="tabel-div">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">S/N</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Status</th>
                    <th scope="col">Joined Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in users" :key="item">
                    <th scope="row">{{ i + 1 }}</th>
                    <td>{{ item.firstname }} {{ item.lastname }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.phone_no }}</td>
                    <td>
                      <span v-if="item.emailVerify == 1">Active</span>
                      <span v-if="item.emailVerify == 0">Pending</span>
                    </td>
                    <td>{{ getDate(item.createdAt) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- <div class="col-lg-4">
          <div class="card card-statistics">
            <div class="card-header">
              <div class="card-heading">
                <h4 class="card-title">Users</h4>
              </div>
            </div>
            <div class="card-body">
              <div class="apexchart-wrapper">
                <div id="apexdemo8"></div>
              </div>
            </div>
          </div>
        </div> -->
      </div>

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
                      <th>User</th>
                      <th>Email</th>
                      <th>Amount</th>
                      <th>Transaction Information</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in transaction" :key="item.id">
                      <td>{{ item.status }}</td>
                      <td>{{ item.ref_no }}</td>
                      <td>
                        {{ item.user.firstname }} {{ item.user.lastname }}
                      </td>
                      <td>{{ item.user.email }}</td>
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
                <div id="c3demo1"></div>
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
import axios from "axios";
import moment from "moment";
export default {
  name: "DashBoard",
  setup() {
    const transaction = ref([]);
    const user = ref(JSON.parse(localStorage.getItem("userData")));
    const users = ref([]);
    onMounted(() => {
      axios
        .get("https://evonxpay-backend.herokuapp.com/api/transactions", {
          headers: {
            Authorization: `${user.value.access_token}`,
          },
        })
        .then((res) => {
          console.log(res.data.data);
          transaction.value = res.data.data;
        });
      axios
        .get("https://evonxpay-backend.herokuapp.com/api/admin/getAllUsers", {
          headers: {
            Authorization: `${user.value.access_token}`,
          },
        })
        .then((res) => {
          console.log(res.data.data);
          users.value = res.data.data;
        });
    });
    const getDate = (value) => {
      return moment(value).format("lll");
    };

    return {
      user,
      transaction,
      getDate,
      users,
    };
  },
};
</script>

<style></style>
