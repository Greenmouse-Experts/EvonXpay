<template>
  <!-- begin app-nabar -->
  <aside class="app-navbar">
    <!-- begin sidebar-nav -->
    <div class="sidebar-nav scrollbar scroll_light">
      <ul class="metismenu" id="sidebarNav">
        <li>
          <RouterLink to="/admin/dashboard" aria-expanded="false">
            <img src="@/assets/admin/img/V-a.png" draggable="false" alt="" />
            <span class="nav-title"> Dashboard </span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/admin/transactions" aria-expanded="false">
            <img src="@/assets/admin/img/V-b.png" draggable="false" alt="" />
            <span class="nav-title"> Transactions </span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/admin/users" aria-expanded="false">
            <img src="@/assets/admin/img/V-c.png" draggable="false" alt="" />
            <span class="nav-title"> Users </span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/admin/services" aria-expanded="false">
            <img src="@/assets/admin/img/V-d.png" draggable="false" alt="" />
            <span class="nav-title"> Services </span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/admin/notifications" aria-expanded="false">
            <img src="@/assets/admin/img/V-e.png" draggable="false" alt="" />
            <span class="nav-title"> Notifications </span>
          </RouterLink>
        </li>
        <li>
          <a class="has-arrow" href="javascript:void(0)" aria-expanded="false">
            <img src="@/assets/admin/img/V-f.png" draggable="false" alt="" />
            <span class="nav-title"> Settings </span>
          </a>
          <ul aria-expanded="false">
            <li>
              <RouterLink to="/admin/profile"> Edit profile </RouterLink>
            </li>
            <li>
              <a @click="logOut" href="#"> Log out </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- end sidebar-nav -->
  </aside>
  <!-- end app-navbar -->
</template>

<script>
import { ref } from "vue";
import { AuthData } from "../../stores/auth";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = ref(AuthData());
    const router = ref(useRouter());
    const logOut = () => {
      store.value.signOut();
      router.value.push("/admin/login");
    };
    return {
      logOut,
    };
  },
};
</script>

<style></style>
