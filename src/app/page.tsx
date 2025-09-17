import React from 'react';
import HeroSection from '@/components/landing-page/hero-section';
import ServicesSection from '@/components/Services/ServicesSection';
import GoogleReviews from '@/components/Reviews/GoogleReviews';
import GoogleReview from '@/components/common/embed-map';

const Page = () => {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <GoogleReview/>
      <GoogleReviews />
    </main>
  );
};

export default Page;
