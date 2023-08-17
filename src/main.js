import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyB2pQKfRZ-yJwWxfjS4oKs87PCwjs5kTUs',
  authDomain: 'machi-cat-web-push.firebaseapp.com',
  projectId: 'machi-cat-web-push',
  storageBucket: 'machi-cat-web-push.appspot.com',
  messagingSenderId: '1019993383949',
  appId: '1:1019993383949:web:fc1fc34e4cae7d9758e144'
}
const app = initializeApp(firebaseConfig)
window.firebase = app

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
