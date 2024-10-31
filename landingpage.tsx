import React from 'react';
import { Mail, ShoppingCart, Users, BarChart, CheckCircle, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const LandingPage = () => {
  const handleConsultation = () => {
    window.location.href = 'https://app.lemcal.com/@hasmus/demo-call';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-stone-900 to-neutral-900 text-white">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-center">Hasmus</h1>
        </div>
        
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">Transform Your eCommerce Email Strategy</h2>
            <p className="text-xl mb-8 text-neutral-200">Turn one-time buyers into loyal customers with data-driven email marketing and world-class copywriting that delivers results.</p>
            <Button 
              size="lg" 
              className="bg-amber-700 hover:bg-amber-800 text-white"
              onClick={handleConsultation}
            >
              Schedule a Consultation
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-24 container mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-16 text-stone-900">Why Choose Hasmus?</h3>
        <div className="grid md:grid-cols-4 gap-8">
          <Card className="p-6 border-stone-200 bg-white/70 backdrop-blur">
            <CardContent className="space-y-4 pt-6">
              <ShoppingCart className="h-12 w-12 text-amber-700" />
              <h4 className="text-xl font-semibold text-stone-900">eCommerce Specialists</h4>
              <p className="text-stone-600">Focused exclusively on retail and eCommerce brands, understanding your unique challenges.</p>
            </CardContent>
          </Card>

          <Card className="p-6 border-stone-200 bg-white/70 backdrop-blur">
            <CardContent className="space-y-4 pt-6">
              <Users className="h-12 w-12 text-amber-700" />
              <h4 className="text-xl font-semibold text-stone-900">Custom Automation</h4>
              <p className="text-stone-600">Personalized email sequences that engage customers at every stage.</p>
            </CardContent>
          </Card>

          <Card className="p-6 border-stone-200 bg-white/70 backdrop-blur">
            <CardContent className="space-y-4 pt-6">
              <BarChart className="h-12 w-12 text-amber-700" />
              <h4 className="text-xl font-semibold text-stone-900">Data-Driven Results</h4>
              <p className="text-stone-600">Leverage analytics to optimize campaigns and maximize customer value.</p>
            </CardContent>
          </Card>

          <Card className="p-6 border-stone-200 bg-white/70 backdrop-blur">
            <CardContent className="space-y-4 pt-6">
              <PenTool className="h-12 w-12 text-amber-700" />
              <h4 className="text-xl font-semibold text-stone-900">Expert Copywriting</h4>
              <p className="text-stone-600">Compelling, conversion-focused content that speaks to your audience.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Copywriting Section */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">World-Class Copywriting</h3>
            <p className="text-xl mb-8 text-neutral-200">Our expert copywriters craft compelling narratives that engage your audience, drive conversions, and build lasting customer relationships. Every word is strategically chosen to reflect your brand voice and resonate with your target market.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-16 text-stone-900">Our Services</h3>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {[
              {
                title: "Welcome Sequences",
                description: "Create meaningful first impressions with expertly crafted welcome emails that convert new subscribers into customers."
              },
              {
                title: "Cart Recovery",
                description: "Persuasive, well-timed campaigns that bring customers back to complete their purchase."
              },
              {
                title: "Loyalty Programs",
                description: "Build lasting relationships with engaging content and targeted retention campaigns."
              },
              {
                title: "Campaign Strategy",
                description: "Data-driven promotional campaigns with compelling copy that drives engagement and sales."
              }
            ].map((service, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-amber-700 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-stone-900">{service.title}</h4>
                  <p className="text-stone-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-stone-900 text-white py-24">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Grow Your Business?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-neutral-200">Let's discuss how Hasmus can help you create compelling email campaigns that resonate with your customers and drive results.</p>
          <Button 
            size="lg" 
            className="bg-amber-700 hover:bg-amber-800 text-white"
            onClick={handleConsultation}
          >
            Schedule a Consultation
            <Mail className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-400 py-12">
        <div className="container mx-auto px-6 text-center">
          <h4 className="text-white text-lg font-bold mb-4">Hasmus</h4>
          <p className="text-sm mb-4">Specialized email marketing and copywriting for eCommerce and retail brands.</p>
          <p className="text-sm">© {new Date().getFullYear()} Hasmus. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
