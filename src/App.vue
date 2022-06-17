<template>
  <!-- Vue2中的html模板中必须要有一对根标签，Vue3组件的html模板中可以没有根标签 -->
  <!-- <nav>
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />-->
  <h2>setup和ref的基本使用</h2>
  <h3>{{ count }}</h3>
  <button @click="updateCount">更新数据</button>
</template>

<script lang="ts">
// import { defineComponent } from "vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",
  // 测试代码，组合API第一个要使用的函数
  // setup() {
  //   console.log("Hello, Vue3!");
  //   const number = 617;
  //   return {
  //     number,
  //   };
  // },
  // 需求：页面打开后可以直接看到一个数据，点击按钮后，该数据可以发生变化
  // vue2的实现方式， vue3支持vue2中大多数语法
  // data() {
  //   return {
  //     count: 0, // 属性
  //   };
  // },
  // methods: {
  //   updateCount() {
  //     this.count++; // 方法
  //   },
  // },
  // vue3的实现方式
  // setup是组合API的入口函数，程序一执行会先进到setup当中
  setup() {
    // 变量
    // let count = 0; // 此时的数据并不是响应式的数据（响应式数据：数据变化，页面跟着渲染变化）
    // ref是一个函数，作用：定义一个响应式的数据，返回的是一个Ref对象，对象中有一个value属性，
    // 如果需要对数据进行操作，需要使用该Ref对象调用value属性的方式进行数据的操作
    // html模板中是不需要使用.value属性的写法
    // 一般用来定义一个基本类型的响应式数据
    const count = ref(0);
    console.log(count);
    // 方法
    function updateCount() {
      console.log("执行updateCount");
      // 报错的原因：count是一页Ref对象，对象是不能进行++操作
      // count++;
      count.value++;
    }

    // 返回的是一个对象
    return {
      // 属性
      count, // count是count:count的简写
      // 方法
      updateCount,
    };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
