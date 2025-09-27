// import React from 'react';
// import Navigation from '@/components/Navigation';
// import Footer from '@/components/Footer';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Link } from 'react-router-dom';
// import { 
//   MessageCircle, 
//   TrendingUp, 
//   Workflow, 
//   Shield, 
//   DollarSign, 
//   Users, 
//   Clock, 
//   Star 
// } from 'lucide-react';

// const Solutions = () => {
//   const features = [
//     {
//       icon: MessageCircle,
//       title: "AI-Powered Guest Interactions",
//       description: "Seamless chat, voice, and WhatsApp integration for 24/7 guest support and personalized service delivery.",
//       benefits: ["24/7 availability", "Multi-language support", "Instant response time", "Personalized recommendations"]
//     },
//     {
//       icon: TrendingUp,
//       title: "Automated Upselling",
//       description: "Intelligent recommendations for meals, spa services, and late checkouts based on guest preferences and behavior.",
//       benefits: ["Increase revenue per guest", "Personalized offers", "Optimal timing", "Higher conversion rates"]
//     },
//     {
//       icon: Workflow,
//       title: "Agentic AI Workflows",
//       description: "Streamlined automation for housekeeping schedules, booking management, and complaint resolution.",
//       benefits: ["Reduced manual work", "Faster turnaround", "Consistent quality", "Error reduction"]
//     },
//     {
//       icon: Shield,
//       title: "Fraud Detection & IoT Security",
//       description: "Advanced security monitoring for smart locks, sensors, and payment systems to protect guests and property.",
//       benefits: ["Real-time monitoring", "Threat prevention", "Secure access control", "Payment protection"]
//     }
//   ];

//   const benefits = [
//     {
//       icon: DollarSign,
//       title: "Reduce Operational Costs",
//       percentage: "35%",
//       description: "Average cost reduction through automation and efficient resource management"
//     },
//     {
//       icon: Users,
//       title: "Enhance Guest Satisfaction",
//       percentage: "92%",
//       description: "Guest satisfaction rate with AI-powered personalized service"
//     },
//     {
//       icon: Clock,
//       title: "Faster Response Times",
//       percentage: "3x",
//       description: "Faster issue resolution and service delivery with automated workflows"
//     },
//     {
//       icon: Star,
//       title: "Improve Service Quality",
//       percentage: "4.8/5",
//       description: "Average guest rating improvement with Nexrova implementation"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />
      
