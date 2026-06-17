# 🎓 Student Management System

A full-stack Student Management System built using React, Node.js, Express, PostgreSQL, Prisma ORM, and Cloudinary.

The application allows administrators to manage student records efficiently with features like student registration, profile photo uploads, search, editing, deletion and detailed student profiles.

---

## 🚀 Live Demo

### Frontend

https://student-management-system-sooty-eight.vercel.app/

### Backend API

https://student-management-system-7via.onrender.com/

---

## 📌 Features

### Student Management

* Add New Student
* Edit Student Details
* Delete Student Record
* View Complete Student Profile
* Search Students by Name or Admission Number

### Dashboard

* Total Students Count
* Male Students Count
* Female Students Count
* Active Records Summary

### Image Upload

* Upload Student Profile Photo
* Cloudinary Image Storage
* Persistent Image URLs

### User Experience

* Responsive Design
* Clean Dashboard UI
* Modal-based Forms
* Toast Notifications
* Empty State Handling

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Hot Toast

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL (Neon)

### ORM

* Prisma ORM

### File Storage

* Cloudinary
* Multer

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## 📂 Project Structure

```bash
student-management-system/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── routes/
│   ├── prisma/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Environment Variables

### Backend (.env)

Create a `.env` file inside the backend folder.

```env
DATABASE_URL=YOUR_NEON_DATABASE_URL

CLOUDINARY_CLOUD_NAME=YOUR_CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY=YOUR_CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET=YOUR_CLOUDINARY_API_SECRET
```

---

## 📦 Installation

### Clone Repository

```bash
git clone https://github.com/nishant-salekar/student-management-system.git
```

```bash
cd student-management-system
```

---

## Backend Setup

Navigate to backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Generate Prisma Client:

```bash
npx prisma generate
```

Push schema to database:

```bash
npx prisma db push
```

Start backend:

```bash
npm run dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

## Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start frontend:

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## 🗄️ Database Schema

### Student Model

```prisma
model Student {
  id              String   @id @default(cuid())

  admissionNumber String   @unique

  name            String
  course          String
  year            Int

  dob             DateTime

  email           String   @unique
  mobile          String

  gender          String
  address         String

  photo           String?

  createdAt       DateTime @default(now())
  updatedAt       DateTime? @updatedAt
}
```

---

## ☁️ Cloudinary Integration

Student images are uploaded to Cloudinary.

Flow:

```text
Frontend
   ↓
FormData
   ↓
Express + Multer
   ↓
Cloudinary Upload
   ↓
Image URL
   ↓
PostgreSQL Database
```

Only image URLs are stored in the database.

---

## 📸 Screenshots

### Dashboard

<img width="1895" height="895" alt="image" src="https://github.com/user-attachments/assets/fbd163cc-54f1-4279-98be-da8ed3e0e790" />

### Add Student Modal

<img width="1310" height="876" alt="image" src="https://github.com/user-attachments/assets/ec4cc89b-5923-4da1-98c5-60ef050b77db" />

### Student Details Modal

<img width="1047" height="825" alt="image" src="https://github.com/user-attachments/assets/32e99dd5-eb34-4a2f-ad77-c315722b6860" />

---

## 👨‍💻 Author

### Nishant Salekar

* GitHub: https://github.com/nishant-salekar


---

## ⭐ Support

If you found this project helpful, please consider giving it a star on GitHub.
