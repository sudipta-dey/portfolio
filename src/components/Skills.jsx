import React from "react";

const skills = [
  "JavaScript",
  "React",
  "Redux",
  "Next.js",
  "HTML5",
  "CSS3",
  "Sass",
  "Tailwind",
  "TypeScript",
  "REST APIs",
  "Git",
  "Storybook",
  "Responsive Design",
  "CI/CD pipelines",
  "SEO",
  "Jest",
  "React Testing Library",
  "Cypress",
  "Bootstrap",
  "React Native",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-purple-900"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 dark:text-white">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="p-6 bg-purple-100 dark:bg-purple-800 rounded shadow font-semibold"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}