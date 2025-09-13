import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Users, Lightbulb, Heart, Zap } from 'lucide-react';

const Careers = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision insurance plus wellness programs"
    },
    {
      icon: Lightbulb,
      title: "Learning & Growth",
      description: "Annual learning budget, conference attendance, and career development programs"
    },
    {
      icon: Users,
      title: "Work-Life Balance",
      description: "Flexible work arrangements, unlimited PTO, and mental health support"
    },
    {
      icon: Zap,
      title: "Equity & Bonuses",
      description: "Competitive equity packages and performance-based bonuses"
    }
  ];

  const openings = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      remote: true,
      description: "Build and optimize machine learning models for hotel automation systems. Work with NLP, computer vision, and predictive analytics.",
      skills: ["Python", "TensorFlow", "PyTorch", "AWS", "Docker"],
      level: "Senior"
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      remote: true,
      description: "Create beautiful, responsive user interfaces for our hotel management dashboard and guest-facing applications.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      level: "Mid-level"
    },
    {
      title: "Product Marketing Manager",
      department: "Marketing",
      location: "New York, NY",
      type: "Full-time",
      remote: false,
      description: "Drive go-to-market strategy for new AI features and lead competitive intelligence for the hospitality market.",
      skills: ["Product Marketing", "B2B SaaS", "Hospitality", "Analytics"],
      level: "Senior"
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Austin, TX",
      type: "Full-time",
      remote: true,
      description: "Ensure hotel clients achieve maximum value from our AI platform through onboarding, training, and ongoing support.",
      skills: ["Customer Success", "SaaS", "Project Management", "Communication"],
      level: "Mid-level"
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Seattle, WA",
      type: "Full-time",
      remote: true,
      description: "Build and maintain our cloud infrastructure, CI/CD pipelines, and monitoring systems for high-availability AI services.",
      skills: ["AWS", "Kubernetes", "Terraform", "Python", "Monitoring"],
      level: "Senior"
    },
    {
      title: "Sales Development Representative",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      remote: true,
      description: "Generate qualified leads and build relationships with hotel decision-makers to drive new business growth.",
      skills: ["Sales", "CRM", "Lead Generation", "Communication"],
      level: "Entry-level"
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
              Join the Future of{' '}
              <span className="gradient-text">Hotel Technology</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Help us revolutionize the hospitality industry with AI-powered solutions that make hotels 
              more efficient and guests happier. Build your career with a team that values innovation, 
              growth, and work-life balance.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Work at Nexrova?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in taking care of our team so they can do their best work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-hover transition-smooth">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our growing team and help shape the future of hospitality technology
            </p>
          </div>
          
          <div className="space-y-6">
            {openings.map((job, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-foreground">{job.title}</CardTitle>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={job.remote ? "default" : "secondary"}>
                        {job.remote ? "Remote OK" : "On-site"}
                      </Badge>
                      <Badge variant="outline">{job.level}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{job.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full sm:w-auto">Apply Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Our Culture
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We foster an environment of innovation, collaboration, and continuous learning. 
                Our team is diverse, inclusive, and passionate about solving complex problems 
                in the hospitality industry.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-foreground">Innovation First</h4>
                    <p className="text-sm text-muted-foreground">We encourage experimentation and creative problem-solving</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-foreground">Growth Mindset</h4>
                    <p className="text-sm text-muted-foreground">Continuous learning and professional development are core to who we are</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-medium text-foreground">Work-Life Harmony</h4>
                    <p className="text-sm text-muted-foreground">Flexible schedules and remote work options support your personal life</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="shadow-elegant">
                <CardContent className="p-8">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                    <Users className="h-24 w-24 text-primary/60" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Don't See the Right Role?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for exceptional talent. Send us your resume and tell us how 
              you'd like to contribute to the future of hospitality technology.
            </p>
            <Button size="lg">
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;