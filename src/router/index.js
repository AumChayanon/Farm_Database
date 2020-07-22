import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
//import Login from "../views/Login.vue";
import * as firebase from "firebase/app";
const Home = () => import('@/views/Home.vue')
const Login = () => import('@/views/Login.vue')
import 'firebase/auth'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    title:"Famr"
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    title:"Home",
    meta: {
      requiresAuth: true,
      title:"Famr"
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const currentUser = firebase.auth().currentUser;

  if (requiresAuth && !currentUser) next({path:'login'});
  else if (!requiresAuth && currentUser) next({path:'home'});
  else next();
});

export default router;
