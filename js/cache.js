//Add requested routes to cache
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