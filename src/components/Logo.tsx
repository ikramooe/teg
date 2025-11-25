interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function Logo({ className = '', variant = 'dark' }: LogoProps) {
  const subtitleColor = variant === 'light' ? 'text-gray-200' : 'text-gray-600';

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center">
        <div className="relative">
          <img
            src="/TEG_Fond blue.jpg"
            alt="TEG Logo"
            className="h-12 w-auto object-contain"
          />
        </div>
      </div>
    
    </div>
  );
}
