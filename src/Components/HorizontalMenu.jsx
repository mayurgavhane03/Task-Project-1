import React from 'react';
import { NavLink } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';

const HorizontalMenu = () => {
  return (
    <nav className="bg-white text-gray-800 py-4 font-semibold    px-8 shadow-md flex items-center justify-between  ">
      <ul className="hidden md:flex space-x-8">
        {[
          { path: '/', label: 'Home' },
          { path: '/grid', label: 'Grid View' },
          { path: '/tile', label: 'Tile View' },
          { path: '/about', label: 'About' },
        ].map(({ path, label }) => (
          <li key={path} className="hover:bg-sky-100 px-4 py-2 rounded-lg transition duration-200">
            <NavLink to={path} exact className={({ isActive }) => (isActive ? 'text-sky-500' : 'text-gray-800')}>
              {label}
            </NavLink>
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
