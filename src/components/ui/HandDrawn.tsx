import React from 'react';

interface HandDrawnUnderlineProps {
  children: React.ReactNode;
  variant?: number;
  size?: 'sm' | 'lg';
  hoverOnly?: boolean;
  className?: string;
}

const UNDERLINE_PATHS = [
  'M 2 8.8 C 44 5.8, 108 10.6, 178 6.8',
  'M 3 7.2 C 52 10.8, 122 5.4, 177 8.4',
  'M 2 9.8 C 60 7.4, 118 6.2, 178 5.2',
  'M 4 6.6 C 48 8.8, 112 10.4, 176 7.0',
];

export const HandDrawnUnderline: React.FC<HandDrawnUnderlineProps> = ({
  children,
  variant = 0,
  size = 'sm',
  hoverOnly = false,
  className = '',
}) => {
  const svgHeight = size === 'sm' ? 'h-[7px] -bottom-[2px]' : 'h-[10px] -bottom-[3px]';
  const visibility = hoverOnly
    ? 'opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100'
    : '';

  return (
    <span className={`relative inline-block ${className}`}>
      <span>{children}</span>
      <svg
        viewBox="0 0 180 14"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
        className={`pointer-events-none absolute left-[-2px] right-[-2px] w-[calc(100%+4px)] text-earth ${svgHeight} ${visibility}`}
      >
        <path
          d={UNDERLINE_PATHS[variant % UNDERLINE_PATHS.length]}
          stroke="currentColor"
          strokeWidth={size === 'sm' ? '1.4' : '1.6'}
          strokeLinecap="round"
          strokeOpacity="0.85"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
};
