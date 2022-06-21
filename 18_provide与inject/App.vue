<template>
  <h2>provide 与 inject</h2>
  <p>当前的颜色：{{ color }}</p>
  <button @click="color = 'red'">红色</button>
  <button @click="color = 'yellow'">黄色</button>
  <button @click="color = 'green'">绿色</button>
  <hr />
  <SonA />
</template>
<script lang="ts">
import { defineComponent, ref, provide } from "vue";
import SonA from "./components/SonA.vue";
export default defineComponent({
  name: "App",
  components: {
    SonA,
  },
  setup() {
    // 响应式的数据
    const color = ref("red");
    // 提供数据, 最好用响应式的数据传
    provide("color", color);
    return {
      color,
    };
  },
});
</script>
