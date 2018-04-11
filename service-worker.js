() => {
    // Listen for install event, set callback
    self.addEventListener('install', function (event) {
        // cache a cat SVG
        if ('caches' in window) {
            event.waitUntil(
                //initCache('static-v1')
            );
        } else {
            alert("Cache support is not supported, defaulting to indexedDB");
        }
    });

    self.addEventListener('activate', function (event) {
        event.waitUntil(
            console.log('Activating')
            // caches.keys().then(function (cacheNames) {
            //     return Promise.all(
            //         cacheNames.filter(function (cacheName) {
            //             // Return true if you want to remove this cache,
            //             // but remember that caches are shared across
            //             // the whole origin
            //         }).map(function (cacheName) {
            //             return caches.delete(cacheName);
            //         })
            //     );
            // })
        );
    });


    self.addEventListener('fetch', function(event) {
        console.log(event.request);
        event.respondWith(
          fetch(event.request).catch(function() {
            return caches.match(event.request);
          })
        );
      });
}