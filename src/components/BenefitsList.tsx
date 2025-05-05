
import React from 'react';
import { Check, Sparkles, Lightbulb, Key, ShieldCheck, Gauge, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

// Map icons to replace emojis with 3D-like icons
const iconMap = {
  "benefit-1": Lightbulb,
  "benefit-2": Key,
  "benefit-3": ShieldCheck,
  "benefit-4": Gauge,
  "benefit-5": ShieldCheck,
  "benefit-6": Rocket
};

const benefits = [
  {
    id: "benefit-1",
    text: "Clareza absoluta para entender seu padrão emocional (e por que ele se repete)",
    color: "from-purple-light to-purple"
  },
  {
    id: "benefit-2",
    text: "Liberdade da culpa que te prende a relações prejudiciais",
    color: "from-purple to-purple-dark"
  },
  {
    id: "benefit-3",
    text: "Fortalecimento emocional genuíno e duradouro",
    color: "from-purple-light to-purple"
  },
  {
    id: "benefit-4",
    text: "Arsenal de técnicas poderosas para cortar vínculos tóxicos",
    color: "from-purple to-purple-dark"
  },
  {
    id: "benefit-5",
    text: "Segurança inabalável para não recair em relacionamentos nocivos",
    color: "from-purple-light to-purple"
  },
  {
    id: "benefit-6",
    text: "Autonomia plena para reconstruir sua vida em seus próprios termos",
    color: "from-purple to-purple-dark"
  }
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
          {/* Redesigned container */}
          <div className="bg-gradient-to-br from-white/90 to-purple/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-purple/20 p-10 md:p-14 relative overflow-hidden">
            {/* Glass-like decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-light/10 rounded-full blur-3xl"></div>
            
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5 mix-blend-overlay"
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                   backgroundSize: '30px 30px'
                 }}
            ></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              {benefits.map((benefit, index) => {
                const IconComponent = iconMap[benefit.id];
                
                return (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    className="relative"
                  >
                    {/* Modernized benefit card with frosted glass effect */}
                    <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/40 h-full relative z-10 overflow-hidden group hover:translate-y-[-5px] transition-all duration-500 hover:shadow-purple/20 hover:shadow-xl">
                      {/* Animated gradient background on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-purple/5 to-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                      
                      {/* Dynamic 3D Icon */}
                      <div className="relative z-20 mb-4 group-hover:scale-110 transition-transform duration-300 transform-gpu">
                        <div className={`absolute -inset-1 bg-gradient-to-br ${benefit.color} rounded-xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`}></div>
                        <div className={`flex items-center justify-center w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl shadow-lg transform-gpu`}>
                          <IconComponent className="w-7 h-7 text-white drop-shadow-md" />
                        </div>
                      </div>
                      
                      {/* Text content with improved typography */}
                      <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed relative z-20 mt-2 group-hover:text-purple-dark transition-colors duration-300">
                        {benefit.text.includes("(") 
                          ? benefit.text.split("(").map((part, i) => 
                              i === 0 
                                ? <span key={i}>{part}</span> 
                                : <span key={i} className="text-purple-light italic font-bold">({part}</span>
                            )
                          : benefit.text
                        }
                      </p>
                      
                      {/* Redesigned check element */}
                      <div className="absolute -bottom-3 -right-3 w-12 h-12 z-30 transition-transform duration-300 group-hover:scale-110">
                        <div className="absolute inset-0 bg-white/80 rounded-full blur-md"></div>
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-light via-purple to-purple-dark rounded-full shadow-lg border-2 border-white">
                          <Check className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-16 text-center"
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
