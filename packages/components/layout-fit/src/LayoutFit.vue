<template>
  <div ref="container" class="fit-container">
    <div
      :style="{
        width: `${innerWidth}px`,
        height: `${innerHeight}px`,
      }"
      ref="inner"
      class="fit-inner"
    >
      <div class="fit-scale" :style="scaleStyle">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref,watch } from "vue";
import { ResizeObserver } from "@juggle/resize-observer";
import type { ResizeEntries } from "./LayoutFit";
import { layoutFitEmits, layoutFitProps } from "./LayoutFit";
defineOptions({
  name: "LayoutFit",
});
const emit = defineEmits(layoutFitEmits);
const props = defineProps(layoutFitProps);
const aspectRatio = computed(() => props.width / props.height);
const container = ref();
const inner = ref();
const innerWidth = ref(0);
const innerHeight = ref(0);
let resizeObserver: ResizeObserver;
const scaleX = computed(() => {
  return innerWidth.value / props.width;
});
const scaleY = computed(() => {
  return innerHeight.value / props.height;
});
const scaleStyle = computed(() => {
  if (props.isScale) {
    return {
      width: `${(1/scaleX.value)*100}%`,
      height: `${(1/scaleY.value)*100}%`,
      transform: `scale(${scaleX.value},${scaleY.value})`,
    };
  } else {
    return {
      width: "100%",
      height: "100%",
      transform: "scale(1,1)",
    };
  }
});
const resizeObserverCallBack = (entries:ResizeEntries) => {
  for (const entry of entries) {
    if (entry) {
      // Firefox implements `contentBoxSize` as a single content rect, rather than an array
      const contentBoxSize: ResizeObserverSize = (
        Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize
      ) as ResizeObserverSize;
      const contentWidth = contentBoxSize.inlineSize;
      const contentHeight = contentBoxSize.blockSize;
      switch (props.fit) {
        case "contain": {
          // 1根据容器宽度计算inner高度
          let width = contentWidth;
          let height = width / aspectRatio.value;
          if (height <= contentHeight) {
            innerHeight.value = height;
            innerWidth.value = width;
            emit("resize",{
              contentWidth,
              contentHeight,
              scaleX:scaleX.value,
              scaleY:scaleY.value,
              innerWidth:innerWidth.value,
              innerHeight:innerHeight.value,
              _entries:entries,
            });
            return;
          }
          // 2根据容器高度计算inner宽度
          height = contentHeight;
          width = height * aspectRatio.value;
          if (width < contentWidth) {
            innerHeight.value = height;
            innerWidth.value = width;
            emit("resize",{
              contentWidth,
              contentHeight,
              scaleX:scaleX.value,
              scaleY:scaleY.value,
              innerWidth:innerWidth.value,
              innerHeight:innerHeight.value,
              _entries:entries,
            });
            return;
          }
          break;
        }
        case "cover": {
          // 1根据容器宽度计算inner高度
          let width = contentWidth;
          let height = width / aspectRatio.value;
          if (height <= contentHeight) {
            innerHeight.value = contentHeight;
            innerWidth.value = contentHeight * aspectRatio.value;
            emit("resize",{
              contentWidth,
              contentHeight,
              scaleX:scaleX.value,
              scaleY:scaleY.value,
              innerWidth:innerWidth.value,
              innerHeight:innerHeight.value,
              _entries:entries,
            });
            return;
          }
          // 2根据容器高度计算inner宽度
          height = contentHeight;
          width = height * aspectRatio.value;
          if (width < contentWidth) {
            innerHeight.value = contentWidth * (1 / aspectRatio.value);
            innerWidth.value = contentWidth;
            emit("resize",{
              contentWidth,
              contentHeight,
              scaleX:scaleX.value,
              scaleY:scaleY.value,
              innerWidth:innerWidth.value,
              innerHeight:innerHeight.value,
              _entries:entries,
            });
            return;
          }
          break;
        }
        case "fill": {
          innerWidth.value = contentWidth;
          innerHeight.value = contentHeight;
          emit("resize",{
            contentWidth,
            contentHeight,
            scaleX:scaleX.value,
            scaleY:scaleY.value,
            innerWidth:innerWidth.value,
            innerHeight:innerHeight.value,
            _entries:entries,
          });
          break;
        }
        case "scale-down": {
          // 1根据容器宽度计算inner高度
          let width = contentWidth;
          let height = width / aspectRatio.value;
          if (height <= contentHeight) {
            if (height < props.height) {
              innerHeight.value = height;
              innerWidth.value = width;
            } else {
              innerHeight.value = props.height;
              innerWidth.value = props.width;
            }
            emit("resize",{
              contentWidth,
              contentHeight,
              scaleX:scaleX.value,
              scaleY:scaleY.value,
              innerWidth:innerWidth.value,
              innerHeight:innerHeight.value,
              _entries:entries,
            });
            return;
          }
          // 2根据容器高度计算inner宽度
          height = contentHeight;
          width = height * aspectRatio.value;
          if (width < contentWidth) {
            if (width < props.width) {
              innerHeight.value = height;
              innerWidth.value = width;
            } else {
              innerHeight.value = props.height;
              innerWidth.value = props.width;
            }
            emit("resize",{
              contentWidth,
              contentHeight,
              scaleX:scaleX.value,
              scaleY:scaleY.value,
              innerWidth:innerWidth.value,
              innerHeight:innerHeight.value,
              _entries:entries,
            });
            return;
          }
          break;
        }
        default: {
          // 默认模式
          innerWidth.value = props.width;
          innerHeight.value = props.height;
          emit("resize",{
            contentWidth,
            contentHeight,
            scaleX:scaleX.value,
            scaleY:scaleY.value,
            innerWidth:innerWidth.value,
            innerHeight:innerHeight.value,
            _entries:entries,
          });
          break;
        }
      }
    } else {
      // console.log(entry);
    }
  }
};
const init = () => {
  if (container.value) {
    resizeObserverCallBack([
      {
        contentBoxSize: {
          inlineSize: container.value.clientWidth,
          blockSize: container.value.clientHeight,
        },
      },
    ]);
  }
};
onMounted(() => {
  resizeObserver = new ResizeObserver(resizeObserverCallBack);
  resizeObserver.observe(container.value);


});
onUnmounted(() => {
  if (resizeObserver && container.value) {
    resizeObserver.unobserve(container.value);
  }
});
watch(() => props.fit, () => {
  init();
});
</script>

<style scoped>
.fit-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 0px;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fit-inner {
  border: 0px;
  padding: 0;
  margin: 0;
  display: block;
  position: absolute;
}
.fit-scale{
  transform-origin: left top
}
</style>
