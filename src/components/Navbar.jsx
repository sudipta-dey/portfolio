import React from "react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");

  // Optional: update active link on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleScroll = () => {
      const scrollY = window.scrollY;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActive(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experiences", href: "#Experiences" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-purple-900 shadow-md backdrop-blur-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* Logo / Name */}
       <h1 className="font-fancy font-extrabold text-2xl text-purple-600 dark:text-cyan-400">
        Sudipta Dey
       </h1>

        {/* Navigation Links */}
        <div className="flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`
                relative text-gray-700 dark:text-gray-200 font-medium
                hover:text-cyan-400 dark:hover:text-purple-300
                focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded
                transition-colors duration-300
              `}
              aria-current={active === link.href.slice(1) ? "page" : undefined}
            >
              {link.label}
              {/* Active underline */}
              {active === link.href.slice(1) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400 rounded"></span>
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}