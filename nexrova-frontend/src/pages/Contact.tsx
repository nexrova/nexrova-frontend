import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  BookOpen, 
  Users, 
  Headphones 
} from 'lucide-react';

const Contact = () => {
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Contact form submission logic would go here
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      value: "hello@nexrova.com",
      action: "mailto:hello@nexrova.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our headquarters",
      value: "123 Innovation Drive, San Francisco, CA 94105",
      action: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "Monday - Friday",
      value: "9:00 AM - 6:00 PM PST",
      action: "#"
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      button: "Start Chat"
    },
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive guides and API reference",
      button: "View Docs"
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other Nexrova users",
      button: "Join Forum"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical assistance",
      button: "Contact Support"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Innovation Drive, San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      isHeadquarters: true
    },
    {
      city: "New York",
      address: "456 Tech Avenue, New York, NY 10001",
      phone: "+1 (555) 234-5678",
      isHeadquarters: false
    },
    {
      city: "Austin",
      address: "789 Startup Blvd, Austin, TX 73301",
      phone: "+1 (555) 345-6789",
      isHeadquarters: false
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
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Have questions about our AI hotel automation solutions? We'd love to hear from you. 
              Our team is ready to help transform your hotel operations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-hover transition-smooth">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <method.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  {method.action.startsWith('#') ? (
                    <p className="text-sm font-medium text-primary">{method.value}</p>
                  ) : (
                    <a href={method.action} className="text-sm font-medium text-primary hover:underline">
                      {method.value}
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john@hotel.com" />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input id="company" placeholder="Hotel Name" />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your hotel and how we can help..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Office Info */}
            <div className="space-y-8">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Offices</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="pb-6 border-b border-border last:border-b-0 last:pb-0">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-foreground">{office.city}</h3>
                        {office.isHeadquarters && (
                          <span className="text-xs bg-primary text-white px-2 py-1 rounded">HQ</span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{office.address}</p>
                      <a href={`tel:${office.phone}`} className="text-sm text-primary hover:underline">
                        {office.phone}
                      </a>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                    <MapPin className="h-16 w-16 text-primary/60" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Need Help?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to get the support you need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-hover transition-smooth">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <option.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{option.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
                  <Button variant="outline" size="sm">{option.button}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="gradient-hero text-white text-center shadow-elegant">
            <CardContent className="py-16 px-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to See Nexrova in Action?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Schedule a personalized demo and see how our AI solutions can transform your hotel operations.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link to="/request-demo">Request Demo</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;