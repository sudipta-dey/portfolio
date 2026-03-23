import React, { useEffect, useState } from "react";

export default function Hero() {
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">

      {/* Animated gradient blobs */}
      <div className="absolute w-[700px] h-[700px] bg-purple-600 rounded-full blur-3xl opacity-20 -top-40 -left-40 animate-pulse"></div>
      <div className="absolute w-[600px] h-[600px] bg-pink-500 rounded-full blur-3xl opacity-20 -bottom-40 -right-40 animate-pulse"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT — TEXT */}
        <div>

          <p className="uppercase tracking-widest text-indigo-300 mb-3">
            Available for impactful tech opportunities
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            Hi, I'm <span className="text-cyan-400">Sudipta Dey</span> 
          </h2>

          <h2 className="text-2xl md:text-3xl font-semibold text-cyan-300">
             Sr Frontend Engineer • Sr UI Developer • Frontend Specialist
          </h2>

          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            I design and build fast, scalable, and beautiful web
            experiences using React, JavaScript, Typescript and Next.js and modern tools.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="#Experiences"
              className="bg-purple-200 text-black px-6 py-3 rounded-lg font-bold shadow-lg hover:scale-105 transition"
            >
              View Experiences
            </a>

            <a
              href="/Sudipta_Dey_Frontend.docx"
              download
              className="border border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-black transition"
            >
              Download Resume
            </a>
          </div>

        
        </div>

        {/* RIGHT — PROFILE IMAGE */}
        <div className="flex justify-center">
          <div className="relative">

            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 blur-2xl opacity-70 animate-pulse"></div>

            <img
              src="/profile.jpg"
              alt="Profile"
              className="relative w-80 h-80 object-cover rounded-full border-4 border-white shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 text-center w-full animate-bounce text-gray-300">
        ↓ Scroll
      </div>
    </section>
  );
}