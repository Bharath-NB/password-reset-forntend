# Password Reset Application

A full-stack web application designed for secure user authentication and password management. This project allows users to sign up, log in, reset their passwords, and access protected features seamlessly.

---

## Features

### **User Authentication**
- **Signup**: Register with details such as username, email, password, mobile number, and avatar selection.
- **Login**: Access your account using email and password.
- **Forgot Password**: Request a password reset link via email.
- **Reset Password**: Reset your password securely using a token sent to your email.

### **User Dashboard**
- View user-specific details such as user ID, email, and other profile information after logging in.

### **Security Features**
- **JWT Authentication**: Utilizes JSON Web Tokens for secure access to protected routes.
- **Password Hashing**: Ensures user passwords are securely stored.
- **Token Expiry**: Reset tokens have a limited validity to enhance security.

### **Additional Features**
- **CORS Enabled**: Allows interaction between frontend and backend hosted on different domains.
- **Protected Routes**: Access to certain features is restricted to authenticated users only.

---

## Tech Stack

### **Frontend**
- React.js
- React Router
- Bootstrap
- Vite.js (for a fast development experience)

### **Backend**
- Node.js
- Express.js
- MongoDB (via Mongoose)
- JSON Web Tokens (JWT)

---

## Deployment

- **Frontend**: Deployed on [Netlify](https://password-reset-forntend-bharath.netlify.app/)
- **Backend**: Deployed on [Render](https://password-reset-backend-ra1t.onrender.com)

---

