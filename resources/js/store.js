import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import globalAxios from 'axios'
import router from './router'

import home from './store/modules/home'
import auth from './store/modules/auth'
import mahasiswa from './store/modules/mahasiswa'
import dosen from './store/modules/dosen'
import matkul from './store/modules/matkul'


Vue.use(Vuex)

export default new Vuex.Store({
 modules : {
  home,
  mahasiswa,
  auth,
  dosen,
  matkul,
 }
})