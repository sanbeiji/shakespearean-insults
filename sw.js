const CACHE_NAME = 'bard-insults-v2';
const ASSETS = [
  './',
  './index.html',
  './styles/yeolde.css',
  './scripts/slur_engine.js',
  './images/favicon.png',
  'https://fonts.googleapis.com/css2?family=IM+Fell+DW+Pica+SC&family=Montserrat:wght@300;400;500;600&display=swap'
];

// Install service worker & cache static assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate service worker & clear old caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

// Fetch cached assets or fetch from network
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
