import * as VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
import About from '../views/about/index.vue'

const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export default router