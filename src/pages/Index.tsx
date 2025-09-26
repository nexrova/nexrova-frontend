import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  TrendingUp, 
  Workflow, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Star,
  Zap
} from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const Index = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "AI-Powered Guest Interactions",
      description: "Seamless chat, voice, and WhatsApp integration for 24/7 guest support with intelligent responses and personalized service.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Automated Upselling",
      description: "Smart recommendations for meals, spa services, and late checkouts that increase revenue while enhancing guest experience.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Workflow,
      title: "Agentic AI Workflows",
      description: "Streamlined automation for housekeeping schedules, booking management, and complaint resolution processes.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Fraud Detection & IoT Security",
      description: "Advanced security monitoring for smart locks, sensors, and payment systems to protect guests and property.",
      gradient: "from-red-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden section-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-navy">
              Transform Your Hotel with{' '}
              <span className="gradient-text">
                AI Automation
              </span>
            </h1>
            <p className="text-xl sm:text-2xl mb-12 leading-relaxed text-charcoal max-w-3xl mx-auto">
              Reduce operational costs by 35% while enhancing guest satisfaction with our comprehensive 
              AI-powered hotel automation platform. Intelligent guest interactions, automated upselling, 
              and seamless workflows - all in one solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-4 btn-gradient hover-glow-cyan">
                <Link to="/request-demo">
                  Request Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="text-lg px-8 py-4 btn-gold hover-glow-gold">
                <Link to="/solutions">Explore Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Premium floating elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-nexrova-cyan/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-nexrova-gold/20 rounded-full blur-xl"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 section-soft-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
              Complete Hotel Automation Suite
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
              Our AI platform integrates seamlessly with your existing systems to deliver 
              intelligent automation across every aspect of hotel operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <Card key={index} className="group shadow-card hover-lift transition-all duration-500 overflow-hidden border-0 section-white">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 gradient-cyan-purple rounded-2xl flex items-center justify-center shadow-cyan hover-glow-cyan transition-glow">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-nexrova-cyan transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-medium-gray leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 section-soft-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
                  Why Choose Nexrova?
                </h2>
                <p className="text-xl text-medium-gray leading-relaxed">
                  Our AI platform delivers measurable results that transform both operations and guest experience.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  "Reduce operational costs by up to 35%",
                  "Increase guest satisfaction scores by 25%", 
                  "Boost ancillary revenue through smart upselling",
                  "24/7 AI-powered guest support",
                  "Enterprise-grade security and compliance",
                  "Seamless integration with existing systems"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <CheckCircle className="h-6 w-6 text-nexrova-cyan flex-shrink-0" />
                    <span className="text-lg text-medium-gray">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4">
                <Button asChild size="lg" className="btn-gradient hover-glow-cyan">
                  <Link to="/solutions">
                    Learn More About Our Solutions <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <Card className="shadow-elegant overflow-hidden hover-lift transition-smooth">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-nexrova-cyan/20 via-purple-500/10 to-nexrova-cyan/5 flex items-center justify-center">
                    <div className="text-center">
                      <Workflow className="h-24 w-24 text-nexrova-cyan/60 mx-auto mb-4" />
                      <p className="text-lg font-medium text-medium-gray">AI-Powered Operations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-24 section-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gray-900 text-white text-center shadow-elegant overflow-hidden hover-lift transition-smooth">
            <CardContent className="py-20 px-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-nexrova-cyan/20 to-transparent"></div>
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                  Ready to Transform Your Hotel?
                </h2>
                <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
                  Join hundreds of hotels worldwide who trust Nexrova to enhance their operations 
                  and deliver exceptional guest experiences through AI automation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="text-lg px-8 py-4 btn-gradient hover-glow-cyan">
                    <Link to="/request-demo">Request Demo</Link>
                  </Button>
                  <Button asChild size="lg" className="text-lg px-8 py-4 btn-gold hover-glow-gold">
                    <Link to="/contact">Contact Sales</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}
      {/* CTA Section */}
      <section className="py-24 section-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-black text-white text-center shadow-elegant overflow-hidden hover-lift transition-smooth">
            <CardContent className="py-20 px-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-nexrova-cyan/20 to-transparent"></div>
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                  Ready to Transform Your Hotel?
                </h2>
                <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
                  Join hundreds of hotels worldwide who trust Nexrova to enhance their operations 
                  and deliver exceptional guest experiences through AI automation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-black text-lg px-8 py-4 hover:bg-gray-200">
                    <Link to="/request-demo">Request Demo</Link>
                  </Button>
                  <Button asChild size="lg" className="border border-white text-white text-lg px-8 py-4 hover:bg-white hover:text-black">
                    <Link to="/contact">Contact Sales</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Index;

