
let files = [
    '/style.css',
    "/js/materialise-init.js",
    "/js/main.js",
    '/index.html',
    '/',
    '/js/cache.js',
    '/js/index.js',
    '/service-worker.js',
    'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js',
    "/countries.json",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css'
]
let cacheName = 'static-v1'


// Listen for install event, set callback
self.addEventListener('install', function (event) {
    console.log("Saving all files in browser cache storage")
    event.waitUntil(
        caches.open(cacheName)
            .then(function (cache) {
                return cache.addAll(files);
            })
    );
});

self.addEventListener('activate', function (event) {
    console.log('Service worker activating...!')
    let cacheWhitelist = ['static-v1']
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    )
});


self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.open(cacheName).then(function (cache) {
            return fetch(event.request).then(function (response) {
                cache.put(event.request, response.clone());
                return response;
            });
        })
    );
});


