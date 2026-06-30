const CACHE_NAME = "chainlens-v5";
const SHELL = [
  "./",
  "index.html",
  "css/core.css",
  "js/chains.js",
  "js/api.js",
  "js/analysis.js",
  "js/feed.js",
  "js/render.js",
  "js/storage.js",
  "js/app.js"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  if (u.hostname !== location.hostname) return;        // only same-origin shell assets
  if (e.request.method !== "GET") return;
  if (u.pathname.endsWith("/sw.js")) return;            // never serve the SW from cache
  e.respondWith(
    caches.match(e.request).then(cached =>
      cached || fetch(e.request).then(res => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, copy));
        }
        return res;
      }).catch(() => (e.request.destination === "document" ? caches.match("index.html") : undefined))
    )
  );
});
