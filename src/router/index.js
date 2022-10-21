import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { adminAuth, userAuth } from "../constant/authentication";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Frontend",
      component: () => import("../views/pages/App/Static/Index.vue"),
      redirect: "/homepage",
      children: [
        {
          path: "/homepage",
          name: "home",
          component: HomeView,
        },
        {
          path: "/about",
          name: "about",
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import("../views/AboutView.vue"),
        },
        {
          path: "/blog",
          name: "Blog",
          component: () => import("../views/Blog.vue"),
        },
        {
          path: "/blogContent/:id",
          name: "BlogContent",
          component: () => import("../views/BlogContent.vue"),
        },
        {
          path: "/contact",
          name: "Contact",
          component: () => import("../views/Contact.vue"),
        },
        {
          path: "/faq",
          name: "Faq",
          component: () => import("../views/Faq.vue"),
        },
        {
          path: "/send-money",
          name: "SendMoney",
          component: () => import("../views/SendMoney.vue"),
        },
        {
          path: "/terms",
          name: "Terms",
          component: () => import("../views/Terms.vue"),
        },
        {
          path: "/privacy",
          name: "Privacy",
          component: () => import("../views/Privacy.vue"),
        },
      ],
    },
    {
      path: "/auth",
      name: "Auth",
      component: () => import("../views/pages/Auth/Index.vue"),
      redirect: "/auth/login",
      children: [
        {
          path: "/auth/login",
          name: "Login",
          component: () => import("../views/pages/Auth/Login.vue"),
        },
        {
          path: "/auth/signup",
          name: "SignUp",
          component: () => import("../views/pages/Auth/SignUp.vue"),
        },
        {
          path: "/admin/login",
          name: "AdminLogin",
          component: () => import("../views/pages/Auth/AdminLogin.vue"),
        },
      ],
    },
    {
      path: "/admin",
      name: "Admin",
      component: () => import("../views/pages/App/Admin/Index.vue"),
      beforeEnter: adminAuth,
      redirect: "/admin/dashboard",
      children: [
        {
          path: "/admin/dashboard",
          name: "AdminDashboard",
          component: () => import("../views/pages/App/Admin/Dashboard.vue"),
        },
        {
          path: "/admin/users",
          name: "AdminUsers",
          component: () => import("../views/pages/App/Admin/Users.vue"),
        },
        {
          path: "/admin/profile",
          name: "AdminProfile",
          component: () => import("../views/pages/App/Admin/Profile.vue"),
        },
        {
          path: "/admin/transactions",
          name: "AdminTransaction",
          component: () => import("../views/pages/App/Admin/Transaction.vue"),
        },
      ],
    },
    {
      path: "/user",
      name: "User",
      component: () => import("../views/pages/App/User/Index.vue"),
      beforeEnter: userAuth,
      redirect: "/user/dashboard",
      children: [
        {
          path: "/user/dashboard",
          name: "UserDashboard",
          component: () => import("../views/pages/App/User/Dashboard.vue"),
        },
        {
          path: "/user/wallet",
          name: "UserWallet",
          component: () => import("../views/pages/App/User/Wallet.vue"),
        },
        {
          path: "/user/market",
          name: "UserMarket",
          component: () => import("../views/pages/App/User/Market.vue"),
        },
        {
          path: "/user/transactions",
          name: "UserTransaction",
          component: () => import("../views/pages/App/User/Transaction.vue"),
        },
        {
          path: "/user/notifications",
          name: "UserNotification",
          component: () => import("../views/pages/App/User/Notification.vue"),
        },
        {
          path: "/user/profile",
          name: "UserProfile",
          component: () => import("../views/pages/App/User/Profile.vue"),
        },
        {
          path: "/user/services",
          name: "UserServices",
          component: () => import("../views/pages/App/User/Services.vue"),
        },
      ],
    },
    {
      path: "/email-verification",
      name: "EmailVerification",
      component: () => import("../views/verifyEmail.vue"),
    },
    {
      path: "/api/pay/verify",
      name: "PaymentVerification",
      component: () => import("../views/verifyPayment.vue"),
    },
  ],
});

export default router;
