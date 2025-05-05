
import React from 'react';
import { ArrowRight } from 'lucide-react';

const PricingSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-center text-purple-dark mb-10">
          O Detox vale muito mais que isso.
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="gradient-bg text-white py-8 px-6 text-center">
              <p className="text-2xl md:text-3xl font-bold mb-3">12x de R$14,94</p>
              <p className="text-lg">ou R$147,00 à vista</p>
              <p className="text-sm mt-3 italic">(oferta especial de lançamento)</p>
            </div>
            
            <div className="p-8">
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="text-2xl text-purple">🎁</div>
                  <div>
                    <p className="font-medium text-gray-800">Meditações guiadas exclusivas</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-2xl text-purple">🎁</div>
                  <div>
                    <p className="font-medium text-gray-800">E-book: "Como cortar o laço emocional sem sofrer"</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-2xl text-purple">🎁</div>
                  <div>
                    <p className="font-medium text-gray-800">Grupo de apoio privado com mulheres no mesmo processo</p>
                  </div>
                </div>
              </div>
              
              <button className="btn-primary w-full justify-center">
                Começar agora por R$14,94/mês
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
