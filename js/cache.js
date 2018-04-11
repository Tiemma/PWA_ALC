
 [
  '/style.css',
  "/js/materialise-init.js",
  "/js/main.js",
  "/service-worker.js",
  '/index.html',
  '/',
  'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js',
  "/countries.json",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css'
].forEach(function (url, key) {
  addToCache(url)
})

function addToCache(req_url, config=null) {
  caches.open('static-v1').then(function (cache) {
    if (config) {
      let myRequest = genRequest(req_url)
      fetch(myRequest, config)
        .then(response => {
          cache.put(myRequest, response);
        });
    } else {
      cache.add(req_url);
    }
    console.log(`Cached: ${req_url}`)
  });
}