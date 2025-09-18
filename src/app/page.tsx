import React from 'react';
import HeroSection from '@/components/landing-page/hero-section';
import ServicesSection from '@/components/landing-page/services';
import GoogleReviews from '@/components/landing-page/reviews';

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
