import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./css/Header.css";

import { IoMenu, IoSearch, IoPersonCircle } from "react-icons/io5";
import axios from "axios"; // Import axios directly

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const [showSearchBar, setShowSearchBar] = useState(false); // State for search bar toggle
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for user login status

  // Toggle the dropdown menu when clicking on the menu icon
  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  // Toggle search bar
  const toggleSearchBar = () => {
    setShowSearchBar((prev) => !prev);
  };

  // Simulate login status
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true"; // Mock login status check
    setIsLoggedIn(loggedIn);
  }, []);

  // Close the dropdown menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest(".menu-icon")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className="sticky top-0 z-50 flex items-center h-20 px-8 bg-[#0b022e] shadow-md"
      style={{ fontFamily: "silk" }}
    >
      <div className="flex-shrink-0">
        <Link to="/">
          <h1 className="text-[#22e000] text-3xl font-bold">MovieMuse</h1>
        </Link>
      </div>

      {/* Default navbar */}
      <div className="flex-grow hidden lg:flex lg:justify-center lg:items-center">
        <ul className="flex text-[#22e000] text-2xl space-x-4">
          <li className="links p-4">
            <Link to="/movies">Movies</Link>
          </li>
          <li className="links p-4">
            <Link to="/tv-shows">TV Shows</Link>
          </li>
          <li className="links p-4">
            <Link to="/trending">Trending</Link>
          </li>
          <li className="links p-4">
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center ml-auto gap-8 text-white">
        {/* Search bar */}
        <div className="relative">
          <button onClick={toggleSearchBar} className="text-white">
            <IoSearch size={30} />
          </button>
          {showSearchBar && (
            <div className="absolute top-8 left-0 bg-white p-2 rounded-lg shadow-lg">
              <input
                type="text"
                placeholder="Search..."
                className="p-2 w-64 border rounded-md"
              />
            </div>
          )}
        </div>

        {/* Login/Sign-Up or User Profile */}
        {!isLoggedIn ? (
          <Link to="/login&signup">
            <button className="login-button bg-[#22e000] text-black rounded-lg md:text-xl text-md px-4 py-2">
              Sign-Up
            </button>
          </Link>
        ) : (
          <div className="relative">
            <button className="text-white">
              <IoPersonCircle size={40} />
            </button>
            <div
              className="absolute right-0 mt-2 w-48 bg-[#0b022e] text-[#22e000] rounded-lg shadow-lg"
              style={{ display: isOpen ? "block" : "none" }}
              ref={dropdownRef}
            >
              <ul className="flex flex-col">
                <li className="p-4">
                  <Link to="/profile">Profile</Link>
                </li>
                <li className="p-4">
                  <Link to="/settings">Settings</Link>
                </li>
                <li className="p-4">
                  <button
                    onClick={() => {
                      localStorage.setItem("isLoggedIn", "false");
                      setIsLoggedIn(false);
                    }}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Mobile menu dropdown button */}
        <button onClick={toggleMenu} className="lg:hidden text-white menu-icon">
          <IoMenu size={40} />
        </button>
      </div>

      {/* Dropdown menu for mobile */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className="lg:hidden absolute top-20 left-0 right-0 bg-[#0b022e] text-[#22e000] text-xl space-y-4 z-50"
        >
          <ul className="flex flex-col text-right ml-4">
            <li className="links1 p-4">
              <Link to="/movies">Movies</Link>
            </li>
            <li className="links1 p-4">
              <Link to="/tv-shows">TV Shows</Link>
            </li>
            <li className="links1 p-4">
              <Link to="/trending">Trending</Link>
            </li>
            <li className="links1 p-4">
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
