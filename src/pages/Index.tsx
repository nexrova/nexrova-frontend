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
//   ArrowRight,
//   CheckCircle,
//   Star,
//   Zap
// } from 'lucide-react';
// import heroBackground from '@/assets/hero-background.jpg';

// const Index = () => {
//   const features = [
//     {
//       icon: MessageCircle,
//       title: "AI-Powered Guest Interactions",
//       description: "Seamless chat, voice, and WhatsApp integration for 24/7 guest support with intelligent responses and personalized service.",
//       gradient: "from-blue-500 to-blue-600"
//     },
//     {
//       icon: TrendingUp,
//       title: "Automated Upselling",
//       description: "Smart recommendations for meals, spa services, and late checkouts that increase revenue while enhancing guest experience.",
//       gradient: "from-green-500 to-emerald-600"
//     },
//     {
//       icon: Workflow,
//       title: "Agentic AI Workflows",
//       description: "Streamlined automation for housekeeping schedules, booking management, and complaint resolution processes.",
//       gradient: "from-purple-500 to-purple-600"
//     },
//     {
//       icon: Shield,
//       title: "Fraud Detection & IoT Security",
//       description: "Advanced security monitoring for smart locks, sensors, and payment systems to protect guests and property.",
//       gradient: "from-red-500 to-red-600"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />
      
//       {/* Hero Section */}
//       <section className="relative py-32 overflow-hidden section-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-navy">
//               Transform Your Hotel with{' '}
//               <span className="gradient-text">
//                 AI Automation
//               </span>
//             </h1>
//             <p className="text-xl sm:text-2xl mb-12 leading-relaxed text-charcoal max-w-3xl mx-auto">
//               Reduce operational costs by 35% while enhancing guest satisfaction with our comprehensive 
//               AI-powered hotel automation platform. Intelligent guest interactions, automated upselling, 
//               and seamless workflows - all in one solution.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button asChild size="lg" className="text-lg px-8 py-4 btn-gradient hover-glow-cyan">
//                 <Link to="/request-demo">
//                   Request Demo <ArrowRight className="ml-2 h-5 w-5" />
//                 </Link>
//               </Button>
//               <Button asChild size="lg" className="text-lg px-8 py-4 btn-gold hover-glow-gold">
//                 <Link to="/solutions">Explore Solutions</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
        
//         {/* Premium floating elements */}
//         <div className="absolute top-1/4 left-10 w-20 h-20 bg-nexrova-cyan/20 rounded-full blur-xl"></div>
//         <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
//         <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-nexrova-gold/20 rounded-full blur-xl"></div>
//       </section>

//       {/* Features Section */}
//       <section className="py-24 section-soft-gray">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
//               Complete Hotel Automation Suite
//             </h2>
//             <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
//               Our AI platform integrates seamlessly with your existing systems to deliver 
//               intelligent automation across every aspect of hotel operations.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
//             {features.map((feature, index) => (
//               <Card key={index} className="group shadow-card hover-lift transition-all duration-500 overflow-hidden border-0 section-white">
//                 <CardContent className="p-8">
//                   <div className="flex items-start gap-6">
//                     <div className="flex-shrink-0 w-16 h-16 gradient-cyan-purple rounded-2xl flex items-center justify-center shadow-cyan hover-glow-cyan transition-glow">
//                       <feature.icon className="h-8 w-8 text-white" />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-nexrova-cyan transition-colors">
//                         {feature.title}
//                       </h3>
//                       <p className="text-medium-gray leading-relaxed">
//                         {feature.description}
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-24 section-soft-gray">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div className="space-y-8">
//               <div>
//                 <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
//                   Why Choose Nexrova?
//                 </h2>
//                 <p className="text-xl text-medium-gray leading-relaxed">
//                   Our AI platform delivers measurable results that transform both operations and guest experience.
//                 </p>
//               </div>
              
