<template>
  <h2>CustomRef的使用</h2>
  <input type="text" v-model="keyword" />
  <p>{{ keyword }}</p>
</template>
<script lang="ts">
import { defineComponent, customRef, ref } from "vue";
// 自定义hook防抖的函数
// value传入的数据，将来数据的类型不确定，所以用泛型，delay防抖的间隔时间，默认是200好毫秒
function useDebounceRef<T>(value: T, delay = 200) {
  // 准备一个存储定时器id的变量
  let timeoutId: number;
  // 返回一个ref对象
  return customRef((track, trigger) => {
    // 返回结果被customRef包裹之后变成ref对象
    return {
      // 返回数据
      get() {
        // 告诉Vue追踪数据
        track();
        return value;
      },
      // 设置数据
      set(newValue: T) {
        // 设置的时候需要清理定时器
        clearTimeout(timeoutId);
        // 设置数据的时候要开启定时器，产生防抖的效果
        timeoutId = setTimeout(() => {
          value = newValue;
          // 告诉Vue更新界面
          trigger();
        }, delay);
      },
    };
  });
}
export default defineComponent({
  name: "App",
  setup() {
    // const keyword = ref("xxx");
    const keyword = useDebounceRef("yyy", 600);
    return {
      keyword,
    };
  },
});
</script>
