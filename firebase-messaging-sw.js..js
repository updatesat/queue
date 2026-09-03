importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyDOCw1bFl4DQNd4BimbHAiyRNUl8bf_i_U",
    authDomain: "queue-6a3cf.firebaseapp.com",
    projectId: "queue-6a3cf",
    storageBucket: "queue-6a3cf.firebasestorage.app",
    messagingSenderId: "982753224888",
    appId: "1:982753224888:web:e1e9a7e008235f248fac4d"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828859.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});