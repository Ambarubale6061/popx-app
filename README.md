# POPX App 🔐

A modern **authentication-based React application** built using **React JS, Vite, Tailwind CSS, and React Router**. This project demonstrates a clean authentication flow with Login, Signup, Protected Routes, and Profile management.

🌐 **Live Demo:** [https://popx-app-mu-rouge.vercel.app/](https://popx-app-mu-rouge.vercel.app/)

---

## 📌 Features

- User **Login & Signup** functionality
- **Protected Routes** (accessible only after authentication)
- User **Profile Page**
- Client-side authentication using **localStorage**
- Clean and responsive UI using **Tailwind CSS**
- Modern project setup with **Vite**

---

## 🛠 Tech Stack

### Frontend

- **React JS**
- **React Router DOM**
- **Tailwind CSS**
- **Lucide React Icons**

### Tooling

- **Vite** (Fast build & dev server)
- **ESLint** (Code quality)

---

## 📁 Project Structure

```
POPX-APP/
│
├── public/
│
├── src/
│   ├── assets/
│   │   ├── profimg.jpg
│   │   └── react.svg
│   │
│   ├── components/
│   │   └── auth/
│   │       ├── Login.jsx
│   │       ├── SignUp.jsx
│   │       └── ProtectedRoute.jsx
│   │
│   ├── Pages/
│   │   ├── Landing.jsx
│   │   └── Profile.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🔐 Authentication Flow

- User registers using **Sign Up**
- User logs in using **Login**
- Authenticated user details are stored in **localStorage**
- **ProtectedRoute** component restricts access to Profile page
- On logout or invalid access, user is redirected to Login page

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or above recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Ambarubale6061/popx-app.git

# Navigate to project directory
cd popx-app

# Install dependencies
npm install
```

### Run Locally

```bash
npm run dev
```

App will run on:

```
http://localhost:5173
```

---

## 📦 Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## ✅ Deployment

The project is deployed on **Vercel**.

Live URL:
👉 [https://popx-app-mu-rouge.vercel.app/](https://popx-app-mu-rouge.vercel.app/)

---

## 📚 What This Project Demonstrates

- Strong understanding of **React JS fundamentals**
- Routing and navigation using **React Router**
- Authentication logic handling
- Component-based architecture
- Clean folder structure
- Real-world frontend project workflow

---

## 👨‍💻 Author

**Rushikesh Ubale**

- GitHub: [https://github.com/Ambarubale6061](https://github.com/Ambarubale6061)

---

⭐ If you like this project, feel free to star the repository!
