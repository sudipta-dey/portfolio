import React from "react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-purple-900 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-xl text-purple-600">
          Sudipta Dey
        </h1>

        <div className="flex gap-6 items-center">
          <a href="#Experiences">Experiences</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>

        </div>
      </div>
    </nav>
  );
}