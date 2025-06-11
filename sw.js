self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open("pwa-assets");
    try {
      await cache.addAll([
    "/",
    "app.js",
    "A.jpg",
    "detail.html",
    "index.html",
    "Project One.png"]); 
} catch (err) {
      console.error("Gagal menyimpan cache:", err);
    }
  })());
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