//               <div className="space-y-6">
//                 {[
//                   "Reduce operational costs by up to 35%",
//                   "Increase guest satisfaction scores by 25%", 
//                   "Boost ancillary revenue through smart upselling",
//                   "24/7 AI-powered guest support",
//                   "Enterprise-grade security and compliance",
//                   "Seamless integration with existing systems"
//                 ].map((benefit, index) => (
//                   <div key={index} className="flex items-center gap-4">
//                     <CheckCircle className="h-6 w-6 text-nexrova-cyan flex-shrink-0" />
//                     <span className="text-lg text-medium-gray">{benefit}</span>
//                   </div>
//                 ))}
//               </div>
              
//               <div className="pt-4">
//                 <Button asChild size="lg" className="btn-gradient hover-glow-cyan">
//                   <Link to="/solutions">
//                     Learn More About Our Solutions <ArrowRight className="ml-2 h-5 w-5" />
//                   </Link>
//                 </Button>
//               </div>
//             </div>
            
//             <div className="lg:pl-8">
//               <Card className="shadow-elegant overflow-hidden hover-lift transition-smooth">
//                 <CardContent className="p-0">
//                   <div className="aspect-square bg-gradient-to-br from-nexrova-cyan/20 via-purple-500/10 to-nexrova-cyan/5 flex items-center justify-center">
//                     <div className="text-center">
//                       <Workflow className="h-24 w-24 text-nexrova-cyan/60 mx-auto mb-4" />
//                       <p className="text-lg font-medium text-medium-gray">AI-Powered Operations</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* CTA Section */}
//       <section className="py-24 section-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <Card className="bg-black text-white text-center shadow-elegant overflow-hidden hover-lift transition-smooth">
//             <CardContent className="py-20 px-8 relative">
//               <div className="absolute inset-0 bg-gradient-to-r from-nexrova-cyan/20 to-transparent"></div>
//               <div className="relative z-10">
//                 <h2 className="text-4xl sm:text-5xl font-bold mb-6">
//                   Ready to Transform Your Hotel?
//                 </h2>
//                 <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
//                   Join hundreds of hotels worldwide who trust Nexrova to enhance their operations 
//                   and deliver exceptional guest experiences through AI automation.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                   <Button asChild size="lg" className="bg-white text-black text-lg px-8 py-4 hover:bg-gray-200">
//                     <Link to="/request-demo">Request Demo</Link>
//                   </Button>
//                   <Button asChild size="lg" className="border border-white text-white text-lg px-8 py-4 hover:bg-white hover:text-black">
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

// export default Index;

// import React from 'react';
// import Navigation from '@/components/Navigation';
// import Footer from '@/components/Footer';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Link } from 'react-router-dom';
// import TiltedCard from '@/components/TiltedCard';
// import { ArrowRight, MessageCircle, TrendingUp, Workflow, Shield, CheckCircle } from 'lucide-react';

// const Index = () => {
//   const features = [
//     {
//       icon: MessageCircle,
//       title: "AI-Powered Guest Interactions",
//       description: "Seamless chat, voice, and WhatsApp integration for 24/7 guest support with intelligent responses and personalized service.",
//       gradient: "from-blue-500 to-blue-600"
//     },
//     {
//       icon: TrendingUp,
//       title: "Automated Upselling",
//       description: "Smart recommendations for meals, spa services, and late checkouts that increase revenue while enhancing guest experience.",
//       gradient: "from-green-500 to-emerald-600"
//     },
//     {
//       icon: Workflow,
//       title: "Agentic AI Workflows",
//       description: "Streamlined automation for housekeeping schedules, booking management, and complaint resolution processes.",
//       gradient: "from-purple-500 to-purple-600"
//     },
//     {
//       icon: Shield,
//       title: "Fraud Detection & IoT Security",
//       description: "Advanced security monitoring for smart locks, sensors, and payment systems to protect guests and property.",
//       gradient: "from-red-500 to-red-600"
//     }
//   ];

