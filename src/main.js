import Vue from 'vue'
import App from './App.vue'
import Vuerouter from 'vue-router';
import {routes} from './router';
import '../main.css'

//"dev": "cross-env NODE_ENV=development webpack-dev-server --open --port 3000  --hot",w
//--open 自动打开 --port 3000 指定端口 --hot 补丁，不需要重新加载就可以更新
Vue.use(Vuerouter);
const router=new Vuerouter({
  routes:routes,
  mode:'hash',
  scrollBehavior(to,from,savedposition){
    
    if(to.hash){
      return {selector:to.hash}
    }
  }
})
//进入路由之前
//next(false): 取消进入路由，url地址重置为from路由地址(也就是将要离开的路由地址)。
//next('path地址')或者next({path:''})或者next({name:''})
router.beforeEach((to,from,next)=>{
  console.log('touter glob',to,from);
  next()
})
//全局解析守卫，在beforRouteEnter调用之后调用
router.beforeResolve((to,from,next)=>{
      console.log(to);
      console.log(from);
      next();
})
//全局后置钩子函数，进入路由之后
router.afterEach((to,from)=>{
  console.log('afterEach 全局后置钩子函数')
})
new Vue({
  el: '#app',
  //注入vue路由
  router,
  render: h => h(App)
})
