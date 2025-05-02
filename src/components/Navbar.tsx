
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "bg-lumian-blue shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-inter font-extrabold bg-gradient-to-r from-white to-lumian-green bg-clip-text text-transparent">
            Lumian Enerji
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className="text-white hover:text-lumian-green transition-colors font-ibm-plex">ANA SAYFA</button>
          <button onClick={() => scrollToSection('features')} className="text-white hover:text-lumian-green transition-colors font-ibm-plex">ÖZELLİKLER</button>
          <button onClick={() => scrollToSection('join')} className="text-white hover:text-lumian-green transition-colors font-ibm-plex">BİZE KATILIN</button>
          <button 
            onClick={() => scrollToSection('join')}
            className="bg-lumian-green text-white text-sm py-2 px-4 rounded-md font-ibm-plex hover:bg-opacity-90 transition-all"
          >
            HEMEN TASARRUF EDİN
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-lumian-blue shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-left py-2 text-white font-ibm-plex">Ana Sayfa</button>
            <button onClick={() => scrollToSection('features')} className="text-left py-2 text-white font-ibm-plex">Özellikler</button>
            <button onClick={() => scrollToSection('join')} className="text-left py-2 text-white font-ibm-plex">Bize Katılın</button>
            <button 
              onClick={() => scrollToSection('join')}
              className="bg-lumian-green text-white py-2 px-4 rounded-md text-center font-ibm-plex"
            >
              Hemen Tasarruf Edin
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