//       {/* Hero Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-4xl mx-auto">
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
//               Transform Your Hotel Operations with{' '}
//               <span className="gradient-text">AI Solutions</span>
//             </h1>
//             <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
//               Nexrova's comprehensive AI platform reduces operational costs by up to potentially 35% 
//               while enhancing guest satisfaction through intelligent automation and personalized service.
//             </p>
//             <Button asChild size="lg" className="mr-4">
//               <Link to="/request-demo">Request Demo</Link>
//             </Button>
//             <Button asChild variant="outline" size="lg">
//               <Link to="/contact">Contact Sales</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
//               Measurable Impact on Your Business
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               See real results with our AI-powered hotel automation solutions
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {benefits.map((benefit, index) => (
//               <Card key={index} className="text-center shadow-card hover:shadow-hover transition-smooth">
//                 <CardContent className="pt-8">
//                   <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
//                     <benefit.icon className="h-8 w-8 text-primary" />
//                   </div>
//                   <div className="text-3xl font-bold text-primary mb-2">{benefit.percentage}</div>
//                   <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
//                   <p className="text-sm text-muted-foreground">{benefit.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-muted/50">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
//               Comprehensive AI Solutions for Hotels
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Our integrated platform covers every aspect of hotel operations
//             </p>
//           </div>

//           <div className="space-y-16">
//             {features.map((feature, index) => (
//               <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
//                 <div className="flex-1 space-y-6">
//                   <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
//                     <feature.icon className="h-8 w-8 text-primary" />
//                   </div>
//                   <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{feature.title}</h3>
//                   <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
//                   <div className="space-y-2">
//                     {feature.benefits.map((benefit, benefitIndex) => (
//                       <div key={benefitIndex} className="flex items-center space-x-2">
//                         <div className="w-2 h-2 bg-primary rounded-full"></div>
//                         <span className="text-sm text-muted-foreground">{benefit}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="flex-1">
//                   <Card className="shadow-elegant">
//                     <CardContent className="p-8">
//                       <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
//                         <feature.icon className="h-16 w-16 text-primary/60" />
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       {/* <section className="py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <Card className="bg-gray-900 text-white text-center shadow-elegant">
//             <CardContent className="py-16 px-8">
//               <h2 className="text-3xl sm:text-4xl font-bold mb-4">
//                 Ready to Transform Your Hotel?
//               </h2>
//               <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
//                 Join leading hotels worldwide who trust Nexrova to enhance their operations and guest experience.
//               </p>
//               <div className="space-x-4">
//                 <Button asChild size="lg" variant="secondary">
//                   <Link to="/request-demo">Request Demo</Link>
//                 </Button>
//                 <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
//                   <Link to="/contact">Contact Sales</Link>
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section> */}
//       {/* CTA Section */}
//       {/* CTA Section */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <Card className="bg-black text-white text-center shadow-elegant overflow-hidden hover-lift transition-smooth relative">
//             <CardContent className="py-16 px-8 relative">
//               {/* Cyan overlay */}
//               <div className="absolute inset-0 bg-gradient-to-r from-nexrova-cyan/20 to-transparent"></div>

//               {/* Content on top of overlay */}
//               <div className="relative z-10">
//                 <h2 className="text-3xl sm:text-4xl font-bold mb-4">
//                   Ready to Transform Your Hotel?
//                 </h2>
//                 <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
//                   Join leading hotels worldwide who trust Nexrova to enhance their operations and guest experience.
//                 </p>
//                 <div className="space-x-4">
//                   <Button asChild size="lg" variant="secondary">
//                     <Link to="/request-demo">Request Demo</Link>
//                   </Button>
//                   <Button
//                     asChild
//                     size="lg"
//                     variant="outline"
//                     className="border-white text-gray-300 hover:bg-white hover:text-gray-900"
//                   >
//                     <Link to="/contact">Contact Sales</Link>
//                   </Button>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default Solutions;

// import React from 'react';
// import Navigation from '@/components/Navigation';
// import Footer from '@/components/Footer';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Link } from 'react-router-dom';
// import { 
//   MessageCircle, 
//   TrendingUp, 
//   Workflow, 
//   Shield, 
//   DollarSign, 
//   Users, 
//   Clock, 
//   Star 
// } from 'lucide-react';

// const Solutions = () => {
//   const features = [
//     {
//       icon: MessageCircle,
//       title: "AI-Powered Guest Interactions",
//       description: "Seamless chat, voice, and WhatsApp integration for 24/7 guest support and personalized service delivery.",
//       benefits: ["24/7 availability", "Multi-language support", "Instant response time", "Personalized recommendations"]
//     },
//     {
//       icon: TrendingUp,
//       title: "Automated Upselling",
//       description: "Intelligent recommendations for meals, spa services, and late checkouts based on guest preferences and behavior.",
//       benefits: ["Increase revenue per guest", "Personalized offers", "Optimal timing", "Higher conversion rates"]
//     },
//     {
//       icon: Workflow,
//       title: "Agentic AI Workflows",
//       description: "Streamlined automation for housekeeping schedules, booking management, and complaint resolution.",
//       benefits: ["Reduced manual work", "Faster turnaround", "Consistent quality", "Error reduction"]
//     },
//     {
//       icon: Shield,
//       title: "Fraud Detection & IoT Security",
//       description: "Advanced security monitoring for smart locks, sensors, and payment systems to protect guests and property.",
//       benefits: ["Real-time monitoring", "Threat prevention", "Secure access control", "Payment protection"]
//     }
//   ];

//   const benefits = [
//     {
//       icon: DollarSign,
//       title: "Reduce Operational Costs",
//       percentage: "35%",
//       description: "Average cost reduction through automation and efficient resource management"
//     },
//     {
//       icon: Users,
//       title: "Enhance Guest Satisfaction",
//       percentage: "92%",
//       description: "Guest satisfaction rate with AI-powered personalized service"
//     },
//     {
//       icon: Clock,
//       title: "Faster Response Times",
//       percentage: "3x",
//       description: "Faster issue resolution and service delivery with automated workflows"
//     },
//     {
//       icon: Star,
//       title: "Improve Service Quality",
//       percentage: "4.8/5",
//       description: "Average guest rating improvement with Nexrova implementation"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />
      
//       {/* Hero Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-4xl mx-auto">
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
//               Transform Your Hotel Operations with{' '}
//               <span className="gradient-text">AI Solutions</span>
//             </h1>
//             <p className="text-xl sm:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
//               Nexrova's comprehensive AI platform reduces operational costs by up to 35% 
//               while enhancing guest satisfaction through intelligent automation and personalized service.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button asChild className="text-lg px-8 py-4 btn-gradient hover-glow-cyan">
//                 <Link to="/request-demo">Request Demo</Link>
//               </Button>
//               <Button asChild className="text-lg px-8 py-4 btn-gold hover-glow-gold">
//                 <Link to="/contact">Contact Sales</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
//               Measurable Impact on Your Business
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               See real results with our AI-powered hotel automation solutions
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {benefits.map((benefit, index) => (
//               <Card key={index} className="text-center shadow-card hover:shadow-hover transition-smooth">
//                 <CardContent className="pt-8">
//                   <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
//                     <benefit.icon className="h-8 w-8 text-primary" />
//                   </div>
//                   <div className="text-3xl font-bold text-primary mb-2">{benefit.percentage}</div>
//                   <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
//                   <p className="text-sm text-muted-foreground">{benefit.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 bg-muted/50">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
//               Comprehensive AI Solutions for Hotels
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Our integrated platform covers every aspect of hotel operations
//             </p>
//           </div>

//           <div className="space-y-16">
//             {features.map((feature, index) => (
//               <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
//                 <div className="flex-1 space-y-6">
//                   <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full">
//                     <feature.icon className="h-8 w-8 text-primary" />
//                   </div>
//                   <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{feature.title}</h3>
//                   <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
//                   <div className="space-y-2">
//                     {feature.benefits.map((benefit, benefitIndex) => (
//                       <div key={benefitIndex} className="flex items-center space-x-2">
//                         <div className="w-2 h-2 bg-primary rounded-full"></div>
//                         <span className="text-sm text-muted-foreground">{benefit}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="flex-1">
//                   <Card className="shadow-elegant">
//                     <CardContent className="p-8">
//                       <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
//                         <feature.icon className="h-16 w-16 text-primary/60" />
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-background">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <Card className="bg-black text-white text-center shadow-elegant overflow-hidden hover-lift transition-colors relative">
//             <CardContent className="py-20 px-8 relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-nexrova-cyan/20 to-transparent"></div>
//               <div className="relative z-10">
//                 <h2 className="text-4xl sm:text-5xl font-bold mb-6">
//                   Ready to Transform Your Hotel?
//                 </h2>
//                 <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
//                   Join leading hotels worldwide who trust Nexrova to enhance their operations and guest experience.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                   {/* Request Demo Button */}
//                   <Link
//                     to="/request-demo"
//                     className="text-lg px-8 py-4 bg-white text-black rounded-md border border-white hover:bg-gray-100 transition-colors"
//                   >
//                     Request Demo
//                   </Link>

//                   {/* Contact Sales Button */}
//                   <Link
//                     to="/contact"
//                     className="text-lg px-8 py-4 border border-white text-white rounded-md hover:bg-white hover:text-black transition-colors"
//                   >
//                     Contact Sales
//                   </Link>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>


//       <Footer />
//     </div>
//   );
// };

// export default Solutions;

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
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
              Transform Your Hotel Operations with{' '}
              <span className="gradient-text">AI Solutions</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Nexrova's comprehensive AI platform reduces operational costs by up to 35% 
              while enhancing guest satisfaction through intelligent automation and personalized service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="text-lg px-8 py-4 btn-gradient hover-glow-cyan">
                <Link to="/request-demo">Request Demo</Link>
              </Button>
              <Button asChild className="text-lg px-8 py-4 btn-gold hover-glow-gold">
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
              Measurable Impact on Your Business
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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

      {/* CTA Section with Dark Overlay Background */}
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
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/70 rounded-xl"></div>

                  {/* Content on top */}
                  <div className="relative z-10 text-center px-4">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Hotel?</h2>
                    <p className="mb-6 text-sm opacity-90 max-w-2xl mx-auto">
                      Join leading hotels worldwide who trust Nexrova to enhance their operations and guest experience.
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

