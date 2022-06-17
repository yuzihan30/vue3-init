<template>
  <!-- Vue2中的html模板中必须要有一对根标签，Vue3组件的html模板中可以没有根标签 -->
  <!-- <nav>
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />-->
  <!-- <h2>setup和ref的基本使用</h2>
  <h3>{{ count }}</h3>
  <button @click="updateCount">更新数据</button> -->
  <h2>reactive的使用</h2>
  <h3>名字：{{ user.name }}</h3>
  <h3>年龄：{{ user.age }}</h3>
  <h3>女朋友：{{ user.gf }}</h3>
  <hr />
  <button @click="updateUser">更新数据</button>
</template>

<script lang="ts">
// import { defineComponent } from "vue";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "App",

  // 需求：显示用户的相关信息，点击按钮，可以更新用户的相关信息数据

  /*
  作用：定义多个数据的响应式，就是定义响应式的对象
  const proxy = reactive(obj):接受一个普通对象然后返回该普通对象的响应式代理器对象
  响应式转换是深层的：会影响对象内部所有嵌套的属性，通过代理对象操作源对象内部数据都是响应式的
  */
  setup() {
    const obj = {
      name: "xx",
      age: 28,
      gf: {
        name: "yy",
        age: 25,
        cars: ["BMW", "BENZ", "audi"],
      },
    };
    // 把数据变成响应式的数据
    // 返回的是一个Proxy的代理对象，被代理者就是reactive中的传入对象
    // 返回的是一个Proxy的代理对象，被代理的目标对象就是obj对象
    // user现在是代理对象，obj是目标对象
    // user对象的类型是Proxy
    // const user = reactive({
    //   name: "xx",
    //   age: 28,
    //   gf: {
    //     name: "yy",
    //     age: 25,
    //     cars: ["BMW", "BENZ", "audi"],
    //   },
    // });
    const user = reactive(obj);
    console.log(user);
    // 方法，记得方法要暴露出去
    // function updateUser() {}
    const updateUser = () => {
      // user.name = "zz";
      user.name += "==";
      user.age += 2;
      user.gf.name += "==";
      user.gf.cars[0] = "golf";
      // 直接使用目标对象的方式，来更新目标对象中的成员中值，是不可能的，只能使用代理对象的方式
      // 来更新数据(响应式数据)
      // obj.name += "===" // 直接这样写界面是不会更新的
    };
    return {
      user,
      updateUser,
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