//   const benefits = [
//     "Reduce operational costs by up to 35%",
//     "Increase guest satisfaction scores by 25%", 
//     "Boost ancillary revenue through smart upselling",
//     "24/7 AI-powered guest support",
//     "Enterprise-grade security and compliance",
//     "Seamless integration with existing systems"
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="relative py-32 overflow-hidden section-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-navy">
//             Transform Your Hotel with{' '}
//             <span className="gradient-text">AI Automation</span>
//           </h1>
//           <p className="text-xl sm:text-2xl mb-12 leading-relaxed text-charcoal max-w-3xl mx-auto">
//             Reduce operational costs by 35% while enhancing guest satisfaction with our comprehensive 
//             AI-powered hotel automation platform. Intelligent guest interactions, automated upselling, 
//             and seamless workflows - all in one solution.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button asChild size="lg" className="text-lg px-8 py-4 btn-gradient hover-glow-cyan">
//               <Link to="/request-demo">
//                 Request Demo <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//             </Button>
//             <Button asChild size="lg" className="text-lg px-8 py-4 btn-gold hover-glow-gold">
//               <Link to="/solutions">Explore Solutions</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-24 section-soft-gray">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
//               Complete Hotel Automation Suite
//             </h2>
//             <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
//               Our AI platform integrates seamlessly with your existing systems to deliver 
//               intelligent automation across every aspect of hotel operations.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
//             {features.map((feature, index) => (
//               <Card key={index} className="group shadow-card hover-lift transition-all duration-500 overflow-hidden border-0 section-white">
//                 <CardContent className="p-8">
//                   <div className="flex items-start gap-6">
//                     <div className="flex-shrink-0 w-16 h-16 gradient-cyan-purple rounded-2xl flex items-center justify-center shadow-cyan hover-glow-cyan transition-glow">
//                       <feature.icon className="h-8 w-8 text-white" />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-nexrova-cyan transition-colors">
//                         {feature.title}
//                       </h3>
//                       <p className="text-medium-gray leading-relaxed">
//                         {feature.description}
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-24 section-soft-gray">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div className="space-y-8">
//               <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
//                 Why Choose Nexrova?
//               </h2>
//               <p className="text-xl text-medium-gray leading-relaxed">
//                 Our AI platform delivers measurable results that transform both operations and guest experience.
//               </p>
//               <div className="space-y-4">
//                 {benefits.map((benefit, idx) => (
//                   <div key={idx} className="flex items-center gap-4">
//                     <CheckCircle className="h-6 w-6 text-nexrova-cyan flex-shrink-0" />
//                     <span className="text-lg text-medium-gray">{benefit}</span>
//                   </div>
//                 ))}
//               </div>
//               <div className="pt-4">
//                 <Button asChild size="lg" className="btn-gradient hover-glow-cyan">
//                   <Link to="/solutions">
//                     Learn More About Our Solutions <ArrowRight className="ml-2 h-5 w-5" />
//                   </Link>
//                 </Button>
//               </div>
//             </div>
            
//             <div className="lg:pl-8">
//               <Card className="shadow-elegant overflow-hidden hover-lift transition-smooth">
//                 <CardContent className="p-0">
//                   <div className="aspect-square bg-gradient-to-br from-nexrova-cyan/20 via-purple-500/10 to-nexrova-cyan/5 flex items-center justify-center">
//                     <div className="text-center">
//                       <Workflow className="h-24 w-24 text-nexrova-cyan/60 mx-auto mb-4" />
//                       <p className="text-lg font-medium text-medium-gray">AI-Powered Operations</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Tilted Card Section */}
//       <section className="py-24 section-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
//           <div className="w-full max-w-md">
//             <TiltedCard
//               imageSrc="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?fit=crop&w=800&q=80"
//               altText="Hotel AI Transformation"
//               captionText="Ready to Transform Your Hotel?"
//               containerHeight="400px"
//               containerWidth="100%"
//               imageHeight="400px"
//               imageWidth="100%"
//               rotateAmplitude={12}
//               scaleOnHover={1.1}
//               showMobileWarning={false}
//               showTooltip={true}
//               displayOverlayContent={true}
//               overlayContent={
//                 <div className="p-6 text-center text-white">
//                   <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Hotel?</h2>
//                   <p className="mb-6 text-sm opacity-90">
//                     Join hundreds of hotels worldwide using Nexrova to enhance operations and guest experiences.
//                   </p>
//                   <div className="flex flex-col sm:flex-row justify-center gap-4">
//                     <Button asChild size="md" className="bg-white text-black px-6 py-3 hover:bg-gray-200">
//                       <Link to="/request-demo">Request Demo</Link>
//                     </Button>
//                     <Button asChild size="md" className="border border-white text-white px-6 py-3 hover:bg-white hover:text-black">
//                       <Link to="/contact">Contact Sales</Link>
//                     </Button>
//                   </div>
//                 </div>
//               }
//             />
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Index;

