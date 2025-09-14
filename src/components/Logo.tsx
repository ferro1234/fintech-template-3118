
import React from 'react';
import logoSws from '@/assets/logo-sws.svg';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={logoSws} alt="SWS Logo" className="h-8 w-auto" loading="eager" />
    </div>
  );
};

export default Logo;
