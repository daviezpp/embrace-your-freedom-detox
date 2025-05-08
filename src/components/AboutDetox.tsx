
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollToPricing } from '@/utils/scrollUtils';
import { useIsMobile } from '@/hooks/use-mobile';

const AboutDetox = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative py-16 md:py-28 overflow-hidden">
      {/* Background image with blur effect */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80')",
          filter: "blur(6px) brightness(0.5)"
        }}
      />
      
      {/* Colored overlay */}
      <div className="absolute inset-0 bg-purple/60 z-10"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 md:px-8 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-4 md:mb-6 text-white leading-tight">
            Você <span className="italic text-nude">não precisa</span> mais se perder por amor.
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-12 text-white/90 max-w-2xl mx-auto font-medium px-2">
            Existe um caminho de volta pra você mesma. 
            Ele começa com esse Detox.
          </p>
          
          {/* Format highlight box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 mb-8 md:mb-10 border border-white/20 shadow-xl">
            <h3 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4 text-nude">Formato</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 text-white">
              <motion.li 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-3 md:p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <span className="block text-base md:text-lg font-medium">100% Online</span>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="p-3 md:p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <span className="block text-base md:text-lg font-medium">Acesso Vitalício</span>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="p-3 md:p-4 bg-white/5 rounded-lg border border-white/10 sm:col-span-2 md:col-span-1"
              >
                <span className="block text-base md:text-lg font-medium">Comunidade de Apoio</span>
              </motion.li>
            </ul>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={scrollToPricing}
              className="bg-gradient-to-r from-green-400 to-green-600 bg-size-200 animate-gradient-x text-white transition-all duration-300 py-3 md:py-4 px-6 md:px-8 rounded-md flex items-center gap-2 mx-auto font-medium text-base md:text-lg shadow-xl hover:shadow-green-500/30 hover:shadow-lg"
            >
              Quero viver essa transformação
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutDetox;
