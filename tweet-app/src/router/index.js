import Vue from 'vue'
import Router from 'vue-router'
import SignUpForm from '@/components/Auth/SignUpForm'
import LoginForm from '@/components/Auth/LoginForm'
import UserProfileSettings from '@/components/User/Settings/UserProfileSettings'
import UserPasswordSettings from '@/components/User/Settings/UserPasswordSettings'
import Home from '@/components/Home'
import SingleTweet from '@/components/Tweet/SingleTweet'
import UserProfile from '@/components/User/Profile/UserProfile'
import UsersFollowing from '@/components/User/Profile/UsersFollowing'
import UserFollowers from '@/components/User/Profile/UserFollowers'
import FavoriteTweets from '@/components/User/Profile/FavoriteTweets'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
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
    },
    {
      path: '/:username/status/:id',
      component: SingleTweet,
      props: true
    },
    {
      path: '/:username',
      component: UserProfile,
      props: true
    },
    {
      path: '/following',
      component: UsersFollowing
    },
    {
      path: '/:username/following',
      component: UsersFollowing,
      props: true
    },
    {
      path: '/followers',
      component: UserFollowers
    },
    {
      path: '/:username/followers',
      component: UserFollowers,
      props: true
    },
    {
      path: '/favorites',
      component: FavoriteTweets
    },
    {
      path: '/:username/favorites',
      component: FavoriteTweets,
      props: true
    }
  ]
})
