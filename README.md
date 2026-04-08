# Technical Skill Test — Tech Lead

**PT Digital Solusi Grup**

---

### Candidate

* **Nama**: Muhammad Sholehhudin
* **Posisi**: Tech Lead

---

### Waktu Pengerjaan

Pengerjaan dilakukan dalam beberapa sesi:

* **Session 1** :  Setup Project | 16.00 – 18.00

* **Session 2** : Development (API & Business Logic) | 20.00 – 00.00

* **Session 3** : Implement Jest Testing & Finalization | 06.00 – 08.30

---

### Tech Stack

* **Backend**: Node.js (Express) + TypeScript
* **Database**: PostgreSQL
* **ORM**: Prisma
* **Validation**: Zod
* **Testing**: Jest + Supertest

---

### Cara Menjalankan Project

### 1. Clone Repository

```bash
git clone https://github.com/msholehhudin/mini-rest-api.git
cd mini-rest-api
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Setup Environment

Buat file `.env`:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/DB_NAME"
```

---

### 4. Migration Database

```bash
npx prisma migrate dev
```

---

### 5. Seed Database

```bash
npx prisma db seed
```

---

### 6. Run Development Server

```bash
npm run dev
```

Server berjalan di:

```text
http://localhost:3000
```

---

### 7. Run Testing

```bash
npm test
```

---

## API Endpoints

| Method | Endpoint                 | Description        |
| ------ | ------------------------ | ------------------ |
| POST   | /api/tasks               | Create task        |
| GET    | /api/tasks               | Get all tasks      |
| GET    | /api/tasks/:id           | Get task by ID     |
| GET    | /api/tasks?status=TODO   | Get task by Status |
| PUT    | /api/tasks/:id           | Update task        |
| DELETE | /api/tasks/:id           | Delete task        |

---

## Arsitektur

Project menggunakan pendekatan **layered architecture**:

```text
Controller → Service → Repository → Database
```

### Penjelasan:

* **Controller**
  Menangani HTTP request & response

* **Service**
  Berisi business logic & validasi tambahan

* **Repository**
  Bertanggung jawab terhadap akses database (Prisma)

---

## Keputusan Teknis

### 1. Menggunakan Prisma ORM

* Type-safe
* Mempercepat development
* Mendukung migration & seeding dengan baik

---

### 2. Menggunakan Zod untuk Validasi

* Validasi terpusat
* Type-safe
* Menghindari invalid request masuk ke business logic

---

### 3. Layered Architecture

* Separation of concerns
* Mudah di-maintain dan scalable
* Standar untuk backend production system

---

### 4. Menggunakan Jest + Supertest

* Testing endpoint secara langsung
* Validasi behavior API
* Memastikan correctness

---

## Testing

Minimal 3 test case diimplementasikan:

1. Create Task
2. Get Task by ID
3. Handle Not Found

Testing dilakukan menggunakan **Supertest** untuk memastikan API berjalan sesuai spesifikasi.

---

## Database Design

### Table: Task

| Field       | Type              | Description               |
| ----------- | ----------------- | ------------------------- |
| id          | UUID              | Primary key               |
| title       | String            | Judul task                |
| description | String (optional) | Deskripsi                 |
| status      | Enum              | TODO / IN_PROGRESS / DONE |
| createdAt   | DateTime          | Waktu dibuat              |
| updatedAt   | DateTime          | Waktu update              |

### Index

* Index pada field `status` untuk optimasi query filtering

---

## Asumsi

* Tidak ada authentication / authorization
* Fokus pada core task management API
* Status enum menggunakan uppercase sesuai best practice database
* Tidak menggunakan pagination untuk menyederhanakan scope

---

## Catatan

* Project ini difokuskan pada clean architecture, readability, dan maintainability
* Commit history dibuat bertahap untuk menunjukkan proses development

---

## Penutup

Terima kasih atas kesempatan yang diberikan untuk mengikuti proses seleksi ini.
Saya berharap implementasi ini dapat memberikan gambaran kemampuan teknis dan cara berpikir saya dalam membangun sistem backend.

---
