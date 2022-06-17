<template>
<!-- Vue2中的html模板中必须要有一对根标签，Vue3组件的html模板中可以没有根标签 -->
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- 使用这个子组件 -->
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
// lang="ts"表示这里可以写TS的代码
// defineComponent定义一个组件， 内部可以传入配置对象
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

// 暴露出去一个定义好的组件，defineComponent函数返回值最终是一个对象
export default defineComponent({
  // 当前组件的名字是HomeView
  name: "HomeView",
  // 注册组件
  components: {
    // 注册一个子组件
    HelloWorld,
  },
});
</script>

<style lang="scss" scoped>
// 除了App.vue写全局样式，其他组件一般都是写scoped局部样式
</style>
