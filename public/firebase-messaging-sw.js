import { initializeApp } from "firebase/app";
import { getMessaging, onMessage, onBackgroundMessage } from "firebase/messaging/sw";

const firebaseConfig = {
  apiKey: 'AIzaSyB2pQKfRZ-yJwWxfjS4oKs87PCwjs5kTUs',
  authDomain: 'machi-cat-web-push.firebaseapp.com',
  projectId: 'machi-cat-web-push',
  storageBucket: 'machi-cat-web-push.appspot.com',
  messagingSenderId: '1019993383949',
  appId: '1:1019993383949:web:fc1fc34e4cae7d9758e144'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app)

onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});

onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/img/icons/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});