// import React from 'react';
// import Navigation from '@/components/Navigation';
// import Footer from '@/components/Footer';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Link } from 'react-router-dom';
// import TiltedCard from '@/components/TiltedCard';
// import { ArrowRight, MessageCircle, TrendingUp, Workflow, Shield, CheckCircle } from 'lucide-react';

// const Index = () => {
//   const features = [
//     {
//       icon: MessageCircle,
//       title: "AI-Powered Guest Interactions",
//       description: "Seamless chat, voice, and WhatsApp integration for 24/7 guest support with intelligent responses and personalized service.",
//       gradient: "from-blue-500 to-blue-600"
//     },
//     {
//       icon: TrendingUp,
//       title: "Automated Upselling",
//       description: "Smart recommendations for meals, spa services, and late checkouts that increase revenue while enhancing guest experience.",
//       gradient: "from-green-500 to-emerald-600"
//     },
//     {
//       icon: Workflow,
//       title: "Agentic AI Workflows",
//       description: "Streamlined automation for housekeeping schedules, booking management, and complaint resolution processes.",
//       gradient: "from-purple-500 to-purple-600"
//     },
//     {
//       icon: Shield,
//       title: "Fraud Detection & IoT Security",
//       description: "Advanced security monitoring for smart locks, sensors, and payment systems to protect guests and property.",
//       gradient: "from-red-500 to-red-600"
//     }
//   ];

//   const benefits = [
//     "Reduce operational costs by up to 35%",
//     "Increase guest satisfaction scores by 25%", 
//     "Boost ancillary revenue through smart upselling",
//     "24/7 AI-powered guest support",
//     "Enterprise-grade security and compliance",
//     "Seamless integration with existing systems"
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="relative py-32 overflow-hidden section-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-navy">
//             Transform Your Hotel with{' '}
//             <span className="gradient-text">AI Automation</span>
//           </h1>
//           <p className="text-xl sm:text-2xl mb-12 leading-relaxed text-charcoal max-w-3xl mx-auto">
//             Reduce operational costs by 35% while enhancing guest satisfaction with our comprehensive 
//             AI-powered hotel automation platform. Intelligent guest interactions, automated upselling, 
//             and seamless workflows - all in one solution.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button asChild size="lg" className="text-lg px-8 py-4 btn-gradient hover-glow-cyan">
//               <Link to="/request-demo">
//                 Request Demo <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//             </Button>
//             <Button asChild size="lg" className="text-lg px-8 py-4 btn-gold hover-glow-gold">
//               <Link to="/solutions">Explore Solutions</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-24 section-soft-gray">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
//               Complete Hotel Automation Suite
//             </h2>
//             <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
//               Our AI platform integrates seamlessly with your existing systems to deliver 
//               intelligent automation across every aspect of hotel operations.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
//             {features.map((feature, index) => (
//               <Card key={index} className="group shadow-card hover-lift transition-all duration-500 overflow-hidden border-0 section-white">
//                 <CardContent className="p-8">
//                   <div className="flex items-start gap-6">
//                     <div className="flex-shrink-0 w-16 h-16 gradient-cyan-purple rounded-2xl flex items-center justify-center shadow-cyan hover-glow-cyan transition-glow">
//                       <feature.icon className="h-8 w-8 text-white" />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-nexrova-cyan transition-colors">
//                         {feature.title}
//                       </h3>
//                       <p className="text-medium-gray leading-relaxed">
//                         {feature.description}
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-24 section-soft-gray">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div className="space-y-8">
//               <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
//                 Why Choose Nexrova?
//               </h2>
//               <p className="text-xl text-medium-gray leading-relaxed">
//                 Our AI platform delivers measurable results that transform both operations and guest experience.
//               </p>
//               <div className="space-y-4">
//                 {benefits.map((benefit, idx) => (
//                   <div key={idx} className="flex items-center gap-4">
//                     <CheckCircle className="h-6 w-6 text-nexrova-cyan flex-shrink-0" />
//                     <span className="text-lg text-medium-gray">{benefit}</span>
//                   </div>
//                 ))}
//               </div>
//               <div className="pt-4">
//                 <Button asChild size="lg" className="btn-gradient hover-glow-cyan">
//                   <Link to="/solutions">
//                     Learn More About Our Solutions <ArrowRight className="ml-2 h-5 w-5" />
//                   </Link>
//                 </Button>
//               </div>
//             </div>
            
