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

// Initialize Firebase inside the service worker[cite: 3]
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Handle incoming background messages for data-only payloads
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.data?.title || 'Live Queue Update';
    const notificationOptions = {
        body: payload.data?.body || '',
        icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828859.png'
    };

    // Force display the notification since the payload is data-only[cite: 1, 3]
    self.registration.showNotification(notificationTitle, notificationOptions);
});
