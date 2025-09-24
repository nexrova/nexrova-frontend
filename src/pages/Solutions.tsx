import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  TrendingUp, 
  Workflow, 
  Shield, 
  DollarSign, 
  Users, 
  Clock, 
  Star 
} from 'lucide-react';

const Solutions = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "AI-Powered Guest Interactions",
      description: "Seamless chat, voice, and WhatsApp integration for 24/7 guest support and personalized service delivery.",
      benefits: ["24/7 availability", "Multi-language support", "Instant response time", "Personalized recommendations"]
    },
    {
      icon: TrendingUp,
      title: "Automated Upselling",
      description: "Intelligent recommendations for meals, spa services, and late checkouts based on guest preferences and behavior.",
      benefits: ["Increase revenue per guest", "Personalized offers", "Optimal timing", "Higher conversion rates"]
    },
    {
      icon: Workflow,
      title: "Agentic AI Workflows",
      description: "Streamlined automation for housekeeping schedules, booking management, and complaint resolution.",
      benefits: ["Reduced manual work", "Faster turnaround", "Consistent quality", "Error reduction"]
    },
    {
      icon: Shield,
      title: "Fraud Detection & IoT Security",
      description: "Advanced security monitoring for smart locks, sensors, and payment systems to protect guests and property.",
      benefits: ["Real-time monitoring", "Threat prevention", "Secure access control", "Payment protection"]
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Reduce Operational Costs",
      percentage: "35%",
      description: "Average cost reduction through automation and efficient resource management"
    },
    {
      icon: Users,
      title: "Enhance Guest Satisfaction",
      percentage: "92%",
      description: "Guest satisfaction rate with AI-powered personalized service"
    },
    {
      icon: Clock,
      title: "Faster Response Times",
      percentage: "3x",
      description: "Faster issue resolution and service delivery with automated workflows"
    },
    {
      icon: Star,
      title: "Improve Service Quality",
      percentage: "4.8/5",
      description: "Average guest rating improvement with Nexrova implementation"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Transform Your Hotel Operations with{' '}
              <span className="gradient-text">AI Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Nexrova's comprehensive AI platform reduces operational costs by up to potentially 35% 
              while enhancing guest satisfaction through intelligent automation and personalized service.
            </p>
            <Button asChild size="lg" className="mr-4">
              <Link to="/request-demo">Request Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Measurable Impact on Your Business
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See real results with our AI-powered hotel automation solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-hover transition-smooth">
                <CardContent className="pt-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{benefit.percentage}</div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Comprehensive AI Solutions for Hotels
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our integrated platform covers every aspect of hotel operations
            </p>
          </div>

          <div className="space-y-16">
            {features.map((feature, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <Card className="shadow-elegant">
                    <CardContent className="p-8">
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                        <feature.icon className="h-16 w-16 text-primary/60" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gray-900 text-white text-center shadow-elegant">
            <CardContent className="py-16 px-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Transform Your Hotel?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join leading hotels worldwide who trust Nexrova to enhance their operations and guest experience.
              </p>
              <div className="space-x-4">
                <Button asChild size="lg" variant="secondary">
                  <Link to="/request-demo">Request Demo</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}
      {/* CTA Section */}
      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gray-900 text-white text-center shadow-elegant overflow-hidden hover-lift transition-smooth relative">
            <CardContent className="py-16 px-8 relative">
              {/* Cyan overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-nexrova-cyan/20 to-transparent"></div>

              {/* Content on top of overlay */}
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Ready to Transform Your Hotel?
                </h2>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Join leading hotels worldwide who trust Nexrova to enhance their operations and guest experience.
                </p>
                <div className="space-x-4">
                  <Button asChild size="lg" variant="secondary">
                    <Link to="/request-demo">Request Demo</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white text-gray-300 hover:bg-white hover:text-gray-900"
                  >
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

export default Solutions;