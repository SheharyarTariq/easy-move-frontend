import React from 'react';
import HeroSection from '@/components/landing-page/hero-section';
import ServicesSection from '@/components/Services/ServicesSection';
import GoogleReviews from '@/components/Reviews/GoogleReviews';

const Page = () => {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <GoogleReviews />
    </main>
  );
};

export default Page;
