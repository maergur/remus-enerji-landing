
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Leaf } from 'lucide-react';

const JoinUsSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Success!",
        description: `Thank you for joining Lumian Energy! We'll be in touch soon.`,
      });
      setEmail('');
    }, 1000);
  };

  return (
    <section id="join" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-lumian-green/20 flex items-center justify-center">
              <Leaf className="h-8 w-8 text-lumian-green" />
            </div>
          </div>
          
          <h2 className="section-title text-center font-inter">
            Join <span className="bg-gradient-to-r from-lumian-blue to-lumian-green bg-clip-text text-transparent">Lumian Energy</span> Today!
          </h2>
          
          <p className="section-subtitle text-center font-ibm-plex">
            Start optimizing your energy consumption and contributing to a more sustainable future.
            It takes less than 2 minutes to get started.
          </p>
          
          <div className="bg-white rounded-xl shadow-xl p-8 mt-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-lumian-dark-gray font-inter font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lumian-green focus:border-lumian-green outline-none transition-all font-ibm-plex"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full cta-button py-4 flex items-center justify-center font-inter"
              >
                {isLoading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : "Start Saving Yesterday"}
              </button>
            </form>
            
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-lumian-gray rounded-lg">
                <p className="text-sm font-medium text-gray-600 font-ibm-plex">AI-powered insights</p>
              </div>
              <div className="p-3 bg-lumian-gray rounded-lg">
                <p className="text-sm font-medium text-gray-600 font-ibm-plex">Detailed analytics</p>
              </div>
              <div className="p-3 bg-lumian-gray rounded-lg">
                <p className="text-sm font-medium text-gray-600 font-ibm-plex">Sustainability focus</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 bg-lumian-gray rounded-xl p-6">
            <h3 className="font-inter font-semibold text-xl mb-4 text-center">What our clients are saying</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center mb-3">
                  <div className="h-8 w-8 rounded-full bg-lumian-blue/20 flex items-center justify-center text-lumian-blue font-bold">M</div>
                  <div className="ml-3">
                    <p className="font-inter font-medium">Michael K., Energy Manager</p>
                  </div>
                </div>
                <p className="text-gray-600 font-ibm-plex">"Lumian Energy's AI platform has transformed how we monitor and manage our energy consumption. We've reduced costs by 22% and improved our sustainability metrics."</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center mb-3">
                  <div className="h-8 w-8 rounded-full bg-lumian-green/20 flex items-center justify-center text-lumian-green font-bold">S</div>
                  <div className="ml-3">
                    <p className="font-inter font-medium">Sarah T., Sustainability Director</p>
                  </div>
                </div>
                <p className="text-gray-600 font-ibm-plex">"The predictive analytics and optimization suggestions from Lumian have been invaluable for our sustainability initiatives. The platform is intuitive and the insights are actionable."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
