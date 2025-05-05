
import React, { useEffect, useCallback } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from '@/hooks/use-mobile';

const testimonials = [
  {
    name: "Fernanda Oliveira",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    quote: "Depois de 3 anos em um relacionamento que me consumia, o Detox me deu forças para seguir em frente. Hoje me sinto livre e renovada."
  },
  {
    name: "Juliana Costa",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    quote: "Achei que nunca conseguiria sair daquele ciclo. O Detox me ajudou a entender os padrões e hoje tenho um relacionamento saudável."
  },
  {
    name: "Carolina Santos",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
    quote: "Eu me culpava todos os dias. Hoje entendo que mereço mais e tenho coragem para dizer não."
  },
  {
    name: "Amanda Rodrigues",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
    quote: "As ferramentas que aprendi no Detox mudaram completamente minha visão do que é um relacionamento saudável."
  },
  {
    name: "Beatriz Almeida",
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&q=80",
    quote: "Seis meses depois do Detox, encontrei um parceiro que me respeita e valoriza. A diferença é gritante!"
  },
  {
    name: "Mariana Lima",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80",
    quote: "Pensava que estava sozinha nessa luta. No Detox encontrei apoio e compreensão para finalmente seguir em frente."
  },
  {
    name: "Camila Ferreira",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    quote: "Minha autoestima estava destruída. Hoje me olho no espelho e vejo uma mulher forte que sabe o que merece."
  },
  {
    name: "Renata Vieira",
    image: "https://images.unsplash.com/photo-1599842057874-37393e9342df?auto=format&fit=crop&q=80",
    quote: "Eu tinha medo do futuro. O Detox me mostrou que há um caminho de cura e felicidade depois de um relacionamento tóxico."
  }
];

const Testimonials = () => {
  const isMobile = useIsMobile();
  const [api, setApi] = React.useState<CarouselApi>();

  // Auto-play functionality
  const autoPlay = useCallback(() => {
    if (!api) return;

    // Scroll to next slide every 5 seconds
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  // Set up auto-play when api is available
  useEffect(() => {
    if (!api) return;
    
    // Start auto-play
    const cleanup = autoPlay();
    
    // Clean up interval on unmount
    return () => {
      cleanup && cleanup();
    };
  }, [api, autoPlay]);

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-purple-light/10 via-purple/5 to-nude/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-playfair font-bold text-purple-dark mb-3 md:mb-5 leading-tight">
            Histórias de <span className="text-purple italic">Transformação</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-700">
            Mulheres reais que deram o primeiro passo para uma nova vida. Você também pode ser uma delas.
          </p>
        </div>
        
        <div className="relative px-2 sm:px-8 md:px-12 lg:px-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 sm:basis-1/1">
                  <div className="h-full">
                    <Card className="h-full border-purple/10 bg-white/80 backdrop-blur-sm hover:shadow-lg hover:shadow-purple/5 transition-all duration-500 group">
                      <CardContent className="p-4 md:p-6">
                        <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                          <Avatar className="h-10 w-10 md:h-14 md:w-14 border-2 border-purple/20 shadow-sm group-hover:scale-110 transition-transform duration-500">
                            <div className="relative w-full h-full overflow-hidden rounded-full">
                              <AspectRatio ratio={1 / 1} className="w-full h-full">
                                <AvatarImage 
                                  src={testimonial.image} 
                                  alt={testimonial.name}
                                  className="object-cover w-full h-full" 
                                />
                              </AspectRatio>
                              <AvatarFallback>
                                <User className="h-6 w-6 md:h-8 md:w-8 text-purple-light/50" />
                              </AvatarFallback>
                            </div>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-base md:text-lg text-purple-dark">{testimonial.name}</h3>
                            <div className="flex space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <div key={i} className="text-purple-light text-xs">★</div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div className="relative">
                          <div className="absolute -top-2 -left-2 text-4xl md:text-6xl text-purple/10 font-serif leading-none">"</div>
                          <p className="text-sm md:text-base text-gray-700 relative z-10 pl-4 md:pl-5 italic font-medium">{testimonial.quote}</p>
                          <div className="absolute -bottom-4 md:-bottom-6 -right-2 text-4xl md:text-6xl text-purple/10 font-serif leading-none">"</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-6 md:mt-10 gap-2">
              <CarouselPrevious className="relative static left-0 translate-y-0 h-8 w-8 md:h-10 md:w-10 border-purple/20 bg-white/80 text-purple hover:bg-purple hover:text-white transition-colors" />
              <CarouselNext className="relative static right-0 translate-y-0 h-8 w-8 md:h-10 md:w-10 border-purple/20 bg-white/80 text-purple hover:bg-purple hover:text-white transition-colors" />
            </div>
          </Carousel>
        </div>
        
        <div className="mt-10 md:mt-16 text-center">
          <p className="inline-block max-w-xs md:max-w-xl text-base md:text-lg text-purple-dark font-medium px-4 md:px-6 py-2 md:py-3 bg-purple/5 rounded-lg border border-purple/10">
            Junte-se a milhares de mulheres que transformaram suas vidas através do Detox
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
