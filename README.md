## 📘 Apa Itu API?

**API** (Application Programming Interface) adalah antarmuka yang memungkinkan dua sistem atau aplikasi untuk berkomunikasi satu sama lain. API memungkinkan pertukaran data dan perintah secara terstruktur.

### 🔹 REST API
**REST (Representational State Transfer)** adalah gaya arsitektur yang populer dalam membangun API berbasis HTTP. Beberapa karakteristik REST:
- **Stateless:** Setiap request berdiri sendiri dan tidak bergantung pada request sebelumnya.
- **Resource-Oriented:** Fokus pada sumber daya/data yang dapat diakses melalui URL.

### 🔹 Struktur URL REST API
Contoh struktur:
```
/api/v1/resource
```
- `/api` → prefix
- `v1` → versi API
- `resource` → endpoint atau data yang diakses

---

## 📥 Komponen Request

1. **Method:** Aksi yang dilakukan (GET, POST, PUT, DELETE, PATCH)
2. **URL:** Alamat resource yang ingin diakses (contoh: `/cars`)
3. **Headers:** Metadata tambahan (contoh: Authorization, Content-Type)
4. **Parameter:**
   - Path Parameter (`/cars/:id`) → untuk identifikasi
   - Query Parameter (`/cars?search=honda`) → untuk pencarian/filter
5. **Body:** Data yang dikirim untuk POST/PUT/PATCH (biasanya format JSON)

---

## 📤 Komponen Response

1. **Status Code:** Kode hasil response (200, 404, 500, dll)
2. **Headers:** Metadata response
3. **Body:** Isi dari data yang dikembalikan (biasanya JSON)

### HTTP Status Code Umum
- `1xx` Informational
- `2xx` Success (contoh: 200 OK, 201 Created)
- `3xx` Redirection
- `4xx` Client Error (contoh: 400 Bad Request, 404 Not Found)
- `5xx` Server Error (contoh: 500 Internal Server Error)

---

## 🔁 HTTP Methods

| Method | Fungsi                               |
|--------|--------------------------------------|
| GET    | Mengambil data dari server           |
| POST   | Mengirim data baru ke server         |
| PUT    | Memperbarui seluruh data             |
| PATCH  | Memperbarui sebagian data            |
| DELETE | Menghapus data dari server           |

> `POST` lebih aman dari `GET` karena data tidak terlihat di URL.

---

## 📍 Apa Itu Endpoint?

**Endpoint** adalah URL spesifik untuk mengakses satu resource atau melakukan aksi tertentu dalam API.

Contoh:
- `GET /cars` → Ambil semua data mobil
- `GET /cars/1` → Ambil mobil dengan ID 1
- `POST /cars` → Tambahkan mobil baru

---

## 📁 Penjelasan API Project

### 1. `GET /`
Menampilkan `Hello World`, untuk cek bahwa server berjalan.

### 2. `GET /cars`
Mengambil seluruh daftar mobil. Bisa ditambahkan query parameter `search` untuk mencari berdasarkan `make` atau `model`.

### 3. `GET /cars/:id`
Mengambil mobil berdasarkan ID.

### 4. `POST /cars`
Menambahkan mobil baru. Harus menyertakan `make` dan `model` dalam JSON body.

### 5. `PUT /cars/:id`
Memperbarui data mobil berdasarkan ID. Perlu `make` dan `model`.

### 6. `DELETE /cars/:id`
Menghapus mobil berdasarkan ID.

---

## 📌 Catatan

- Data disimpan sementara di memori (`array cars`), tidak permanen.
- Setiap kali server restart, data akan kembali seperti semula.

---

## 🧪 Contoh Request Body (JSON)

```json
{
  "make": "Toyota",
  "model": "Avanza"
}
```

---
