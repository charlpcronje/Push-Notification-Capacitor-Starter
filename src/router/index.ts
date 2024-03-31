// src/router/index.ts
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import RegisterPage from '@/views/register.vue';
import LoginPage from '@/views/login.vue';
import UserProfilePage from '@/views/UserProfilePage.vue';
import SendNotificationPage from '@/views/SendNotificationPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/register'
  },
  {
    path: '/register',
    component: RegisterPage
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/user-profile',
    component: UserProfilePage,
    props: route => ({ userId: route.query.user_id }),
  },
  {
    path: '/send-notification',
    component: SendNotificationPage,
    name: 'SendNotification',
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
