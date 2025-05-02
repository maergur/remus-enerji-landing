
import React from 'react';
import { BoltIcon, ShieldCheck, CloudLightning } from './icons/EnergizeIcons';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay }) => (
  <div 
    className="feature-card animate-fade-in-up" 
    style={{ animationDelay: delay }}
  >
    <div className="w-16 h-16 bg-gradient-to-r from-electric-green to-deep-blue rounded-full flex items-center justify-center mb-6 mx-auto">
      <div className="text-white">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">
          Why Choose the <span className="bg-gradient-to-r from-electric-green to-deep-blue bg-clip-text text-transparent">Cheapest Electricity</span>?
        </h2>
        <p className="section-subtitle text-center">
          Our technology-driven approach delivers unbeatable prices without compromising on sustainability or reliability.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            title="Smart Energy AI"
            description="Our advanced AI optimizes your energy consumption in real-time, ensuring you always get the cheapest electricity rates without lifting a finger."
            icon={<BoltIcon />}
            delay="0.2s"
          />
          
          <FeatureCard
            title="Green Blockchain"
            description="Transparent, secure energy trading with blockchain technology guarantees the cheapest electricity while maintaining complete accountability."
            icon={<ShieldCheck />}
            delay="0.4s"
          />
          
          <FeatureCard
            title="100% Renewable"
            description="Clean energy from wind, solar, and hydro at the lowest market prices. Better for the planet, better for your wallet."
            icon={<CloudLightning />}
            delay="0.6s"
          />
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-electric-green to-deep-blue rounded-xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Electrify Your Life</h3>
              <p className="text-white/90 mb-6">
                The energy industry is changing, and EnergizeNow is leading the charge. Our Smart Energy Ecosystem delivers the cheapest electricity without compromising on quality or sustainability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>No contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>No hidden fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>100% renewable</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-white/10 rounded-full" />
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-white/10 rounded-full" />
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl relative">
                  <div className="bg-white/10 rounded-lg p-4 mb-3">
                    <p className="font-medium">Average Monthly Savings</p>
                    <h4 className="text-3xl font-bold">$42.50</h4>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 mb-3">
                    <p className="font-medium">CO₂ Emissions Reduced</p>
                    <h4 className="text-3xl font-bold">1.2 tons</h4>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="font-medium">Customer Satisfaction</p>
                    <h4 className="text-3xl font-bold">98%</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
