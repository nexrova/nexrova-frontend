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
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  BarChart3,
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

  const stats = [
    { number: "35%", label: "Cost Reduction", icon: BarChart3 },
    { number: "500+", label: "Hotels Served", icon: Users },
    { number: "4.9★", label: "Customer Rating", icon: Star },
    { number: "24/7", label: "AI Support", icon: Zap }
  ];

  const testimonials = [
    {
      quote: "Nexrova transformed our guest experience and reduced operational costs by 40%. The AI handles routine requests perfectly, freeing our staff for personal service.",
      author: "Sarah Johnson",
      role: "General Manager",
      company: "Grand Pacific Resort"
    },
    {
      quote: "The automated upselling feature increased our ancillary revenue by 25% in the first quarter. Guests love the personalized recommendations.",
      author: "Michael Chen",
      role: "Revenue Manager", 
      company: "Urban Boutique Hotels"
    },
    {
      quote: "Implementation was seamless and the ROI was immediate. Our guest satisfaction scores have never been higher.",
      author: "Lisa Rodriguez",
      role: "Operations Director",
      company: "Mountain View Lodge"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Transform Your Hotel with{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                AI Automation
              </span>
            </h1>
            <p className="text-xl sm:text-2xl mb-12 leading-relaxed opacity-90 max-w-3xl mx-auto">
              Reduce operational costs by 35% while enhancing guest satisfaction with our comprehensive 
              AI-powered hotel automation platform. Intelligent guest interactions, automated upselling, 
              and seamless workflows - all in one solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary-hover">
                <Link to="/request-demo">
                  Request Demo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                <Link to="/solutions">Explore Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating elements for visual appeal */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative -mt-16 mx-4 sm:mx-8 lg:mx-16 rounded-2xl shadow-elegant z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Complete Hotel Automation Suite
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our AI platform integrates seamlessly with your existing systems to deliver 
              intelligent automation across every aspect of hotel operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <Card key={index} className="group shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2 overflow-hidden border-0">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
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

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Trusted by Leading Hotels Worldwide
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how Nexrova is transforming hotel operations across the globe
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-primary">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  Why Choose Nexrova?
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
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
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4">
                <Button asChild size="lg">
                  <Link to="/solutions">
                    Learn More About Our Solutions <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="lg:pl-8">
              <Card className="shadow-elegant overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 via-purple-500/10 to-primary/5 flex items-center justify-center">
                    <div className="text-center">
                      <Workflow className="h-24 w-24 text-primary/60 mx-auto mb-4" />
                      <p className="text-lg font-medium text-muted-foreground">AI-Powered Operations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="gradient-hero text-white text-center shadow-elegant overflow-hidden">
            <CardContent className="py-20 px-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                  Ready to Transform Your Hotel?
                </h2>
                <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
                  Join hundreds of hotels worldwide who trust Nexrova to enhance their operations 
                  and deliver exceptional guest experiences through AI automation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
                    <Link to="/request-demo">Request Demo</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
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
