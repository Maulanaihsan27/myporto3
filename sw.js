// Menambahkan event listener untuk event 'install' pada service worker
self.addEventListener("install", event => {
   // Menunda penyelesaian proses instalasi sampai cache selesai disimpan
  event.waitUntil((async () => {
    // Membuka cache dengan nama 'pwa-assets'
    const cache = await caches.open("pwa-assets");
    try {
      // Menambahkan daftar file ke dalam cache
      await cache.addAll([
        "./", // Halaman root
        "./app.js", // File JavaScript utama
        "./A.jpg",  // Gambar yang digunakan di aplikasi
        "./detail.html", // Halaman detail
        "./index.html", // Halaman utama
        "./Project One.png" // Gambar lain yang diperlukan
      ]);
    } catch (err) {
      // Menangani error jika gagal menyimpan cache
      console.error("Gagal menyimpan cache:", err);
    }
  })());
});
// Menambahkan event listener untuk event 'fetch' (permintaan HTTP)
self.addEventListener("fetch", event => {
   // Menanggapi permintaan dengan data dari cache terlebih dahulu jika tersedia
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
        // Jika ada di cache, gunakan itu. Jika tidak, lakukan fetch ke jaringan.
      return cachedResponse || fetch(event.request);
    })
  );
});
