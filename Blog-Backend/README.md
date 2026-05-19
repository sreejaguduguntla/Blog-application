# Blog Application Backend

Backend API for a MERN Stack Blog Application built using Node.js, Express.js, MongoDB Atlas, JWT Authentication, and Cookie-based Authorization.

---

## Features

- User & Author Registration
- Login & Logout Authentication
- JWT Token Authentication
- Cookie-based Authorization
- Role-based Access Control
- Create, Edit, Delete Articles
- Add Comments to Articles
- MongoDB Atlas Integration
- REST APIs
- Protected Routes
- CORS Configuration
- Deployed on Render

---

## Tech Stack

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

## Folder Structure

Blog-Backend/
│
├── APIs/
├── middlewares/
├── models/
├── services
└── .env


## Installation

Clone repository:

git clone <backend-repo-url>

Move into backend folder:

cd Blog-Backend

Install dependencies:

npm install

Run server:

npm start

Environment Variables

Create .env file:

PORT=4000

MONGO_URI=your_mongodb_atlas_connection_string

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:5173

## For production:

CLIENT_URL=https://your-frontend-url.vercel.app
API Routes
Common APIs
POST /common-api/login
GET  /common-api/logout
GET  /common-api/check-auth
User APIs
POST /user-api/users
GET  /user-api/articles
PUT  /user-api/articles
GET  /user-api/article/:id
Author APIs
POST   /author-api/users
POST   /author-api/articles
PUT    /author-api/articles
PATCH  /author-api/articles/:id/status
GET    /author-api/articles/:authorId
Authentication

Uses:

JWT Tokens
HTTP Only Cookies
Cookie-based Session Persistence

Cookie configuration:

res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "none",
});

## Deployment

Backend deployed using:

Render

Production URL:

https://your-backend-url.onrender.com
