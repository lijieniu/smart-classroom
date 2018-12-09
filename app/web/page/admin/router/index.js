import Vue from 'vue';

import VueRouter from 'vue-router';
import Dashboard from '../view/dashboard/index.vue';
import ArticleList from '../view/article/list.vue';
import AbsenseNumber from '../attendance/absencenumber.vue';
import ActualNumber from '../attendance/actualnumber.vue';
import LeaveNumber from '../attendance/leavenumber.vue';
import DaySummary from '../summary/daysummary.vue';
import MonthSummary from '../summary/monthsummary.vue';
import WeekSummary from '../summary/weeksummary.vue';

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
            component:AbsenseNumber
        },
        {
          path:'/attendance/actual',
            component:ActualNumber
        },
        {
          path:'/attendance/leave',
            component:LeaveNumber
        },
        {
          path:'/summary/day',
            component:DaySummary
        },
        {
          path:'/summary/month',
            component:MonthSummary
        },
        {
          path:'/summary/week',
            component:WeekSummary
        },
      {
        path: '*', component: () => import('../view/notfound.vue')
      }
    ]
  });
}
