<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="requestPermission">Notification.requestPermission</button>
    <button @click="getToken">getToken</button>
  </div>
</template>

<script>
import { initializeApp } from 'firebase/app'
import { getMessaging, getToken } from 'firebase/messaging'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      currentToken: null,
      messaging: null,
      vapidKey: 'BP_DRDTV_FWfvTdXKi_kye8QVWtv3foAflC_iwA4UMtYxNU55J1ltX_8oAdpypjD-dwhsiZGJM8QV1jtPEaFP40',
      firebase: null,
      firebaseConfig: {
        apiKey: 'AIzaSyB2pQKfRZ-yJwWxfjS4oKs87PCwjs5kTUs',
        authDomain: 'machi-cat-web-push.firebaseapp.com',
        projectId: 'machi-cat-web-push',
        storageBucket: 'machi-cat-web-push.appspot.com',
        messagingSenderId: '1019993383949',
        appId: '1:1019993383949:web:fc1fc34e4cae7d9758e144'
      },
    }
  },
  mounted () {
    this.initializeApp()
  },
  methods: {
    initializeApp () {
      this.firebase = initializeApp(this.firebaseConfig)
    },
    getToken () {
      this.messaging = getMessaging()
      getToken(this.messaging, {
        vapidKey: this.vapidKey
      }).then((currentToken) => {
        if (currentToken) {
          // Send the token to your server and update the UI if necessary
          this.currentToken = currentToken
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.')
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token.', err)
      })
    },
    requestPermission() {
      console.log('Requesting permission...')
      Notification.requestPermission().then((permission) => {
        console.log('permission', permission)
        if (permission === 'granted') {
          console.log('Notification permission granted.')
        }
      })
    },
  },
}
</script>
