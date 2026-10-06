// AY Player service worker — release 202610.63.0 (public end-user build, single-file page).
// Precaches the single-file index.html + the manifest (the icons are embedded in the
// manifest as data: URIs, the whole player is inlined in index.html), then serves
// cache-first with a network fallback; old caches are deleted on activate. The cache
// NAME carries the version: bump it on every release. Classic script, no ES modules.
//
// YM Music emulation (c) 2016 Megachur — see the notice in index.html.

var CACHE = 'ay-player-202610.63.0';
var ASSETS = [
  './',
  './index.html',
  './ay_player_manifest.json'
];

self.addEventListener('install', function(e) {
  e.waitUntil(caches.open(CACHE).then(function(c) {
    return c.addAll(ASSETS);
  }).then(function() {
    return self.skipWaiting();
  }));
});

self.addEventListener('activate', function(e) {
  e.waitUntil(caches.keys().then(function(keys) {
    return Promise.all(keys.filter(function(k) {
      return k !== CACHE && k.indexOf('ay-player-') === 0;
    }).map(function(k) {
      return caches.delete(k);
    }));
  }).then(function() {
    return self.clients.claim();
  }));
});

self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') { return; }
  e.respondWith(caches.match(e.request).then(function(cached) {
    if (cached) { return cached; }
    return fetch(e.request).then(function(resp) {
      var url = new URL(e.request.url);
      if (resp.ok && url.origin === self.location.origin && ASSETS.indexOf('./' + url.pathname.split('/').pop()) >= 0) {
        var copy = resp.clone();
        caches.open(CACHE).then(function(c) { c.put(e.request, copy); });
      }
      return resp;
    }).catch(function() {
      return caches.match('./index.html');
    });
  }));
});
