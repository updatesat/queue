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
    // Customize notifications safely or handle data-only payloads
    const notificationTitle = payload.notification?.title || payload.data?.title || 'New Message';
    const notificationOptions = {
        body: payload.notification?.body || payload.data?.body || '',
        icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828859.png'
    };

    // Only manually trigger if FCM hasn't automatically handled a notification payload
    if (!payload.notification) {
        self.registration.showNotification(notificationTitle, notificationOptions);
    }
});
