import React from "react";

// Naya ProjectCard component jisme tech tags hain
const ProjectCard = ({ title, desc, gitLink, liveLink, tags }) => (
  <div className="bg-black bg-opacity-30 p-8 rounded-3xl border border-gray-800 hover:border-[#465697] transition-all duration-300 shadow-lg flex flex-col justify-between">
    <div>
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-[#465697] bg-opacity-20 text-[#465697] text-xs font-bold px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-gray-300 text-sm mb-6 leading-relaxed">{desc}</p>
    </div>
    <div className="flex gap-4 mt-auto">
      <a href={gitLink} target="_blank" rel="noopener noreferrer" className="bg-[#465697] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#35437a] transition-all">GitHub</a>
      <a href={liveLink} target="_blank" rel="noopener noreferrer" className="border border-[#465697] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#465697] hover:text-white transition-all">Live Demo</a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-3xl md:text-5xl font-bold mb-16 text-center">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <ProjectCard 
          title="Rudra Next Homze" 
          tags={["React", "Vite", "Tailwind", "Firebase"]}
          desc="A high-performance real estate portal designed for efficient property management. It features a secure admin dashboard for real-time CRUD operations and integrates the WhatsApp API to automate lead nurturing, significantly improving conversion rates."
          gitLink="https://github.com/AYUS2005/RUDRA-HOMZ-ASSOCIATES"
          liveLink="https://rudranexthomze.netlify.app/"
        />

        <ProjectCard 
          title="Optimally" 
          tags={["React", "Tailwind", "Spotify API"]}
          desc="A wellness platform that delivers personalized audio experiences using the Spotify API. It tracks user health metrics to boost engagement and is fully optimized for search engines to ensure better discoverability."
          gitLink="https://github.com/AYUS2005/OPTIMALLY"
          liveLink="https://optimally.netlify.app/"
        />

        <ProjectCard 
          title="RoadSafe Analytics" 
          tags={["React", "TypeScript", "shadcn-ui", "Tailwind"]}
          desc="A complex data-tracking dashboard capable of processing over 1000 data points per second. Built with shadcn-ui and advanced state management, it ensures high-speed performance and smooth, intuitive data visualization."
          gitLink="https://github.com/AYUS2005/RoadSafe-Analytics"
          liveLink="https://roadsafeanalytics.netlify.app/"
        />

        <ProjectCard 
          title="Wordzan Dictionary" 
          tags={["React", "REST APIs", "Tailwind"]}
          desc="A fast, responsive dictionary application that minimizes search latency through efficient API response caching. It offers a dynamic user interface with light/dark mode and is built on an SEO-friendly architecture."
          gitLink="https://github.com/AYUS2005/Wordzanapp" 
          liveLink="https://wordzanapp.netlify.app/"
        />

        <ProjectCard 
          title="Fraction Master" 
          tags={["JavaScript", "Web Audio API", "HTML5"]}
          desc="An interactive educational engine designed to teach fractions through gamified visual feedback. Utilizing the Web Audio API, it provides an engaging learning experience that is fully responsive across all devices."
          gitLink="https://github.com/AYUS2005/Fraction_Game" 
          liveLink="https://fractiongameadv.netlify.app/" 
        />
        
      </div>
    </div>
  );
};

export default Projects;