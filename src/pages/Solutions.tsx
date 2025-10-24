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
  DollarSign, 
  Users, 
  Clock, 
  Star 
} from 'lucide-react';
import TiltedCard from '@/components/TiltedCard';

const Solutions = () => {
  // Updated features (fraud prevention focus)
  const features = [
    {
      icon: Shield,
      title: "Fraud & Revenue Leakage Prevention",
      description: "Digitized guest check-ins, immutable proof-of-stay, and risk scoring reduce fraud and prevent cash skimming, chargebacks, and identity misuse.",
      benefits: [
        "Up to 17% revenue leakage protection",
        "Immutable ID & payment proof",
        "Real-time fraud alerts",
        "Reduced chargebacks & disputes"
      ]
    },
    {
      icon: Workflow,
      title: "Automated Reconciliation",
      description: "Nightly cross-checking across PMS, PoS, payment gateways, and banks ensures financial accuracy and flags discrepancies automatically.",
      benefits: [
        "Near 100% reconciliation accuracy",
        "Automated nightly reports",
        "Instant anomaly detection",
        "Less manual workload"
      ]
    },
    {
      icon: MessageCircle,
      title: "WhatsApp-First Guest Verification",
      description: "Pre-arrival ID capture with OCR, selfies, and liveness checks ensures secure and seamless guest onboarding.",
      benefits: [
        "Seamless WhatsApp onboarding",
        "OCR + liveness verification",
        "Early fraud detection",
        "Reduced no-shows & fake bookings"
      ]
    },
    {
      icon: TrendingUp,
      title: "Operational Controls & Monitoring",
      description: "AI-powered workflows, staff access monitoring, and IoT integrations help prevent refund abuse, inventory theft, and operational leakage.",
      benefits: [
        "Audit trails for all overrides",
        "IoT inventory monitoring",
        "Manager escalation alerts",
        "Reduced human error"
      ]
    }
  ];

  // Updated measurable impact section with "potentially"
  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Savings & Efficiency",
      percentage: "Up to 35%",
      description: "Potential operational cost reduction through automation and streamlined fraud controls"
    },
    {
      icon: Users,
      title: (
        <>
          Revenue Recovered <br /> 
          <span className="text-sm font-normal">(Estimate based for hotel with a 1 crore annual revenue)</span>
        </>
      ),
      percentage: "₹5–10L",
      description: "Hotels can potentially recover this annually by reducing fraud and leakage"
    },
    {
      icon: Clock,
      title: "Fraud Risk Reduction",
      percentage: "70–80%",
      description: "Potential reduction in cash skimming, chargebacks, and fraudulent bookings"
    },
    {
      icon: Star,
      title: "Reconciliation Accuracy",
      percentage: "Near 100%",
      description: "Potentially achieve seamless nightly reconciliation across PMS, PoS, PG, and bank systems"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
              Prevent Fraud & Revenue Leakage with{' '}
              <span className="gradient-text">Nexrova</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Hotels lose 7–17% of annual revenue to fraud, mostly in Finance, Front Desk, Kitchen, and Inventory accounting for 70–80% of all losses. Nexrova’s AI-powered guest assistance platform targets these high-risk areas, stopping revenue leakage through automated guest verification, secure payments, staff fraud prevention, and inventory protection all while acting as a smart digital receptionist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button asChild className="text-lg px-8 py-4 btn-gradient hover-glow-cyan"> */}
              <Button 
                asChild 
                className="text-lg px-8 py-4 rounded-xl font-medium bg-black text-white 
                         hover:bg-gray-700 transform hover:-translate-y-1 
                           transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Link to="/request-demo">Request Demo</Link>
              </Button>
              {/* <Button asChild className="text-lg px-8 py-4 btn-gold hover-glow-gold"> */}
              <Button 
                asChild 
                className="text-lg px-8 py-4 rounded-xl font-medium bg-black text-white 
                         hover:bg-gray-700 transform hover:-translate-y-1 
                           transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Measurable Impact on Your Hotel
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Potential reduction in cash skimming, billing, ghost checkins and Inventory
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
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Comprehensive AI Solutions for Hotels
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center relative z-10">
          <div className="w-full max-w-4xl">
            <TiltedCard
              imageSrc="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?fit=crop&w=1200&q=80"
              altText="Hotel AI Transformation"
              captionText=""
              containerHeight="450px"
              containerWidth="100%"
              imageHeight="450px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <div className="relative w-full h-full flex flex-col justify-center items-center text-white pointer-events-auto">
                  <div className="absolute inset-0 bg-black/70 rounded-xl"></div>
                  <div className="relative z-10 text-center px-4">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Hotel?</h2>
                    <p className="mb-6 text-sm opacity-90 max-w-2xl mx-auto">
                      Join hotels looking to reduce fraud, recover lost revenue, and streamline operations with Nexrova.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <Button asChild size="md" className="bg-white text-black px-6 py-3 hover:bg-gray-200">
                        <Link to="/request-demo">Request Demo</Link>
                      </Button>
                      <Button asChild size="md" className="border border-white text-white px-6 py-3 hover:bg-white hover:text-black">
                        <Link to="/contact">Contact Sales</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;




