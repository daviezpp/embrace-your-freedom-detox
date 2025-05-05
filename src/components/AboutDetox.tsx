
import React from 'react';

const AboutDetox = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80" 
              alt="Processo de cura e limpeza emocional" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-purple-dark mb-6">
              O Detox não é uma aula. É um processo de limpeza emocional.
            </h2>
            
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Durante 4 semanas, você vai se reconectar com sua verdade interior, entender por que aceita tão pouco e aprender a se colocar em primeiro lugar, com firmeza e afeto.
              </p>
              
              <p className="text-lg text-gray-700">
                Você vai entender o que trava sua saída, o que alimenta sua recaída e o que precisa nascer em você.
              </p>
              
              <div className="mt-6 p-6 bg-nude rounded-lg">
                <p className="text-lg font-medium text-purple-dark">Formato:</p>
                <p className="text-lg text-gray-700">
                  Aulas gravadas + exercícios profundos + guias práticos + apoio contínuo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetox;
