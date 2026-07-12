import React from "react";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div id="Home" className="text-white flex w-full justify-between items-start p-10 md:p-20 mt-24">
      
      {/* Left Section - Text */}
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter mb-4">
          <TextChange />
        </h1>
        
        <p className="text-sm md:text-xl text-gray-300 tracking-tight mb-8 max-w-lg leading-relaxed">
         I bridge the gap between <span className="text-[#465697] font-semibold">User Experience</span> and <span className="text-[#465697] font-semibold">Data Intelligence</span>. 
    Building high-performance, responsive web interfaces while transforming complex datasets into meaningful, actionable insights.
        </p>

        <div className="flex gap-4">
          {/* Link to Footer */}
          <a href="#Footer">
            <button className="text-white py-2 px-6 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-full bg-[#465697] shadow-lg shadow-blue-900/20">
              Contact Me
            </button>
          </a>
          
          {/* Link to Projects */}
          <a href="#Projects">
            <button className="text-white py-2 px-6 text-sm md:text-lg hover:bg-white hover:text-[#465697] border border-[#465697] duration-300 font-semibold rounded-full">
              View Projects
            </button>
          </a>
        </div>
      </div>

      {/* Right Section - Visual */}
      <div className="md:w-2/5 mt-10 md:mt-0 flex justify-center items-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-[#465697] to-[#1e2a5f] rounded-3xl rotate-3 shadow-2xl flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-20 rounded-3xl"></div>
          <span className="text-white text-6xl font-bold opacity-20"> &lt;/&gt; </span>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gray-800 rounded-full blur-xl"></div>
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#465697] rounded-full blur-xl"></div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;