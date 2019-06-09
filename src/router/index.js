import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Contact from '@/components/Contact'
import Work from '@/components/Work'
import Play from '@/components/Play'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Work',
      Name: 'Work',
      component: Work
    },
    {
      path: '/Play',
      Name: 'Play',
      component: Play
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
