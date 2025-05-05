
import React, { useEffect, useRef } from 'react';
import { HeartCrack, HandHeart, LockOpen } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { scrollToPricing } from '@/utils/scrollUtils';
import { useIsMobile } from '@/hooks/use-mobile';

const PainPoints = () => {
  const isMobile = useIsMobile();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (contentRef.current) observer.disconnect();
    };
  }, []);

  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] overflow-hidden">
      {/* Background Image with Blur Transition */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80')",
            maskImage: "linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)"
          }}
        >
          {/* Blur filter on the left side */}
          <div className="absolute inset-0 backdrop-blur-md bg-purple/10"
               style={{ 
                 maskImage: "linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
                 WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)"
               }}>
          </div>
        </div>
      </div>
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple/80 via-purple/40 to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10 h-full">
        <div className="flex flex-col h-full justify-center py-16 md:py-24 max-w-full md:max-w-2xl">
          <div 
            ref={contentRef} 
            className="opacity-0 transition-all duration-700"
          >
            {/* Enhanced title styling */}
            <div className="mb-6 md:mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-3 md:mb-4 leading-tight drop-shadow-md">
                Você sabe que <span className="text-nude-light italic">precisa sair...</span>
              </h2>
              <h3 className="text-lg sm:text-xl md:text-3xl font-playfair italic text-nude-light drop-shadow-sm">
                mas algo te puxa de volta.
              </h3>
            </div>
            
            <div className="space-y-4 md:space-y-8 mb-8 md:mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-4 md:p-8 rounded-xl border border-white/20 shadow-xl transition-all duration-300 hover:bg-white/15">
                <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
                  <span className="font-semibold text-nude-light">São promessas, recaídas, lembranças.</span> É o medo de ficar sozinha. <span className="italic">É a dúvida se o problema é com você.</span> É o cansaço de viver entre silêncios, cobranças, mentiras ou dependência.
                </p>
              </div>
              
              <div className="flex items-start gap-3 md:gap-5 bg-white/15 backdrop-blur-md p-4 md:p-8 rounded-xl border border-white/20 shadow-xl transform transition-all hover:translate-y-[-5px] hover:bg-white/20">
                <HandHeart className="text-nude-light w-6 h-6 md:w-8 md:h-8 mt-1 flex-shrink-0" strokeWidth={1.5} />
                <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
                  O <span className="font-bold text-nude-light">Detox</span> é um espaço seguro pra você entender, 
                  soltar e finalmente <span className="underline decoration-nude-light decoration-2 underline-offset-4">romper esse padrão</span> sem se culpar.
                  Sem fórmulas mágicas, sem papo enfeitado.
                  <span className="block mt-2 md:mt-3 font-semibold text-nude-light">Apenas você, por você.</span>
                </p>
              </div>
            </div>
            
            <Button 
              onClick={scrollToPricing}
              className="group bg-white/20 hover:bg-white/30 border border-white/30 text-white px-6 md:px-8 py-3 md:py-6 rounded-xl text-base md:text-lg font-medium transition-all duration-300"
            >
              <LockOpen className="w-4 h-4 md:w-5 md:h-5 mr-2 transition-transform duration-300 group-hover:rotate-12" />
              Comece sua jornada de libertação
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-[20%] right-[15%] w-16 md:w-24 h-16 md:h-24 rounded-full bg-purple-light/20 blur-2xl animate-pulse z-0"></div>
      <div className="absolute bottom-[30%] right-[25%] w-24 md:w-32 h-24 md:h-32 rounded-full bg-purple-light/10 blur-2xl animate-pulse z-0" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
};

export default PainPoints;
