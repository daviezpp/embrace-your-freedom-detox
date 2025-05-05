
import React from 'react';

const PainPoints = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-purple-dark mb-6">
              Você sabe que precisa sair... mas algo te puxa de volta.
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-lg text-gray-700">
                São promessas, recaídas, lembranças.<br />
                É o medo de ficar sozinha.<br />
                É a dúvida se o problema é com você.<br />
                É o cansaço de viver entre silêncios, cobranças, mentiras ou dependência.
              </p>
              
              <p className="text-lg text-gray-700 mt-6">
                O Detox é um espaço seguro pra você entender, soltar e finalmente romper esse padrão sem se culpar.
                Sem fórmulas mágicas, sem papo enfeitado.
                Apenas você, por você.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80" 
              alt="Mulher em jornada de autoconhecimento e liberdade" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
