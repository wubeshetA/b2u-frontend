import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false); 



  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-white mx-auto flex justify-between items-center font-serif border-b-[1px] border-b-gray-600 opacity-95">
      <div className="pl-4">
        <a href="/">
          <img
            className="w-28 h-28"
            src="B2U_logo.svg"
            alt="logo"
          />
        </a>
      </div>
      <div className="pr-4 font-bodyFont">
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
            <li
              className="items-center gap-6 lg:gap-10 text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
              <Link to="/">Home</Link>
              
            </li>

            <li
              className="items-center gap-6 lg:gap-10 text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
              
            <Link to="/">Alumni</Link>
            </li>

            <li
              className="items-center gap-6 lg:gap-10 text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
              
            <Link to="/">About Us</Link>
            </li>

            <li
              className="items-center gap-6 lg:gap-10 text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
              
            <Link to="/">Contact Us</Link>
            </li>

            <li className="bg-designColor px-4 py-2 rounded-md text-white items-center gap-6 lg:gap-10 text-base font-normal tracking-wide cursor-pointer hover:bg-designColorLight duration-300 font-bodyFont">
  <Link to="/apply">Apply</Link>
</li>

            <li className="bg-designColor px-4 py-2 rounded-md text-white items-center gap-6 lg:gap-10 text-base font-normal tracking-wide cursor-pointer hover:bg-designColorLight duration-300 font-bodyFont">
  <Link to="/mentor">Be a Mentor</Link>
</li>

            <li className="bg-yellow-500 px-4 py-2 rounded-md text-white items-center gap-6 lg:gap-10 text-base font-normal tracking-wide cursor-pointer hover:bg-yellow-600 duration-300 font-bodyFont">
  <Link to="/">Donate</Link>
</li>

        
        </ul>

        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer "
        >
          <FiMenu />
        </span>
        
      </div>
    </div>
  );
};

export default Navbar;