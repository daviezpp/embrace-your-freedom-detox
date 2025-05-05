
import React from 'react';
import { Check } from 'lucide-react';

const benefits = [
  "Clareza sobre o que está vivendo (e por que repete)",
  "Fim da culpa por querer sair",
  "Fortalecimento emocional real",
  "Técnicas práticas pra cortar vínculos tóxicos",
  "Segurança para não recair",
  "Autonomia emocional pra reconstruir sua vida"
];

const BenefitsList = () => {
  return (
    <section className="py-16 md:py-20 bg-purple bg-opacity-5">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-center text-purple-dark mb-10">
          Você vai conquistar:
        </h2>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <ul className="space-y-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-purple rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg text-gray-700">{benefit}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BenefitsList;
