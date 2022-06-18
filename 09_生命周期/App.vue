<template>
  <h2>App父级组件</h2>
  <button @click="isShow = !isShow">切换显示</button>
  <hr />
  <child-a v-if="isShow" />
</template>
<script lang="ts">
// 引入子级组件Child
import ChildA from "./components/Child.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "App",
  components: {
    ChildA,
  },
  setup() {
    const isShow = ref(true);
    return {
      isShow,
    };
  },
});
</script>
