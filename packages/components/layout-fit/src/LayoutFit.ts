import {
  buildProps,
} from "@vue-layout-kit/utils";
import type { ExtractPropTypes } from "vue";
export const layoutFitProps = buildProps({
  width: {
    type: Number,
    default: 100,
  },
  height: {
    type: Number,
    default: 100,
  },
  fit: {
    type: String,
    values: ["contain", "cover","fill", "none", "scale-down"],
    default: "none",
  },
  isScale: {
    type: Boolean,
    default: false,
  },
} as const);
export type LayoutFitProps = ExtractPropTypes<typeof layoutFitProps>;
export type ResizeEntries = { contentBoxSize: { inlineSize: number; blockSize: number; }; }[] | ResizeObserverEntry[];
export type ResizeData = {
  contentWidth: number,
  contentHeight: number,
  scaleX:number,
  scaleY:number,
  innerWidth:number,
  innerHeight:number,
  _entries:ResizeEntries
};
export const layoutFitEmits = {
  resize: (evt: ResizeData) => evt instanceof Event,
};
export type LayoutFitEmits = typeof layoutFitEmits;
