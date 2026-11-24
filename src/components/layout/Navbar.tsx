import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HandDrawnUnderline } from '../ui/HandDrawn';

export const Navbar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: 'directing', path: '/directing', variant: 0 },
    { name: 'film programming', path: '/film-programming', variant: 1 },
    { name: 'journalism', path: '/journalism', variant: 2 },
    { name: 'producing', path: '/producing', variant: 3 },
    // { name: 'planet.a', path: '/planeta', variant: 0 },
  ];

  return (
    <header className="w-full pt-7 pb-5 sm:pt-9 sm:pb-6">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 space-y-1.5">
        <div>
          <NavLink
            to="/"
            className="text-lg text-ink font-normal lowercase tracking-tight hover:text-earth"
          >
            teodosia dobriyanova
          </NavLink>
        </div>

        <nav aria-label="Primary" className="flex flex-wrap items-center gap-x-5 gap-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`text-sm lowercase ${
                  isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                }`}
              >
                {isActive ? (
                  <HandDrawnUnderline size="sm" variant={item.variant}>
                    {item.name}
                  </HandDrawnUnderline>
                ) : (
                  item.name
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
