import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Directing', path: '/directing' },
    { name: 'Film Programming', path: '/film-programming' },
    { name: 'Journalism', path: '/journalism' },
    // { name: 'Producing', path: '/producing' },
    // { name: 'planet.a', path: '/planeta' },
  ];

  return (
    <header className="w-full bg-[#F9F7F2] py-6 sm:py-8 transition-all">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 flex items-baseline justify-between">
        
        {/* Titlemark */}
        <NavLink 
          to="/" 
          className="group transition-opacity duration-300 hover:opacity-75"
          onClick={() => setIsOpen(false)}
        >
          <span className=" text-2xl sm:text-3xl text-[#2B2927] font-normal tracking-tight block">
            Teodosia Dobriyanova
          </span>
        </NavLink>

        {/* Desktop Navigation - Minimal quiet links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`relative text-xs uppercase tracking-[0.18em] transition-all duration-300 font-light ${
                  isActive 
                    ? 'text-[#2B2927] font-medium' 
                    : 'text-[#75716B] hover:text-[#2B2927]'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#A88B68] rounded-full" />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#2B2927] p-1 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F9F7F2] px-6 py-8 border-b border-[#F0ECE1] fade-in">
          <nav className="flex flex-col space-y-4">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-xs uppercase tracking-[0.2em] text-[#75716B] hover:text-[#2B2927]"
            >
              Home
            </NavLink>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.2em] py-1 transition-colors ${
                    isActive ? 'text-[#2B2927] font-medium' : 'text-[#75716B]'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
