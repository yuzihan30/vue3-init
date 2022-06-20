<template>
  <h2>shallowReactive和shallowRef</h2>
  <h3>m1: {{ m1 }}</h3>
  <h3>m2: {{ m2 }}</h3>
  <h3>m3: {{ m3 }}</h3>
  <h3>m4: {{ m4 }}</h3>
  <hr />
  <button @click="update">更新数据</button>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  shallowReactive,
  ref,
  shallowRef,
} from "vue";
export default defineComponent({
  name: "App",
  setup() {
    // 深度劫持（深监视）->深度响应式
    const m1 = reactive({
      name: "明月",
      age: 20,
      car: {
        name: "audi",
        color: "white",
      },
    });
    // 浅劫持（浅监视）->浅响应式
    const m2 = shallowReactive({
      name: "明月",
      age: 20,
      car: {
        name: "audi",
        color: "white",
      },
    });
    // 深度劫持（深监视）->深度响应式->做了reactive的处理
    const m3 = ref({
      name: "明月",
      age: 20,
      car: {
        name: "audi",
        color: "white",
      },
    });
    // 浅劫持（浅监视）->浅响应式
    const m4 = shallowRef({
      name: "明月",
      age: 20,
      car: {
        name: "audi",
        color: "white",
      },
    });
    const update = () => {
      // 更改m1的数据---reactive方式
      // m1.name += "==";
      // m1.car.name += "==";
      console.log("m1", m1);
      // 更改m2的数据---shallowReactive方式
      console.log("m2", m2);
      // m2.name += "==";
      // 只有单独执行的时候才会是浅响应式，如果上下两行一起执行就会变成深响应式
      // 至于原因可以再深入研究一下
      // m2.car.name += "==";
      // console.log(m2);
      // 更改m3的数据---ref方式
      // m3.value.name += "==";
      // m3.value.car.name += "==";
      // 更改m4的数据---shallowRef方式
      // m4.value.name += "==";
      // m4.value.car.name += "==";
      console.log(m3, m4);
    };
    return {
      m1,
      m2,
      m3,
      m4,
      update,
    };
  },
});
</script>
