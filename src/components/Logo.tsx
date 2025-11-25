interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function Logo({ className = '', variant = 'dark' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-blue-600';
  const accentColor = variant === 'light' ? 'text-yellow-400' : 'text-yellow-500';
  const subtitleColor = variant === 'light' ? 'text-gray-200' : 'text-gray-600';

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center">
        <div className="relative">
          <svg
            viewBox="0 0 200 80"
            className="h-12 w-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <style>
                {`.teg-text { font-family: Arial, sans-serif; font-weight: 900; font-size: 58px; letter-spacing: -2px; }
                 .reg-mark { font-family: Arial, sans-serif; font-weight: 400; font-size: 12px; }`}
              </style>
            </defs>

            <text x="0" y="55" className="teg-text" fill="currentColor">
              TEG
            </text>

            <circle cx="195" cy="10" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text x="191" y="15" className="reg-mark" fill="currentColor">R</text>

            <g className={accentColor}>
              <path
                d="M 160 38 L 185 38 M 172 30 L 185 38 L 172 46"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <circle cx="165" cy="38" r="4" fill="currentColor" />
            </g>
          </svg>
        </div>
      </div>
      <div className={`${subtitleColor} text-[10px] font-semibold tracking-wider uppercase mt-1 ml-1`}>
        Automotive & Industrial Equipments
      </div>
    </div>
  );
}
