import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, Calendar, Users, Zap, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const RequestDemo = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { toast } = useToast();

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    toast({
      title: "Demo Request Submitted!",
      description: "We'll contact you within 24 hours to schedule your personalized demo.",
    });
  };

  const demoFeatures = [
    {
      icon: Zap,
      title: "AI-Powered Automation",
      description: "See how our AI handles guest requests, upselling, and operational workflows in real-time."
    },
    {
      icon: Users,
      title: "Guest Experience Platform",
      description: "Experience our multi-channel communication system that works across chat, voice, and WhatsApp."
    },
    {
      icon: Shield,
      title: "Security & Fraud Detection",
      description: "Learn about our advanced IoT security and fraud prevention capabilities."
    },
    {
      icon: Calendar,
      title: "Operations Dashboard",
      description: "Explore the comprehensive dashboard that gives you insights into every aspect of your hotel."
    }
  ];

  const benefits = [
    "Personalized demo tailored to your hotel's needs",
    "Live Q&A session with our product experts",
    "ROI calculator and implementation timeline",
    "Custom pricing proposal within 24 hours"
  ];

  if (formSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <section className="py-20 flex items-center justify-center min-h-[80vh]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-2xl mx-auto text-center shadow-elegant">
              <CardContent className="pt-16 pb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-4">
                  Thank You for Your Interest!
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We've received your demo request and will contact you within 24 hours to schedule 
                  a personalized demonstration of our AI hotel automation platform.
                </p>
                <div className="bg-muted/50 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold text-foreground mb-4">What happens next?</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">1</div>
                      <div>
                        <p className="font-medium text-foreground">Initial Contact</p>
                        <p className="text-sm text-muted-foreground">Our team will reach out within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">2</div>
                      <div>
                        <p className="font-medium text-foreground">Demo Scheduling</p>
                        <p className="text-sm text-muted-foreground">We'll find a time that works for your schedule</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">3</div>
                      <div>
                        <p className="font-medium text-foreground">Personalized Demo</p>
                        <p className="text-sm text-muted-foreground">45-minute tailored demonstration of our platform</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-x-4">
                  <Button onClick={() => setFormSubmitted(false)}>
                    Request Another Demo
                  </Button>
                  <Button variant="outline" onClick={() => window.location.href = '/'}>
                    Return Home
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              See Nexrova <span className="gradient-text">in Action</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Request a personalized demo and discover how our AI-powered hotel automation platform 
              can transform your operations, reduce costs, and enhance guest satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Form and Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Demo Request Form */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Request Your Demo</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll schedule a personalized demonstration
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleDemoSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Business Email *
                    </label>
                    <Input id="email" type="email" placeholder="john@hotel.com" required />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required />
                  </div>
                  
                  <div>
                    <label htmlFor="hotelName" className="block text-sm font-medium text-foreground mb-2">
                      Hotel/Company Name *
                    </label>
                    <Input id="hotelName" placeholder="Grand Hotel & Resort" required />
                  </div>
                  
                  <div>
                    <label htmlFor="hotelSize" className="block text-sm font-medium text-foreground mb-2">
                      Hotel Size
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of rooms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-50">1-50 rooms</SelectItem>
                        <SelectItem value="51-100">51-100 rooms</SelectItem>
                        <SelectItem value="101-250">101-250 rooms</SelectItem>
                        <SelectItem value="251-500">251-500 rooms</SelectItem>
                        <SelectItem value="500+">500+ rooms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-foreground mb-2">
                      Your Role
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="owner">Owner</SelectItem>
                        <SelectItem value="gm">General Manager</SelectItem>
                        <SelectItem value="operations">Operations Manager</SelectItem>
                        <SelectItem value="it">IT Manager</SelectItem>
                        <SelectItem value="revenue">Revenue Manager</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Tell us about your needs (optional)
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="What challenges are you facing? What features are you most interested in?"
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    Schedule My Demo
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Demo Features */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  What You'll See in Your Demo
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our 45-minute personalized demo will showcase how Nexrova can transform your hotel operations.
                </p>
              </div>

              <div className="space-y-6">
                {demoFeatures.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-4">What's Included:</h3>
                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Demo FAQ
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-2">How long does the demo take?</h3>
                <p className="text-sm text-muted-foreground">
                  Our personalized demo takes approximately 45 minutes, including time for Q&A and discussion of your specific needs.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-2">Can I invite my team to the demo?</h3>
                <p className="text-sm text-muted-foreground">
                  Absolutely! We encourage you to invite key stakeholders like your GM, IT manager, and operations team.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-2">Is this a sales pitch?</h3>
                <p className="text-sm text-muted-foreground">
                  While we're excited to show you our platform, the demo is primarily educational. We focus on understanding your needs and showing relevant features.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RequestDemo;