
import React, { useEffect, useRef } from 'react';
import { Heart, Search, Smile, Sparkles, Leaf } from 'lucide-react';

const transformationItems = [
  { 
    icon: <Heart className="w-8 h-8 text-purple drop-shadow-md" strokeWidth={1.5} />, 
    title: "Rompa ciclos",
    text: "que se repetem" 
  },
  { 
    icon: <Search className="w-8 h-8 text-purple drop-shadow-md" strokeWidth={1.5} />, 
    title: "Entenda o que",
    text: "te prende de verdade" 
  },
  { 
    icon: <Smile className="w-8 h-8 text-purple drop-shadow-md" strokeWidth={1.5} />, 
    title: "Reconquiste sua paz",
    text: "e clareza emocional" 
  },
  { 
    icon: <Sparkles className="w-8 h-8 text-purple drop-shadow-md" strokeWidth={1.5} />, 
    title: "Fortaleça sua autoestima,",
    text: "dia após dia" 
  },
  { 
    icon: <Leaf className="w-8 h-8 text-purple drop-shadow-md" strokeWidth={1.5} />, 
    title: "Crie novas escolhas",
    text: "com consciência e leveza" 
  },
];

const TransformationPromise = () => {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      itemsRef.current.forEach((item, index) => {
        if (item) {
          // Create a staggered parallax effect with different speeds for each item
          const speed = 0.05 + (index * 0.01);
          const yPos = -scrollY * speed;
          item.style.transform = `translateY(${yPos}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="py-24 bg-nude-light relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-center text-purple-dark mb-16 relative">
          <span className="relative inline-block after:content-[''] after:absolute after:w-24 after:h-1 after:bg-purple after:bottom-[-12px] after:left-1/2 after:-translate-x-1/2">
            Você não está sozinha. Mas pode escolher sair desse lugar.
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {transformationItems.map((item, index) => (
            <div 
              key={index}
              ref={el => itemsRef.current[index] = el}
              className="transform transition-all duration-300 hover:-translate-y-2 p-8 bg-white/90 rounded-xl shadow-[0_10px_20px_rgba(126,105,171,0.1)] hover:shadow-[0_15px_30px_rgba(126,105,171,0.2)] backdrop-blur-sm"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-nude-light rounded-full flex items-center justify-center shadow-inner animate-pulse">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-purple-dark mb-1">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default TransformationPromise;
