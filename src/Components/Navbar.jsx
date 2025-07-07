import React, { useState } from 'react';
import Avatar from "@mui/material/Avatar";
import { IoIosArrowBack } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative">
      <div className="flex py-2 items-center justify-between px-10">
        <div className="flex gap-20 items-center">
          <div>
            <img src="/images/logo.png" className='' alt="Logo" />
          </div>

          <div className="hidden lg:block font-Inter ">
            <ul className="flex gap-10 text-[#102B52]">
              <li>Business Loans</li>
              <li>Property Loans</li>
              <li>Other</li>
              <li>Our Lenders</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-5 items-center">
          <div className="hidden lg:flex font-Roboto items-center gap-1">
          <IoIosArrowBack size={20} className='text-[#0000008F]'/>
            <h2>LOGIN</h2>
          </div>
          <div className="hidden lg:flex">
            <Avatar/>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md z-50">
          <ul className="flex flex-col gap-6 p-4">
            <li>Business Loans</li>
            <li>Property Loans</li>
            <li>Other</li>
            <li>Our Lenders</li>
            <li className="mt-2">LOGIN</li>
            <Avatar/>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
