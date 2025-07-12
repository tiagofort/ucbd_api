# 🧠 Research Survey Platform — Node.js API & Admin Panel

A lightweight full-stack application designed to support a small-scale research study. Participants fill out both simple and interactive questionnaires, while researchers can securely monitor responses and export the results in Excel format.

---

## 🚀 Project Overview

This project was built to meet the needs of a research team conducting a user study. The system consists of:

- A **simple form** and an **interactive questionnaire** for participants
- A **protected admin panel** for researchers to:
  - Track participation progress
  - Manage access through authentication
  - Export data into **Excel spreadsheets**

All data is handled through a clean and structured **REST API** built with **Node.js** and **MongoDB**.

---

## 🛠️ Tech Stack

| Technology     | Purpose                                                                 |
|----------------|-------------------------------------------------------------------------|
| **Node.js**    | Efficient server-side JavaScript runtime, ideal for I/O-heavy workloads |
| **Express**    | Minimal and flexible web framework for building robust REST APIs        |
| **MongoDB**    | NoSQL database well-suited for storing dynamic form responses           |
| **Mongoose**   | Elegant ODM for MongoDB, ensuring schema consistency                    |
| **JWT**        | Secure token-based authentication for researcher access                 |
| **bcrypt**     | Password hashing for secure credential storage                          |
| **dotenv**     | Environment variable management to separate config from code            |
| **cors**       | Middleware to enable secure cross-origin resource sharing               |
| **exceljs**    | Generate downloadable Excel files with clean formatting                 |

---

## 💡 Why These Technologies?

### ✅ Node.js + Express  
Node.js offers non-blocking I/O and high performance, making it perfect for handling multiple incoming form submissions efficiently. Combined with Express, it allows rapid API development with excellent scalability and minimal overhead.

### ✅ MongoDB + Mongoose  
Given that the structure of survey responses can vary, MongoDB’s flexibility with document schemas was a natural fit. Mongoose adds structure and data validation, reducing the chance of inconsistent data entries.

### ✅ JWT & bcrypt  
Since researchers needed access to sensitive participation data, a secure and stateless authentication system was essential. Using **JWT** for access tokens and **bcrypt** for hashing passwords ensures a solid security baseline.

### ✅ ExcelJS  
The ability to export results in Excel format was a specific requirement. **ExcelJS** made it easy to generate well-structured spreadsheets with minimal effort and full control over formatting.

---

## 🧱 Project Structure

```
├── config/ # Environment and database configs
├── controllers/ # Request handlers
├── docs/ # API documentation (e.g., Swagger)
├── middlewares/ # Auth, error handling, CORS etc.
├── models/ # Mongoose schemas
├── repositories/ # Data access and abstraction layer
├── routes/ # Express route definitions
├── services/ # Business logic layer
├── app.js # Main Express app setup
```

## 📤 API Endpoints

Below is a summary of the available routes in the system:

---

### 🔐 Authentication

| Method | Endpoint     | Description                  |
|--------|--------------|------------------------------|
| POST   | `/login`     | Authenticate a researcher and return a JWT token |

> Base path: `/auth`

---

### 📊 Data Research

| Method | Endpoint           | Description                              | Auth Required |
|--------|--------------------|------------------------------------------|---------------|
| POST   | `/`                | Submit research data                     | ❌            |
| GET    | `/`                | Get all research entries                 | ✅            |
| GET    | `/export`          | Export research data as Excel            | ✅            |
| GET    | `/countAnswers`    | Count all answers submitted              | ✅            |
| GET    | `/:id`             | Get a specific research entry by ID      | ✅            |
| DELETE | `/:id`             | Delete a research entry by ID            | ✅            |

> Base path: `/dataResearch`

---

### 🧍 Socio-Demographic

| Method | Endpoint                           | Description                          | Auth Required |
|--------|------------------------------------|--------------------------------------|---------------|
| POST   | `/`                                | Submit socio-demographic data        | ❌            |
| GET    | `/states`                          | Get all available states             | ✅            |
| GET    | `/states/:state/cities`            | Get cities by state                  | ✅            |

> Base path: `/socioDemographic`

---

### 👥 Users (Admin Only)

| Method | Endpoint       | Description                   | Auth Required |
|--------|----------------|-------------------------------|---------------|
| POST   | `/`            | Create a new user (researcher)| ✅            |
| GET    | `/`            | Get all users                 | ✅            |
| GET    | `/:id`         | Get a user by ID              | ✅            |
| PUT    | `/:id`         | Update a user by ID           | ✅            |
| DELETE | `/:id`         | Delete a user by ID           | ✅            |

> Base path: `/users`

---

✅ = Requires JWT authentication  
❌ = Public route


## 🧪 Getting Started

```bash
# Cloning project
git clone https://github.com/tiagofort/ucbd_api.git

# Install dependencies
npm install

# Set up environment variables
# To make a test you will need a secret word to your JWT_SECRET and a MONGODB_URI from a existing database. That's all environment variables. 
JWT_SECRET
MONGODB_URI

# Start the server
npm start