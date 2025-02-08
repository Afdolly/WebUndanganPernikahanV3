import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyASyAzk1UP-TPGQvClQdBVtQWAAoU0XbY8",
  authDomain: "webundanganpernikahanv3.firebaseapp.com",
  databaseURL: "https://webundanganpernikahanv3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "webundanganpernikahanv3",
  storageBucket: "webundanganpernikahanv3.firebasestorage.app",
  messagingSenderId: "647001803125",
  appId: "1:647001803125:web:5d54cf5f6a9b08284bab3c",
  measurementId: "G-ZQM4M6R84J"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app); // Tambahkan ini untuk Realtime Database

export { database }; // Ekspor database agar bisa digunakan di file lain
