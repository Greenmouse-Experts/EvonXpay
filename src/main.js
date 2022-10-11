import { createApp } from "vue";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";
import router from "./router";
import { BootstrapIconsPlugin } from "bootstrap-icons-vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import NewsLetter from "@/components/NewsLetter.vue";
import Titlelayout from "@/components/TitleLayout.vue";

const app = createApp(App);
app.component("bread-crumb", BreadCrumb);
app.component("news-letter", NewsLetter);
app.component("title-layout", Titlelayout);
app.use(createPinia());
app.use(BootstrapIconsPlugin);
app.use(router);
import "bootstrap/dist/js/bootstrap.js";

app.mount("#app");
