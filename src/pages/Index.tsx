
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import TransformationPromise from '@/components/TransformationPromise';
import PainPoints from '@/components/PainPoints';
import Testimonials from '@/components/Testimonials';
import AboutDetox from '@/components/AboutDetox';
import BenefitsList from '@/components/BenefitsList';
import PricingSection from '@/components/PricingSection';
import GuaranteeSection from '@/components/GuaranteeSection';
import FaqSection from '@/components/FaqSection';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import { scrollToPricing } from '@/utils/scrollUtils';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();
  
  // Set up event listener for the final CTA button
  useEffect(() => {
    const finalCtaButton = document.querySelector('.final-cta-button');
    if (finalCtaButton) {
      finalCtaButton.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToPricing();
      });
    }
    
    return () => {
      if (finalCtaButton) {
        finalCtaButton.removeEventListener('click', scrollToPricing);
      }
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TransformationPromise />
      <PainPoints />
      <Testimonials />
      <AboutDetox />
      <BenefitsList />
      <PricingSection />
      <GuaranteeSection />
      <FaqSection />
      <FinalCta />
      <Footer />
    </div>
  );
};

export default Index;
