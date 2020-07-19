import Vue from 'vue'
import Vuerouter from 'vue-router'

import store from './store'

import WelcomePage from './components/welcome/welcome'
import LoginPage from './components/auth/signin'
import RegisterPage from './components/auth/signup'
import DashboardDosen from './components/dashboard/dashboard'
import Admin from './components/admin/admin'
import Dashboard from './components/admin/dashboard'
import AdminMahasiswa from './components/admin/mahasiswa'
import AdminDosen from './components/admin/dosen'
import AdminMatkul from './components/admin/matkul'

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
  component: Admin,
  children :  
  [{
   path : '',
   name : 'dashboard',
   component : Dashboard
  },
  {
    path : '/admin/mahasiwa',
    name : 'admin/mahasiswa',
    component : AdminMahasiswa
   },
   {
    path : '/admin/dosen',
    name : 'admin/dosen',
    component : AdminDosen
   },
   {
    path : '/admin/matkul',
    name : 'admin/matkul',
    component : AdminMatkul
   }],
  beforeEnter(to,from,next) {
   if (localStorage.getItem('userId') == 3) 
    next()
    else next({name: '/'})
  }
 },
]

export default new Vuerouter({mode: 'history', routes})