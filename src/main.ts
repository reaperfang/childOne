// import './public-path'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router/index'
import { renderWithQiankun, qiankunWindow } from "vite-plugin-qiankun/dist/helper"
// createApp(App).mount('#app')

// let instance = null;
// function render(props = {}) {
//   if (instance) return;
//   const { container } = props;
//   console.log(container);
//   instance = createApp(App)
//     .use(router)
//     .mount(container ? container.querySelector("#app") : "#app");
// }

// // 独立运行时
// if (!window.__POWERED_BY_QIANKUN__) {
//   render();
// }

// export async function bootstrap() {
//   console.log("[vue] vue app bootstraped");
// }
// export async function mount(props) {
//   console.log("[vue] props from main framework", props);
//   render(props);
// }
// export async function unmount() {
//   //可选链操作符
//   instance.$destroy?.();
//   instance = null;
// }

let app: any;
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  createApp(App).use(router).mount("#app");
} else {
  renderWithQiankun({
    mount(props) {
      // 传递的值可以获取到了
      app = createApp(App)
      app.use(router)
      app.mount(
        props.container
          ? props.container.querySelector("#app")
          : document.getElementById("app")
      );
    },
    bootstrap() {
      console.log("--bootstrap");
    },
    update(props) {
      console.log("--update", props);
    },
    unmount() {
      console.log("--unmount");
      app?.unmount();
    },
  });
}