//             <div className="lg:pl-8">
//               <Card className="shadow-elegant overflow-hidden hover-lift transition-smooth">
//                 <CardContent className="p-0">
//                   <div className="aspect-square bg-gradient-to-br from-nexrova-cyan/20 via-purple-500/10 to-nexrova-cyan/5 flex items-center justify-center">
//                     <div className="text-center">
//                       <Workflow className="h-24 w-24 text-nexrova-cyan/60 mx-auto mb-4" />
//                       <p className="text-lg font-medium text-medium-gray">AI-Powered Operations</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Tilted Card Section */}
//       {/* <section className="py-24">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
//           <div className="w-full max-w-md">
//             <TiltedCard
//               imageSrc="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?fit=crop&w=800&q=80"
//               altText="Hotel AI Transformation"
//               captionText=""
//               containerHeight="450px"
//               containerWidth="100%"
//               imageHeight="450px"
//               imageWidth="100%"
//               rotateAmplitude={12}
//               scaleOnHover={1.05}
//               showMobileWarning={false}
//               showTooltip={false}
//               displayOverlayContent={true}
//               overlayContent={
//                 <div className="h-full w-full flex flex-col justify-center items-center bg-black bg-opacity-90 p-8 rounded-lg text-center pointer-events-auto">
//                   <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Hotel?</h2>
//                   <p className="mb-6 text-white text-opacity-80">
//                     Join hundreds of hotels worldwide using Nexrova to enhance operations and guest experiences.
//                   </p>
//                   <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                     <Button asChild size="md" className="bg-white text-black px-6 py-3 hover:bg-gray-200">
//                       <Link to="/request-demo">Request Demo</Link>
//                     </Button>
//                     <Button asChild size="md" className="border border-white text-white px-6 py-3 hover:bg-white hover:text-black">
//                       <Link to="/contact">Contact Sales</Link>
//                     </Button>
//                   </div>
//                 </div>
//               }
//             />
//           </div>
//         </div>
//       </section> */}
//       {/* CTA Tilted Card Section */}
//       <section className="py-24 section-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
//           <div className="w-full max-w-3xl"> {/* Wider max width */}
//             <TiltedCard
//               imageSrc="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?fit=crop&w=800&q=80"
//               altText="Hotel AI Transformation"
//               captionText=""
//               containerHeight="450px"
//               containerWidth="100%"
//               imageHeight="450px"
//               imageWidth="100%"
//               rotateAmplitude={12}
//               scaleOnHover={1.05}
//               showMobileWarning={false}
//               showTooltip={false}
//               displayOverlayContent={true}
//               overlayContent={
//                 <div className="p-8 text-center text-white bg-black/30 rounded-xl flex flex-col items-center justify-center h-full w-full">
//                   <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Hotel?</h2>
//                   <p className="mb-6 text-base sm:text-lg opacity-90 max-w-xl">
//                     Join hundreds of hotels worldwide using Nexrova to enhance operations and guest experiences.
//                   </p>
//                   <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
//                     <Button asChild size="md" className="bg-white text-black px-6 py-3 hover:bg-gray-200">
//                       <Link to="/request-demo">Request Demo</Link>
//                     </Button>
//                     <Button asChild size="md" className="border border-white text-white px-6 py-3 hover:bg-white hover:text-black">
//                       <Link to="/contact">Contact Sales</Link>
//                     </Button>
//                   </div>
//                 </div>
//               }
//             />
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Index;


