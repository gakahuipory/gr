// Firebase 配置（新專案）
const firebaseConfig = {
  apiKey: "AIzaSyALZIhznJdUQl6i2OkxdxvwCDAg0gX-I20",
  authDomain: "atarasii-1abfc.firebaseapp.com",
  databaseURL: "https://atarasii-1abfc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "atarasii-1abfc",
  storageBucket: "atarasii-1abfc.firebasestorage.app",
  messagingSenderId: "129885727233",
  appId: "1:129885727233:web:b576cb8adaef6c4f8cae00",
  measurementId: "G-8T96KREBG9"
};

// 初始化 Firebase (v8 命名空間)
firebase.initializeApp(firebaseConfig);

// 取得 Realtime Database 實例
const database = firebase.database();
