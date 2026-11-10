// Isi bagian di bawah dengan konfigurasi Firebase kamu (lihat PANDUAN-FIREBASE.txt).
// Kalau dibiarkan kosong, web tetap jalan seperti biasa dengan akun lokal (data hanya di browser).
window.KM_FIREBASE = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Akun admin: username yang boleh membuka Panel Admin. Daftar akun dengan username ini
// (mis. "admin") SEGERA setelah web online, supaya tidak dipakai orang lain.
// Kalau kamu mengganti nama ini, ganti juga di aturan Firestore (lihat PANDUAN-FIREBASE.txt).
window.KM_ADMINS = ["admin"];
