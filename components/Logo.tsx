
import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", light = false }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="https://ik.imagekit.io/digitusmarkus/Nova%20Dent/logo.png" 
        alt="Nova Dent Logo" 
        className="w-12 h-12 object-contain"
      />
      
      <div className="flex flex-col leading-none">
        <span className={`text-2xl font-bold tracking-tight ${light ? "text-white" : "text-slate-800"}`}>
          Nova<span className={light ? "text-teal-400" : "text-teal-600"}>Dent</span>
        </span>
      </div>
    </div>
  );
};

export default Logo;
