
export const scrollToPricing = () => {
  const pricingSection = document.getElementById('pricing');
  if (pricingSection) {
    pricingSection.scrollIntoView({ behavior: 'smooth' });
  }
};
