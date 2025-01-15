# LayoutFit

这是一个 把 object-fit 功能实现到[非可替换元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element)的组件。

> 这是css的object-fit
>
> [https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit]()

# Demo
<script setup lang="ts">
import { ref } from "vue"
import LayoutFit from "@vue-layout-kit/components/layout-fit"

const width = ref(180)
const height = ref(180)
const fit = ref("contain")
const scaleX = ref(1)
const scaleY = ref(1)
const isScale = ref(true)
function resize(resizeData) {
    scaleX.value = resizeData.scaleX
    scaleY.value = resizeData.scaleY
}
</script>
<form>
  <fieldset>
    <legend>Options:</legend>
    <div>
      <input type="radio" id="none" name="radio" v-model="fit" value="none" />
      <label for="none">none</label>
      <input type="radio" id="contain" name="radio" v-model="fit" value="contain" />
      <label for="contain">contain</label>
      <input type="radio" id="cover" name="radio" v-model="fit" value="cover" />
      <label for="cover">cover</label>
      <input type="radio" id="fill" name="radio" v-model="fit" value="fill" />
      <label for="fill">fill</label>
      <input type="radio" id="scale-down" name="radio" v-model="fit" value="scale-down" />
      <label for="scale-down">scale-down</label>
    </div>
    <p>
        width:  <input type="range"  v-model="width" min="100" max="300">
    </p>
    <p>
        height:  <input type="range" v-model="height" min="100" max="300">
    </p>
    <p>
        isScale:  <input type="checkbox"  name="checkbox" v-model="isScale" min="100" max="300">
    </p>
  </fieldset>
  <br>
</form>

<div style="background: #ccc;position: relative;" :style="{
    width: `${width}px`,
    height: `${height}px`,
}" >
    <LayoutFit :width="150" :height="200" :fit="fit" :isScale="isScale" @resize="resize">
        <div style="
            width: 100%;
            height: 100%;
            background: burlywood;
            background-repeat: no-repeat;
            background-size: 100% 100%;
        ">
            {{scaleX}},
            {{scaleY}},
        </div>
    </LayoutFit>
</div>

# Code

```html
<script setup lang="ts">
import { ref } from "vue"
import LayoutFit from "@vue-layout-kit/components/LayoutFit"

const width = ref(180) // 容器宽度
const height = ref(180) // 容器高度
const fit = ref("contain") // fit 值
const isScale = ref(true)
function resize(resizeData) {
    resizeData.scaleX // x 的缩放比例
    resizeData.scaleY // y 的缩放比例
    resizeData.contentWidth // 组件容器的宽度
    resizeData.contentHeight // 组件容器的高度
    resizeData.innerWidth // inner的宽度
    resizeData.innerHeight // inner的高度
    resizeData._entries // 原始对象
}
</script>

<!-- 注意：LayoutFit 组件的父节点需要添加 position: relative -->
<!-- Note: The parent node of the LayoutFit component needs to add `position: relative`. -->
<div style="background: #ccc;position: relative;" :style="{
    width: `${width}px`,
    height: `${height}px`,
}" >
    <LayoutFit :width="150" :height="200" :fit="fit" :isScale="isScale" @resize="resize">
        <div style="
            width: 100%;
            height: 100%;
            background-image: url('https://picsum.photos/150/200');
            background-repeat: no-repeat;
            background-size: 100% 100%;
        ">
            {{scaleX}},
            {{scaleY}},
        </div>
    </LayoutFit>
</div>
```