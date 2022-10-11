<template>
  <!-- begin app-main -->
  <div class="app-main" id="main">
    <!-- begin container-fluid -->
    <div class="container-fluid">
      <!-- begin row -->
      <title-layout title="Profile" />
      <!-- begin row -->
      <!-- Advertising -->
      <!-- Advertising -->
      <div class="row account-contant">
        <div class="col-12">
          <div class="card card-statistics">
            <div class="card-body p-0">
              <div class="row no-gutters">
                <div class="col-xl-3 pb-xl-0 pb-5 border-right">
                  <div class="page-account-profil pt-5">
                    <div class="profile-img text-center rounded-circle">
                      <div class="pt-5">
                        <div class="bg-img m-auto">
                          <img
                            src="@/assets/user/img/avtar/01.jpg"
                            class="img-fluid"
                            alt="users-avatar"
                          />
                        </div>
                        <div class="profile pt-4">
                          <h4 class="mb-1">Hamzat</h4>
                          <p>FrontEnd Developer</p>
                        </div>
                      </div>
                    </div>

                    <div class="py-5 profile-counter">
                      <ul class="nav justify-content-center text-center">
                        <li class="nav-item border-right px-3">
                          <div>
                            <h4 class="mb-0">20 +</h4>
                            <p>Documents</p>
                          </div>
                        </li>

                        <li class="nav-item border-right px-3">
                          <div>
                            <h4 class="mb-0">5 +</h4>
                            <p>Notification</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div class="profile-btn text-center">
                      <div>
                        <button class="btn btn-light text-primary mb-2">
                          <input type="file" />
                        </button>
                      </div>
                      <div>
                        <button class="btn btn-danger">
                          Upload New Avatar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-5 col-md-6 col-12 border-t border-right">
                  <div class="page-account-form">
                    <div class="form-titel border-bottom p-3">
                      <h5 class="mb-0 py-2">Edit Your Personal Settings</h5>
                    </div>
                    <div class="">
                      <div class="forming">
                        <div class="sign">
                          <form class="sign-div">
                            <div class="row">
                              <!--Company Name-->
                              <div class="col-md-12">
                                <label>First Name</label>
                                <div class="row">
                                  <div class="col-md-12 mb-4">
                                    <input
                                      type="text"
                                      placeholder="Enter Your First Name"
                                      name="username"
                                      class="input"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                              <!--Company Name Ends-->
                              <!--Business Sector-->
                              <div class="col-md-12">
                                <label>Last Name</label>
                                <div class="row">
                                  <div class="col-md-12 mb-4">
                                    <input
                                      type="text"
                                      placeholder="Enter Your Last Name"
                                      name="username"
                                      class="input"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                              <!--Business Sector Ends-->
                              <!--Phone Number-->
                              <div class="col-md-12">
                                <label>Phone Number</label>
                                <div class="row">
                                  <div class="col-md-12 mb-4">
                                    <input
                                      type="text"
                                      placeholder="Enter Your Phone Number"
                                      name="username"
                                      class="input"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                              <!--Phone Number Ends-->
                              <!--Phone Number-->
                              <div class="col-md-12">
                                <label>Email</label>
                                <div class="row">
                                  <div class="col-md-12 mb-4">
                                    <input
                                      type="text"
                                      placeholder="Enter Your Email"
                                      name="username"
                                      class="input"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                              <!--Phone Number Ends-->
                              <div class="col-md-12 mb-3">
                                <button value="submit" required>
                                  Update Profile
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6 border-t col-12">
                  <div class="page-account-form">
                    <div class="form-titel border-bottom p-3">
                      <h5 class="mb-0 py-2">Reset Your Password</h5>
                    </div>
                    <div class="">
                      <div class="forming">
                        <div class="sign">
                          <form class="sign-div">
                            <div class="row">
                              <!--Old Password-->
                              <div class="col-md-12">
                                <label>Old Password</label>
                                <div class="row">
                                  <div class="col-md-12 mb-4">
                                    <input
                                      type="password"
                                      placeholder="**********"
                                      name="username"
                                      class="input"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                              <!--Old Password Ends-->
                              <!--New Password-->
                              <div class="col-md-12">
                                <label>New Password</label>
                                <div class="row">
                                  <div class="col-md-12 mb-4">
                                    <input
                                      type="password"
                                      placeholder="**********"
                                      name="username"
                                      class="input"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                              <!--New Password Ends-->
                              <!--Confirm Password-->
                              <div class="col-md-12">
                                <label>Confirm New Password</label>
                                <div class="row">
                                  <div class="col-md-12 mb-4">
                                    <input
                                      type="password"
                                      placeholder="**********"
                                      name="username"
                                      class="input"
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                              <!--Confirm Password Ends-->
                              <div class="col-md-12 mb-3">
                                <button value="submit" required>
                                  Update Password
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Advertising Ends -->
      <!-- Advertising Ends -->

      <!-- Services -->

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
  setup() {
    onMounted(() => {
      const recaptchaScript = document.createElement("script");
      recaptchaScript.setAttribute(
        "src",
        "http://127.0.0.1:5500/assets/js/vendors.js"
      );
      document.head.appendChild(recaptchaScript);
      const toggleJs = document.createElement("script");
      toggleJs.setAttribute("src", "http://127.0.0.1:5500/assets/js/app.js");
      document.head.appendChild(toggleJs);
    });
  },
};
</script>

<style></style>
