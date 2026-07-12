import React from "react";
import { IoCodeSlash, IoStatsChart } from "react-icons/io5";

const About = () => {
  return (
    <div id="About" className="text-white p-10 md:p-20 overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">About Me</h2>
      
      {/* Intro Text - The "Hook" */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
          I am a passionate <span className="text-[#465697] font-bold">Frontend Developer</span> and 
          <span className="text-[#465697] font-bold"> Data Analyst</span> who loves building 
          digital experiences that are not only beautiful but also driven by actionable data insights.
        </p>
      </div>
      
      {/* Cards Section */}
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        
        {/* Card 1: Frontend */}
        <div className="bg-black bg-opacity-30 p-10 rounded-3xl border border-gray-800 hover:border-[#465697] transition-all duration-300 w-full md:w-1/3">
          <IoCodeSlash size={50} className="text-[#465697] mb-6" />
          <h1 className="text-2xl font-semibold mb-4">Frontend Development</h1>
          <p className="text-gray-300 leading-relaxed">
            I build high-performance, responsive web interfaces. From pixel-perfect UI components 
            to interactive user flows, I ensure your application feels premium and works flawlessly on every device.
          </p>
        </div>

        {/* Card 2: Data Analyst */}
        <div className="bg-black bg-opacity-30 p-10 rounded-3xl border border-gray-800 hover:border-[#465697] transition-all duration-300 w-full md:w-1/3">
          <IoStatsChart size={50} className="text-[#465697] mb-6" />
          <h1 className="text-2xl font-semibold mb-4">Data Analytics</h1>
          <p className="text-gray-300 leading-relaxed">
            I don't just write code; I extract value. By leveraging SQL, Python, and advanced data visualization, 
            I transform complex datasets into clear, strategic insights that drive better business decisions.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;