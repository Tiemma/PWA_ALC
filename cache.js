function initCache(){
    caches.open('static-v1').then(cache => cache.add('/index.html'))
    caches.open('static-v1').then(cache => cache.add('/countries.json'))
    caches.open('static-v1').then(cache => cache.add('/index.js'))
    caches.open('static-v1').then(cache => cache.add('/cache.js'))
    caches.open('static-v1').then(cache => cache.add('/main.js'))
    caches.open('static-v1').then(cache => cache.add('/materialise-init.js'))
    caches.open('static-v1').then(cache => cache.add('/service-worker.js'))
    caches.open('static-v1').then(cache => cache.add('/style.css'))
}