import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title:'Home'
      }
    },
    {
      path: '/blogs',
      name: 'Blogs',
      // route level code-splitting
      // this generates a separate chunk (Blogs.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Blogs.vue'),
      meta: {
        title:'Blogs'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
      meta: {
        title:'Login'
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Register.vue'),
      meta: {
        title:'Register'
      }
    },
    {
      path: '/forget-password',
      name: 'ForgetPassword',
      component: () => import('../views/ForgetPassword.vue'),
      meta: {
        title:'ForgetPassword'
      }
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('../views/Admin.vue'),
      meta: {
        title:'Admin'
      }
    },
    {
      path: '/user-profile',
      name: 'UserProfile',
      component: () => import('../views/UserProfile.vue'),
      meta: {
        title:'UserProfile'
      }
    },
    {
      path: '/create-post',
      name: 'CreatePost',
      component: () => import('../views/CreatePost.vue'),
      meta: {
        title:'Create A Post'
      }
    },
    

  ]
})
router.beforeEach((to, _from, next) => {
  document.title = `${to.meta.title} | CodeGuruOzzy PortfolioBlogs`;
  next();
})

export default router
