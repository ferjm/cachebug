function debug(msg) {
  if (window.dump) {
    window.dump('Service Worker - ' + msg + '\n');
  }
  console.log('Service Worker - ', msg);
}

addEventListener('install', function() {
  debug('install');
});
