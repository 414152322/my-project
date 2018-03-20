import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/pages/layout'
import into from '@/pages/into'
import about from '@/pages/about'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: layout
    },{
      path: '/into',
      component: into
    },{
      path: '/about',
      component: about
    }
  ]
})
