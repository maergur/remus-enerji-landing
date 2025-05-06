import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import remusLogo from '../assets/remus-logo-2.svg';

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
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        <a href="#" className="flex items-center p-0">
        <img src={remusLogo} alt="Remus Enerji Logo" style={{ height: '80px', width: '150px' }} />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} className="nav-link text-gray-700">Ana Sayfa</button>
          <button onClick={() => scrollToSection('features')} className="nav-link text-gray-700">Özellikler</button>
          <button onClick={() => scrollToSection('join')} className="nav-link text-gray-700">Bize Katılın</button>
          <button 
            onClick={() => scrollToSection('join')}
            className="bg-deep-blue text-white font-medium py-2 px-6 rounded-full hover:shadow-md transition-all duration-300"
          >
            Şimdi Geçiş Yap
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800"
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
            <button onClick={() => scrollToSection('home')} className="text-left py-2 text-gray-700">Ana Sayfa</button>
            <button onClick={() => scrollToSection('features')} className="text-left py-2 text-gray-700">Özellikler</button>
            <button onClick={() => scrollToSection('join')} className="text-left py-2 text-gray-700">Bize Katılın</button>
            <button 
              onClick={() => scrollToSection('join')}
              className="bg-deep-blue text-white font-medium py-2 px-6 rounded-full text-center"
            >
              Şimdi Geçiş Yap
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
