
import React from 'react';

const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80",
    quote: "A Carol saiu de um relacionamento de 7 anos e voltou a dormir em paz."
  },
  {
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80",
    quote: "A Vanessa entendeu o ciclo e disse não com firmeza."
  },
  {
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80",
    quote: "A Jéssica achou que não ia aguentar… hoje é ela quem escolhe."
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-20 bg-purple bg-opacity-5">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-center text-purple-dark mb-10">
          Elas começaram desacreditadas... e hoje se sentem inteiras.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={testimonial.image} 
                  alt={`Testemunho ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-lg text-gray-700 italic font-medium">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
