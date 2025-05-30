
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToPricing } from '@/utils/scrollUtils';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80)'
      }}></div>
      
      {/* Overlay with Logo - Added backdrop blur effect */}
      <div className="absolute inset-0 bg-purple-dark/30 backdrop-blur-md z-10 flex flex-col items-center">
        <img src="/lovable-uploads/2f4d366e-bf85-46b0-be19-53216d65d766.png" alt="Logo Tornar-me Eu" className="w-16 md:w-24 h-auto mt-4 md:mt-6 object-contain" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white font-playfair mb-4 md:mb-6">
            Liberte-se de <span className="text-slate-50 font-extrabold">Relacionamentos Tóxicos</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-6 md:mb-8 px-2">
            Método exclusivo para mulheres que desejam superar dependência emocional e reconstruir sua autoestima
          </p>
          
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="px-6 md:px-8 py-4 md:py-6 text-base md:text-lg bg-gradient-to-r from-green-400 to-green-600 bg-size-200 animate-gradient-x shadow-xl hover:shadow-green-500/30" 
              onClick={scrollToPricing}
            >
              Comece Agora
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </motion.div>
          
          <p className="text-white/80 mt-4 md:mt-6 text-xs md:text-sm">
            Mais de 3.000 mulheres já transformaram suas vidas
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
