import Vue from 'vue';

import VueRouter from 'vue-router';
import Dashboard from '../view/dashboard/index.vue';
import ArticleList from '../view/article/list.vue';

Vue.use(VueRouter);

export default function createRouter() {
  return new VueRouter({
    mode: 'history',
    base: '/admin/',
    routes: [
      {
        path: '/',
        component: Dashboard
      },
      {
        path: '/article/list',
        component: ArticleList
      },
      {
        path: '/article/add',
        component: () => import('../view/write/index.vue')
      },
      {
        path: '/article/detail/:id',
        component: () => import('../view/article/detail.vue')
      },
      {
        path:'/attendance/absence',
        component: () => import('../view/attendance/absencenumber.vue')
      },
      {
        path:'/attendance/actual',
        component: () => import('../view/attendance/actualnumber.vue')
      },
      {
        path:'/attendance/leave',
        component: () => import('../view/attendance/leavenumber.vue')
      },
      {
        path:'/summary/day',
        component: () => import('../view/summary/daysummary.vue')
      },
      {
        path:'/summary/month',
        component: () => import('../view/summary/monthsummary.vue')
      },
      {
        path:'/summary/week',
        component: () => import('../view/summary/weeksummary.vue')
      },
      {
        path: '*', component: () => import('../view/notfound.vue')
      }
    ]
  });
}
