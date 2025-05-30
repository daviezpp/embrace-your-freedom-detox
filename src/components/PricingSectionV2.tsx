
import React from 'react';
import { ArrowRight, Gift, Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingSectionV2 = () => {
  const handlePurchaseClick = () => {
    window.open('https://chk.eduzz.com/1675587?_gl=1*1xk4m5e*_ga*MTM0ODg4MDQ5MS4xNzQxMTk2MjQ0*_ga_VL84B9WQ6C*czE3NDY0NzQwNDQkbzQkZzAkdDE3NDY0NzQwNDQkajAkbDAkaDA', '_blank');
  };

  // Define the payment methods here - easy for developers to edit
  const paymentMethods = [{
    id: 'credit-card',
    name: "Cartão de Crédito",
    imgSrc: "/payment-credit-card.png"
  }, {
    id: 'boleto',
    name: "Boleto",
    imgSrc: "/payment-boleto.png"
  }, {
    id: 'crypto',
    name: "Crypto",
    imgSrc: "/payment-crypto.png"
  }, {
    id: 'outros',
    name: "Outros",
    imgSrc: "/payment-outros.png"
  }];

  return <section id="pricing-v2" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-purple/10 via-purple/20 to-purple/5">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDJhMiAyIDAgMCAxIDIgMnY5OGgyIDE5NnYyaC0yMDB2LTEwMmEyIDIgMCAwIDEgMi0yeiIgZmlsbD0iI2I2YWRkZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-40"></div>
      
      <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-purple/10 filter blur-[100px]"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-purple-light/10 filter blur-[80px]"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.7
      }} className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-purple-light via-purple to-purple-dark bg-clip-text text-transparent">
              O Detox vale muito mais que isso.
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-light to-purple mx-auto"></div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="relative">
            {/* Card principal */}
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-purple/20 transform hover:shadow-purple/20 hover:shadow-xl transition-all duration-500">
              
              {/* Cabeçalho de preço com efeito de gradiente - Redesenhado para destacar mais o preço */}
              <motion.div className="gradient-bg text-white py-12 px-6 text-center relative overflow-hidden" whileHover={{
              scale: 1.02
            }} transition={{
              duration: 0.3
            }}>
                {/* Efeitos de iluminação */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent_70%)]"></div>
                <div className="absolute -left-10 top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute -right-10 bottom-5 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                
                <motion.p className="text-sm uppercase tracking-wider text-yellow-300 font-bold mb-2" initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} transition={{
                delay: 0.2
              }}>
                  Oferta especial de lançamento
                </motion.p>
                
                {/* Preço riscado */}
                <motion.div className="flex items-center justify-center mb-3" initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} transition={{
                delay: 0.2
              }}>
                  <span className="text-lg text-white/90 line-through decoration-red-500 decoration-2">
                    de R$297,00
                  </span>
                </motion.div>
                
                <motion.div className="flex flex-col items-center justify-center mb-3 group" initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                delay: 0.3,
                duration: 0.5
              }}>
                  <span className="text-2xl text-white/90">por apenas</span>
                  <span className="text-5xl md:text-7xl font-bold group-hover:scale-110 transition-transform duration-300 flex items-center gap-1">
                    <span className="text-3xl font-normal">R$</span>6<span className="text-3xl">,70</span>
                    <span className="text-xl font-light text-white/80 ml-1">/mês</span>
                  </span>
                </motion.div>
                
                <motion.p className="text-xl text-white/90" initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} transition={{
                delay: 0.4
              }}>
                  ou <span className="font-bold text-2xl">R$67,00</span> à vista
                </motion.p>
                
                {/* Imagem dos métodos de pagamento - tamanho atualizado para 65% mobile e 45% desktop */}
                <div className="flex justify-center mt-4">
                  <img 
                    src="/lovable-uploads/78a4d77b-3ac4-4279-8602-03c30ea538d2.png" 
                    alt="Métodos de pagamento aceitos" 
                    className="w-[65%] md:w-[45%] h-auto opacity-65" 
                  />
                </div>
                
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-12 bg-white/10 blur-xl rounded-full"></div>
              </motion.div>
              
              {/* Conteúdo dos benefícios */}
              <div className="p-8 md:p-10">
                <motion.p className="text-center text-xl text-purple-dark font-medium mb-8" initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} transition={{
                delay: 0.5
              }}>
                  Inclui acesso a todos os recursos <span className="font-bold">e mais:</span>
                </motion.p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                  {[{
                  title: "Checklist da Mulher que se Escolhe",
                  subtitle: "Um plano prático de 7 dias com ações simples e profundas pra te reconectar com Deus e com você mesma."
                }, {
                  title: 'Frases de Reforço Emocional',
                  subtitle: "30 frases pra imprimir, colar no espelho ou salvar no celular — pra lembrar quem você é, mesmo nos dias mais difíceis."
                }, {
                  title: "Mini Guia – Sinais de Manipulação Emocional",
                  subtitle: "Um material claro e direto com os principais comportamentos que confundem, silenciam e adoecem."
                }, {
                  title: "Plenamente – Guia de Meditações de Bolso",
                  subtitle: "Meditações cristãs guiadas e curtas para usar nos momentos de crise, ansiedade ou sobrecarga emocional."
                }].map((benefit, index) => <motion.div key={index} initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: 0.2 + index * 0.15,
                  duration: 0.4
                }} whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 30px -15px rgba(126, 105, 171, 0.3)"
                }} className="flex items-start gap-4 p-4 rounded-xl hover:bg-purple/5 transition-all duration-300">
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
                    </motion.div>)}
                </div>
                
                {/* Botão verde com animação - Atualizado para abrir o link Eduzz */}
                <motion.div whileHover={{
                scale: 1.03
              }} whileTap={{
                scale: 0.98
              }} className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 blur-md rounded-lg opacity-80"></div>
                  <button onClick={handlePurchaseClick} className="relative bg-gradient-to-r from-green-400 to-green-600 bg-size-200 animate-gradient-x text-white py-5 px-8 rounded-xl font-medium text-lg shadow-xl hover:shadow-green-500/30 hover:shadow-lg transition-all duration-300 w-full flex items-center justify-center gap-3">
                    <span>Começar agora por 12x de R$6,70</span>
                    <motion.div animate={{
                    x: [0, 5, 0],
                    opacity: [1, 0.8, 1]
                  }} transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut"
                  }}>
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </button>
                </motion.div>
                
                {/* Garantia ou selo */}
                <motion.div className="mt-6 pt-6 border-t border-purple/10 text-center text-sm text-gray-500 flex items-center justify-center gap-2" initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.8
              }}>
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Garantia de 7 dias ou seu dinheiro de volta</span>
                </motion.div>
              </div>
            </div>
            
            {/* Badge flotante */}
            <div className="absolute -top-5 -right-5 md:-right-10">
              <motion.div initial={{
              rotate: -10,
              scale: 0.9
            }} animate={{
              rotate: [0, 5, 0],
              scale: [1, 1.05, 1]
            }} transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut"
            }} className="bg-gradient-to-br from-purple to-purple-dark text-white px-6 py-3 rounded-lg shadow-lg transform rotate-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-300" />
                  <span className="font-bold">Tempo limitado</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default PricingSectionV2;
