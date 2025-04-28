
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
        description: `You're set for the cheapest electricity, ${email}!`,
      });
      setEmail('');
    }, 1000);
  };

  return (
    <section id="join" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-light-green flex items-center justify-center">
              <Leaf className="h-8 w-8 text-electric-green" />
            </div>
          </div>
          
          <h2 className="section-title text-center">
            Sign Up for the <span className="bg-gradient-to-r from-electric-green to-deep-blue bg-clip-text text-transparent">Cheapest Electricity</span> Today!
          </h2>
          
          <p className="section-subtitle text-center">
            Join thousands of happy customers who are saving money while saving the planet. 
            It takes less than 2 minutes to switch.
          </p>
          
          <div className="bg-white rounded-xl shadow-xl p-8 mt-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-green focus:border-electric-green outline-none transition-all"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full cta-button py-4 flex items-center justify-center"
              >
                {isLoading ? (
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : "Join the Energy Revolution"}
              </button>
            </form>
            
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-600">No credit card required</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-600">Cancel anytime</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-sm font-medium text-gray-600">No switching fees</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold text-xl mb-4 text-center">What our customers are saying</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center mb-3">
                  <div className="h-8 w-8 rounded-full bg-electric-green/20 flex items-center justify-center text-electric-green font-bold">J</div>
                  <div className="ml-3">
                    <p className="font-medium">Jessica T.</p>
                  </div>
                </div>
                <p className="text-gray-600">"Since switching to EnergizeNow, I've saved over $400 a year on my electricity bills. The cheapest electricity without compromising on service."</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center mb-3">
                  <div className="h-8 w-8 rounded-full bg-deep-blue/20 flex items-center justify-center text-deep-blue font-bold">M</div>
                  <div className="ml-3">
                    <p className="font-medium">Michael R.</p>
                  </div>
                </div>
                <p className="text-gray-600">"I love knowing that I'm getting the cheapest electricity AND it's 100% renewable. The app makes it so easy to track my savings."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
