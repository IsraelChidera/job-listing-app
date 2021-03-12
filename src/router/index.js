import Vue from 'vue'
import VueRouter from 'vue-router'
// import firebase from 'firebase'
import auth from '../layouts/Authlayout.vue'
import form from '../views/Form.vue'
import form2 from '../views/Form2.vue'
import Adminpage from '../views/Admin-landing-page.vue'
import dashboard from '../views/Dashboard.vue'
import register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'auth',
    component: auth
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
  },
  {
    path: '/admin-landing-page',
    name: 'Admin-Page',
    component: Adminpage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: dashboard,
    meta: {
      authRequired: true,
    }
  },
  {
    path: '/register',
    name: 'register',
    component: register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// router.beforeEach((to, from, next) => {
//         if (to.matched.some(record => record.meta.authRequired)) {
//             if (firebase.auth().currentUser) {
//             next();
//             } else {
//             alert('You must be logged in to see this page');
//             next({
//                 path: '/',
//             });
//             }
//         } else {
//             next();
//         }
// });

export default router
