<template>
  <h2>子组件</h2>
  <h3>msg: {{ msg }}</h3>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChildA",
  props: ["msg"],
  // setup的细节问题

  // setup是在beforeCreate生命周期回调之前就执行了，而且就执行一次
  // 由此可以推断出：setup在执行的时候，当前的组件还未创建出来，也意味着：组件实例对象this
  // 根本就不能用; this是undefined,说明就不能通过this再去调用data/computed/methods/
  // props中的相关内容了; 其实所有的 composition API 相关回调函数中也都不可以
  // 数据初始化的生命周期回调
  beforeCreate() {
    console.log("beforeCreate执行了");
  },
  // 界面渲染完毕
  // mounted() {},
  setup() {
    console.log("setup执行了", this);
    // 返回对象的数据可以再模板直接使用
    return {
      // setup中一般是返回一个对象，对象中的属性和方法一般都可以在html模板中可以直接使用
    };
  },
});
</script>
