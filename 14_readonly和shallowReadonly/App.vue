<template>
  <h2>readonly和shallowReadonly</h2>
  <h3>state: {{ state }}</h3>
  <h3>state2: {{ state2 }}</h3>
  <hr />
  <button @click="update">更新数据</button>
</template>
, readonly
<script lang="ts">
import { defineComponent, reactive, readonly, shallowReadonly } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const state = reactive({
      name: "明月",
      age: 20,
      car: {
        name: "audi",
        color: "white",
      },
    });
    // 只读数据，深度只读
    // const state2 = readonly(state);
    // shallowReadonly只读的
    // 只读的数据---浅只读的
    const state2 = shallowReadonly(state);
    const update = () => {
      // state2.name += "==";
      // state2.car.name += "==";
      // console.log("state", state);

      // state2.name += "===";
      // 同时也会把state中的更新了
      state2.car.name += "==";
    };
    return {
      state,
      update,
      state2,
    };
  },
});
</script>
