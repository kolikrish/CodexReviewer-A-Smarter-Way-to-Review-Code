# 🧠 CodeReview Pro – AI-Assisted Code Review Platform

**CodeReview Pro** is a full-stack web application built with the **MERN stack (MongoDB, Express, React, Node.js)** that streamlines the code review process using **Google Gemini AI**. It enables role-based access, project-wise review tracking, and pull request discussions to help teams deliver clean, high-quality code efficiently.

🚀 Built for modern development teams to collaborate, review, and refine code faster with AI assistance.

---

## 🛠 Tech Stack

### Frontend:
- **React** (with Hooks & Context)
- **Tailwind CSS** or CSS Modules (based on styling)
- **Axios** for API communication

### Backend:
- **Node.js** with **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** for authentication
- **Google Gemini API** for AI code review

### Dev Tools:
- **Vite / CRA** for React build
- **Postman** for API testing
- **Vercel / Netlify / Render** for frontend hosting
- **Render / Railway / Cyclic** for backend deployment

---

## 📦 Prerequisites

- Node.js (v18+)
- npm or yarn
- MongoDB (Atlas or local)
- Gemini API Key from [Google AI Studio](https://aistudio.google.com/app/apikey)

---

## 🛠 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/code-review-pro.git
cd code-review-pro

---

# For frontend
cd client
npm install
# or
yarn install

# For backend
cd ../server
npm install
# or
yarn install


PORT=5000
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
JWT_SECRET=your_jwt_secret_key
