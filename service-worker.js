self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('hajj-cache').then(function(cache) {
      return cache.addAll([
        './hajj-web-app.html',
        './images/pillars_of_islam.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
