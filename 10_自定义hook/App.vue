<template>
  <h2>自定义hook函数操作</h2>
  <h2>x:{{ x }}, y: {{ y }}</h2>
  <h3 v-if="loading">正在加载中...</h3>
  <h3 v-else-if="errorMsg">错误信息: {{ errorMsg }}</h3>
  <ul v-else>
    <li>id: {{ data.id }}</li>
    <li>address: {{ data.address }}</li>
    <li>distance: {{ data.distance }}</li>
  </ul>
  <hr />

  <!-- 数组数据 -->
  <ul v-for="item in data" :key="item.id">
    <li>id: {{ item.id }}</li>
    <li>title: {{ item.title }}</li>
    <li>price: {{ item.price }}</li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount, watch } from "vue";
import useMousePosition from "./hooks/useMousePosition";
import useRequest from "./hooks/useRequest";

// 定义接口，约束对象的类型
interface AddressData {
  id: number;
  address: string;
  distance: string;
}
interface ProductsData {
  id: string;
  title: string;
  price: number;
}
export default defineComponent({
  name: "App",
  // 需求1：用户在页面中点击页面，把点击位置的横纵坐标搜集并展示出来
  setup() {
    // const x = ref(-1);
    // const y = ref(-1);

    // // 点击事件的回调函数
    // const clickHandler = (event: any) => {
    //   x.value = event.pageX;
    //   y.value = event.pageY;
    // };

    // // 页面已经加载完毕了，再进行点击操作
    // // 页面加载完毕的生命周期
    // onMounted(() => {
    //   window.addEventListener("click", clickHandler);
    // });
    // // 页面卸卸载前的生命周期组合API, 但现在没有复用，想复用需要hook函数，use开头
    // onBeforeUnmount(() => {
    //   window.removeEventListener("click", clickHandler);
    // });
    const { x, y } = useMousePosition();
    // 发送请求, http://localhost:8080/data/address.json可以看到数据
    // 获取对象数据
    // const { loading, data, errorMsg } = useRequest<AddressData>("/data/address.json");
    // 获取数组数据, 请求目录不带根/也可以; 利用TS强化类型检查
    const { loading, data, errorMsg } =
      useRequest<ProductsData[]>("data/products.json");

    // 监视
    watch(data, () => {
      // console.log(data.value.length);
      if (data.value) {
        console.log(data.value.length);
      }
    });
    return {
      x,
      y,
      loading,
      data,
      errorMsg,
    };
  },
});
</script>
