# 快速开始

## 安装

```bash
npm i vue-layout-kit
# or
pnpm i vue-layout-kit
# or
yarn add vue-layout-kit
```

目前只有一个组件，而且TS的类型定义也不好，我研究研究。

```html
<script setup lang="ts">
import {LayoutFit} from "vue-layout-kit"
function resize(e:any){
  console.log(e);
}
</script>

<template>
    <!-- 这里需要position: relative，让组件可以撑满父元素 -->
    <div style="background: burlywood ;position: relative">
        <LayoutFit :width="200" :height="200" fit="contain">
            <div style="
                width: 100%;
                height: 100%;
                background: red;"
            >
                这里可以放你的内容
            </div>
        </LayoutFit>
    </div>
</template>

```