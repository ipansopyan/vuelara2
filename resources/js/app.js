import Vue from 'vue'
import App from './components/App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

new Vue({
    el: '#app',
    router,
    store,
    axios,
    render: h => h(App)
});
