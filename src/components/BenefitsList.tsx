import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  "✨ Clareza absoluta para entender seu padrão emocional (e por que ele se repete)",
  "🔓 Liberdade da culpa que te prende a relações prejudiciais",
  "💪 Fortalecimento emocional genuíno e duradouro",
  "🛡️ Arsenal de técnicas poderosas para cortar vínculos tóxicos",
  "🔒 Segurança inabalável para não recair em relacionamentos nocivos",
  "🚀 Autonomia plena para reconstruir sua vida em seus próprios termos"
];

const BenefitsList = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-purple/5 to-purple/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-nude/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold text-center text-purple-dark mb-3">
            Você vai <span className="text-purple italic bg-gradient-to-r from-purple-light to-purple bg-clip-text text-transparent">transformar sua vida</span>:
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-light to-purple mx-auto"></div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-purple/10 transform hover:shadow-2xl transition-all duration-500 backdrop-blur-sm bg-white/90">
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-light to-purple rounded-full flex items-center justify-center mt-1 shadow-md shadow-purple/20 group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  
                  <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed group-hover:text-purple transition-colors duration-300">
                    {benefit.includes("(") 
                      ? benefit.split("(").map((part, i) => 
                          i === 0 
                            ? <span key={i}>{part}</span> 
                            : <span key={i} className="text-purple-light italic font-bold">({part}</span>
                        )
                      : <span dangerouslySetInnerHTML={{ __html: benefit.replace(/✨|🔓|💪|🛡️|🔒|🚀/g, '<span class="text-2xl md:text-3xl mr-1">$&</span>') }} />
                    }
                  </p>
                </motion.li>
              ))}
            </ul>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-12 text-center"
            >
              <button className="bg-gradient-to-r from-purple-light via-purple to-purple-dark bg-size-200 animate-gradient-x text-white transition-all duration-300 py-4 px-10 rounded-xl font-medium text-lg shadow-xl hover:shadow-purple/30 hover:shadow-lg transform hover:translate-y-[-5px] group">
                <span className="flex items-center gap-2">
                  Quero começar agora
                  <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
                </span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsList;
