
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Esse curso serve pra quem ainda está na relação?",
    answer: "Sim, o Detox foi desenhado para te ajudar independentemente de onde você esteja. Se você está na relação mas sente que precisa de clareza e força para tomar decisões, o curso vai te dar ferramentas para entender seus padrões e fazer escolhas mais conscientes."
  },
  {
    question: "É só pra quem terminou recentemente?",
    answer: "Não. O Detox serve para mulheres em diferentes momentos: quem ainda está em uma relação tóxica, quem terminou recentemente e quer evitar recaídas, ou mesmo quem já está sozinha há tempos mas continua presa ao passado emocionalmente."
  },
  {
    question: "Como é o formato das aulas?",
    answer: "São aulas gravadas que você pode assistir no seu ritmo, acompanhadas de exercícios práticos e reflexivos. Você terá acesso a guias em PDF, meditações e recursos adicionais para aprofundar o processo."
  },
  {
    question: "Terei apoio caso eu trave no processo?",
    answer: "Sim! Além do material, você terá acesso a um grupo privado de apoio com outras mulheres no mesmo processo e suporte para suas dúvidas durante toda a jornada."
  },
  {
    question: "Vou conseguir lidar com recaídas?",
    answer: "O Detox tem um módulo específico sobre recaídas, para que você entenda por que elas acontecem e como preveni-las. Você vai aprender técnicas práticas para gerenciar momentos de fraqueza e seguir firme no seu processo."
  }
];

const FaqSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-center text-purple-dark mb-10">
          Dúvidas Frequentes
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-purple-light/30 rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-medium py-5 text-purple-dark hover:text-purple hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
