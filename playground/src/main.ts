import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import KitFit from "@vue-layout-kit/components/layout-fit/layout-fit";
// import "@vue-layout-kit/theme-chalk/src/index.scss";
const plugins = [
  KitFit,
];
const app = createApp(App);
plugins.forEach((plugin) => {
  app.use(plugin);
});
app.mount("#app");
