import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { IntroSection } from '../components/sections/IntroSection';
import { TrustedBySection } from '../components/sections/TrustedBySection';
import { HowItWorksSection } from '../components/sections/HowItWorksSection';
import { FeaturesSection } from '../components/sections/FeaturesSection';
import { ApiSection } from '../components/sections/ApiSection';
import { IntegrationSection } from '../components/sections/IntegrationSection';
import { FaqSection } from '../components/sections/FaqSection';
import { CtaSection } from '../components/sections/CtaSection';

export function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <IntroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ApiSection />
      <IntegrationSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
