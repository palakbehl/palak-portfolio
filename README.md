# ⚡ Palak Behl - Portfolio

A modern, high-performance portfolio website built with **React**, **Vite**, and **Tailwind CSS**. It features smooth **Framer Motion** animations, a 3D book interface for projects, real-time **GitHub statistics**, and a fully functional contact form powered by **EmailJS**.

![Portfolio Preview](./public/og-image.png)

## 🚀 Features

- **🎨 Modern UI/UX**: Glassmorphism design, clean typography, and interactive elements.
- **🌓 Dark/Light Mode**: System-aware theme toggle with persistent state.
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop screens.
- **⚡ High Performance**: Built with Vite for instant server start and lightning-fast HMR.
- **📧 Working Contact Form**: Integrated with EmailJS for real-time email delivery (no backend required).
- **📊 Live GitHub Stats**: Dynamic contribution calendar fetching real-time data.
- **🔍 SEO Optimized**: Meta tags and Open Graph data using `react-helmet-async`.
- **🎭 Animations**: Smooth page transitions and scroll reveals using Framer Motion.

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Email**: [EmailJS](https://www.emailjs.com/)
- **SEO**: [React Helmet Async](https://github.com/staylor/react-helmet-async)
- **Calendar**: [React GitHub Calendar](https://grubersjoe.github.io/react-github-calendar/)

## 🏃‍♂️ Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/palakbehl/Portfolio.git
    cd Portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory and add your EmailJS keys:
    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```

4.  **Start the Development Server**
    ```bash
    npm run dev
    ```

5.  **Build for Production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── components/        # Reusable UI components (Navbar, Footer, etc.)
│   ├── ui/            # Generic UI elements (Buttons, Toast, ScrollToTop)
│   ├── GitHubStats.jsx    # GitHub Calendar component
│   └── ...            # Section components (Hero, About, Projects)
├── pages/             # Page layouts (Home, NotFound)
├── lib/               # Utilities (EmailJS service, cn helper)
├── hooks/             # Custom hooks (use-toast)
├── App.jsx            # Main App component with Routing
└── main.jsx           # Entry point with Providers
```

## 🤝 Contact

**Palak Behl**  
📧 [palakbehls@gmail.com](mailto:palakbehls@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/palakbehl26)

---
*© 2026 Palak Behl. All Rights Reserved.*
