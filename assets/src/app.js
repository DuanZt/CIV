import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//Vue.prototype.base_url = 'http://localhost/civ/';
Vue.prototype.base_url = 'http://localhost:8080/civ/';


/*import Foo from './hello1.vue';
import Bar from './hello2.vue';
import helloworld from './helloworld.vue';
import user from './user.vue';*/

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/', component:  () => import('./helloworld.vue') },
  { path: '/foo', component:  () => import('./hello2.vue') },
  { path: '/bar', component:  () => import('./hello1.vue') },
  { path: '/user/:id', component: () => import('./user.vue') }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

// 现在，应用已经启动了！
