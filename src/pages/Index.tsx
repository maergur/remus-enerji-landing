import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustedBySection from '@/components/TrustedBySection';
import FeaturesSection from '@/components/FeaturesSection';
import JoinUsSection from '@/components/JoinUsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <JoinUsSection />
      <Footer />
    </div>
  );
};

export default Index;
