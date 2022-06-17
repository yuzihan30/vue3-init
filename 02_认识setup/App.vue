<template>
  <!-- Vue2中的html模板中必须要有一对根标签，Vue3组件的html模板中可以没有根标签 -->
  <!-- <nav>
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />-->
  <h1>{{ number }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  // 测试代码，组合API第一个要使用的函数
  setup() {
    console.log("Hello, Vue3!");
    const number = 617;
    return {
      number,
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
