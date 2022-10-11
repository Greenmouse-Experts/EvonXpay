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
              <h5>2000</h5>
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
              <h4>E-Currencies</h4>
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
        <div class="col-lg-8">
          <div class="tables">
            <div class="card-header">
              <div class="mainHeader">
                <h4 class="card-title">
                  Export as :
                  <button>CVS</button>
                  <button>PDF</button>
                  <button>Print</button>
                </h4>
                <form class="searchHeader">
                  <input type="text" placeholder="Search" required />
                  <button type="submit"><BIconSearch /></button>
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
                    <th scope="col">Service Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
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
export default {
  name: "DashBoard",
};
</script>

<style></style>
