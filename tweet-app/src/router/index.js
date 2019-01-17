import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignUpForm from '@/components/Auth/SignUpForm'
import LoginForm from '@/components/Auth/LoginForm'
import UserProfileSettings from '@/components/User/Settings/UserProfileSettings'
import UserPasswordSettings from '@/components/User/Settings/UserPasswordSettings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/signup',
      name: 'SignUpForm',
      component: SignUpForm
    },
    {
      path: '/login',
      name: 'LoginForm',
      component: LoginForm
    },
    {
      path: '/settings/profile',
      name: 'UserProfileSettings',
      component: UserProfileSettings
    },
    {
      path: '/settings/password',
      name: 'UserPasswordSetting',
      component: UserPasswordSettings
    }
  ]
})
