<template>
  <h2>Child子级组件</h2>
  <h3>age: {{ age }}</h3>
  <h3>length: {{ length }}</h3>
</template>
<script lang="ts">
import { defineComponent, computed, Ref, toRef } from "vue";
// 可能是别人定义的库函数，对传参类型有限制
function useGetLength(age: Ref) {
  return computed(() => {
    return age.value.toString().length;
  });
}
export default defineComponent({
  name: "ChildA",
  props: {
    age: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const length = useGetLength(toRef(props, "age"));
    return {
      length,
    };
  },
});
</script>
