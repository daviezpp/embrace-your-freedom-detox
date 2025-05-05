
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToPricing } from '@/utils/scrollUtils';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80)' }}></div>
      
      {/* Overlay with Logo */}
      <div className="absolute inset-0 bg-purple-dark/60 z-10 flex flex-col items-center">
        <img 
          src="/lovable-uploads/2f4d366e-bf85-46b0-be19-53216d65d766.png" 
          alt="Logo Tornar-me Eu" 
          className="w-24 h-auto mt-6 object-contain"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-playfair mb-6">
            Liberte-se de <span className="text-purple-light">Relacionamentos Tóxicos</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8">
            Método exclusivo para mulheres que desejam superar dependência emocional e reconstruir sua autoestima
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="px-8 py-6 text-lg bg-gradient-to-r from-purple-light to-purple bg-size-200 animate-gradient-x"
              onClick={scrollToPricing}
            >
              Comece Agora
              <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
          
          <p className="text-white/80 mt-6 text-sm">
            Mais de 3.000 mulheres já transformaram suas vidas
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
