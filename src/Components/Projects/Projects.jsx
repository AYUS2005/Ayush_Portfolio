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
          desc="Full-stack real estate portal featuring property listings, enquiry management, WhatsApp API integration, and an EMI calculator. Includes a dedicated Admin Dashboard for real-time data management via Firebase."
          gitLink="https://github.com/AYUS2005/RUDRA-HOMZ-ASSOCIATES"
          liveLink="https://rudranexthomze.netlify.app/"
        />

        <ProjectCard 
          title="Optimally" 
          tags={["React", "Tailwind", "Spotify API"]}
          desc="A comprehensive wellness companion covering physical, mental, and spiritual health. Features include a BMI calculator, yoga guides, meditation sessions with Spotify integration, and chakra-based tracking."
          gitLink="https://github.com/AYUS2005/OPTIMALLY"
          liveLink="https://optimally.netlify.app/"
        />

        <ProjectCard 
          title="RoadSafe Analytics" 
          tags={["React", "TypeScript", "shadcn-ui", "Tailwind"]}
          desc="Real-time accident and hazard tracking dashboard. Displays live data updates per second across India with advanced categorization, date-wise filtering, and percentage-based data visualization."
          gitLink="https://github.com/AYUS2005/RoadSafe-Analytics"
          liveLink="https://roadsafeanalytics.netlify.app/"
        />
        
      </div>
    </div>
  );
};

export default Projects;