import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Left */}
      <div className="navbar-start">
        {/* Mobile menu button */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          {/* Mobile dropdown */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>

        <a className="text-xl font-semibold">CS — Ticket System</a>
      </div>

      {/* Desktop Menu */}

      {/* Button */}
      <div className="navbar-end">
        <div className="navbar-end hidden lg:flex">
          <ul className="flex gap-x-6 text-base font-normal text-black">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <button className="btn px-4  ml-4 py-2 font-semibold text-white bg-[#422AD5] hover:bg-[#331bb5] transition flex items-center gap-2">
          <FontAwesomeIcon icon={faPlus} />
          <span className="hidden sm:inline">New Ticket</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
