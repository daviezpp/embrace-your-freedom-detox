
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-purple-dark text-white">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} Detox Sagrado - Todos os direitos reservados
        </p>
        <p className="text-xs mt-2 text-white/70">
          Este site não é um substituto para tratamento psicológico profissional. 
          Se você está em crise, procure ajuda especializada.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
