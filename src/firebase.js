import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "YourAPIKey",
  authDomain: "YourAuthDomain",
  databaseURL: "YourDatabaseUrl",
  projectId: "YourProjectID",
  storageBucket: "YourStorageBucket",
  messagingSenderId: "YourMessagingSenderID",
  appId: "YourAPPID",
  measurementId: "YourMeasurementID"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app); // Tambahkan ini untuk Realtime Database

export { database }; // Ekspor database agar bisa digunakan di file lain
