import Vue from 'vue'
import Vuerouter from 'vue-router'

import store from './store'

import WelcomePage from './components/welcome/welcome'
import LoginPage from './components/auth/signin'
import RegisterPage from './components/auth/signup'
import DashboardDosen from './components/dashboard/dashboard'
import DashboardAdmin from './components/admin/dashboard'
import MahasiswaAdmin from './components/admin/mahasiswa'

Vue.use(Vuerouter)

const routes = [
 {
  path : '/',
  name : '/',
  component: WelcomePage
  },
 {
  path : '/auth/signin',
  name : 'auth/signin',
  component: LoginPage,
 },
 {
  path : '/auth/signup',
  name : 'auth/signup',
  component: RegisterPage
 },
 {
  path : '/dosen',
  name : 'dosen',
  component: DashboardDosen,
  beforeEnter(to,from,next) {
   if (localStorage.getItem('userId') == 2) 
    next()
    else next({name: '/'})    
  }
 },
 {
  path : '/admin',
  name : 'admin',
  component: DashboardAdmin,
  children :  
  [{
   path : '/mahasiswa',
   name : 'mahasiswa',
   component : MahasiswaAdmin
  }],
  beforeEnter(to,from,next) {
   if (localStorage.getItem('userId') == 3) 
    next()
    else next({name: '/'})
  }
 },
]

export default new Vuerouter({mode: 'history', routes})