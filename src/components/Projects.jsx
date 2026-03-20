import React from "react";

const projects = [
  {
    title: "E-Commerce UI",
    desc: "Modern online store interface built with React",
    img: "https://via.placeholder.com/400x200",
    link: "#",
  },
  {
    title: "Dashboard App",
    desc: "Data dashboard with charts and auth",
    img: "https://via.placeholder.com/400x200",
    link: "#",
  },
  {
    title: "Weather App",
    desc: "Real-time weather using public API",
    img: "https://via.placeholder.com/400x200",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-purple-100 dark:bg-purple-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white dark:bg-purple-900 rounded shadow hover:scale-105 transition overflow-hidden"
            >
              <img src={p.img} alt="" />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">
                  {p.title}
                </h3>

                <p className="mb-4 text-purple-600 dark:text-purple-300">
                  {p.desc}
                </p>

                <a
                  href={p.link}
                  className="text-indigo-600 dark:text-indigo-400 font-bold"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}