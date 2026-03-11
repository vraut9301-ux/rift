/* RIFT Service Worker — PWA + Offline Cache */
const CACHE_NAME = 'rift-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/characters.html',
    '/recap.html',
    '/lore.html',
    '/inventory.html',
    '/map.html',
    '/community.html',
    '/portraits.html',
    '/style.css',
    '/inner.css',
    '/app.js',
    '/data.js',
    '/characters.js',
    '/recap.js',
    '/lore.js',
    '/inventory.js',
    '/community.js',
    '/map.js'
];

// Install — cache core assets
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
            );
        })
    );
    self.clients.claim();
});

// Fetch — network first, fallback to cache
self.addEventListener('fetch', (e) => {
    e.respondWith(
        fetch(e.request)
            .then((res) => {
                const clone = res.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
                return res;
            })
            .catch(() => caches.match(e.request))
    );
});

// Push notification handler
self.addEventListener('push', (e) => {
    const data = e.data ? e.data.json() : {};
    const title = data.title || 'RIFT — Shadow Slave';
    const options = {
        body: data.body || 'New content available!',
        icon: '/assets/icon-192.png',
        badge: '/assets/icon-192.png',
        vibrate: [100, 50, 100],
        data: { url: data.url || '/index.html' }
    };
    e.waitUntil(self.registration.showNotification(title, options));
});

// Notification click — open the app
self.addEventListener('notificationclick', (e) => {
    e.notification.close();
    e.waitUntil(
        clients.openWindow(e.notification.data.url || '/index.html')
    );
});
