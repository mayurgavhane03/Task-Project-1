import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const HorizontalMenu = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleServicesMenu = () => setIsServicesOpen((prev) => !prev);

  return (
    <nav className="bg-white text-gray-800 py-4 font-semibold px-8 shadow-md flex items-center justify-between">
      <ul className="hidden md:flex space-x-8">
        {[
          { path: '/', label: 'Home' },
          { path: '/grid', label: 'Grid View' },
          { path: '/tile', label: 'Tile View' },
          { path: '/about', label: 'About' },
          {
            label: 'Services', // No path needed for the main label
            subItems: [
              { path: '/', label: 'Web Development' },
              { path: '/', label: 'App Development' },
            ],
          },
          { path: '/contact', label: 'Contact' },
        ].map(({ path, label, subItems }) => (
          <li key={label} className="relative group hover:bg-sky-100 px-4 py-2 rounded-lg transition duration-200">
            {path ? (
              <NavLink
                to={path}
                exact
                className={({ isActive }) => (isActive ? 'text-sky-500' : 'text-gray-800')}
              >
                {label}
              </NavLink>
            ) : (
              <div
                onClick={toggleServicesMenu}
                className="flex items-center justify-between cursor-pointer"
              >
                <span>{label}</span>
                {isServicesOpen ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            )}

            {/* Sub Menu */}
            {isServicesOpen && subItems && (
              <ul className="absolute z-50 left-0 mt-2 bg-white rounded-lg shadow-lg w-40 space-y-2 p-2">
                {subItems.map((subItem) => (
                  <li key={subItem.path} className="hover:bg-sky-100 px-4 py-2 rounded-lg">
                    <NavLink
                      to={subItem.path}
                      className={({ isActive }) => (isActive ? 'text-sky-500' : 'text-gray-800')}
                      onClick={() => setIsServicesOpen(false)}
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

      <div className="z-50 md:hidden">
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default HorizontalMenu;
