
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
    <div className="w-16 h-16 bg-gradient-to-r from-lumian-blue to-lumian-green rounded-full flex items-center justify-center mb-6 mx-auto">
      <div className="text-white">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-inter font-bold text-lumian-dark-gray mb-3 text-center">{title}</h3>
    <p className="text-gray-600 text-center font-ibm-plex">{description}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-lumian-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center font-inter">
          Neden <span className="bg-gradient-to-r from-lumian-blue to-lumian-green bg-clip-text text-transparent">Lumian Enerji</span>?
        </h2>
        <p className="section-subtitle text-center font-ibm-plex">
          Yapay zeka destekli yaklaşımımız, sürdürülebilirliğe odaklanan işletmeler için eşsiz içgörüler ve verimlilik sağlar.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            title="Yapay Zeka Tahmin Motoru"
            description="Gelişmiş yapay zeka sistemi, enerji tüketim modellerinizi analiz ederek gelecekteki kullanımı tahmin eder ve verimliliği gerçek zamanlı olarak optimize eder."
            icon={<BoltIcon />}
            delay="0.2s"
          />
          
          <FeatureCard
            title="Güvenli Veri Analitiği"
            description="Güçlü veri altyapımız, enerji kullanım bilgilerinizi doğru içgörüler ve performans takibi için güvenli bir şekilde işler."
            icon={<ShieldCheck />}
            delay="0.4s"
          />
          
          <FeatureCard
            title="Sürdürülebilirlik Odaklı"
            description="Kapsamlı yeşil enerji yönetim çözümlerimizle enerji maliyetlerinizi optimize ederken karbon ayak izinizi azaltın."
            icon={<CloudLightning />}
            delay="0.6s"
          />
        </div>
        
        <div className="mt-16 bg-lumian-blue rounded-xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-inter font-bold mb-4">Değişimi Sağlayan Teknoloji</h3>
              <p className="text-white/90 mb-6 font-ibm-plex">
                Lumian Enerji, akıllı enerji yönetiminin geleceğine öncülük ediyor. Teknolojimiz, işletmelerin enerji tüketimlerini anlamalarına ve optimize etmelerine yardımcı olurken daha sürdürülebilir bir dünyaya katkıda bulunmalarını sağlar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-ibm-plex">Akıllı paneller</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-ibm-plex">Tahmine dayalı analitik</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-ibm-plex">Verimlilik raporları</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-white/10 rounded-full" />
                <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-white/10 rounded-full" />
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl relative">
                  <div className="bg-white/10 rounded-lg p-4 mb-3">
                    <p className="font-medium font-ibm-plex">Ortalama Enerji Tasarrufu</p>
                    <h4 className="text-3xl font-inter font-bold">%25</h4>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 mb-3">
                    <p className="font-medium font-ibm-plex">Azaltılan CO₂ Emisyonu</p>
                    <h4 className="text-3xl font-inter font-bold">1.5 ton</h4>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="font-medium font-ibm-plex">Müşteri Memnuniyeti</p>
                    <h4 className="text-3xl font-inter font-bold">%98</h4>
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
