function debug(msg) {
  if ('dump' in self) {
    dump('Service Worker - ' + msg + '\n');
  }
  console.log('Service Worker - ', msg);
}

self.addEventListener('install', function(event) {
  debug('install');
  event.waitUntil(
    caches.open('cache-v0').then(function(cache) {
      debug('Cache opened');
      cache.put('aKey', new Response('whatever'));
      return cache.addAll(['index.html', 'index.js']).then(function() {
        debug('Resources cached');
      }, function(e) {
        debug('Could not cache resources ' + e);
      });
    })
  );
});

self.addEventListener('activate', function() {
  debug('activate');
});

self.addEventListener('fetch', function(event) {
  debug('fetch ' + event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        debug(event.request.url + ' in cache');
      } else {
        debug(event.request.url + ' NOT in cache');
      }
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('message', function() {
  debug('message');
  caches.open('cache-v0').then(function(cache) {
    cache.delete('aKey').then(function(deleted) {
      debug('aKey deleted? ' + deleted);
    });
  });
});
