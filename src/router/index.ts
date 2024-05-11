import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

// 2. 配置路由
const routes = [
   {
    
   }

];
// 1.返回一个 router 实列，为函数，里面有配置项（对象） history
const router = createRouter({
    mode: 'history',
    base: window.__POWERED_BY_QIANKUN__ ? "/child-one" : "/",
    history: createWebHashHistory('/child-one'),
    routes,
});

// 3导出路由   然后去 main.ts 注册 router.ts
export default router
