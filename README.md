# My MBBS Admission - React Application

This is the React frontend for the My MBBS Admission website, built with Vite and Tailwind CSS.

## Tech Stack
- **React.js**: Frontend library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for styling
- **JavaScript (ES6+)**: Core programming language
- **HTML5**: Markup structure
- **React Router**: For client-side navigation and routing
- **Axios**: For making HTTP API requests
- **Vite**: Next Generation Frontend Tooling
- **Git**: Version Control System

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

## Setup

1.  **Install dependencies:**
    Open your terminal in the `react-app` directory and run:
    ```bash
    npm install
    ```

2.  **Start the development server:**
    To run the app locally:
    ```bash
    npm run dev
    ```
    The app will normally run at `http://localhost:5173` (check the terminal output for the exact URL).

## Building for Production

To create a production-ready build:

```bash
npm run build
```

The built files will be in the `dist` directory. You can deploy these files to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## Project Structure

-   `src/components`: Contains all page components (Home, About, ExamPage, etc.)
-   `src/assets`: Images and other static assets
-   `src/App.jsx`: Main application routing
-   `src/index.css`: Tailwind imports and global styles

## Features
-   Responsive Design (Desktop & Mobile)
-   Dynamic Routing for Exams (`/exams/:type`) and Countries (`/countries/:id`)
-   Tailwind CSS for styling
-   React Router v7
