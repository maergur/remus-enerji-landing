import React from 'react';
import a101LogoPath from '../assets/logo/A101-logo.png';
import dhlLogoPath from '../assets/logo/dhl-logo.svg';
import arvatoLogoPath from '../assets/logo/arvato-logo.png';
import balormanLogoPath from '../assets/logo/balorman-logo.png';
import paletGlobalLogoPath from '../assets/logo/palet-logo.png';
import istanbulEnerjiLogoPath from '../assets/logo/ist-enerji-logo.png';
import ibbLogoPath from '../assets/logo/ibb-logo.png';
import sodexoLogoPath from '../assets/logo/sodexo-logo.png';
import polmarLogoPath from '../assets/logo/polmar-logo.png';
import genclerLogoPath from '../assets/logo/gencler-logo.png';
import farelLogoPath from '../assets/logo/farel-logo.png';

const logos = [
  { name: 'A101', src: a101LogoPath, alt: 'A101 Logo', customClassName: 'scale-100' }, 
  { name: 'Istanbul Enerji', src: istanbulEnerjiLogoPath, alt: 'Istanbul Enerji Logo', customClassName: 'scale-110' }, 
  { name: 'IBB', src: ibbLogoPath, alt: 'IBB Logo', customClassName: 'scale-145' }, 
  { name: 'DHL', src: dhlLogoPath, alt: 'DHL Logo', customClassName: 'scale-110' },      
  { name: 'Arvato', src: arvatoLogoPath, alt: 'Arvato Logo' },
  { name: 'Sodexo', src: sodexoLogoPath, alt: 'Sodexo Logo', customClassName: 'scale-110 pb-[8px]'},
  { name: 'Farel', src: farelLogoPath, alt: 'Farel Logo', customClassName: 'scale-110 pb-[2px]' },
  { name: 'Balorman', src: balormanLogoPath, alt: 'Balorman Logo' },
  { name: 'Palet Global', src: paletGlobalLogoPath, alt: 'Palet Global Logo', customClassName: 'scale-150' }, 
  { name: 'Polmar', src: polmarLogoPath, alt: 'Polmar Logo', customClassName: 'scale-100' },
  { name: 'Gencler', src: genclerLogoPath, alt: 'Gencler Logo', customClassName: 'scale-100' },
];

// Duplicate logos for seamless animation
const extendedLogos = [...logos, ...logos];

const TrustedBySection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-10">
          Bize Güvenenler
        </h2>
        <div className="overflow-hidden relative">
          <div className="flex animate-infinite-scroll will-change-transform">
            {extendedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-6 w-32 h-16 flex items-center justify-center">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className={`max-h-10 w-20 object-contain filter grayscale ${logo.customClassName || ''}`} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection; 