// import React from 'react';
// import Navigation from '@/components/Navigation';
// import Footer from '@/components/Footer';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Link } from 'react-router-dom';
// import TiltedCard from '@/components/TiltedCard';
// import { ArrowRight, MessageCircle, TrendingUp, Workflow, Shield, CheckCircle } from 'lucide-react';


// const Index = () => {
//   const features = [
//     { icon: MessageCircle, title: "AI-Powered Guest Interactions", description: "Seamless chat, voice, and WhatsApp integration for 24/7 guest support with intelligent responses and personalized service." },
//     { icon: TrendingUp, title: "Automated Upselling", description: "Smart recommendations for meals, spa services, and late checkouts that increase revenue while enhancing guest experience." },
//     { icon: Workflow, title: "Agentic AI Workflows", description: "Streamlined automation for housekeeping schedules, booking management, and complaint resolution processes." },
//     { icon: Shield, title: "Fraud Detection & IoT Security", description: "Advanced security monitoring for smart locks, sensors, and payment systems to protect guests and property." }
//   ];

//   const benefits = [
//     "Reduce operational costs by up to 35%",
//     "Increase guest satisfaction scores by 25%", 
//     "Boost ancillary revenue through smart upselling",
//     "24/7 AI-powered guest support",
//     "Enterprise-grade security and compliance",
//     "Seamless integration with existing systems"
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />

//       {/* Hero Section */}
//       <section className="relative py-32 overflow-hidden section-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//           {/* <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-snug text-navy">
//             AI-Powered Guest Assistance Platform <br />
//             <span className="gradient-text">Prevent Fraud, Protect Revenue</span>
//           </h1> */}
//           <h1
//             className="animate-fade-up text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-snug text-navy"
//             style={{ fontFamily: "'Orbitron', sans-serif" }} // or 'Bitcount Grid Single Ink' if you have it
//           >
//             AI-Powered Guest Assistance Platform <br />
//             <span className="glow-gradient-text">Prevent Fraud, Protect Revenue</span>
//           </h1>

