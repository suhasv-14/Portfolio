# Professional Portfolio Website

A modern, responsive, and professional portfolio website built for a Master's student in Computer Science. This project showcases academic background, professional experience, technical skills, and featured projects with a clean and elegant design.

![Portfolio Preview](./public/vite.svg) 
*(Note: Replace with an actual screenshot of your portfolio)*

## 🚀 Features

- **Modern UI/UX**: Built with React and Tailwind CSS for a sleek, responsive design.
- **Smooth Animations**: Integrated `Framer Motion` for subtle and professional entry animations.
- **Responsive Layout**: Fully optimized for Desktop, Tablet, and Mobile devices.
- **Interactive Navigation**: Sticky navbar with active section highlighting and smooth scrolling.
- **Dynamic Content**:
  - **About Section**: Detailed timeline for Education and Experience.
  - **Skills Dashboard**: Categorized display of technical proficiencies.
  - **Projects Showcase**: Grid layout featuring "AI AGENT" and "AI Assistant" with GitHub links.
- **Contact Integration**: Direct email functionality and social media links.
- **Resume Download**: One-click download for your CV/Resume.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Package Manager**: npm

## 📂 Project Structure

```bash
src/
├── components/
│   ├── layout/       # Navbar, Footer, Layout wrapper
│   └── ui/           # Reusable UI components (Button, etc.)
├── sections/         # Page sections
│   ├── Hero.jsx      # Introduction & Resume Download
│   ├── About.jsx     # Education, Experience, & Skills
│   ├── Projects.jsx  # Featured Projects Grid
│   └── Contact.jsx   # Contact CTA
├── App.jsx           # Main application entry
└── index.css         # Global styles & Tailwind imports
```

## ⚡ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:5173`.

## 📝 Customization

- **Personal Details**: Update `src/sections/` files to reflect your own education, experience, and projects.
- **Resume**: Place your `resume.pdf` (or `SUHAS V-Resume.pdf`) in the `public/` directory and update the link in `Hero.jsx`.
- **Social Links**: Update `src/components/layout/Footer.jsx` with your social media profiles.

## 📦 Build for Production

To create a production-ready build:

```bash
npm run build
```

The output will be in the `dist/` directory, ready to be deployed to Vercel, Netlify, or GitHub Pages.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
