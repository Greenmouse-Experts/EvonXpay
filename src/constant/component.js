import { createApp } from "vue";
import HomeNavBar from "@/components/HomeNavBar.vue";
const app = createApp();
app.component("nav-bar", HomeNavBar);
