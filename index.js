var worker;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js', {
    scope: './'
  }).then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
    worker = registration.installing ||
             registration.active ||
             registration.waiting;

  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}

window.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('delete');
  button.addEventListener('click', function() {
    console.log('Worker ' + worker);
    worker.postMessage('deletethemall');
  });
});
