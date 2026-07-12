import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between items-center text-white px-10 pt-6 md:px-20 sticky top-0 z-50 bg-black/50 backdrop-blur-md py-6">
      <span className="text-2xl font-bold tracking-tight hover:text-[#465697] transition-all cursor-pointer">
        Ayush Portfolio
      </span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } md:flex gap-10 absolute md:static bg-black/90 md:bg-transparent w-full md:w-auto left-0 top-20 py-8 md:py-0 text-center rounded-xl md:rounded-none shadow-xl md:shadow-none transition-all duration-300`}
      >
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