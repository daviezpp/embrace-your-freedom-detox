
import React from 'react';
import Logo from './Logo';
import { scrollToPricing } from '@/utils/scrollUtils';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Logo />
        <Button 
          onClick={scrollToPricing}
          className="bg-purple hover:bg-purple-dark text-white"
        >
          Começar agora
        </Button>
      </div>
    </header>
  );
};

export default Header;
