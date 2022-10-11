<template>
  <aside class="app-navbar">
    <!-- begin sidebar-nav -->
    <div class="sidebar-nav scrollbar scroll_light">
      <ul class="metismenu" id="sidebarNav">
        <li>
          <RouterLink to="/user/dashboard" aria-expanded="false">
            <img src="@/assets/user/img/V-a.png" draggable="false" alt="" />
            <span class="nav-title"> Dashboard </span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/user/wallet" aria-expanded="false">
            <img src="@/assets/user/img/wallect.png" draggable="false" alt="" />
            <span class="nav-title"> Wallet </span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/user/market" aria-expanded="false">
            <img src="@/assets/user/img/V-b.png" draggable="false" alt="" />
            <span class="nav-title"> Market </span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/user/services" aria-expanded="false">
            <img src="@/assets/user/img/V-d.png" draggable="false" alt="" />
            <span class="nav-title"> Services </span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/user/transactions" aria-expanded="false">
            <img src="@/assets/user/img/trans.png" draggable="false" alt="" />
            <span class="nav-title"> Transaction History </span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/user/notifications" aria-expanded="false">
            <img src="@/assets/user/img/V-e.png" draggable="false" alt="" />
            <span class="nav-title"> Notifications </span>
          </RouterLink>
        </li>
        <li>
          <a class="has-arrow" href="javascript:void(0)" aria-expanded="false">
            <img src="@/assets/user/img/V-f.png" draggable="false" alt="" />
            <span class="nav-title"> Settings </span>
          </a>
          <ul aria-expanded="false">
            <li>
              <RouterLink to="/user/profile"> Profile </RouterLink>
            </li>
            <li>
              <a href="#"> Log out </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- end sidebar-nav -->
  </aside>
</template>

<script>
export default {};
</script>

<style></style>
