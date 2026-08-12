import React from 'react';

interface SvayamLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  theme?: 'dark' | 'light';
  className?: string;
}

export const SvayamLogo: React.FC<SvayamLogoProps> = ({
  size = 'md',
  showText = true,
  theme = 'light',
  className = '',
}) => {
  const iconSizes = {
    sm: 'w-[28px] h-[28px]',
    md: 'w-[40px] h-[40px]',
    lg: 'w-[48px] h-[48px]',
    xl: 'w-[56px] h-[56px]',
  };

  const textSizes = {
    sm: 'text-[14px]',
    md: 'text-[17px]',
    lg: 'text-[20px]',
    xl: 'text-[24px]',
  };

  return (
    <div className={`flex items-center gap-[10px] select-none ${className}`}>
      {/* Official Svayam Logo SVG Vector from logo (1).svg */}
      <div
        className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 120 120"
          className="w-full h-full object-contain"
          aria-hidden="true"
        >
          <g>
            <path
              fill="#FFD400"
              d="M58.772,120.126c0,0-51.448-1.443-51.448-49.496c0-46.059,32.428-70.434,51.454-70.665
                c19.025-0.232,51.159,12.49,51.159,70.665C109.937,121.565,58.772,120.126,58.772,120.126z"
            />
            <path
              fill="#00E28B"
              d="M58.73,112.852c0,0-33.998-0.929-34.073-37.183c-0.076-36.53,68.39-37.151,68.324,0
                C92.914,114.553,58.73,112.852,58.73,112.852z"
            />
            <path
              fill="#02073D"
              d="M58.778,83.063c0,0-1.91,12.594-11.693,12.594c-9.78,0-13.426-6.717-13.426-16.82
                c0-8.825,6.027-23.026,25.12-23.026c19.093,0,25.186,10.591,25.098,23.026c-0.089,12.437-6.796,16.82-12.598,16.82
                C65.773,95.656,60.126,93.138,58.778,83.063z"
            />
            <defs>
              <linearGradient
                id="svayamLogoGrad"
                gradientUnits="userSpaceOnUse"
                x1="58.7778"
                y1="60.0459"
                x2="109.9365"
                y2="60.0459"
              >
                <stop offset="0" stopColor="#000000" />
                <stop offset="1" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
            <path
              opacity="0.15"
              fill="url(#svayamLogoGrad)"
              d="M58.778-0.035v120.161c0.433,0.011,51.159,1.221,51.159-49.496
                C109.937,12.456,77.803-0.267,58.778-0.035z"
            />
          </g>
        </svg>
      </div>

      {showText && (
        <span
          className={`font-semibold tracking-tight leading-none ${textSizes[size]} ${
            theme === 'dark' ? 'text-[#ffffff]' : 'text-[#212529]'
          }`}
          style={{ fontFamily: 'Segoe UI, SegoeUI, sans-serif' }}
        >
          Svayam Incarnation
        </span>
      )}
    </div>
  );
};
