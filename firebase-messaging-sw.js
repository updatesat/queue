importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

// Initialize Firebase inside the Service Worker
firebase.initializeApp({
  apiKey: "AIzaSyDOCw1bFl4DQNd4BimbHAiyRNUl8bf_i_U",
  authDomain: "queue-6a3cf.firebaseapp.com",
  projectId: "queue-6a3cf",
  storageBucket: "queue-6a3cf.firebasestorage.app",
  messagingSenderId: "982753224888",
  appId: "1:982753224888:web:e1e9a7e008235f248fac4d"
});

const messaging = firebase.messaging();

// Handle background notification reception
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message: ', payload);

  const notificationTitle = payload.notification.title || "Status Update";
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828859.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/1828/1828859.png',
    data: payload.data || {}
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification click event
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetUrl = event.notification.data.url || 'https://updatesat.github.io/queue/';
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      for (let client of windowClients) {
        if (client.url === targetUrl && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});
```[cite: 1, 2]

---

### 2. `index.html` (Frontend Dashboard)
Save this file as **`index.html`** in your root directory[cite: 3].
