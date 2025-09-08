import React from 'react';
import HeroSection from '@/components/Hero/HeroSection';
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
