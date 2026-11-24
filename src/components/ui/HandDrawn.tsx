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

const BULLET_PATHS = [
  'M 11.2 4.3 C 8.4 2.6, 4.1 3.7, 3.4 7.1 C 2.8 10.2, 5.6 12.6, 8.9 12.1 C 12.0 11.6, 13.4 8.6, 12.2 5.8 C 11.6 4.5, 9.8 3.9, 8.4 4.1',
  'M 4.6 5.2 C 7.6 3.2, 12.2 4.1, 12.6 7.4 C 13.0 10.4, 9.8 12.4, 6.4 11.9 C 3.4 11.4, 2.6 8.3, 4.1 5.9 C 4.9 4.6, 6.4 4.2, 7.6 4.4',
  'M 9.6 3.4 C 6.2 3.1, 3.6 5.6, 4.0 9.0 C 4.4 12.0, 7.6 13.3, 10.4 11.8 C 12.8 10.5, 13.1 6.8, 11.1 4.5 C 10.1 3.4, 8.5 3.2, 7.3 3.7',
  'M 10.8 5.4 C 8.8 3.1, 4.8 3.5, 3.6 6.4 C 2.5 9.1, 4.6 12.2, 7.9 12.4 C 11.1 12.6, 13.2 9.8, 12.3 6.9 C 11.8 5.4, 10.2 4.6, 8.9 4.9',
];

export const HandDrawnBullet: React.FC<{ variant?: number; className?: string }> = ({
  variant = 0,
  className = '',
}) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className={`w-[9px] h-[9px] shrink-0 text-earth/80 ${className}`}
  >
    <path
      d={BULLET_PATHS[variant % BULLET_PATHS.length]}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
