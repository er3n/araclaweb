import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/containers/HomePage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
