<template>
  <h2>toRef的使用和特点</h2>
  <h3>state: {{ state }}</h3>
  <h3>age: {{ age }}</h3>
  <h3>money: {{ money }}</h3>
  <hr />
  <button @click="update">更新数据</button>
  <hr />
  <child-a :age="age" />
</template>
<script lang="ts">
import { defineComponent, reactive, toRef, ref } from "vue";
import ChildA from "./components/Child.vue";
export default defineComponent({
  name: "App",
  components: {
    ChildA,
  },
  setup() {
    const state = reactive({
      age: 30,
      money: 100,
    });
    // 把响应式数据state对象中的某个属性age变成ref对象了
    const age = toRef(state, "age");
    // 把响应式数据state对象中的某个属性使用ref进行包装， 变成了一个ref对象
    const money = ref(state.money);
    console.log(age);
    console.log(money);
    const update = () => {
      // 更新数据的
      // console.log("测试");
      // state.age += 10
      age.value += 20;
      // money.value += 30; // money拷贝了一份，和state里面的money不再关联
    };
    return {
      state,
      age,
      money,
      update,
    };
  },
});
</script>
