import { withInstall } from "@vue-layout-kit/utils";
import LayoutFit from "./src/LayoutFit.vue";
const LayoutKitFit = withInstall(LayoutFit);
export default LayoutKitFit;
declare module "vue" {
  export interface GlobalComponents {
    LayoutKitFit: typeof LayoutKitFit
  }
}
