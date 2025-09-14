import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Users, Target, Eye, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We push the boundaries of AI technology to create solutions that transform the hospitality industry."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Every feature we build is designed with our hotel partners and their guests in mind."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in everything we do, from code quality to customer service."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We believe in honest communication and clear reporting on the impact of our solutions."
    }
  ];

  const team = [
    {
      name: "Jeevan Suresh",
      role: "CEO & Co-founder",
      bio: "Former VP of Engineering at Expedia with 15+ years in hospitality technology.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b372?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Subrat Das",
      role: "Co-founder",
      bio: "AI researcher and former Tesla autonomy engineer with expertise in machine learning systems.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Stuti Swaminathan",
      role: "Software and Market Research Intern",
      bio: "PhD in Computer Science from Stanford, specializing in natural language processing and conversational AI.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Aaron George Varghese",
      role: "AI Backend Intern",
      bio: "20+ years in hospitality sales, formerly at Salesforce and Oracle Hospitality.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "500+", label: "Hotels Served" },
    { number: "50M+", label: "Guests Helped" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Revolutionizing Hospitality with{' '}
              <span className="gradient-text">Artificial Intelligence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Founded in 2025, Nexrova is on a mission to transform how hotels operate, 
              making them more efficient, profitable, and guest-focused through cutting-edge AI technology.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower hotels worldwide with intelligent automation that reduces operational costs, 
                  enhances guest experiences, and drives sustainable growth in the hospitality industry.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A future where every hotel can provide personalized, seamless experiences to their guests 
                  while operating at peak efficiency through the power of artificial intelligence.
                </p>
              </div>
            </div>
            <div className="lg:pl-8">
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                    <Eye className="h-24 w-24 text-primary/60" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Nexrova
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-hover transition-smooth">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry experts and technology innovators working together to transform hospitality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth overflow-hidden">
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-lg text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Want to Join Our Mission?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented individuals to help us revolutionize the hospitality industry.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link to="/careers">View Open Positions</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/request-demo">See Our Solution</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;