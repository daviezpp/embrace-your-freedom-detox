
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const GuaranteeSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Fundo com gradiente lilás */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple/30 via-purple/20 to-purple/10 z-0"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-purple-light/20 filter blur-[80px]"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-purple/20 filter blur-[80px]"></div>
      <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDJhMiAyIDAgMCAxIDIgMnY5OGgyIDE5NnYyaC0yMDB2LTEwMmEyIDIgMCAwIDEgMi0yeiIgZmlsbD0iI2I2YWRkZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-30 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-purple/20 p-8 md:p-10"
          >
            {/* Ícone de garantia 3D */}
            <motion.div 
              className="relative w-24 h-24 mx-auto mb-6"
              whileHover={{ 
                scale: 1.05,
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-light to-purple rounded-full blur-md transform -translate-y-1"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-light to-purple rounded-full shadow-lg"></div>
              <div className="relative bg-gradient-to-br from-purple-light to-purple rounded-full w-full h-full flex items-center justify-center shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-white/20 rounded-full"></div>
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/20 rounded-t-full"></div>
                <ShieldCheck className="w-12 h-12 text-white drop-shadow-md relative z-10" />
              </div>
            </motion.div>
            
            {/* Título mais chamativo */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-center mb-8"
            >
              <span className="bg-gradient-to-r from-purple-light via-purple to-purple-dark bg-clip-text text-transparent">
                15 dias para se permitir
              </span>
              <br/>
              <span className="relative inline-block">
                <span className="relative z-10">Ou seu dinheiro de volta</span>
                <motion.span 
                  className="absolute bottom-1 left-0 right-0 h-3 bg-purple/20 -z-10 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                ></motion.span>
              </span>
            </motion.h2>
            
            {/* Texto melhor disposto */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4 text-center"
            >
              <p className="text-xl text-gray-700">
                Se após acessar o Detox você sentir que não é pra você, 
                <br/><span className="font-medium text-purple-dark">é só pedir reembolso.</span>
              </p>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-lg text-gray-600 italic"
              >
                Sem julgamentos. Sem burocracia.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-xl font-medium text-purple-dark pt-2"
              >
                Você só continua se fizer sentido no seu coração.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default GuaranteeSection;
