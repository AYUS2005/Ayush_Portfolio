import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="bg-[#465697] text-white p-10 md:p-20 flex flex-col md:flex-row justify-between items-center"
    >
      {/* Left Text */}
      <div className="mb-8 md:mb-0 text-center md:text-left">
        <h1 className="text-3xl md:text-6xl font-bold mb-2">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal opacity-90">
          Feel free to reach out for collaborations!
        </h3>
      </div>

      {/* Right Links */}
      <ul className="text-sm md:text-xl space-y-4">
        <li className="flex gap-3 items-center hover:text-gray-200 transition-all">
          <MdOutlineEmail size={20} />
          <a href="mailto:ayushhomz@gmail.com">ayushhomz@gmail.com</a>
        </li>
        <li className="flex gap-3 items-center hover:text-gray-200 transition-all">
          <CiLinkedin size={20} />
          <a 
            href="https://www.linkedin.com/in/ayush-singh-7b4b0a248" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            linkedin.com/in/ayush-singh
          </a>
        </li>
        <li className="flex gap-3 items-center hover:text-gray-200 transition-all">
          <FaGithub size={20} />
          <a 
            href="https://github.com/AYUS2005" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            github.com/AYUS2005
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;