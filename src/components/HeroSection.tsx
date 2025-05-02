
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToJoin = () => {
    const element = document.getElementById('join');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-lumian-blue pt-16 overflow-hidden"
    >
      {/* Decorative elements - leaf shapes */}
      <div className="absolute left-0 top-0">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M180 0C180 99.411 99.411 180 0 180V0H180Z" fill="#00B67A" fillOpacity="0.2"/>
        </svg>
      </div>
      
      <div className="absolute right-0 bottom-0">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M180 180C80.5888 180 0 99.411 0 0L180 0V180Z" fill="#00B67A" fillOpacity="0.2"/>
        </svg>
      </div>

      {/* Decorative leaf elements */}
      <div className="absolute bottom-10 right-10">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60.5 12C78.5 26 85.1667 52.5 86 64C69 60 44.5 72.5 34.5 80C12 64.8 4.33333 34.3333 2 20C22 20 48.5 2.5 60.5 12Z" fill="#00B67A" fillOpacity="0.2"/>
        </svg>
      </div>
      
      <div className="absolute top-40 right-20">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5" cy="5" r="5" fill="white" fillOpacity="0.5"/>
        </svg>
      </div>
      
      <div className="absolute top-80 left-40">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5" cy="5" r="5" fill="white" fillOpacity="0.5"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20 z-10 flex flex-col md:flex-row items-center">
        {/* Left Column - Image */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/bf5de377-9bd7-49ed-b039-ef51152dcb81.png" 
              alt="Rüzgar türbini" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        {/* Right Column - Content */}
        <div className="w-full md:w-1/2 text-left md:pl-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold text-white mb-6">
            Gezegen için <span className="italic">iyi,</span><br />
            cüzdanınız için <span className="italic">iyi</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 font-ibm-plex">
            Akıllı teknolojimizle enerji tüketimini tahmin edin, verimliliği artırın ve CO₂ emisyonlarını azaltın
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button 
              className="bg-lumian-green hover:bg-opacity-90 transition-colors text-white font-bold py-3 px-6 rounded-md"
              onClick={scrollToJoin}
            >
              DAHA FAZLA OKU
            </button>
            
            <button 
              onClick={scrollToJoin}
              className="bg-blue-400 hover:bg-opacity-90 transition-colors text-white font-bold py-3 px-6 rounded-md flex items-center justify-center"
            >
              ŞİMDİ KATIL
            </button>
          </div>
          
          {/* Contact button */}
          <button 
            onClick={scrollToJoin}
            className="bg-blue-400 hover:bg-opacity-90 transition-colors text-white text-sm py-2 px-4 rounded-md font-ibm-plex"
          >
            Bize Ulaşın
          </button>
          
          {/* Social Icons */}
          <div className="flex mt-8 space-x-4">
            <a href="#" className="bg-transparent border border-white/20 rounded-full p-2 hover:bg-white/10 transition-colors">
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" className="bg-transparent border border-white/20 rounded-full p-2 hover:bg-white/10 transition-colors">
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="bg-transparent border border-white/20 rounded-full p-2 hover:bg-white/10 transition-colors">
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="#" className="bg-transparent border border-white/20 rounded-full p-2 hover:bg-white/10 transition-colors">
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
