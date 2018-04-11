// Listen for install event, set callback
self.addEventListener('install', function(event) {
      // cache a cat SVG
  event.waitUntil(
      initCache()
  );

});

self.addEventListener('activate', function(event) {
    console.log('Service worker is now fully active');
});

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    
    
    if (url.origin == location.origin && url.pathname == 'top-headlines') {
      event.respondWith(caches.match('/countries.json'));
    }
  });