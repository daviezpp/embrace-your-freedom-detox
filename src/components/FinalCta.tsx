
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { scrollToPricing } from '@/utils/scrollUtils';
import { useIsMobile } from '@/hooks/use-mobile';

const FinalCta = () => {
  const isMobile = useIsMobile();
  
  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToPricing();
  };
  
  return <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-light/20 via-purple/10 to-white/5 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-light/10 rounded-full filter blur-[80px]"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple/10 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Highlight Title Section */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }} className="text-center mb-10 md:mb-16">
            <h2 className="inline-block text-2xl md:text-3xl lg:text-5xl font-playfair font-bold relative">
              <span className="bg-gradient-to-r from-purple-light via-purple to-purple-dark bg-clip-text text-transparent">
                Quem são Elaine e Cris?
              </span>
              <motion.span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-light to-purple-dark" initial={{
              width: 0
            }} whileInView={{
              width: '100%'
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8,
              delay: 0.3
            }}></motion.span>
            </h2>
          </motion.div>
          
          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image column */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7
          }} className="md:order-1 order-2 flex justify-center">
              <Card className="overflow-hidden rounded-2xl border-purple/20 shadow-xl max-w-sm w-full bg-white/80 backdrop-blur-sm">
                <div className="relative w-full">
                  <img src="/lovable-uploads/321cac09-eca1-448a-8e16-ede821477d6f.png" alt="Elaine e Cris, fundadoras da Tornar-me Eu" className="object-cover w-full h-auto" />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/40 to-transparent px-0"></div>
                  
                  {/* Founder Avatars */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4">
                    
                    
                  </div>
                </div>
              </Card>
            </motion.div>
            
            {/* Text Content */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7,
            delay: 0.2
          }} className="md:order-2 order-1">
              <CardContent className="space-y-4 md:space-y-6 px-0">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Elaine e Cris são terapeutas e mentoras com mais de 15 anos de experiência ajudando mulheres a se libertarem de relacionamentos tóxicos e reconectarem com sua essência.
                </p>
                
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Após perceberem um padrão recorrente de mulheres inteligentes e bem-sucedidas que se perdiam em ciclos de relacionamentos prejudiciais, elas desenvolveram o método <span className="font-medium text-purple-dark">Detox Sagrado</span>, que já transformou a vida de mais de 3.000 mulheres.
                </p>
                
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Seu trabalho é baseado em uma abordagem integrativa que combina psicologia, neurociência e práticas de autoconhecimento, criando um caminho seguro para a recuperação da autoestima e independência emocional.
                </p>
                
                <motion.div whileHover={{
                scale: 1.03
              }} whileTap={{
                scale: 0.97
              }} className="pt-4">
                  <Button 
                    className="w-full md:w-auto bg-gradient-to-r from-green-400 to-green-600 bg-size-200 animate-gradient-x shadow-md hover:shadow-green-500/20 final-cta-button text-sm md:text-base" 
                    onClick={handleButtonClick}
                  >
                    Comece sua jornada agora
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </motion.div>
              </CardContent>
            </motion.div>
          </div>
        </div>
      </div>
    </section>;
};

export default FinalCta;
