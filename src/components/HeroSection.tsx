
import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';

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
      className="relative min-h-screen flex items-center bg-white pt-16 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-light-green/10 to-white/0 opacity-30" />
      
      <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-5 h-5 text-soft-green" />
              <span className="text-deep-blue font-medium text-sm">EKOLOJİK ENERJİ</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-deep-blue mb-6 animate-fade-in-up">
              Remus Enerji
              <span className="text-gray-600 text-2xl md:text-3xl mt-3 block font-normal">
                Dijital Enerji Tedarikçiniz
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Akıllı teknoloji ile desteklenmiş sürdürülebilir enerji 
              kaynakları ile en avantajlı elektrik fiyatlarına hemen sahip olun.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-light-green/70 rounded-full px-5 py-2.5 flex items-center text-deep-blue">
                <span className="font-medium">Ekolojik Enerji</span>
              </div>
              <div className="bg-light-green/70 rounded-full px-5 py-2.5 flex items-center text-deep-blue">
                <span className="font-medium">Ortalama %30 Tasarruf</span>
              </div>
              <div className="bg-light-green/70 rounded-full px-5 py-2.5 flex items-center text-deep-blue">
                <span className="font-medium">Bağlayıcı Sözleşme Yok</span>
              </div>
            </div>
            
            <button 
              onClick={scrollToJoin}
              className="bg-soft-green text-white font-medium text-lg py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 hover:-translate-y-1"
            >
              Şimdi Geçiş Yap
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="relative w-full mx-auto transform scale-[165%] translate-x-[20%]"> {/* Moved from 15% to 20% right */}
              {/* Dashboard mockup */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <img 
                  src="/lovable-uploads/df0e9961-24f1-471b-8573-7e7ff27f2c50.png" 
                  alt="Remus Enerji Dashboard" 
                  className="w-full h-auto"
                />
              </div>

              {/* Green highlight accent */}
              <div className="absolute -z-10 top-10 -right-10 w-32 h-32 bg-soft-green/20 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -left-10 bottom-10 w-32 h-32 bg-soft-green/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
