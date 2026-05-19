# Blog App Backend

Backend for the Full Stack Blog Application built using Node.js, Express.js, MongoDB Atlas, and JWT Authentication.

This backend provides:

- Authentication APIs
- User and Author APIs
- JWT-based authorization
- Cookie-based authentication
- Article management APIs
- Comment system APIs
- Protected routes
- MongoDB Atlas integration
- REST API architecture

---

# Backend Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- cookie-parser
- cors
- dotenv

---

# Backend Development Process

- Initialized Express server
- Configured MongoDB Atlas connection
- Organized backend folder structure
- Created REST APIs
- Added JWT authentication
- Implemented cookie-based authorization
- Added middleware protection
- Implemented role-based access
- Built article management APIs
- Added comment system APIs
- Configured CORS for frontend deployment
- Configured production cookies
- Deployed backend using Render

---

# Folder Structure

```bash
Blog-Backend/
├── APIs/
├── middlewares/
├── models/
├── server.js
├── package.json
└── README.md
```

---

# Main Features

- User Registration
- Author Registration
- Login & Logout
- JWT Authentication
- Cookie-based Sessions
- Protected APIs
- Create/Edit/Delete Articles
- Add Comments
- Role-based Authorization
- MongoDB Atlas Integration

---

# API Modules

## Common APIs

- Login API
- Logout API
- Check Authentication API

## User APIs

- User Registration
- Fetch Articles
- Add Comments
- View Single Article

## Author APIs

- Author Registration
- Create Article
- Edit Article
- Delete/Restore Article
- Fetch Author Articles

---

# Authentication System

Authentication is implemented using:

- JWT Tokens
- HTTP Only Cookies
- Cookie-based session persistence

Production cookie configuration:

```js
res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "none",
});
```

---

# Environment Variables

Create a `.env` file:

```env
PORT=4000

MONGO_URI=your_mongodb_atlas_connection_string

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:5173
```

Production:

```env
CLIENT_URL=https://your-frontend-url.vercel.app
```

---

# How To Run Backend

Install dependencies:

```bash
npm install
```

Run backend server:

```bash
npm start
```

Backend runs on:

```bash
http://localhost:4000
```

---

# Available Scripts

```bash
npm start
npm run dev
```

---

# Backend Deployment

Backend deployed using:

- Render

Database hosted on:

- MongoDB Atlas

---

# What I Learned

- Backend API architecture
- REST API development
- MongoDB Atlas integration
- JWT Authentication
- Cookie-based authorization
- Middleware implementation
- CORS handling
- Backend deployment
- Production authentication handling

---

# Backend Author Note

This backend was built as part of a MERN Stack learning project by a 3rd year CSE undergraduate student to practice backend development, authentication systems, database integration, and cloud deployment workflows.
