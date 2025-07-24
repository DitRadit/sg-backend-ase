# Backend RPL ASE

## Apa itu Backend?

Backend adalah bagian dari aplikasi yang berjalan di sisi **server**, bertanggung jawab atas:

- Logika bisnis atau logika aplikasi
- Pengolahan data
- Komunikasi dengan database (DB)
- Komunikasi dengan frontend (FE)

Backend menangani permintaan (request) dari **client**, memprosesnya, dan memberikan **respon** (response) kembali.

---

## Konsep Dasar

- **FE (Frontend)** = Client Side  
- **BE (Backend)** = Server Side  

### Arsitektur Client-Server

- **Client**: Aplikasi yang digunakan oleh user (browser, mobile app)
- **Server**: Menyediakan data dan layanan untuk permintaan client

Proses:
1. Client mengirim request ke server
2. Server memproses dan mengirim response ke client

---

## HTTP dan HTTPS

- **HTTP**: Protokol komunikasi antara client dan server.
- **HTTPS**: Versi aman dari HTTP, menggunakan enkripsi SSL/TLS.

### Contoh:
- **HTTP**:  
  `http://example.com/api/users`  
  (Tidak aman, data bisa disadap)

- **HTTPS**:  
  `https://example.com/api/users`  
  (Aman, data dienkripsi saat dikirim)

> HTTPS **disarankan** untuk semua komunikasi API karena melindungi data sensitif seperti password, token, dan informasi pengguna.

---

## HTTP Methods

| Method  | Fungsi                        | Contoh URL                           |
|---------|-------------------------------|--------------------------------------|
| GET     | Mengambil data                | `GET https://example.com/api/posts` |
| POST    | Mengirim data (form/JSON)     | `POST https://example.com/api/posts` |
| PUT     | Memperbarui data              | `PUT https://example.com/api/posts/1` |
| DELETE  | Menghapus data                | `DELETE https://example.com/api/posts/1` |

---

## Bahasa Pemrograman Backend

- JavaScript
- PHP
- Python
- Java
- Go

---

## Framework Backend

- **Express.js** (JavaScript)
- **Laravel** (PHP)
- **Django** (Python)
- **Spring Boot** (Java)
- **Gin** (Go)

---

## Tools yang Digunakan

- **Git / GitHub** – Version control
- **Postman** – Testing API
- **IDE** – Code editor (VS Code, IntelliJ, dll.)
- **DBMS** – Sistem manajemen database (MySQL, PostgreSQL, MongoDB)

---

> Dokumen ini ditujukan untuk memberikan pemahaman dasar mengenai backend dalam pengembangan aplikasi, khususnya untuk keperluan pembelajaran di RPL ASE.
