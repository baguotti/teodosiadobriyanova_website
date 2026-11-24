import React from 'react';

interface IconProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export const ArrowUpRight: React.FC<IconProps> = ({ size = 14, strokeWidth = 1.75, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);
