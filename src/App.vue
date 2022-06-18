<template>
  <h2>计算属性和监视</h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏：<input
      type="text"
      v-model="user.firstName"
      placeholder="请输入姓氏"
    /><br />
    名字：<input
      type="text"
      v-model="user.lastName"
      placeholder="请输入名字"
    /><br />
  </fieldset>
  <fieldset>
    <legend>计算属性和监视的演示</legend>
    姓名：<input type="text" v-model="fullName1" placeholder="显示名字" /><br />
    姓名：<input type="text" v-model="fullName2" placeholder="显示名字" /><br />
    姓名：<input type="text" v-model="fullName3" placeholder="显示名字" /><br />
  </fieldset>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  ref,
  watch,
  watchEffect,
} from "vue";
export default defineComponent({
  name: "App",
  setup() {
    // 定义一个响应式对象
    const user = reactive({
      // 姓氏
      firstName: "诸葛",
      // 名字
      lastName: "孔明",
    });
    // 通过计算属性的方式，实现第一个姓名的显示
    // vue3中的计算属性，计算属性的函数中如果只传入一个回调函数，表示的是get

    // 返回的是一个Ref类型的对象
    const fullName1 = computed(() => {
      return user.firstName + "_" + user.lastName;
    });
    console.log(fullName1);
    const fullName2 = computed({
      get() {
        return user.firstName + "_" + user.lastName;
      },
      set(val: string) {
        // console.log("=====", val);
        const names = val.split("_");
        user.firstName = names[0];
        user.lastName = names[1];
      },
    });
    // 第三个姓名
    const fullName3 = ref("");
    // 监视---监视指定的数据
    watch(
      user,
      ({ firstName, lastName }) => {
        fullName3.value = firstName + "_" + lastName;
      },
      { immediate: true, deep: true }
    ); // immediate: true让它默认的执行一次;deep: true深度监视
    // 会发现fullName3最开始的时候没有显示，因为watch没有在一开始的时候就执行一次
    // 默认开始时让它执行一次

    // 监视---另一种监视，不需要配置immediate,本身默认就会进行监视，（默认执行一次）
    // watchEffect(() => {
    //   fullName3.value = user.firstName + "_" + user.lastName;
    // });

    // 监视fullName3的数据，改变firstName和lastName
    watchEffect(() => {
      const names = fullName3.value.split("_");
      user.firstName = names[0];
      user.lastName = names[1];
    });
    // watch---可以监视多个数据的
    // watch([user.firstName, user.lastName, fullName3], () => {
    //   // 只有user.firstName, user.lastName的时候，这里的代码就没有执行
    //   // fullName3是响应式数据，user.firstName, user.lastName不是响应式数据
    //   console.log("===");
    // });
    // 当我们需要监视非响应式数据时，代码需要修改一下
    watch([() => user.firstName, () => user.lastName], () => {
      // 只有user.firstName, user.lastName的时候，这里的代码就没有执行
      // fullName3是响应式数据，user.firstName, user.lastName不是响应式数据
      console.log("===");
    });
    return {
      user,
      fullName1,
      fullName2,
      fullName3,
    };
  },
});
</script>
