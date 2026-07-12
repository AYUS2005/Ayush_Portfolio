import React from "react";
import { FaJs, FaReact, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiMysql, SiPostgresql } from "react-icons/si";

const Experience = () => {
  const skills = [
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" size={30} /> },
    { name: "React", icon: <FaReact color="#61DAFB" size={30} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" size={30} /> },
    { name: "Firebase", icon: <SiFirebase color="#FFCA28" size={30} /> },
    { name: "SQL", icon: <FaDatabase color="#4479A1" size={30} /> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" size={30} /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#336791" size={30} /> },
  ];

  return (
    <div id="Experience" className="p-10 md:p-24 text-white">
      <h1 className="text-3xl md:text-5xl font-bold mb-16 text-center">Experience & Skills</h1>
      
      <div className="flex flex-col md:flex-row gap-12 justify-center">
        
        {/* Left Side: Skills */}
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-semibold mb-8 text-center md:text-left">Tech Stack</h2>
          <div className="grid grid-cols-1 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-4 bg-zinc-950 p-4 rounded-xl border border-gray-800 hover:border-[#465697] transition-all">
                {skill.icon}
                <span className="text-lg font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Experience */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold mb-8 text-center md:text-left">Work Experience</h2>
          
          {/* EY Systems */}
          <div className="bg-black bg-opacity-30 p-6 rounded-2xl border border-gray-800 hover:border-[#465697] transition-all">
            <h3 className="text-xl font-bold">Frontend Developer Intern, EY Systems</h3>
            <p className="text-sm text-gray-400 mb-3">Jan 2024 - Present</p>
            <ul className="text-sm text-gray-300 list-disc ml-5 space-y-2">
              <li>Developing high-performance UI components using React, Tailwind, and Firebase.</li>
              <li>Implementing real-time data synchronization features, similar to live analytics dashboards.</li>
              <li>Optimizing web performance and component architecture to ensure seamless user interaction.</li>
            </ul>
          </div>

          {/* Codec Technologies */}
          <div className="bg-black bg-opacity-30 p-6 rounded-2xl border border-gray-800 hover:border-[#465697] transition-all">
            <h3 className="text-xl font-bold">Web Developer Intern, Codec Technologies</h3>
            <p className="text-sm text-gray-400 mb-3">June 2023 - Dec 2023</p>
            <ul className="text-sm text-gray-300 list-disc ml-5 space-y-2">
              <li>Engineered full-stack solutions with dynamic interfaces and robust SQL database schemas.</li>
              <li>Designed and executed complex MySQL/PostgreSQL queries for data-intensive application modules.</li>
              <li>Collaborated on building scalable, data-driven platforms using modern JavaScript libraries.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;