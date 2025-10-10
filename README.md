<h1 align="center">
<br>
💬 Let Me Ask
</h1>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

![Let Me Ask Preview](https://i.imgur.com/4rCc0Td.png)

**Let Me Ask** is a Q&A (Questions and Answers) web app built with **ReactJS + Vite**.  
It allows users to create or join rooms without authentication.  
Inside each room, users can view submitted questions and interact with an **AI assistant** powered by the **Google Gemini SDK**, which can automatically answer questions in real time.

---

## 🚀 Features

- 🏠 **Lobby of Rooms:**  
  Create new Q&A rooms or join existing ones just by typing a room name — no login required.

- 💭 **Q&A Session:**  
  View and send questions that appear in real time.

- 🤖 **AI Assistant (Gemini):**  
  Integrated **Google Gemini SDK** assistant that responds to user questions intelligently.

- ✅ **Data Validation with Zod:**  
  Ensures all user inputs are properly validated with type-safe schemas.

- 🎨 **Modern UI with Tailwind CSS:**  
  Clean and responsive interface built with **Tailwind CSS** and **PostCSS**.

- 🧩 **Forms with React Hook Form:**  
  Fully controlled, type-safe forms.

- 🪄 **Lucide React Icons:**  
  Beautiful and lightweight icon set for modern interfaces.

- ⚙️ **Type Generation with Orval:**  
  Automatically generates TypeScript types and API clients.

---

## 🛠️ Tech Stack

- [ReactJS](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zod](https://zod.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Day.js](https://day.js.org/)
- [clsx](https://github.com/lukeed/clsx)
- [TanStack](https://tanstack.com/)
- [Ultracite](https://ultracite.dev/)


---

## ⚙️ Getting Started

### 🔧 Prerequisites
Before running the project, make sure you have:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### 📦 Installation

Clone the repository:
```bash
git clone https://github.com/your-username/let-me-ask.git
```

Go into the project folder:
```bash
cd let-me-ask
```

Install dependencies:
```bash
npm install
# or
yarn install
```

### ▶️ Run the development server
```bash
npm run dev
# or
yarn dev
```

Then open:
```
http://localhost:5173
```

---

## 🧠 Project Structure

```
let-me-ask/
├── src/
│   ├── components/        # Reusable components
│   ├── contexts/          # Global contexts (e.g. language, room, AI)
│   ├── hooks/             # Custom hooks
│   ├── pages/             # Main pages (Lobby and Room)
│   ├── services/          # Gemini SDK integration and API services
│   ├── styles/            # Global styles and Tailwind setup
│   ├── types/             # Type definitions and Zod/Orval schemas
│   ├── App.tsx            # Root component
│   └── main.tsx           # Entry point
├── public/
├── vite.config.ts
└── package.json
```

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to open **issues** or submit **pull requests** to improve the design, performance, or overall user experience.

---

## 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](https://opensource.org/license/mit) file for details.

---

## 💡 Inspiration

Created to provide a modern, simple, and interactive **Q&A experience** — combining the power of **Generative AI** with a fast, intuitive **React + Vite** frontend.

---

👨‍💻 **Developed by [Dhouglas Bandeira](https://github.com/dhouglasbn)** with 💙

