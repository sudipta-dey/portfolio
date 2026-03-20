import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 text-center bg-purple-100 dark:bg-purple-800 dark:text-white">
      © {new Date().getFullYear()} Sudipta Dey — Built with React & Tailwind
    </footer>
  );
}