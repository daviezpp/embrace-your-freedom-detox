
import React from 'react';
import { ArrowRight, Gift, Check, Sparkles, CreditCard, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingSection = () => {
  const handlePurchaseClick = () => {
    window.open('https://chk.eduzz.com/1675587?_gl=1*1xk4m5e*_ga*MTM0ODg4MDQ5MS4xNzQxMTk2MjQ0*_ga_VL84B9WQ6C*czE3NDY0NzQwNDQkbzQkZzAkdDE3NDY0NzQwNDQkajAkbDAkaDA', '_blank');
  };
  
  return <section id="pricing" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-purple/10 via-purple/20 to-purple/5">
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
                
                {/* Cartões de pagamento - Adicionando ícones de formas de pagamento */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="mb-8 text-center"
                >
                  <p className="text-gray-600 mb-3 text-sm">Aceitamos várias formas de pagamento</p>
                  
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    {/* PIX */}
                    <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-10 h-10">
                          <path d="M242.4 292.5C247.8 287.1 257.1 287.1 262.5 292.5L339.5 369.5C353.7 383.7 372.6 391.5 392.6 391.5H407.7L310.6 294.4C300.7 284.5 300.7 268.5 310.6 258.6L358.6 210.6C368.5 200.7 384.5 200.7 394.4 210.6L488.3 304.5C538.6 354.8 538.6 435.7 488.3 485.9C438 536.2 357.1 536.2 306.9 485.9L254.9 433.9C240.1 447.9 226.1 461 217.7 461C208.5 461 195.3 448.7 182.1 435.6C168.1 421.6 154.3 408 154.3 399.3C154.3 390.8 169 375.9 183.7 361.8L107.5 285.5C102.1 280.1 102.1 270.8 107.5 265.4L184.5 188.5C170.3 174.9 157.7 162 157.7 153.9C157.7 144.7 171.1 131.5 184.2 118.3C198.2 104.3 211.8 90.6 220.5 90.6C228.1 90.6 244 105.2 258.1 120L383.1 245C388.4 250.4 388.4 259.6 383.1 265L334.9 313.1C329.5 318.4 320.3 318.4 314.9 313.1L242.4 240.6C237 235.2 227.7 235.2 222.3 240.6L145.3 317.6C139.9 323 139.9 332.3 145.3 337.7L242.4 434.8V449.9C242.4 469.9 234.6 488.8 220.4 502.9C196 527.3 156.4 527.3 131.9 502.9L23.5 394.4C8.7 379.6 0 359.6 0 338.8C0 318 8.7 298 23.5 283.2L104 202.7C89.7 189 76.7 176.6 76.7 168.3C76.7 159.1 90.1 146 103.3 132.8C117.2 118.8 130.9 105.1 139.6 105.1C148.1 105.1 163.1 119.8 178.1 134.6L242.4 198.5L242.4 292.5z" fill="#32BCAD"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Visa */}
                    <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 500" className="w-10 h-6">
                          <path d="M40,0h700c22.1,0,40,17.9,40,40v420c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40C0,17.9,17.9,0,40,0z" fill="#0E4595"/>
                          <path d="M293.2,348.7l33.4-195.7h53.2l-33.3,195.7H293.2L293.2,348.7z" fill="#ffffff"/>
                          <path d="M518.1,158.3c-10.6-4-27.1-8.2-47.8-8.2c-52.7,0-89.8,26.5-90,64.6c-0.2,28.1,26.5,43.8,46.7,53.2
                            c20.8,9.6,27.7,15.7,27.6,24.3c-0.1,13.1-16.6,19.1-31.9,19.1c-21.3,0-32.7-3-50.2-10.3l-6.9-3.1l-7.5,43.8
                            c12.5,5.5,35.5,10.2,59.4,10.4c56,0,92.4-26.2,92.8-66.7c0.2-22.2-14-39.1-44.8-53c-18.7-9-30.1-15-30-24
                            c0-8,9.6-16.6,30.3-16.6c17.3-0.3,29.9,3.5,39.6,7.4l4.8,2.2L518.1,158.3" fill="#ffffff"/>
                          <path d="M615.5,153L577.4,284c-0.9,4.3-4.6,7.1-7.1,7.1h-61.6l-3.3-11.2c0,0,6.4-11.1,18.3-27.1
                            c0.9,0,21.3,0,30.6,0c1.3,0,2.9-1.3,3.3-2.7l3.8-18c2.4-6.7,16.8-45.5,16.8-45.5c0.1,0.2,0.3,0.3,0.4,0.5
                            c0.1,0.2-0.1-0.3,0,0l0.9,35.6L615.5,153z" fill="#ffffff"/>
                          <path d="M146.7,153h73.4l-14.9,87.3l65.3-87.3h50.1c14.1,0,18.9,4.9,22.4,16l16.3,86.1l15.6-102.1h52.6L389.9,348.7
                            h-49.9l-22.3-115.5l-41.8,115.5h-49.4l1-14l-8.8,14h-79.7L146.7,153z" fill="#ffffff"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Mastercard */}
                    <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 500" className="w-10 h-6">
                          <path d="M490,250c0,99.4-80.6,180-180,180s-180-80.6-180-180s80.6-180,180-180S490,150.6,490,250z" fill="#D9222A"/>
                          <path d="M470,250c0,99.4-80.6,180-180,180s-180-80.6-180-180s80.6-180,180-180S470,150.6,470,250z" fill="#EE9F2D" fill-opacity="0.7"/>
                          <path d="M310,250c0,55.2,44.8,100,100,100s100-44.8,100-100s-44.8-100-100-100S310,194.8,310,250z" fill="#D9222A" fill-opacity="0.8"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* American Express */}
                    <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 500" className="w-10 h-6">
                          <path d="M40,0h700c22.1,0,40,17.9,40,40v420c0,22.1-17.9,40-40,40H40c-22.1,0-40-17.9-40-40V40C0,17.9,17.9,0,40,0z" fill="#006FCF"/>
                          <path d="M615,320.7V309h8.9c2.1,0,4.3,0.4,4.3,3.6c0,3-2.3,3.5-4.3,3.5H615V320.7z M621.3,330.1l5.5-10h-4.5v-15.2h10.6
                            c4.7,0,8,1.4,8,6.6c0,2.9-1.7,5-4.3,5.6l5,9.5h-5.7l-4-8.8h-5v8.8C627,330.1,621.3,330.1,621.3,330.1z M630.7,339.1
                            c12.2,0,22.1-9.8,22.1-22c0-12.1-9.9-21.9-22.1-21.9c-12.2,0-22,9.7-22,21.9C608.7,329.3,618.5,339.1,630.7,339.1L630.7,339.1z
                             M630.7,290.7c14.6,0,26.5,11.8,26.5,26.4c0,14.6-11.9,26.4-26.5,26.4s-26.4-11.8-26.4-26.4C604.3,302.5,616.1,290.7,630.7,290.7
                            L630.7,290.7z M235,340h-27.5l-20.2-33.9L167,340h-65.4l-8.5-19.9l-45.5,0.1L39,340H13.1L55,225h41.5l39.7,92.5l47.2-92.5H230
                            L235,340L235,340z M188.6,255.4l-21.4,45.2h35.6L188.6,255.4L188.6,255.4z M112.7,255.4L93.1,306L73.5,255.4H112.7L112.7,255.4z
                             M425.8,340h-28.9l-0.1-90.8L357.6,340h-20.2l-39.2-90.8l-0.1,90.8h-55.4l-10.5-25.4h-58.6L162.8,340h-30.4l47.6-115h39.5l45.2,106
                            l41.3-106h43L425.8,340L425.8,340z M332.3,285.1l-18.4-44.2l-18.4,44.2H332.3L332.3,285.1z M428.5,340l-0.1-115h80.1l24.2,33.2
                            l24.8-33.2H638v115h-29.6V252h-36.8l-27.6,37.7L517,252h-59v88H428.5L428.5,340z M551,288.7L551,288.7V321h54.9v-19h-36.1v-2.5
                            h36.1v-17.7h-36.1V278h36.1v-17.7H551V288.7L551,288.7z" fill="#FFFFFF"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Boleto */}
                    <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-8 h-8">
                          <path d="M2 4V18H4V20H6V18H8V20H10V18H12V20H14V18H16V20H18V18H20V20H22V18H24V4H2ZM4 8H6V16H4V8ZM8 8H10V16H8V8ZM12 8H14V16H12V8ZM16 8H18V16H16V8ZM20 8H22V16H20V8Z" fill="#505050" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Generic Credit Card Icon */}
                    <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <CreditCard className="w-8 h-8 text-purple" />
                      </div>
                    </div>
                  </div>
                </motion.div>
                
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

export default PricingSection;
