
import React, { useEffect, useRef } from 'react';
import { HeartCrack, HandHeart, LockOpen } from 'lucide-react';

const PainPoints = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => {
      if (textRef.current) observer.disconnect();
      if (imageRef.current) observer.disconnect();
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-nude-light to-purple/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-70 z-0"></div>
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-purple/5 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-purple/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div 
            ref={textRef} 
            className="w-full md:w-1/2 opacity-0 transition-all duration-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <HeartCrack className="text-purple/80 w-7 h-7" strokeWidth={1.5} />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-purple-dark">
                Você sabe que precisa sair...
              </h2>
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-playfair italic text-purple mb-8">
              mas algo te puxa de volta.
            </h3>
            
            <div className="space-y-6 mb-10">
              <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-md border-l-4 border-purple">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold text-purple-dark">São promessas, recaídas, lembranças.</span><br />
                  É o medo de ficar sozinha.<br />
                  <span className="italic">É a dúvida se o problema é com você.</span><br />
                  É o cansaço de viver entre silêncios, cobranças, mentiras ou dependência.
                </p>
              </div>
              
              <div className="flex items-start gap-4 bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-md transform transition-all hover:translate-y-[-5px]">
                <HandHeart className="text-purple w-6 h-6 mt-1 flex-shrink-0" strokeWidth={1.5} />
                <p className="text-lg text-gray-700 leading-relaxed">
                  O <span className="font-bold text-purple">Detox</span> é um espaço seguro pra você entender, 
                  soltar e finalmente <span className="underline decoration-purple decoration-2 underline-offset-4">romper esse padrão</span> sem se culpar.
                  Sem fórmulas mágicas, sem papo enfeitado.
                  <span className="block mt-2 font-semibold text-purple-dark">Apenas você, por você.</span>
                </p>
              </div>
            </div>
            
            <button className="group flex items-center gap-3 bg-white px-6 py-3 rounded-lg shadow-md border border-purple/20 hover:bg-purple hover:text-white transition-all duration-300">
              <LockOpen className="w-5 h-5 text-purple group-hover:text-white transition-colors duration-300" />
              <span className="font-medium">Comece sua jornada de libertação</span>
            </button>
          </div>
          
          <div 
            ref={imageRef}
            className="w-full md:w-1/2 opacity-0 transition-all duration-700 delay-300"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_15px_50px_-15px_rgba(126,105,171,0.3)] group">
              <div className="absolute inset-0 bg-gradient-to-t from-purple/60 to-transparent z-10 opacity-70 group-hover:opacity-50 transition-opacity duration-300"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
                alt="Mulher em jornada de autoconhecimento e libertação emocional" 
                className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-lg border border-white/30">
                  <p className="text-white font-medium italic">"O primeiro passo para a liberdade é reconhecer o que te aprisiona."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="hidden md:block absolute top-1/4 left-1/3 w-16 h-16 rounded-full bg-purple/10 animate-pulse"></div>
      <div className="hidden md:block absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-purple/5 animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default PainPoints;
