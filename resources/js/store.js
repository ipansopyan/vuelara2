import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import globalAxios from 'axios'
import router from './router'

import dosen from './store/modules/dosen'
import auth from './store/modules/auth'


Vue.use(Vuex)

export default new Vuex.Store({
 modules : {
  dosen,
  auth
 }
})