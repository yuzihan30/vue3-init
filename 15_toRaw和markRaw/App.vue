<template>
  <h2>toRaw和markRaw</h2>
  <h3>state: {{ state }}</h3>
  <hr />
  <button @click="testToRaw">测试toRaw</button>
  <button @click="testMarkRaw">测试markRaw</button>
</template>
<script lang="ts">
import { defineComponent, reactive, toRaw, markRaw } from "vue";
interface UserInfo {
  name: string;
  age: number;
  likes?: string[];
}
export default defineComponent({
  name: "App",
  setup() {
    const state = reactive<UserInfo>({
      name: "明月",
      age: 20,
    });
    const testToRaw = () => {
      // 把代理对象变成普通对象， 数据变化，界面不不变化
      const user = toRaw(state);
      user.name += "==";
      console.log("testToRaw");
    };
    const testMarkRaw = () => {
      // state.likes = ["吃", "喝"];
      // state.likes[0] += "==";
      // console.log("testMarkRaw");
      // console.log(state)
      const likes = ["吃", "喝"];
      state.likes = markRaw(likes);
      setInterval(() => {
        if (state.likes) {
          // markRaw标记的对象数据，从此以后都不能再成为代理对象了
          state.likes[0] += "==";
          console.log("定时器在运行");
        }
      }, 1000);
    };
    return {
      state,
      testToRaw,
      testMarkRaw,
    };
  },
});
</script>
