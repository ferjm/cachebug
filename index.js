if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js', {
    scope: './'
  }).then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ',    registration.scope);
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}

window.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('delete');
  button.addEventListener('click', function() {
    navigator.serviceWorker.ready.then(function(registration) {
      var worker = registration.installing ||
                   registration.active ||
                   registration.waiting;
      debug('Worker ' + worker);
      worker.postMessage('deletethemall');
    });
  });
});
