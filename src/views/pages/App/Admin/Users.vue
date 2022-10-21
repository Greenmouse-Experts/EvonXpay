<template>
  <div class="app-main" id="main">
    <!-- begin container-fluid -->
    <div class="container-fluid">
      <!-- begin row -->
      <div class="row">
        <div class="col-lg-12">
          <div class="line-div">
            <h4 class="hey">
              Users
              <span> 05/08/2022 </span>
            </h4>
          </div>
        </div>
      </div>
      <!-- begin row -->
      <!-- Advertising -->
      <!-- Advertising -->
      <div class="row">
        <div class="col-lg-4">
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
        <div class="col-lg-4">
          <div class="color" style="background-color: #ffe5e2">
            <div class="text">
              <h4>Active Users</h4>
              <h5>{{ users.length }}</h5>
              <div class="user">Users</div>
              <div class="btn-div">
                <img src="@/assets/admin/img/employee.png" draggable="false" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="color" style="background-color: #e8ddfb">
            <div class="text">
              <h4>Pending Users</h4>
              <h5>0</h5>
              <div class="user">Users</div>
              <div class="btn-div">
                <img src="@/assets/admin/img/time.png" draggable="false" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Advertising Ends -->
      <!-- Advertising Ends -->
      <div class="row">
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
      </div>
      <!-- end row -->
    </div>
    <!-- end container-fluid -->
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
import moment from "moment";
export default {
  name: "AllUsers",
  setup() {
    const user = ref(JSON.parse(localStorage.getItem("userData")));
    const users = ref([]);
    onMounted(() => {
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
      getDate,
      users,
    };
  },
};
</script>

<style></style>
