
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import appIcon from '../assets/remus-logo-vector.svg';

const JoinUsSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Geçersiz e-posta",
        description: "Lütfen geçerli bir e-posta adresi girin",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Başarılı!",
        description: `Remus Enerji'nin avantajlı fiyatlarına hoş geldiniz, ${email}!`,
      });
      setEmail('');
    }, 1000);
  };

  return (
    <section id="join" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-light-green flex items-center justify-center shadow-lg">
              <img src={appIcon} alt="Remus Enerji Logo" className="w-10 h-10" />
            </div>
          </div>
          
          <h2 className="section-title text-center">
            <span className="text-deep-blue">Remus Enerji</span>'ye Hemen Katılın!
          </h2>
          
          <p className="section-subtitle text-center">
            Hem tasarruf yapan hem de çevreyi koruyan binlerce mutlu müşterimize katılın.
            Geçiş yapmak sadece 2 dakikanızı alır.
          </p>
          
          <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-xl p-8 mt-12 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e-posta@adresiniz.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-soft-green focus:border-soft-green outline-none transition-all"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-deep-blue text-white font-medium py-4 px-6 rounded-full hover:shadow-md transition-all duration-300 flex items-center justify-center"
              >
                {isLoading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : "Enerji Tasarrufuna Başlayın"}
              </button>
            </form>
            
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-600">Kredi kartı gerekmiyor</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-600">İstediğiniz zaman iptal edin</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-600">Geçiş ücreti yok</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 bg-white/80 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h3 className="font-semibold text-xl mb-4 text-center">Müşterilerimiz Ne Diyor?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center mb-3">
                  <div className="h-8 w-8 rounded-full bg-soft-green/20 flex items-center justify-center text-soft-green font-bold">A</div>
                  <div className="ml-3">
                    <p className="font-medium">Ahmet Y.</p>
                  </div>
                </div>
                <p className="text-gray-600">"Remus Enerji'ye geçtiğimden beri elektrik faturalarımda yıllık 7.800₺ tasarruf ettim. Basit ve kullanımı kolay bir sistem ile enerji tüketimimi takip edebiliyorum."</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center mb-3">
                  <div className="h-8 w-8 rounded-full bg-soft-green/20 flex items-center justify-center text-soft-green font-bold">M</div>
                  <div className="ml-3">
                    <p className="font-medium">Meral K.</p>
                  </div>
                </div>
                <p className="text-gray-600">"En uygun elektrik fiyatlarını alırken aynı zamanda ekolojik enerji kullandığımı bilmek harika. Uygulama tasarruflarımı takip etmemi çok kolaylaştırıyor."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
