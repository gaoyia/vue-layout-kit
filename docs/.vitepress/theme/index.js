import DefaultTheme from "vitepress/theme";
import LayoutFit from "@vue-layout-kit/components/layout-fit";
export default {
  ...DefaultTheme,
  enhanceApp ({ app }) {
    app.component("LayoutFit", LayoutFit);
  },
};
