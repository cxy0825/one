import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css";
import App from "./denglu.vue";
import axios from "axios";
const $http = axios.create({
  baseURL: "http://101.132.242.117/api",
  timeout: 5000,
});
// const app = createApp(App).use(ElementPlus).mount("#app");
const app = createApp(App);
app.use(ElementPlus).mount("#app");
app.config.globalProperties.axios = $http;
