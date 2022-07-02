<template>
  <h2>App父级组件：Suspense组件的使用</h2>
  <Suspense>
    <template #default>
      <!-- 异步组件 -->
      <!-- 演示的三种用法都属于异步组件的范畴 -->
      <!-- <AsyncComponent /> -->
      <AsyncAddress />
    </template>
    <template v-slot:fallback>
      <!-- loading的内容 -->
      <h2>loading...</h2>
    </template>
  </Suspense>
  <!-- <AsyncComponent /> -->
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
// 引入组件：静态引入和动态引入
// Vue2中动态引入组件的写法: (在Vue3中这种写法不行，会在控制台报错)
// const AsyncComponent = () => import("./AsyncComponent.vue");
// Vue3动态引入组件的方法
// const AsyncComponent = defineAsyncComponent(
//   () => import("./AsyncComponent.vue")
// );

// 静态引入组件
// import AsyncComponent from "./AsyncComponent.vue";
import AsyncAddress from "./AsyncAddress.vue";
export default defineComponent({
  name: "App",
  components: {
    // AsyncComponent,
    AsyncAddress,
  },
});
</script>
