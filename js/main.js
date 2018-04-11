 window.onload = () => {
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
    .then(function(registration) {
      console.log('Registration successful, scope is:', registration.scope);

      checkCacheSupport();
    
    })
    .catch(function(error) {
      console.log('Service worker registration failed, error:', error);
    });
  }

function checkCacheSupport(){
  if ('caches' in window) {
    console.log("Cache support exists")
  } else {
      alert("Cache support is false");
  }
}

//Show default news list to user before selecting country
getNewsByCountry('us');
}