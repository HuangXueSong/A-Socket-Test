import Vue from 'vue'
import Router from 'vue-router'
import chart from '@/components/chart'
import register from '@/components/register'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/chart',
      name:'chart',
      component:chart
    },
    {
      path:'/',
      name:'login',
      component:login
    },
    {
      path:'/register',
      name:'register',
      component:register
    },
  ]
})
