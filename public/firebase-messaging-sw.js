importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging-compat.js')

const firebaseConfig = {
  apiKey: 'AIzaSyB2pQKfRZ-yJwWxfjS4oKs87PCwjs5kTUs',
  authDomain: 'machi-cat-web-push.firebaseapp.com',
  projectId: 'machi-cat-web-push',
  storageBucket: 'machi-cat-web-push.appspot.com',
  messagingSenderId: '1019993383949',
  appId: '1:1019993383949:web:fc1fc34e4cae7d9758e144'
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = firebase.messaging()

messaging.onMessage(messaging, (payload) => {
  console.log('Message received. ', payload)
});

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload)
  const notificationTitle = 'Background Message Title'
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/img/icons/firebase-logo.png'
  }
  self.registration.showNotification(notificationTitle, notificationOptions);
})