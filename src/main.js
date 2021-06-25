import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import firebase from 'firebase'

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: 'AIzaSyAVzaxUHf2AOH7fTjRnvHjN3ORm5rlnV54',
  authDomain: 'apartments-e6b04.firebaseapp.com',
  databaseURL: 'https://apartments-e6b04-default-rtdb.firebaseio.com',
  projectId: 'apartments-e6b04',
  storageBucket: 'apartments-e6b04.appspot.com',
  messagingSenderId: '913570536754',
  appId: '1:913570536754:web:a2ec60e9e148c5beee0b2b'
})

axios.defaults.baseURL = 'https://apartments-e6b04-default-rtdb.firebaseio.com'

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
