import React from "react";

const Experiences = [
  {
    title: "Cognizant Technology Solutions, Canada",
    desc: "Modern online store interface built with React",
    location: "Toronto, Ontario, Canada ",
    duration: "Aug 2021 – Present",
    link: "https://www.cognizant.com/ca/en",
  },
  {
    title: "Cognizant Technology Solutions, USA",
    desc: "Data dashboard with charts and auth",
    location: "Sunnyvale, California, USA",
    duration: "Jun 2019 – Aug 2021 ",
    link: "https://www.cognizant.com/us/en",
  },
  {
    title: "HCL America",
    desc: "Real-time weather using public API",
    location: "Sunnyvale, California, USA",
    duration: "Jan 2019 – Jun 2019",
    link: "https://www.hcltech.com/",
  },
  {
    title: "Sony PlayStation",
    desc: "Built responsive and SEO friendly game marketing pages.Collaborated with Adobe Experience Manager (AEM) teams for dynamic content integration",
    location: "San Mateo, California, USA",
    duration: "Feb 2018 – Dec 2018",
    link: "https://www.playstation.com/en-ca/",
  },
   {
    title: "Persistent Systems",
    desc: "Led frontend development of enterprise and consumer web applications, building dynamic UI components, interactive features, and internationalization functionality. Coordinated modules as team lead, mentoring developers, resolving critical issues, and delivering high-quality, revenue-impacting solutions on time.",
    location: "Pune, Maharashtra, India ",
    duration: "May 2010 – Feb 2018",
    link: "https://www.persistent.com/",
  },
];

export default function Experience() {
  return (
    <section
      id="Experiences"
      className="py-20 bg-purple-100 dark:bg-purple-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Experiences
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Experiences.map((p, i) => (
            <div
              key={i}
              className="bg-white dark:bg-purple-900 rounded shadow hover:scale-105 transition overflow-hidden"
            >
             

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-purple-600 ">
                  {p.title}
                </h3>
                <p className="mb-4 text-gray-600 ">
                  {p.duration}
                </p>
                <p className="mb-4 text-gray-600 ">
                  {p.location}
                </p>
                <p className="mb-4 text-gray-600 ">
                  {p.desc}
                </p>

                <a
                  href={p.link}
                  className="text-indigo-600"
                >
                  Organization
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}