import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/Login.vue'
import form from '../views/Form.vue'
import form2 from '../views/Form2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/form',
    name: 'form',
    component: form,
    // component: () => import(/* webpackChunkName: "about" */ '../views/Form.vue')
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/form2',
    name: 'form2',
    component: form2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