//           <p className="text-xl sm:text-2xl mb-12 leading-relaxed text-charcoal max-w-3xl mx-auto">
//             AI driven platform that protects your revenue, prevents fraud across Finance, Front Desk, Kitchen, and Inventory, enhances the guest experience, and reduces operational costs by up to 35%.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             {/* <Button asChild size="lg" className="text-lg px-8 py-4 btn-gradient hover-glow-cyan"> */}
//             <Button asChild size="lg" className="text-lg px-8 py-4 glow-btn bg-black text-white">
//               <Link to="/request-demo">
//                 Request Demo <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//             </Button>
//             {/* <Button asChild size="lg" className="text-lg px-8 py-4 btn-gold hover-glow-gold"> */}
//             <Button asChild size="lg" className="text-lg px-8 py-4 glow-btn bg-black text-white">
//               <Link to="/solutions">Explore Solutions</Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-24 section-soft-gray">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">Complete Hotel Automation Suite</h2>
//             <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
//               Our AI platform integrates seamlessly with your existing systems to deliver intelligent automation across every aspect of hotel operations.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
//             {features.map((feature, index) => (
//               <Card key={index} className="group shadow-card hover-lift transition-all duration-500 overflow-hidden border-0 section-white">
//                 <CardContent className="p-8">
//                   <div className="flex items-start gap-6">
//                     <div className="flex-shrink-0 w-16 h-16 gradient-cyan-purple rounded-2xl flex items-center justify-center shadow-cyan hover-glow-cyan transition-glow">
//                       <feature.icon className="h-8 w-8 text-white" />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-nexrova-cyan transition-colors">{feature.title}</h3>
//                       <p className="text-medium-gray leading-relaxed">{feature.description}</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-24 section-soft-gray">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div className="space-y-8">
//               <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">Why Choose Nexrova?</h2>
//               <p className="text-xl text-medium-gray leading-relaxed">
//                 Our AI platform delivers measurable results that transform both operations and guest experience.
//               </p>
//               <div className="space-y-4">
//                 {benefits.map((benefit, idx) => (
//                   <div key={idx} className="flex items-center gap-4">
//                     <CheckCircle className="h-6 w-6 text-nexrova-cyan flex-shrink-0" />
//                     <span className="text-lg text-medium-gray">{benefit}</span>
//                   </div>
//                 ))}
//               </div>
//               <div className="pt-4">
//                 <Button asChild size="lg" className="btn-gradient hover-glow-cyan">
//                   <Link to="/solutions">Learn More About Our Solutions <ArrowRight className="ml-2 h-5 w-5" /></Link>
//                 </Button>
//               </div>
//             </div>
//             {/* <div className="lg:pl-8">
//               <Card className="shadow-elegant overflow-hidden hover-lift transition-smooth">
//                 <CardContent className="p-0">
//                   <div className="aspect-square bg-gradient-to-br from-nexrova-cyan/20 via-purple-500/10 to-nexrova-cyan/5 flex items-center justify-center">
//                     <div className="text-center">
//                       <Workflow className="h-24 w-24 text-nexrova-cyan/60 mx-auto mb-4" />
//                       <p className="text-lg font-medium text-medium-gray">AI-Powered Operations</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div> */}
//             <div className="lg:pl-8">
//               <Card className="shadow-elegant overflow-hidden hover-lift transition-smooth">
//                 <CardContent className="p-0">
//                   <div className="aspect-square bg-gradient-to-br from-nexrova-cyan/20 via-purple-500/10 to-nexrova-cyan/5 flex items-center justify-center">
//                     <img
//                       src="/src/assets/logo.png"
//                       alt="Nexrova Logo"
//                       className="h-75 w-auto object-contain mx-auto"
//                     />
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Tilted Card Section with dark semi-visible bg */}
//       <section className="py-24 section-white relative">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center relative z-10">
//           <div className="w-full max-w-4xl">
//             <TiltedCard
//               imageSrc="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?fit=crop&w=1200&q=80"
//               altText="Hotel AI Transformation"
//               captionText=""
//               containerHeight="450px"
//               containerWidth="100%"
//               imageHeight="450px"
//               imageWidth="100%"
//               rotateAmplitude={12}
//               scaleOnHover={1.05}
//               showMobileWarning={false}
//               showTooltip={false}
//               displayOverlayContent={true}
//               overlayContent={
//                 <div className="relative w-full h-full flex flex-col justify-center items-center text-white pointer-events-auto">
//                   {/* Dark overlay */}
//                   <div className="absolute inset-0 bg-black/70 rounded-xl"></div>

//                   {/* Content on top */}
//                   <div className="relative z-10 text-center px-4">
//                     <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Hotel?</h2>
//                     <p className="mb-6 text-sm opacity-90">
//                       Join hundreds of hotels worldwide using Nexrova to enhance operations and guest experiences.
//                     </p>
//                     <div className="flex flex-col sm:flex-row justify-center gap-4">
//                       <Button asChild size="md" className="bg-white text-black px-6 py-3 hover:bg-gray-200">
//                         <Link to="/request-demo">Request Demo</Link>
//                       </Button>
//                       <Button asChild size="md" className="border border-white text-white px-6 py-3 hover:bg-white hover:text-black">
//                         <Link to="/contact">Contact Sales</Link>
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               }
//             />
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Index;

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import TiltedCard from '@/components/TiltedCard';
// import LiquidEther from '@/components/LiquidEther';
import { ArrowRight, MessageCircle, TrendingUp, Workflow, Shield, CheckCircle } from 'lucide-react';

