import React from "react";
import { motion } from "framer-motion"; // optional, for smooth animations

const Experiences = [
  {
    title: "Cognizant Technology Solutions, Canada",
    desc: "Built high-performance React applications for enterprise banking platforms, optimizing UI architecture, API integrations, and render performance to improve user engagement by 20%. Collaborated with cross-functional teams, implemented CI/CD pipelines, and delivered robust, tested code achieving 90%+ coverage and reducing production bugs by 25%",
    location: "Toronto, Ontario, Canada",
    duration: "Aug 2021 – Present",
    link: "https://www.cognizant.com/ca/en",
  },
  {
    title: "Cognizant Technology Solutions, USA",
    desc: "Developed reusable, scalable React components and a Storybook-based design system, ensuring consistent UI and reducing development time for new features. Implemented responsive, accessible designs with thorough unit and integration testing, improving cross-device compatibility by 30% and maintaining high-quality, maintainable code within Agile teams.",
    location: "Sunnyvale, California, USA",
    duration: "Jun 2019 – Aug 2021",
    link: "https://www.cognizant.com/us/en",
  },
  {
    title: "HCL, USA",
    desc: "Developed responsive web and mobile-friendly interfaces using React, HTML5, CSS3, Bootstrap, and SASS, delivering interactive, data-driven business tools. Automated build and deployment pipelines with Gulp and Jenkins to ensure efficient, reliable delivery of high-quality code.",
    location: "Sunnyvale, California, USA",
    duration: "Jan 2019 – Jun 2019",
    link: "https://www.hcltech.com/",
  },
  {
    title: "Sony PlayStation. USA",
    desc: "Built responsive and SEO friendly game marketing pages.Collaborated with Adobe Experience Manager (AEM) teams for dynamic content integration",
    location: "San Mateo, California, USA",
    duration: "Feb 2018 – Dec 2018",
    link: "https://www.playstation.com/en-ca/",
  },
  {
    title: "Persistent Systems, India",
    desc: "Led frontend development of enterprise and consumer web applications, building dynamic UI components, interactive features, and internationalization functionality. Coordinated modules as team lead, mentoring developers, resolving critical issues, and delivering high-quality, revenue-impacting solutions on time.",
    location: "Pune, Maharashtra, India",
    duration: "May 2010 – Feb 2018",
    link: "https://www.persistent.com/",
  },
];

export default function Experience() {
  return (
    <section
      id="Experiences"
      className="py-20 bg-gradient-to-b from-purple-100 to-purple-50 dark:from-purple-900 dark:to-purple-800"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Experiences
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Experiences.map((p, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-purple-900 rounded-2xl shadow-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-purple-600 ">
                  {p.title}
                </h3>
                <p className="mb-1 text-gray-600  font-semibold">
                  {p.duration}
                </p>
                <p className="mb-4 text-gray-600 ">
                  {p.location}
                </p>
                <p className="mb-4 text-gray-700 ">
                  {p.desc}
                </p>

                <a
                  href={p.link}
                  className="text-indigo-600 font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Organization
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}