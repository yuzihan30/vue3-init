<template>
  <!-- <div>
    <h2>测试1</h2>
    <h2>测试2</h2>
  </div> -->
  <!-- 在 Vue3 中: 组件可以没有根标签, 内部会将多个标签包含在一个 Fragment 虚拟元素中
好处: 减少标签层级, 减小内存占用 -->
  <h2>测试1</h2>
  <h2>测试2</h2>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
});
</script>
