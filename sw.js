/**
 * English Visual Vocabulary - Service Worker
 * Cache-first strategy for static assets, network-first for data
 */

const CACHE_NAME = 'evocab-v1';
const STATIC_ASSETS = [
  '.',
  'index.html',
  'css/style.css',
  'js/app.js',
  'js/data.js',
  'manifest.json',
  'icons/icon.svg',
  'icons/icon-192.svg'
];

// On install: cache all static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('SW: cache.addAll failed for some assets, installing anyway:', err);
      });
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// On activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// On fetch: cache-first for static, network-first for data
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Only handle same-origin requests
  if (url.origin !== self.location.origin) return;

  const path = url.pathname;

  // For the main HTML and static assets: cache first
  if (
    path === '/' ||
    path.endsWith('.html') ||
    path.endsWith('.css') ||
    path.endsWith('.js') ||
    path.endsWith('.json') ||
    path.startsWith('/icons/')
  ) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        // Return cached version immediately, then update cache
        const fetchPromise = fetch(event.request).then((response) => {
          // Only cache valid responses
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clone);
            });
          }
          return response;
        }).catch(() => cached);
        return cached || fetchPromise;
      })
    );
    return;
  }

  // For everything else: network only (no special handling needed)
});
