import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-purple-100 to-white dark:from-purple-900 dark:to-black"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold dark:text-white">
            About Me
          </h2>

          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded"></div>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT — BIG PERSONAL INTRO */}
          <div>
            <h3 className="text-3xl font-bold mb-6 dark:text-white">
              I build things for the web that people actually enjoy using.
            </h3>

            <p className="mb-5 text-grey-700 dark:text-purple-300">
              I'm a Frontend Engineer passionate about crafting fast,
              accessible, and visually polished applications using
              React and modern JavaScript.
            </p>

            <p className="mb-5 text-grey-700 dark:text-purple-300">
              I love turning complex ideas into clean interfaces,
              optimizing performance, and creating experiences that
              feel smooth and intuitive.
            </p>

            <p className="mb-5 text-grey-700 dark:text-purple-300">
              Currently I am open to opportunities where I can learn,
              contribute, and help build impactful digital products 
            </p>

             <p className="text-grey-700 dark:text-purple-300">
              Outside of coding, I enjoy creating art in my free time and love to travel. 
              I’m passionate about experiencing different cultures through food and exploring new 
              places around the world.
            </p>

            {/* Fun badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="bg-cyan-400/20 text-cyan-300 px-4 py-1 rounded-full">
                React
              </span>
              <span className="bg-purple-400/20 text-purple-300 px-4 py-1 rounded-full">
                UI/UX Focused
              </span>
              <span className="bg-pink-400/20 text-pink-300 px-4 py-1 rounded-full">
                Performance
              </span>
              <span className="bg-emerald-400/20 text-emerald-300 px-4 py-1 rounded-full">
                Problem Solver
              </span>
            </div>
          </div>

          {/* RIGHT — VIBRANT STATS / INFO */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white dark:bg-purple-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
              <p className="text-3xl font-bold text-cyan-400">🌍</p>
              <h4 className="mt-2 font-semibold dark:text-white">
                Location
              </h4>
              <p className="text-gray-600 dark:text-purple-300">
                Toronto, Ontario, Canada
              </p>
            </div>

            <div className="bg-white dark:bg-purple-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
              <p className="text-3xl font-bold text-purple-400">🇨🇦</p>
              <h4 className="mt-2 font-semibold dark:text-white">
                Work Authorization
              </h4>
              <p className="text-gray-600 dark:text-purple-300">
                Canadian Citizen
              </p>
            </div>

            <div className="bg-white dark:bg-purple-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
              <p className="text-3xl font-bold text-pink-400">⚡</p>
              <h4 className="mt-2 font-semibold dark:text-white">
                Focus
              </h4>
              <p className="text-gray-600 dark:text-purple-300">
                <p>Frontend Engineering</p>
                <p>UI developement</p>
                Frontend Lead
              </p>
            </div>

            <div className="bg-white dark:bg-purple-800 p-6 rounded-xl shadow-lg hover:scale-105 transition">
              <p className="text-3xl font-bold text-emerald-400">🎓</p>
              <h4 className="mt-2 font-semibold dark:text-white">
                Education
              </h4>
              <p className="text-gray-600 dark:text-purple-300">
                <p>Bachelor of Technology (Computer Science)</p>
                BPUT, Rourkela, India
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}