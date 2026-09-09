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
    const notificationTitle = payload.notification?.title || payload.data?.title || 'Live Queue Update';
    const notificationOptions = {
        body: payload.notification?.body || payload.data?.body || '',
        tag: 'crusher-queue-notification' // Professional grouping tag to prevent stacking clutter
        // Icon property intentionally omitted for a clean, professional icon-free look
    };

    if (!payload.notification) {
        self.registration.showNotification(notificationTitle, notificationOptions);
    }
});
