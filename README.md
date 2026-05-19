# Full Stack Blog Application

A full stack MERN Blog Platform developed as part of my web development learning journey.

This project supports multiple account roles like readers and authors with secure authentication, protected routes, article management, comments system, and responsive UI design.

The main goal of this project was to understand how real-world full stack applications are built, connected, secured, and deployed.

---

# Project Overview

This application supports two account types:

### USER
- Can read active articles
- Can comment on articles
- Can manage their profile session

### AUTHOR
- Can create articles
- Can edit articles
- Can manage their own articles
- Can soft-delete and restore articles

The project includes:

- JWT authentication
- Protected routes
- Role-based access control
- Author dashboard
- User dashboard
- Article comments
- Soft delete functionality
- Backend validation and security
- Session persistence
- Responsive UI design

---

# Repository Structure

```bash
project-root/
├── Blog-Backend/
│   ├── APIs/
│   ├── middlewares/
│   ├── models/
│   ├── server.js
│   └── README.md
│
├── Blog-Frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── store/
│   │   ├── styles/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── README.md
│
├── vercel.json
└── README.md
```

---

# Tech Stack

# Frontend

- React 19
- Vite
- React Router DOM
- Tailwind CSS
- Zustand
- Axios
- React Hook Form
- React Hot Toast

---

# Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs
- cookie-parser
- CORS
- dotenv

---

# Features

- User Registration
- Author Registration
- Secure Login System
- JWT Authentication using Cookies
- Protected Routes
- Role-based Dashboards
- Create, Edit, and Delete Articles
- Soft Delete Articles
- Comment System
- Session Persistence
- Responsive UI
- REST API Architecture
- MongoDB Atlas Integration
- Secure Cookie Handling

---

# APIs Used

| API | Purpose |
|-----|----------|
| `UserAPI` | User registration, reading articles, comments |
| `AuthorAPI` | Author registration and article management |
| `CommonAPI` | Login, logout, authentication check |

---

# Authentication System

Authentication is implemented using:

- JWT Tokens
- HTTP Only Cookies
- Cookie-based Session Persistence
- Protected API Routes

Production cookie configuration:

```js
res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "none",
});
```

---

# How To Run Locally

# Backend

```bash
cd Blog-Backend
npm install
npm start
```

Backend runs on:

```bash
http://localhost:4000
```

---

# Frontend

```bash
cd Blog-Frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Environment Variables

Create a `.env` file inside backend:

```env
PORT=4000

MONGO_URI=your_mongodb_atlas_connection_string

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:5173
```

---

# Deployment

- Frontend deployed using Vercel
- Backend deployed using Render
- MongoDB Atlas used for database hosting

---

# What I Learned From This Project

- Building complete MERN applications
- Authentication and authorization
- REST API development
- MongoDB schema design
- React state management using Zustand
- Secure cookie handling
- Deployment process
- Frontend and backend integration
- Real-world project structure
- Debugging deployment and CORS issues

---

# Future Improvements

- Admin Dashboard
- Rich Text Editor
- Article Likes System
- Bookmark Articles
- Search and Filtering
- User Profile Editing
- Image Upload Support
- Dark/Light Theme Toggle

---

# Author

Developed as a MERN Stack learning project by a 3rd year CSE undergraduate student to practice real-world full stack development concepts, authentication systems, deployment workflows, and API integration.