const Index = () => {
  const features = [
    { icon: MessageCircle, title: "AI-Powered Guest Interactions", description: "Seamless chat, voice, and WhatsApp integration for 24/7 guest support with intelligent responses and personalized service." },
    { icon: TrendingUp, title: "Automated Upselling", description: "Smart recommendations for meals, spa services, and late checkouts that increase revenue while enhancing guest experience." },
    { icon: Workflow, title: "Agentic AI Workflows", description: "Streamlined automation for housekeeping schedules, booking management, and complaint resolution processes." },
    { icon: Shield, title: "Fraud Detection & IoT Security", description: "Advanced security monitoring for smart locks, sensors, and payment systems to protect guests and property." }
  ];

  const benefits = [
    "Reduce operational costs by up to 35%",
    "Increase guest satisfaction scores by 25%", 
    "Boost ancillary revenue through smart upselling",
    "24/7 AI-powered guest support",
    "Enterprise-grade security and compliance",
    "Seamless integration with existing systems"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation stays at the top */}
      <Navigation />

      {/* Hero Section */}
      {/* <section className="relative py-32 overflow-hidden section-white"> */}
      <section className="relative min-h-[100vh] overflow-hidden section-white flex items-center">
      
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="animate-fade-up text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-snug text-navy"
            style={{ fontFamily: "'Orbitron', sans-serif" }}
          >
            AI-Powered Guest Assistance Platform <br />
            <span className="text-black hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:bg-clip-text hover:text-transparent transition-all duration-300">Prevent Fraud, Protect Revenue</span>
          </h1>

          <p className="text-xl sm:text-2xl mb-12 leading-relaxed text-charcoal max-w-3xl mx-auto">
            AI driven platform that protects your revenue, prevents fraud across Finance, Front Desk, Kitchen, and Inventory, enhances the guest experience, and reduces operational costs by up to 35%.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4 glow-btn bg-black text-white">
              <Link to="/request-demo">
                Request Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="text-lg px-8 py-4 glow-btn bg-black text-white">
              <Link to="/solutions">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 section-soft-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">Complete Hotel Automation Suite</h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
              Our AI platform integrates seamlessly with your existing systems to deliver intelligent automation across every aspect of hotel operations.
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
                      <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-nexrova-cyan transition-colors">{feature.title}</h3>
                      <p className="text-medium-gray leading-relaxed">{feature.description}</p>
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
              <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">Why Choose Nexrova?</h2>
              <p className="text-xl text-medium-gray leading-relaxed">
                Our AI platform delivers measurable results that transform both operations and guest experience.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <CheckCircle className="h-6 w-6 text-nexrova-cyan flex-shrink-0" />
                    <span className="text-lg text-medium-gray">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Button asChild size="lg" className="btn-gradient hover-glow-cyan">
                  <Link to="/solutions">Learn More About Our Solutions <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
            </div>
            <div className="lg:pl-8">
              <Card className="shadow-elegant overflow-hidden hover-lift transition-smooth">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-nexrova-cyan/20 via-purple-500/10 to-nexrova-cyan/5 flex items-center justify-center">
                    <img
                      src="/src/assets/logo.png"
                      alt="Nexrova Logo"
                      className="h-75 w-auto object-contain mx-auto"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Tilted Card Section */}
      <section className="py-24 section-white relative">
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
                    <p className="mb-6 text-sm opacity-90">
                      Join hundreds of hotels worldwide using Nexrova to enhance operations and guest experiences.
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

export default Index;


