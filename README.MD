# User API with Express.js (MVC Architecture)

## 📌 Deskripsi
Proyek ini adalah contoh sederhana API User menggunakan **Express.js** dengan penerapan arsitektur **MVC (Model-View-Controller)**.  
Tujuan dari proyek ini adalah memberikan gambaran bagaimana memisahkan kode menjadi lapisan-lapisan yang lebih terstruktur agar mudah dikelola dan dikembangkan.

---

## ⚙️ Struktur Folder
```
.
├── controllers/
│   └── userController.js
├── models/
│   └── userModel.js
├── routes/
│   └── userRoutes.js
├── views/
│   └── index.ejs
├── index.js
└── README.md
```

- **models/** → menyimpan data dan logika pengelolaan data (misal `userModel.js`).  
- **controllers/** → menerima request dari route, memanggil model, lalu mengirim response (misal `userController.js`).  
- **routes/** → menentukan endpoint API dan menghubungkan ke controller (misal `userRoutes.js`).  
- **views/** → berisi tampilan EJS untuk menampilkan data ke user (misal `index.ejs`).  

---

## 🚀 Cara Menjalankan
1. Clone repository ini  
   ```bash
   git clone <url-repo>
   cd <nama-folder>
   ```
2. Install dependency  
   ```bash
   npm install express ejs nodemon
   ```
3. Jalankan server  
   ```bash
   npm run dev
   ```
4. Buka di browser:  
   - `http://localhost:3000/` → halaman index EJS  
   - `http://localhost:3000/users` → API user (JSON)

---

## 📖 Penjelasan MVC

### Fungsi MVC
- **Model** → merepresentasikan data dan logika bisnis (misalnya daftar user).  
- **View** → menampilkan data ke user (HTML/EJS/JSON).  
- **Controller** → penghubung antara `View` dan `Model`, menerima input user lalu memanggil model dan mengirim hasil ke view.  

👉 Dengan MVC, kode jadi **terpisah jelas** antara data, logika, dan tampilan.

### Alur MVC
1. User melakukan aksi di **View** (misalnya klik tombol atau request).  
2. **Controller** menerima aksi tersebut lalu memprosesnya.  
3. **Controller** meminta data ke **Model**.  
4. **Model** mengembalikan data ke **Controller**.  
5. **Controller** mengirim data ke **View**.  
6. **View** menampilkan hasil terbaru ke user.  

---

## ❌ Jika Tidak Menggunakan MVC
Tanpa MVC, kode aplikasi cenderung:
- Bercampur antara **logika bisnis, data, dan tampilan**.  
- Sulit dipelihara karena semua kode ada di satu tempat (spaghetti code).  
- Menyulitkan pengembangan tim karena tidak ada pemisahan tanggung jawab.  

Contoh: Query database, perhitungan, dan HTML response ditulis dalam satu file besar.

---

## 🏛️ Apa itu Arsitektur Perangkat Lunak?
**Arsitektur** adalah disiplin ilmu yang menciptakan struktur dan sistem perangkat lunak.  
Tujuannya memastikan aplikasi **teratur, terukur, dan tidak berantakan**.  

Setiap arsitektur terdiri dari:
- **Elemen perangkat lunak** (misalnya modul, service).  
- **Hubungan antar elemen** (misalnya komunikasi API).  
- **Properti elemen & hubungannya** (misalnya keamanan, performa).  

---

## 🧩 Jenis Arsitektur

### Software Architecture Style
- **Microkernel**  
- **Service-Oriented Architecture (SOA)**  
- **Monolithic**  
- **Microservices**  
- **Layered (n-tier)**  
- **Event-Driven**  

### Software Architecture Pattern
Digunakan untuk memecahkan masalah yang sering muncul:
- Publish-Subscribe  
- Client-Server Model  
- Inbox-Outbox  
- Storage First  
- Claim Check  
- Model-View-Controller (MVC)  

---

## 📊 Kesimpulan
- **MVC** membantu memisahkan **Model, View, Controller** sehingga aplikasi lebih terstruktur.  
- **Tanpa MVC**, kode rawan berantakan dan sulit di-maintain.  
- **Arsitektur** penting untuk memastikan aplikasi bisa berkembang dengan baik, mudah dipahami, dan lebih scalable.
