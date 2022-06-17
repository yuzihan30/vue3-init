# vue3-init

## 基于 vue-cli 创建 vue3+TS 项目步骤

1. npm install -g @vue/cli
2. vue --version // 4.5.0 以上才行
3. vue create my-project
4. 选第三个手动选择->选 TS 按下空格->选 vue3->一路回车

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Run your end-to-end tests

```
yarn test:e2e
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 学习文档

### 新增特性

组合 api
setup: ref 和 reactive, computed 和 watch, 新的生命周期函数，provide 和 inject
新组件：Fragment 新组件，Teleport 瞬移组件, suspense 异步加载组件的 loading 界面
其他 API 更新：全局 API 的修改，将原来的全局 API 转移到应用对象，模板语法变化

### 创建 vue3 项目的两种方式

#### vue-cli 创建

npm install -g @vue/cli
vue --version // 4.5.0 以上才行
vue create my-project
选第三个手动选择->选 TS 按下空格->选 vue3->一路回车

#### 使用 vite 创建

基于原生 ESM 驱动的构建工具，在开发环境下基于浏览器原生 ES imports 开发
能在本地快速启动，生产环境 Rollup 打包：快速冷启动，不需等待打包操作；即时的热模块更新，替换性能和模块数量的解耦让更新起飞；按需编译，不需等待整个应用编译完成
npm init vite-app <project-name>
cd <project-name>
npm install
npm run dev

### 组合 API 常用部分

#### setup

也是个函数或者叫回调函数，在程序运行的时候只执行一次

- 新的配置选项，所有的组合 API 函数都在此使用，只在初始化的时候执行一次
- 函数如果返回对象，对象中的属性或者方法，模板中可以直接使用
  > 修改文件内容重启后出现 error Insert `⏎` prettier/prettier 解决方法
  > https://blog.csdn.net/qq_45432996/article/details/105552757
  > "editor.formatOnSave": true

编辑组件遇到的问题及解决办法

- vscode 安装并启用 Volar
  The recommended IDE setup is VSCode + the Volar extension. Volar provides syntax highlighting, TypeScript support, and intellisense for template expressions and component props.
  Volar replaces Vetur, our previous official VSCode extension for Vue 2. If you have Vetur currently installed, make sure to disable it in Vue 3 projects.
- Mac 更新 VSCode 写权限被拒绝 Cannot update while running on a read-only volume
  执行以下命令并重启 vscode, 有时新插件老版本不支持，比如 volar
  sudo chown -R \$USER ~/Library/Caches/com.microsoft.VSCode.ShipIt

#### ref

- 作用： ref 定义一个响应式的数据
- 语法：const xxx = ref(initValue)
  - 创建一个响应式数据的引用(reference)对象
  - js 中操作数据：xxx.value
  - 模板中操作数据：不需要.value
- 一般用来定义一个基本类型的响应式数据，言外之意对象就用 reactive

### 组合 API 其他部分

## 参考资料

- [vue3 学习 B 站视频](https://www.bilibili.com/video/BV1ra4y1H7ih?p=45&spm_id_from=pageDriver&vd_source=7ee5c96f1a1e60cce40c476ea01fa301)
- [vue3 官方文档](https://vuejs.org/guide/scaling-up/tooling.html#ide-support)
