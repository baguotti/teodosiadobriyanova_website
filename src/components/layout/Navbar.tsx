import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from '../ui/Icons';

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
    <header className="w-full bg-canvas py-7 sm:py-9">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 flex items-baseline justify-between gap-6">
        <NavLink
          to="/"
          className="transition-opacity duration-200 hover:opacity-70"
          onClick={() => setIsOpen(false)}
        >
          <span className="font-serif text-2xl text-ink font-normal tracking-tight block">
            Teodosia Dobriyanova
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`text-sm tracking-[0.01em] transition-colors duration-200 ${
                  isActive
                    ? 'text-ink underline decoration-earth/75 underline-offset-[6px]'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-ink p-1 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-earth cursor-pointer"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-canvas px-6 py-6 border-b border-canvas-subtle fade-in">
          <nav aria-label="Mobile" className="flex flex-col space-y-3">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-sm py-1 transition-colors ${
                  isActive ? 'text-ink font-medium' : 'text-ink-muted hover:text-ink'
                }`
              }
            >
              Home
            </NavLink>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-sm py-1 transition-colors ${
                    isActive ? 'text-ink font-medium' : 'text-ink-muted hover:text-ink'
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
