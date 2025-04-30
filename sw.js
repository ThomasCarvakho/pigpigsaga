self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('pigpig-cache').then(function(cache) {
      return cache.addAll([
        'index.html',
        'manifest.json',
        'pigpig_clean_hd.png',
        'evilsoap.png',
        'bathroom_fullscreen.png',
        'icon.png'
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