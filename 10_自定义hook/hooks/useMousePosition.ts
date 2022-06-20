import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
export default function () {
  const x = ref(-1);
  const y = ref(-1);

  // 点击事件的回调函数
  const clickHandler = (event: MouseEvent) => {
    x.value = event.pageX;
    y.value = event.pageY;
  };

  // 页面已经加载完毕了，再进行点击操作
  // 页面加载完毕的生命周期
  onMounted(() => {
    window.addEventListener("click", clickHandler);
  });
  // 页面卸卸载前的生命周期组合API, 但现在没有复用，想复用需要hook函数，use开头
  onBeforeUnmount(() => {
    window.removeEventListener("click", clickHandler);
  });
  return {
    x,
    y,
  };
}
