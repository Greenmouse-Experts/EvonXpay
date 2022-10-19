<template>
  <div class="app-main" id="main">
    <div class="container-fluid">
      <title-layout title="Notifications" />
      <div class="row">
        <div class="col-lg-12">
          <div class="color" style="background-color: #fff">
            <div class="text"></div>
          </div>
        </div>
      </div>
      <!-- Services -->
      <div class="row">
        <div class="col-lg-6">
          <div class="card card-statistics">
            <div class="card-header">
              <div class="card-heading">
                <h4 class="card-title">Recent Notification</h4>
              </div>
            </div>
            <div class="card-body">
              <div class="image">
                <img src="@/assets/user/img/dot.png" alt="" />
                <span>5 min ago</span>
                <p>You've gotten a new notification</p>
              </div>
              <div class="image">
                <img src="@/assets/user/img/dot.png" alt="" />
                <span>7 min ago</span>
                <p>You've gotten a new notification</p>
              </div>
              <div class="image">
                <img src="@/assets/user/img/dot.png" alt="" />
                <span>8 min ago</span>
                <p>You've gotten a new notification</p>
              </div>
              <div class="image">
                <img src="@/assets/user/img/dot.png" alt="" />
                <span>8 min ago</span>
                <p>You've gotten a new notification</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="card card-statistics">
            <div class="card-header">
              <div class="card-heading">
                <h4 class="card-title">Unread Notification</h4>
              </div>
            </div>
            <div class="card-body">
              <div class="image">
                <img src="@/assets/user/img/dot.png" alt="" />
                <span>5 min ago</span>
                <p>You've gotten a new notification</p>
              </div>
              <div class="image">
                <img src="@/assets/user/img/dot.png" alt="" />
                <span>7 min ago</span>
                <p>You've gotten a new notification</p>
              </div>
              <div class="image">
                <img src="@/assets/user/img/dot.png" alt="" />
                <span>8 min ago</span>
                <p>You've gotten a new notification</p>
              </div>
              <div class="image">
                <img src="@/assets/user/img/dot.png" alt="" />
                <span>8 min ago</span>
                <p>You've gotten a new notification</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Services Ends -->
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";

export default {
  name: "UserNotifications",
  setup() {
    onMounted(() => {});
  },
};
</script>

<style></style>
