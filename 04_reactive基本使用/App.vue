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
  <h3>性别：{{ user.gender }}</h3>
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
    // const obj: any = { // 为了在使用obj.gender = "male"的时候不出现这种错误的提示
    // 信息，才这么书写
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
    // const user = reactive(obj);
    const user = reactive<any>(obj);
    console.log(user);
    // 方法，记得方法要暴露出去
    // function updateUser() {}
    const updateUser = () => {
      // user.name = "zz";
      // user.name += "==";
      // user.age += 2;
      // user.gf.name += "==";
      // user.gf.cars[0] = "golf";
      // 直接使用目标对象的方式，来更新目标对象中的成员中值，是不可能的，只能使用代理对象的方式
      // 来更新数据(响应式数据)
      // obj.name += "===" // 直接这样写界面是不会更新的

      // user---》代理对象，obj---》目标对象
      // user对象或者obj对象添加一个新的属性，哪一种方式会影响界面的更新
      // obj.gender = "male"; // 这种方式，界面没有更新渲染
      // user.gender = "male"; // 能去掉报错的方式，const obj: any或者reactive<any>(obj)；
      // 这种方式界面可以更新渲染，而且这个数据最终也添加到了obj对象上了
      // user对象或者obj对象中移除一个已经存在的属性，哪一种方式会影响界面的更新
      // delete obj.age; // 界面没有更新，obj中确实没有了age这个属性
      // delete 的操作数必须是可选的
      // 在 strictNullChecks 中使用 delete 运算符时，操作数现在必须为 any、unknown、never
      // 或为可选（因为它在类型中包含 undefined）。否则，使用 delete 运算符是错误的。可以
      // 将"strict": true注释掉暂时解决这个问题
      delete user.age; // // 界面更新渲染了，obj中确实没有了age这个属性
      console.log(obj);
      console.log(user);

      // 总结：如果操作代理对象，目标对象的数据也随之变化；同时如果想要在操作数据的时候，界面
      // 也要跟着重新渲染，那么也是操作代理对象
      // 深度监视：通过当前的代理对象找到改对象的某个属性，更改该属性中某个数组中的数据
      user.gf.cars[1] = "fox";
      // 通过当前的代理对象给目标对象的数组属性添加一个新的值
      user.gf.cars[3] = "great wall";
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
