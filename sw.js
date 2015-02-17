function debug(msg) {
  if ('dump' in self) {
    dump('Service Worker - ' + msg + '\n');
  }
  console.log('Service Worker - ', msg);
}

addEventListener('install', function() {
  debug('install');
});
