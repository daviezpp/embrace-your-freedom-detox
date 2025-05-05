
import React from 'react';
import { ArrowRight, Gift, Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingSection = () => {
  const handlePurchaseClick = () => {
    window.open('https://chk.eduzz.com/1675587?_gl=1*1xk4m5e*_ga*MTM0ODg4MDQ5MS4xNzQxMTk2MjQ0*_ga_VL84B9WQ6C*czE3NDY0NzQwNDQkbzQkZzAkdDE3NDY0NzQwNDQkajAkbDAkaDA', '_blank');
  };

  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-purple/10 via-purple/20 to-purple/5">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDJhMiAyIDAgMCAxIDIgMnY5OGgyIDE5NnYyaC0yMDB2LTEwMmEyIDIgMCAwIDEgMi0yeiIgZmlsbD0iI2I2YWRkZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-40"></div>
      
      <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-purple/10 filter blur-[100px]"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-purple-light/10 filter blur-[80px]"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-purple-light via-purple to-purple-dark bg-clip-text text-transparent">
              O Detox vale muito mais que isso.
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-light to-purple mx-auto"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Card principal */}
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-purple/20 transform hover:shadow-purple/20 hover:shadow-xl transition-all duration-500">
              
              {/* Cabeçalho de preço com efeito de gradiente */}
              <motion.div 
                className="gradient-bg text-white py-10 px-6 text-center relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Efeitos de iluminação */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent_70%)]"></div>
                <div className="absolute -left-10 top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute -right-10 bottom-5 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                
                <motion.p 
                  className="text-sm uppercase tracking-wider text-purple-light/80 font-medium mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Oferta especial de lançamento
                </motion.p>
                
                <motion.div 
                  className="flex items-center justify-center mb-3 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <span className="text-4xl md:text-6xl font-bold group-hover:scale-110 transition-transform duration-300 flex items-center gap-1">
                    <span className="text-3xl font-normal">R$</span>14<span className="text-2xl">,94</span>
                    <span className="text-xl font-light text-white/80 ml-1">/mês</span>
                  </span>
                </motion.div>
                
                <motion.p 
                  className="text-xl text-white/90"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  ou <span className="font-bold text-2xl">R$147,00</span> à vista
                </motion.p>
                
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-12 bg-white/10 blur-xl rounded-full"></div>
              </motion.div>
              
              {/* Conteúdo dos benefícios */}
              <div className="p-8 md:p-10">
                <motion.p 
                  className="text-center text-xl text-purple-dark font-medium mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Inclui acesso a todos os recursos <span className="font-bold">e mais:</span>
                </motion.p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                  {[
                    { title: "Meditações guiadas exclusivas", subtitle: "Para acalmar sua mente e fortalecer seu espírito" },
                    { title: 'E-book: "Como cortar o laço emocional sem sofrer"', subtitle: "Baseado em técnicas comprovadas de psicologia" },
                    { title: "Grupo de apoio privado", subtitle: "Com mulheres passando pelo mesmo processo" },
                    { title: "Acesso vitalício", subtitle: "Atualizações e melhorias sem custo adicional" }
                  ].map((benefit, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.15, duration: 0.4 }}
                      whileHover={{ 
                        scale: 1.03,
                        boxShadow: "0 10px 30px -15px rgba(126, 105, 171, 0.3)" 
                      }}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-purple/5 transition-all duration-300"
                    >
                      <div className="mt-1">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-light to-purple rounded-lg blur-sm"></div>
                          <div className="relative bg-gradient-to-br from-purple-light to-purple w-10 h-10 rounded-lg flex items-center justify-center shadow-lg">
                            <Gift className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 text-lg">{benefit.title}</p>
                        <p className="text-gray-600 mt-1">{benefit.subtitle}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Botão com animação - Atualizado para abrir o link Eduzz */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-light via-purple to-purple-dark blur-md rounded-lg opacity-80"></div>
                  <button 
                    onClick={handlePurchaseClick}
                    className="relative bg-gradient-to-r from-purple-light via-purple to-purple-dark bg-size-200 animate-gradient-x text-white py-5 px-8 rounded-xl font-medium text-lg shadow-xl hover:shadow-purple/30 hover:shadow-lg transition-all duration-300 w-full flex items-center justify-center gap-3"
                  >
                    <span>Começar agora por R$14,94/mês</span>
                    <motion.div
                      animate={{ 
                        x: [0, 5, 0],
                        opacity: [1, 0.8, 1]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 1.5,
                        ease: "easeInOut" 
                      }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </button>
                </motion.div>
                
                {/* Garantia ou selo */}
                <motion.div 
                  className="mt-6 pt-6 border-t border-purple/10 text-center text-sm text-gray-500 flex items-center justify-center gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <Check className="w-4 h-4 text-purple" />
                  <span>Garantia de 7 dias ou seu dinheiro de volta</span>
                </motion.div>
              </div>
            </div>
            
            {/* Badge flotante */}
            <div className="absolute -top-5 -right-5 md:-right-10">
              <motion.div
                initial={{ rotate: -10, scale: 0.9 }}
                animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
                transition={{ 
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut"
                }}
                className="bg-gradient-to-br from-purple to-purple-dark text-white px-6 py-3 rounded-lg shadow-lg transform rotate-6"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-300" />
                  <span className="font-bold">Tempo limitado</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
