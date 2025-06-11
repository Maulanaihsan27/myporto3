// Memanggil fungsi registerSW untuk memulai proses pendaftaran service worker
registerSW();
// Fungsi async untuk mendaftarkan service worker
async function registerSW() {
// Mengecek apakah browser mendukung API service worker
  if ('serviceWorker' in navigator) {
    try {
      // Mendaftarkan service worker dari file "sw.js"
      const registration = await navigator.serviceWorker.register("sw.js");
    } catch (error) {
       // Jika terjadi error saat mendaftarkan, tampilkan pesan error ke elemen <output>
      showResult("Error while registering: " + error.message);
    }
  } else {
     // Jika service worker tidak didukung, tampilkan pesan bahwa API tidak tersedia
    showResult("Service workers API not available");
  }
};
// Fungsi untuk menampilkan hasil ke elemen HTML <output>
function showResult(text) {
   // Mengatur isi HTML dari elemen <output> dengan teks yang diberikan
  document.querySelector("output").innerHTML = text;
}
