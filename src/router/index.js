import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/containers/HomePage'
import SelectCarPage from '@/containers/SelectCarPage'
import SuccessPage from '@/containers/SuccessPage'
import RegisterPage from '@/containers/RegisterPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/arac-sec',
      name: 'SelectCar',
      component: SelectCarPage
    },
    {
      path: '/rezervasyon-ozeti',
      name: 'SuccessPage',
      component: SuccessPage
    },
    {
      path: '/kaydol',
      name: 'RegisterPage',
      component: RegisterPage
    }
  ]
})
