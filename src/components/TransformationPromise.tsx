
import React from 'react';
import { Heart, Search, Smile, Sparkles, Leaf } from 'lucide-react';

const transformationItems = [
  { 
    icon: <Heart className="w-6 h-6 text-purple" />, 
    text: "Rompa ciclos que se repetem" 
  },
  { 
    icon: <Search className="w-6 h-6 text-purple" />, 
    text: "Entenda o que te prende de verdade" 
  },
  { 
    icon: <Smile className="w-6 h-6 text-purple" />, 
    text: "Reconquiste sua paz e clareza emocional" 
  },
  { 
    icon: <Sparkles className="w-6 h-6 text-purple" />, 
    text: "Fortaleça sua autoestima, dia após dia" 
  },
  { 
    icon: <Leaf className="w-6 h-6 text-purple" />, 
    text: "Crie novas escolhas com consciência e leveza" 
  },
];

const TransformationPromise = () => {
  return (
    <section className="py-16 bg-nude-light">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-center text-purple-dark mb-12">
          Você não está sozinha. Mas pode escolher sair desse lugar.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {transformationItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                {item.icon}
              </div>
              <p className="text-lg text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationPromise;
