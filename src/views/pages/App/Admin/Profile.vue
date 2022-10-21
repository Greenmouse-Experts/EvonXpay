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
                            v-if="!data.img_url"
                            src="@/assets/user/img/avtar/01.jpg"
                            class="img-fluid"
                            alt="users-avatar"
                          />
                          <img
                            v-else-if="previewImage"
                            :src="previewImage"
                            class="img-fluid"
                            alt="users-avatar"
                          />
                          <img
                            v-else
                            :src="data.img_url"
                            class="img-fluid"
                            alt="users-avatar"
                          />
                        </div>
                        <div class="profile pt-4">
                          <h4 class="mb-1">
                            {{ data.firstname }} {{ data.lastname }}
                          </h4>
                          <p>{{ data.phone_no }}</p>
                        </div>
                      </div>
                    </div>

                    <div class="profile-btn text-center">
                      <form @submit.prevent="uploadImage">
                        <div>
                          <div
                            class="btn btn-light text-primary mb-2"
                            style="cursor: pointer"
                          >
                            <input
                              accept="image/*"
                              type="file"
                              @change="chooseImage"
                            />
                          </div>
                        </div>
                        <div>
                          <button
                            type="submit"
                            :disabled="disabled"
                            class="btn btn-danger"
                          >
                            Upload New Avatar
                          </button>
                        </div>
                      </form>
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
                          <form
                            class="sign-div"
                            @submit.prevent="UpdateProfile"
                          >
                            <div class="row">
                              <!--Company Name-->
                              <div class="col-md-12">
                                <label>First Name</label>
                                <div class="row">
                                  <div class="col-md-12 mb-4">
                                    <input
                                      type="text"
                                      placeholder="Enter Your First Name"
                                      v-model="userData.firstname"
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
                                      v-model="userData.lastname"
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
                                      v-model="userData.phone_no"
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
                                      v-model="userData.email"
                                      class="input"
                                      readonly
                                    />
                                  </div>
                                </div>
                              </div>
                              <!--Phone Number Ends-->
                              <div class="col-md-12 mb-3">
                                <button type="submit" required>
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
                          <form
                            class="sign-div"
                            @submit.prevent="UpdatePassword"
                          >
                            <div class="row">
                              <!--Old Password-->
                              <div class="col-md-12">
                                <label>Old Password</label>
                                <div class="row">
                                  <div class="col-md-12 mb-4">
                                    <input
                                      type="password"
                                      placeholder="**********"
                                      v-model="userData.oldPassword"
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
                                      v-model="userData.newPassword"
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
                                      v-model="userData.cNewPassword"
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
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";

export default {
  name: "AdminProfile",
  setup() {
    const user = ref(JSON.parse(localStorage.getItem("userData")));
    const data = ref([{}]);
    const previewImage = ref("");
    const router = useRouter();
    const disabled = ref(false);
    const image = ref("");
    const userData = reactive({
      firstname: "",
      lastname: "",
      email: "",
      phone_no: "",
      oldPassword: "",
      newPassword: "",
      cNewPassword: "",
    });

    const getUserData = () => {
      axios
        .get("https://evonxpay-backend.herokuapp.com/api/dashboard/profile", {
          headers: {
            Authorization: `${user.value.access_token}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          data.value = res.data.data;
          const datas = res.data.data;
          userData.firstname = datas.firstname;
          userData.lastname = datas.lastname;
          userData.email = datas.email;
          userData.phone_no = datas.phone_no;
        });
    };
    const chooseImage = (e) => {
      image.value = e.target.files[0];
      const img = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = (e) => {
        previewImage.value = e.target.result;
        console.log(previewImage.value);
      };
    };

    const uploadImage = async () => {
      const fd = new FormData();
      fd.append("image", image.value);
      const res = await fetch(
        `https://evonxpay-backend.herokuapp.com/api/dashboard/profile/upload-pic`,
        {
          method: "POST",
          headers: {
            Authorization: `${user.value.access_token}`,
          },
          body: fd,
        }
      );
      const data = await res.json();
      Swal.fire({
        icon: "success",
        text: "image uploaded successfully",
      });
      getUserData();
    };

    const UpdateProfile = () => {
      const UserDatas = {
        firstname: userData.firstname,
        lastname: userData.lastname,
        phone_no: userData.phone_no,
      };
      axios
        .post(
          "https://evonxpay-backend.herokuapp.com/api/dashboard/profile/update",
          UserDatas,
          {
            headers: {
              Authorization: `${user.value.access_token}`,
            },
          }
        )
        .then(() => {
          getUserData();
          Swal.fire({
            icon: "success",
            text: "Profile successfully updated",
          });
        });
    };

    const UpdatePassword = () => {
      const passData = {
        password: userData.oldPassword,
        new_password: userData.newPassword,
        confirm_password: userData.cNewPassword,
      };
      axios
        .post(
          "https://evonxpay-backend.herokuapp.com/api/change-password",
          passData,
          {
            headers: {
              Authorization: `${user.value.access_token}`,
            },
          }
        )
        .then(() => {
          getUserData();
          Swal.fire({
            icon: "success",
            text: "Password successfully changed",
          });
          Swal.fire({
            icon: "success",
            text: "Password successfully changed, click ok to login again",
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              localStorage.removeItem("userData");
              router.replace("/admin/login");
            }
          });
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            text: `${err.response.data.message}`,
          });
        });
    };

    onMounted(() => {
      getUserData();
    });
    return {
      getUserData,
      data,
      chooseImage,
      previewImage,
      image,
      disabled,
      uploadImage,
      userData,
      UpdateProfile,
      UpdatePassword,
    };
  },
};
</script>

<style></style>
