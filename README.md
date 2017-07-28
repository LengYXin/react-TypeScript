# React-Demo

<p>完整可供学习的 react+redux+router项目 </p>
<p>主要基础知识 按照顺序 学习 理解 react 以及和其他库的协同合作打造完整的应用 （理解web端react 有助于理解 react-Native 他们唯一不同的是native不在使用html标签，而是使用fb封装好的 native 组件）</p>
<p>Typescript || ES6 ： <a href="http://www.typescriptlang.org/index.html">http://www.typescriptlang.org/index.html</a> </p>
<p>react ：<a href="https://facebook.github.io/react/"> https://facebook.github.io/react/</a> </p>
<p>redux ：<a href="http://www.redux.org.cn/">http://www.redux.org.cn/</a> </p>
<p>react-router ：<a href="https://github.com/ReactTraining/react-router">https://github.com/ReactTraining/react-router </a></p>
<p>react-redux ： react 中如何使用 redux <a href="http://redux.js.org/docs/basics/UsageWithReact.html">http://redux.js.org/docs/basics/UsageWithReact.html</a></p>
<p>次要知识</p>
<p>webpack ：打包工具 <a href="https://doc.webpack-china.org/">https://doc.webpack-china.org/</a></p>
<p>redux-devtools ：redux 状态调试工具 <a href="https://github.com/zalmoxisus/redux-devtools-extension">https://github.com/zalmoxisus/redux-devtools-extension</a>  </p>
<p>redux-thunk ： redux 异步 <a href="https://github.com/gaearon/redux-thunk">https://github.com/gaearon/redux-thunk</a> </p>
<p>react-router-dom，react-router-config ：react-router 的子库帮助配置路由</p>
<p>antd ：阿里蚂蚁金服设计的一个ui库 <a href="https://ant.design/index-cn">https://ant.design/index-cn</a></p>

<pre>
  首次下载完成运行 
  npm run init-dev --安装全局以及本地依赖，这里已经配置node-sass的安装以及引用，如果安装失败手动安装node-sass（必须使用cnpm 安装 yarn 和 npm 安装不上。）
  npm start --启动开发环境
  npm run build --生产环境打包
</pre>

<pre>
  文件目录 结构
  src                   -----    应用根目录
       actions          -----    redux action
       components       -----    展示组件  
       containers       -----    容器组件
       -------------------------<a href='http://www.redux.org.cn/docs/basics/UsageWithReact.html'> 容器组件和展示组件的区别 </a> 
       reducers         -----    redux reducer
       routes           -----    路由配置
       utils            -----    杂七杂八的
       index.html       -----    首页模板文件
       index.tsx        -----    应用启动位置
       vendor.ts        -----    第三方库共享文件
  www                   -----    build 目录
  data.js               -----    模拟web服务器
  ...                   -----    其他文件--
</pre>
