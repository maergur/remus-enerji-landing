
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
    <div className="w-16 h-16 bg-soft-green rounded-full flex items-center justify-center mb-6 mx-auto">
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
          Neden <span className="text-soft-green">Remus Energy</span>?
        </h2>
        <p className="section-subtitle text-center">
          Teknoloji odaklı yaklaşımımız, sürdürülebilirlik veya güvenilirlikten ödün vermeden en uygun fiyatları sunar.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <FeatureCard
            title="Akıllı Enerji Yönetimi"
            description="Gelişmiş teknolojimiz, enerji tüketiminizi gerçek zamanlı olarak izler ve en uygun elektrik tarifelerini almanızı sağlar."
            icon={<BoltIcon />}
            delay="0.2s"
          />
          
          <FeatureCard
            title="Şeffaf Faturalandırma"
            description="Hiçbir gizli ücret yok. Kullandığınız kadar ödeyin ve faturalarınızı basit bir uygulama üzerinden takip edin."
            icon={<ShieldCheck />}
            delay="0.4s"
          />
          
          <FeatureCard
            title="Ekolojik Enerji"
            description="Rüzgar, güneş ve hidroelektrikten gelen sürdürülebilir enerji kaynakları ile doğayı koruyun ve karbon ayak izinizi azaltın."
            icon={<CloudLightning />}
            delay="0.6s"
          />
        </div>
        
        <div className="mt-16 bg-soft-green/10 rounded-xl p-8 text-deep-blue">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Hayatınızı Kolaylaştırın</h3>
              <p className="text-gray-700 mb-6">
                Enerji sektörü değişiyor ve Remus Energy bu değişime öncülük ediyor. Akıllı Enerji Ekosistemimiz, 
                kalite veya sürdürülebilirlikten ödün vermeden en uygun elektrik fiyatlarını sunar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-soft-green/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-soft-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Bağlayıcı sözleşme yok</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-soft-green/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-soft-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Gizli ücret yok</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-soft-green/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-soft-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Ekolojik enerji</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white shadow-lg rounded-xl p-6">
                <div className="bg-gray-50 rounded-lg p-4 mb-3">
                  <p className="font-medium">Ortalama Aylık Tasarruf</p>
                  <h4 className="text-3xl font-bold text-soft-green">₺650</h4>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 mb-3">
                  <p className="font-medium">Azaltılan CO₂ Emisyonu</p>
                  <h4 className="text-3xl font-bold text-soft-green">1.2 ton</h4>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-medium">Müşteri Memnuniyeti</p>
                  <h4 className="text-3xl font-bold text-soft-green">%98</h4>
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
