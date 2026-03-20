import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-purple-900 text-center"
    >
      <h2 className="text-3xl font-bold mb-6 dark:text-white">
        Contact Me
      </h2>

      <p className="mb-4 dark:text-purple-300">
        Open to opportunities and freelance work.
      </p>

      <p className="font-semibold dark:text-white">
        📧 sudipta152@gmail.com
      </p>

      <div className="mt-6 flex justify-center gap-6">
        <a href="https://github.com/sudipta-dey">GitHub</a>
        <a href="https://www.linkedin.com/in/sudipta-dey-21b67846/">LinkedIn</a>
      </div>
    </section>
  );
}