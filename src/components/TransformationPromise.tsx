
import React, { useEffect, useRef } from 'react';
import { Heart, Search, Smile, Sparkles, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const transformationItems = [
  { 
    icon: <Heart className="w-6 h-6 md:w-8 md:h-8 text-purple drop-shadow-md" strokeWidth={1.5} />, 
    title: "Rompa ciclos",
    text: "que se repetem" 
  },
  { 
    icon: <Search className="w-6 h-6 md:w-8 md:h-8 text-purple drop-shadow-md" strokeWidth={1.5} />, 
    title: "Entenda o que",
    text: "te prende de verdade" 
  },
  { 
    icon: <Smile className="w-6 h-6 md:w-8 md:h-8 text-purple drop-shadow-md" strokeWidth={1.5} />, 
    title: "Reconquiste sua paz",
    text: "e clareza emocional" 
  },
  { 
    icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-purple drop-shadow-md" strokeWidth={1.5} />, 
    title: "Fortaleça sua autoestima,",
    text: "dia após dia" 
  },
  { 
    icon: <Leaf className="w-6 h-6 md:w-8 md:h-8 text-purple drop-shadow-md" strokeWidth={1.5} />, 
    title: "Crie novas escolhas",
    text: "com consciência e leveza" 
  },
];

const TransformationPromise = () => {
  const isMobile = useIsMobile();
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Only apply the parallax effect on desktop
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      itemsRef.current.forEach((item, index) => {
        if (item) {
          // Create a staggered parallax effect with different speeds for each item
          const speed = 0.05 + (index * 0.01);
          const yPos = -scrollY * speed;
          item.style.transform = `translateY(${yPos}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  return (
    <section className="py-16 md:py-24 bg-nude-light relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-center mb-10 md:mb-16">
          <span className="text-purple-dark block">Você não está sozinha.</span>
          <span className="text-purple text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 block">Mas pode escolher sair desse lugar.</span>
          <span className="relative inline-block mt-4 after:content-[''] after:absolute after:w-16 md:after:w-24 after:h-1 after:bg-purple after:bottom-[-12px] after:left-1/2 after:-translate-x-1/2"></span>
        </h2>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Hexagon-like layout for odd number of cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {/* Top row - 2 cards (1 card per row on mobile) */}
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 md:px-8 lg:px-16 mb-4 md:mb-6 lg:mb-8">
              {transformationItems.slice(0, 2).map((item, index) => (
                <motion.div 
                  key={index}
                  ref={el => itemsRef.current[index] = el}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="transform transition-all duration-300 hover:-translate-y-2 hover:rotate-1 p-4 md:p-6 lg:p-8 bg-white/90 rounded-2xl shadow-[0_10px_20px_rgba(126,105,171,0.1)] hover:shadow-[0_15px_30px_rgba(126,105,171,0.2)] backdrop-blur-sm border border-purple/5"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-3 md:mb-5 p-3 md:p-4 bg-nude-light rounded-full flex items-center justify-center shadow-inner">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {item.icon}
                      </motion.div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-purple-dark mb-1 md:mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Middle row - 1 card (center feature) */}
            <div className="md:col-span-3 flex justify-center mb-4 md:mb-6 lg:mb-8">
              <motion.div 
                key={2}
                ref={el => itemsRef.current[2] = el}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="transform transition-all duration-300 hover:-translate-y-2 hover:rotate-1 p-4 md:p-6 lg:p-8 bg-white/90 rounded-2xl shadow-[0_10px_20px_rgba(126,105,171,0.15)] hover:shadow-[0_20px_40px_rgba(126,105,171,0.25)] backdrop-blur-sm border border-purple/10 w-full md:w-2/3"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 md:mb-5 p-4 md:p-5 bg-nude rounded-full flex items-center justify-center shadow-inner">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="text-purple"
                    >
                      {transformationItems[2].icon}
                    </motion.div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-purple-dark mb-1 md:mb-2">{transformationItems[2].title}</h3>
                  <p className="text-gray-600 text-base md:text-lg">{transformationItems[2].text}</p>
                </div>
              </motion.div>
            </div>
            
            {/* Bottom row - 2 cards (1 card per row on mobile) */}
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 md:px-8 lg:px-16">
              {transformationItems.slice(3, 5).map((item, index) => (
                <motion.div 
                  key={index + 3}
                  ref={el => itemsRef.current[index + 3] = el}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + 0.4) * 0.1 }}
                  viewport={{ once: true }}
                  className="transform transition-all duration-300 hover:-translate-y-2 hover:rotate-1 p-4 md:p-6 lg:p-8 bg-white/90 rounded-2xl shadow-[0_10px_20px_rgba(126,105,171,0.1)] hover:shadow-[0_15px_30px_rgba(126,105,171,0.2)] backdrop-blur-sm border border-purple/5"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-3 md:mb-5 p-3 md:p-4 bg-nude-light rounded-full flex items-center justify-center shadow-inner">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {item.icon}
                      </motion.div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-purple-dark mb-1 md:mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-48 md:w-64 h-48 md:h-64 bg-purple/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-64 md:w-80 h-64 md:h-80 bg-purple/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default TransformationPromise;
