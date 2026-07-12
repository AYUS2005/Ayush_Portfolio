import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);

  return (

    <nav className="fixed top-0 left-0 w-full flex flex-wrap justify-between items-center text-white px-10 pt-6 md:px-20 pb-6 z-[1000] bg-[#171d32]">
      <span className="text-2xl font-bold tracking-tight hover:text-[#465697] transition-all cursor-pointer">
        Ayush Portfolio
      </span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } md:flex gap-10 absolute md:static bg-black/90 md:bg-transparent w-full md:w-auto left-0 top-full py-8 md:py-0 text-center rounded-xl md:rounded-none shadow-xl md:shadow-none transition-all duration-300`}
      >
        <a href="#Home" onClick={() => openMenu(false)}>
          <li className="text-lg py-2 hover:text-[#465697] transition-all duration-300">Home</li>
        </a>
        <a href="#About" onClick={() => openMenu(false)}>
          <li className="text-lg py-2 hover:text-[#465697] transition-all duration-300">About</li>
        </a>
        <a href="#Experience" onClick={() => openMenu(false)}>
          <li className="text-lg py-2 hover:text-[#465697] transition-all duration-300">Experience & Skills</li>
        </a>
        <a href="#Projects" onClick={() => openMenu(false)}>
          <li className="text-lg py-2 hover:text-[#465697] transition-all duration-300">Projects</li>
        </a>
        <a href="#Footer" onClick={() => openMenu(false)}>
          <li className="text-lg py-2 hover:text-[#465697] transition-all duration-300">Contact</li>
        </a>
      </ul>

      <div className="md:hidden cursor-pointer" onClick={() => openMenu(!menu)}>
        {menu ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
      </div>
    </nav>
  );
};

export default Navbar;