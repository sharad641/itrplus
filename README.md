# 💼 ITR Plus - Smart Tax Filing Assistant

> Your personalized solution to simplify Income Tax Return (ITR) filing with modern tools, tips, and calculators.

---

## 🌐 Live Website

[https://itrplus.in](https://itrplus.in) <!-- Replace with actual deployed URL -->

---

## 📌 Project Overview

**ITR Plus** is a responsive web application that helps users streamline their tax return filing process. With calculators, quick guides, and document upload options, it's a beginner-friendly tool aimed at simplifying ITR tasks for students, professionals, and freelancers.

---

## 🚀 Features

✅ Simple and clean homepage with helpful tax tools  
🧮 Built-in tax calculators for quick assessment  
📂 Upload PAN, Form-16, and bank proofs securely  
💬 Integrated chatbot for instant assistance  
📱 Fully responsive layout for mobile and desktop  
🔐 Firebase Auth for secure user login/logout  
📊 Admin dashboard (for CA/consultants) *(Future scope)*  

---

## 🛠️ Tech Stack

| Layer       | Technology                   |
|-------------|------------------------------|
| Frontend    | React.js, JSX, Tailwind CSS  |
| Auth & DB   | Firebase Authentication, Firestore |
| Styling     | Tailwind CSS + Custom CSS    |
| Hosting     | Firebase Hosting / Netlify   |
| Tools       | Git, VS Code, Google Analytics |

---

## 📷 Screenshots

### 🏠 Homepage & Services
![Upload Workflow](https://github.com/sharad641/itrplus/blob/main/public/assets/WhatsApp%20Image%202025-07-25%20at%2023.03.49_8817c3e8.jpg)  

### 🤖 Chatbot Assistance
![Chatbot](https://github.com/sharad641/itrplus/blob/main/public/assets/chatbot.jpg)

### 📦 Document Upload & Workflow
![Services](https://github.com/sharad641/itrplus/blob/main/public/assets/services.jpg)

### 💳 Payment Modes Supported
![Payment](https://github.com/sharad641/itrplus/blob/main/public/assets/paymentmode.jpg)

---

## 🔧 Installation & Setup

1. **Clone the repo**
```bash
git clone https://github.com/sharad641/itrplus.git
cd itrplus



Install dependencies

npm install

Firebase setup

Create a Firebase project at console.firebase.google.com

Enable Authentication (Email/Password)

Add Firestore rules

Replace your Firebase config in firebase.js

Start the development server
npm run dev

📂 Folder Structure
itrplus/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── utils/
│   ├── firebase.js
│   └── App.jsx
├── .env
└── package.json

🔐 Environment Variables
Create a .env file in root and add:
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

📈 Future Enhancements
🧾 Form-based guided ITR filing wizard

🧠 AI-powered ITR tips based on uploaded data

🔄 Integration with Income Tax e-Filing Portal

📧 Automated document email to CA

📋 Admin portal to view all uploaded files and users

🙌 Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

📄 License
MIT

📬 Contact
For queries or contributions:
📧 Email: support@itrplus.in
🌐 Website:https://itrplus.netlify.app 
