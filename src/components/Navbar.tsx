
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
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-inter font-extrabold bg-gradient-to-r from-lumian-blue to-lumian-green bg-clip-text text-transparent">
            Lumian Energy
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className="nav-link font-ibm-plex">Home</button>
          <button onClick={() => scrollToSection('features')} className="nav-link font-ibm-plex">Features</button>
          <button onClick={() => scrollToSection('join')} className="nav-link font-ibm-plex">Join Us</button>
          <button 
            onClick={() => scrollToSection('join')}
            className="cta-button text-sm py-2 px-4 font-ibm-plex"
          >
            Start Saving Yesterday
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-lumian-dark-gray"
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
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-left py-2 font-ibm-plex">Home</button>
            <button onClick={() => scrollToSection('features')} className="text-left py-2 font-ibm-plex">Features</button>
            <button onClick={() => scrollToSection('join')} className="text-left py-2 font-ibm-plex">Join Us</button>
            <button 
              onClick={() => scrollToSection('join')}
              className="cta-button text-center font-ibm-plex"
            >
              Start Saving Yesterday
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
