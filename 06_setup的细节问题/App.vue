<template>
  <h2>父组件</h2>
  <h3>msg: {{ msg }}</h3>
  <button @click="updateData">更新数据</button>
  <hr />
  <!-- eslint会校验多单词命名子组件 -->
  <child-a :msg="msg" msg2="good" @aaa="aaa" />
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
// 引入子组件Child， 引入->注册->使用三步曲
import ChildA from "./components/Child.vue";
export default defineComponent({
  name: "App",
  // 注册组件
  components: {
    ChildA,
  },

  setup() {
    // 定义一个Ref类型的数据
    const msg = ref("what r u?");
    const updateData = () => {
      msg.value += "==";
    };
    function aaa(txt: string) {
      msg.value += txt;
    }
    return {
      msg,
      updateData,
      aaa,
    };
  },
});
</script>
