import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

// Menu items array
const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/grid', label: 'Grid View' },
  { path: '/tile', label: 'Tile View' },
  { path: '/about', label: 'About' },
  {
    label: 'Services', // No path needed for the main label
    subItems: [
      { path: '/services/web-development', label: 'Web Development' },
      { path: '/services/app-development', label: 'App Development' },
    ],
  },
  { path: '/contact', label: 'Contact' },
];

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const menuContainerRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    setIsServicesOpen(false); // Reset the services menu state
  };

  const toggleServicesMenu = () => setIsServicesOpen((prev) => !prev);

  const handleClickOutside = (event) => {
    if (menuContainerRef.current && !menuContainerRef.current.contains(event.target)) {
      setIsOpen(false);
      setIsServicesOpen(false);
    }
  };

  useEffect(() => {
    // Attach event listener on mount
    document.addEventListener('mousedown', handleClickOutside);
    // Clean up event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuContainerRef}>
      {/* Menu Toggle Button */}
      <div className="text-3xl cursor-pointer text-gray-800" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu Items */}
      {isOpen && (
        <ul className="absolute left-0 top-12 w-64 bg-white text-gray-800 rounded-lg shadow-lg p-4 space-y-3">
          {menuItems.map(({ path, label, subItems }) => (
            <li
              key={label}
              className="hover:bg-sky-100 px-4 py-2 rounded-lg cursor-pointer relative"
            >
              {path ? (
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? 'text-sky-500' : 'text-gray-800')}
                  onClick={() => setIsOpen(false)} // Close menu on click
                >
                  {label}
                </NavLink>
              ) : (
                <div onClick={toggleServicesMenu} className="flex items-center justify-between cursor-pointer">
                  <span>{label}</span>
                  {isServicesOpen ? <FaAngleUp /> : <FaAngleDown />}
                </div>
              )}

              {/* Sub Menu */}
              {isServicesOpen && subItems && (
                <ul className="absolute z-50 left-0 top-full mt-2 bg-sky-50 rounded-lg shadow-lg w-full space-y-2 p-2">
                  {subItems.map((subItem) => (
                    <li key={subItem.path} className="hover:bg-sky-100 px-4 py-2 rounded-lg cursor-pointer">
                      <NavLink
                        to={subItem.path}
                        className={({ isActive }) => (isActive ? 'text-sky-500' : 'text-gray-800')}
                        onClick={() => {
                          setIsOpen(false); // Close main menu
                          setIsServicesOpen(false); // Close sub-menu
                        }}
                      >
                        {subItem.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
