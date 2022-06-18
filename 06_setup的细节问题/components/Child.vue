<template>
  <h2>子组件</h2>
  <h3>msg: {{ msg }}</h3>
  <!-- <h3>count: {{ count }}</h3> -->
  <button @click="emitAaa">分发事件</button>
</template>
<script lang="ts">
import { ConstantTypes } from "@vue/compiler-core";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ChildA",
  props: ["msg"],
  // setup的细节问题

  // setup是在beforeCreate生命周期回调之前就执行了，而且就执行一次
  // 由此可以推断出：setup在执行的时候，当前的组件还未创建出来，也意味着：组件实例对象this
  // 根本就不能用; this是undefined,说明就不能通过this再去调用data/computed/methods/
  // props中的相关内容了; 其实所有的 composition API 相关回调函数中也都不可以

  // setup的返回值是一个对象，内部的属性和方法是给html模板使用的
  // setup中对象内部的属性和data函数中的return对象的属性都可以在html模板中使用
  // setup中对象内部的属性和data函数中的return对象的属性会合并为组件对象的属性
  // setup中的对象的方法和method对象中的方法会合并为组件对象的方法
  // 在Vue3中尽量不要混合的使用data和setup及methods和setup
  // setup不能是一个async函数，因为返回值不再试return的对象，而是promise，模板看不到
  // return对象中的属性数据

  // 数据初始化的生命周期回调
  beforeCreate() {
    console.log("beforeCreate执行了");
  },
  // 界面渲染完毕
  // mounted() {},
  // async setup() {
  setup(props, context) {
    // props参数，是一个对象，里面有父级组件向子级组件传递的数据，并且是在子级组件中使用props
    // 接收到的所有的属性;包含 props 配置生命且传入了的所有属性的对象
    console.log("props", props);
    console.log("props.msg", props.msg);
    // context参数，是一个对象，里面有attrs对象（获取当前组件标签上的所有属性的对象，但是
    // 该属性是props中没有声明接收的所有属性的对象),emit方法（分发事件的）,slots对象(插槽）
    // attrs: 包含没有在 props 配置中声明的属性的对象，相当于 `this.$attrs`
    console.log("context", context);
    console.log("context.attrs", context.attrs);
    console.log("context.attrs.msg2", context.attrs.msg2);
    console.log("context.emit", context.emit);
    console.log("================");
    console.log("setup执行了", this);
    // const count = ref(10);

    const showMsg1 = () => {
      console.log("setup中的showMsg1方法");
    };
    // 按钮点击事件的回调函数
    function emitAaa() {
      context.emit("aaa", "++");
      // setup(props, {attrs,slots,emit})
      // emit("aaa", "++");
    }
    // 返回对象的数据可以再模板直接使用
    return {
      // setup中一般是返回一个对象，对象中的属性和方法一般都可以在html模板中可以直接使用
      //   count,
      showMsg1,
      emitAaa,
    };
  },
  data() {
    return {
      count: 10,
    };
  },
  // 界面渲染后的生命周期回调，vue3使用mounted时里面的this是代理对象
  mounted() {
    console.log(this);
  },
  // 方法
  methods: {
    showMsg2() {
      console.log("methods中的showMsg方法");
    },
  },
});
</script>
