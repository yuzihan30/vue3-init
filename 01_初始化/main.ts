// 程序的主入口文件，是main.ts
// 引入createApp函数，创建对应的应用，产生对应的实例对象；vue3当中把很多函数都放到vue中进行封装，需要哪个直接引入就行
import { createApp } from "vue";
// 引入App组件（所有组件的父级组件）
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// 创建App应用返回对应的实例对象，调用mount方法进行挂载，最终产生的所有组件会在public->index.html中id为#app的div中渲染
createApp(App).use(store).use(router).mount("#app");
