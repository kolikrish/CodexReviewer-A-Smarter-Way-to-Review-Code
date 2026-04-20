# 🧠 CodexReviewer – AI-Assisted Code Review Platform

**CodexReviewer** is a premium, full-stack code analysis workspace designed to streamline the software development lifecycle. Powered by **Google Gemini AI**, it provides deep insights, logic refinements, and security audits for your code snippets in real-time.

🚀 *Elevate your code quality with the intelligence of Gemini and a state-of-the-art developer experience.*

---

## ✨ Key Features

- **AI-Powered Code Review**: Instant feedback on logic, performance, and best practices using Google's Gemini models.
- **Premium Dark UI**: A glassmorphic, high-performance interface with a minimalist "Dark Mode" aesthetic.
- **Secure Authentication**: JWT-based secure login and registration system with persistent user sessions.
- **Interactive Editor**: A high-speed, syntax-highlighted code editor with a clean, distraction-free layout.
- **Responsive Design**: Fully optimized for desktop and mobile collaborative reviews.

---

## 🛠 Tech Stack

### Frontend
- **React 18** (Vite)
- **Framer Motion** (Production-grade animations)
- **Lucide React** (Modern iconography)
- **Prism.js** (Syntax highlighting)
- **Axios** (API Management)

### Backend
- **Node.js** & **Express**
- **MongoDB** with **Mongoose**
- **JWT** (JSON Web Tokens) for security
- **Google Generative AI** (Gemini API SDK)

---

## 📦 Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB** (Atlas or local instance)
- **Gemini API Key** from [Google AI Studio](https://aistudio.google.com/app/apikey)

---

## 🚀 Installation & Local Development

### 1. Clone the Repository
```bash
git clone https://github.com/kolikrish/CodexReviewer.git
cd CodexReviewer
```

### 2. Backend Setup
```bash
cd Backend
npm install
```
Create a `.env` file in the `Backend` directory and add:
```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
JWT_SECRET=your_jwt_secret_key
```
Start the server:
```bash
npx nodemon server.js
```

### 3. Frontend Setup
```bash
cd ../Fronted
npm install
```
Start the development server:
```bash
npm run dev
```

---

## 🎨 Design Theme

CodexReviewer follows a **"Dark Minimalist"** design system:
- **Background**: `#050505` (Deep Black)
- **Accent**: `#52b788` (Leaf Green)
- **Typography**: `Playfair Display` (Hero), `Inter` (Body), `Outfit` (UI/Headings).

---

## 🛡 Security Note

Ensure your `.env` files are never committed to version control. The project includes a `.gitignore` to protect sensitive environment variables.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.

*Crafted with ❤️ by [Krish Koli](https://github.com/kolikrish)*
