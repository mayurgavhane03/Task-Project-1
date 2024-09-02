import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaBars, FaTimes, FaAngleDown, FaAngleUp } from 'react-icons/fa';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleServicesMenu = () => setIsServicesOpen((prev) => !prev);

  const handleClickOutside = useCallback((event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
      setIsServicesOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="relative">
      <div
        className="text-3xl cursor-pointer text-gray-800"
        onClick={toggleMenu}
        ref={buttonRef}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      {isOpen && (
        <ul
          className="absolute left-0 top-12 w-64 bg-white text-gray-800 rounded-lg shadow-lg p-4 space-y-3 transition-transform duration-300 ease-out"
          ref={menuRef}
        >
          <li className="hover:bg-sky-100 px-4 py-2 rounded-lg transition duration-200 cursor-pointer">
            Home
          </li>
          <li className="hover:bg-sky-100 px-4 py-2 rounded-lg transition duration-200 cursor-pointer">
            About
          </li>
          <li
            className="hover:bg-sky-100 px-4 py-2 rounded-lg transition duration-200 cursor-pointer relative flex items-center justify-between"
            onClick={toggleServicesMenu}
          >
            <span>Services</span>
            {isServicesOpen ? <FaAngleUp /> : <FaAngleDown />}
            

            {isServicesOpen && (
              <ul className="absolute left-0 top-full mt-2 bg-sky-50 rounded-lg shadow-lg w-full space-y-2 p-2">
                <li className="hover:bg-sky-100 px-4 py-2 rounded-lg cursor-pointer">
                  Web Development
                </li>
                <li className="hover:bg-sky-100 px-4 py-2 rounded-lg cursor-pointer">
                  App Development
                </li>
              </ul>
            )}
          </li>
          <li className="hover:bg-sky-100 px-4 py-2 rounded-lg transition duration-200 cursor-pointer">
            Contact
          </li>
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
