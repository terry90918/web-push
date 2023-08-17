<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="requestPermission">Notification.requestPermission</button>
    <button @click="getMessaging">getMessaging</button>
    <button @click="getToken">getToken</button>
  </div>
</template>

<script>
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
    }
  },
  methods: {
    getMessaging () {
      this.messaging = getMessaging()
    },
    getToken () {
      getToken(this.messaging, {
        vapidKey: this.vapidKey
      }).then((currentToken) => {
        if (currentToken) {
          // Send the token to your server and update the UI if necessary
          // ...
          this.currentToken = currentToken
        } else {
          // Show permission request UI
          console.log('No registration token available. Request permission to generate one.')
          // ...
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err)
        // ...
      })
    },
    requestPermission() {
      console.log('Requesting permission...')
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log('Notification permission granted.')
        }
      })
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
