
import React from 'react';
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

const Index = () => {
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
