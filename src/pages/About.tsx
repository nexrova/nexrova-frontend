// import React from 'react';
// import Navigation from '@/components/Navigation';
// import Footer from '@/components/Footer';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Link } from 'react-router-dom';
// import { Users, Target, Eye, Award } from 'lucide-react';

// const About = () => {
//   const values = [
//     {
//       icon: Target,
//       title: "Innovation",
//       description: "We push the boundaries of AI technology to create solutions that transform the hospitality industry."
//     },
//     {
//       icon: Users,
//       title: "Customer First",
//       description: "Every feature we build is designed with our hotel partners and their guests in mind."
//     },
//     {
//       icon: Award,
//       title: "Excellence",
//       description: "We strive for perfection in everything we do, from code quality to customer service."
//     },
//     {
//       icon: Eye,
//       title: "Transparency",
//       description: "We believe in honest communication and clear reporting on the impact of our solutions."
//     }
//   ];

//   const team = [
//     {
//       name: "Jeevan Suresh",
//       role: "CEO & Co-founder",
//       bio: "Former VP of Engineering at Expedia with 15+ years in hospitality technology.",
//       //image: "https://images.unsplash.com/photo-1494790108755-2616b612b372?w=400&h=400&fit=crop&crop=face"
//     },
//     {
//       name: "Subrat Das",
//       role: "Co-founder",
//       bio: "AI researcher and former Tesla autonomy engineer with expertise in machine learning systems.",
//       //image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
//     },
//     {
//       name: "Stuti Swaminathan",
//       role: "Software and Market Research Intern",
//       bio: "PhD in Computer Science from Stanford, specializing in natural language processing and conversational AI.",
//       //image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
//     },
//     {
//       name: "Aaron George Varghese",
//       role: "AI Backend Intern",
//       bio: "20+ years in hospitality sales, formerly at Salesforce and Oracle Hospitality.",
//       //image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
//     }
//   ];

//   const stats = [
//     { number: "500+", label: "Hotels Served" },
//     { number: "50M+", label: "Guests Helped" },
//     { number: "99.9%", label: "Uptime" },
//     { number: "24/7", label: "Support" }
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />
      
//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-4xl mx-auto">
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
//               Revolutionizing Hospitality with{' '}
//               <span className="gradient-text">Artificial Intelligence</span>
//             </h1>
//             <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
//               Founded in 2025, Nexrova is on a mission to transform how hotels operate, 
//               making them more efficient, profitable, and guest-focused through cutting-edge AI technology.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-muted/50">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
//                 <div className="text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div>
//                 <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
//                 <p className="text-lg text-muted-foreground leading-relaxed">
//                   To empower hotels worldwide with intelligent automation that reduces operational costs, 
//                   enhances guest experiences, and drives sustainable growth in the hospitality industry.
//                 </p>
//               </div>
//               <div>
//                 <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
//                 <p className="text-lg text-muted-foreground leading-relaxed">
//                   A future where every hotel can provide personalized, seamless experiences to their guests 
//                   while operating at peak efficiency through the power of artificial intelligence.
//                 </p>
//               </div>
//             </div>
//             <div className="lg:pl-8">
//               <Card className="shadow-elegant">
//                 <CardContent className="p-8">
//                   <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
//                     <Eye className="h-24 w-24 text-primary/60" />
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-20 bg-muted/50">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Values</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               The principles that guide everything we do at Nexrova
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value, index) => (
//               <Card key={index} className="text-center shadow-card hover:shadow-hover transition-smooth">
//                 <CardContent className="pt-8 pb-6">
//                   <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
//                     <value.icon className="h-8 w-8 text-primary" />
//                   </div>
//                   <h3 className="font-semibold text-lg text-foreground mb-2">{value.title}</h3>
//                   <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Industry experts and technology innovators working together to transform hospitality
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {team.map((member, index) => (
//               <Card key={index} className="shadow-card hover:shadow-hover transition-smooth overflow-hidden">
//                 <CardContent className="p-6 text-center">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
//                   />
//                   <h3 className="font-semibold text-lg text-foreground mb-1">{member.name}</h3>
//                   <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
//                   <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto">
//             <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
//               Want to Join Our Mission?
//             </h2>
//             <p className="text-lg text-muted-foreground mb-8">
//               We're always looking for talented individuals to help us revolutionize the hospitality industry.
//             </p>
//             <div className="space-x-4">
//               <Button asChild size="lg">
//                 <Link to="/careers">View Open Positions</Link>
//               </Button>
//               <Button asChild variant="outline" size="lg">
//                 <Link to="/request-demo">See Our Solution</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default About;

// import React from 'react';
// import Navigation from '@/components/Navigation';
// import Footer from '@/components/Footer';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Link } from 'react-router-dom';
// import { Users, Target, Award } from 'lucide-react';

// const About = () => {
//   const values = [
//     {
//       icon: Target,
//       title: "Innovation",
//       description: "We push the boundaries of AI technology to create solutions that transform the hospitality industry."
//     },
//     {
//       icon: Users,
//       title: "Customer First",
//       description: "Every feature we build is designed with our hotel partners and their guests in mind."
//     },
//     {
//       icon: Award,
//       title: "Excellence",
//       description: "We strive for perfection in everything we do, from code quality to customer service."
//     },
//     {
//       icon: Users,
//       title: "Transparency",
//       description: "We believe in honest communication and clear reporting on the impact of our solutions."
//     }
//   ];

//   const team = [
//     {
//       name: "Jeevan Suresh",
//       role: "CEO & Founder",
//       bio: "Undergrad student at Vellore Institute of Technology, Chennai.",
//     },
//     {
//       name: "Subrat Das",
//       role: "Co-founder",
//       bio: "Undergrad student at Sathyabama Institute of Science and Technology, Chennai.",
//     },
//     {
//       name: "Stuti Swaminathan",
//       role: "Software and Market Research Intern",
//       bio: "Undergrad student at Vellore Institute of Technology, Chennai.",
//     },
//     {
//       name: "Aaron George Varghese",
//       role: "AI Backend Intern",
//       bio: "Undergrad student at Vellore Institute of Technology, Chennai.",
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />
      
//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-4xl mx-auto">
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
//               Revolutionizing Hospitality with{' '}
//               <span className="gradient-text">Artificial Intelligence</span>
//             </h1>
//             <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
//               Founded in 2025, Nexrova is on a mission to transform how hotels operate, 
//               making them more efficient, profitable, and guest-focused through cutting-edge AI technology.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="space-y-16 max-w-4xl mx-auto text-center">
//             <div>
//               <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 To empower hotels worldwide with intelligent automation that reduces operational costs, 
//                 enhances guest experiences, and drives sustainable growth in the hospitality industry.
//               </p>
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 A future where every hotel can provide personalized, seamless experiences to their guests 
//                 while operating at peak efficiency through the power of artificial intelligence.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-20 bg-muted/50">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Values</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               The principles that guide everything we do at Nexrova
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value, index) => (
//               <Card key={index} className="text-center shadow-card hover:shadow-hover transition-smooth">
//                 <CardContent className="pt-8 pb-6">
//                   <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
//                     <value.icon className="h-8 w-8 text-primary" />
//                   </div>
//                   <h3 className="font-semibold text-lg text-foreground mb-2">{value.title}</h3>
//                   <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Students working together to transform hospitality
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {team.map((member, index) => (
//               <Card key={index} className="shadow-card hover:shadow-hover transition-smooth overflow-hidden">
//                 <CardContent className="p-6 text-center">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
//                   />
//                   <h3 className="font-semibold text-lg text-foreground mb-1">{member.name}</h3>
//                   <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
//                   <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto">
//             <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
//               Want to Join Our Mission?
//             </h2>
//             <p className="text-lg text-muted-foreground mb-8">
//               We're always looking for talented individuals to help us revolutionize the hospitality industry.
//             </p>
//             <div className="space-x-4">
//               {/* <Button asChild size="lg">
//                 <Link to="/careers">View Open Positions</Link>
//               </Button> */}
//               {/* <Button asChild size="lg"> */}
//               <Button asChild size="lg" className="glow-btn bg-black text-white">
//                 <Link to="/request-demo">See Our Solution</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default About;

// import React from 'react';
// import Navigation from '@/components/Navigation';
// import Footer from '@/components/Footer';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Link } from 'react-router-dom';
// import { Users, Target, Award, Lock, Zap, Bot, Shield, Plug, DollarSign, TrendingUp, Clock } from 'lucide-react'; 

// // --- Component for Core Pillars (using styles) ---
// const ValueCard = ({ icon: Icon, title, description, style = 'default' }) => {
//   const baseClasses = "p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300";
//   let cardClasses = "";
//   let iconClasses = "inline-flex items-center justify-center w-16 h-16 rounded-full mb-4";
  
//   // Define different styles
//   switch (style) {
//     case 'primary-border':
//       cardClasses = `${baseClasses} border-t-4 border-primary bg-background`;
//       iconClasses += " bg-primary/10 text-primary";
//       break;
//     case 'gradient-fill':
//       cardClasses = `${baseClasses} bg-gradient-to-r from-muted/50 to-background/50`;
//       iconClasses += " bg-primary text-primary-foreground shadow-lg shadow-primary/30";
//       break;
//     default:
//       cardClasses = `${baseClasses} bg-card`;
//       iconClasses += " bg-primary/10 text-primary";
//   }

//   return (
//     <div className={cardClasses}>
//       <div className={iconClasses}>
//         <Icon className="h-8 w-8" />
//       </div>
//       <h3 className="font-semibold text-xl text-foreground mb-2">{title}</h3>
//       <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
//     </div>
//   );
// };
// // -----------------------------------------------

// // --- Component for Impact/Traction Stats ---
// const StatCard = ({ icon: Icon, value, label, description }) => (
//   <Card className="text-center bg-white dark:bg-gray-800 border-b-4 border-accent shadow-xl">
//     <CardContent className="p-6">
//       <div className="flex justify-center items-center mb-4">
//         <div className="bg-accent/10 rounded-full p-3">
//           <Icon className="h-6 w-6 text-accent" />
//         </div>
//       </div>
//       <p className="text-4xl font-bold text-foreground mb-1">{value}</p>
//       <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">{label}</p>
//       <p className="text-xs text-muted-foreground">{description}</p>
//     </CardContent>
//   </Card>
// );
// // ------------------------------------------

// const About = () => {
//   const corePillars = [
//     {
//       icon: Shield, 
//       title: "Fraud Elimination",
//       description: "Our core promise: Using AI and IoT to deliver 50%+ fraud reduction and ensure maximum revenue retention for owners.",
//       style: 'primary-border' 
//     },
//     {
//       icon: Zap,
//       title: "Seamless Automation",
//       description: "Automated cash handling, check-ins, and POS reconciliation powered by AI to remove manual errors and workload.",
//       style: 'gradient-fill' 
//     },
//     {
//       icon: Bot, 
//       title: "WhatsApp-First CX",
//       description: "Instant, no-app-needed guest experience for check-in, orders, and support—the channel customers prefer in India.",
//       style: 'default' 
//     },
//     {
//       icon: Plug, 
//       title: "Modular Integration",
//       description: "Plug-and-play modules integrate into existing tech, or act as a custom PMS, offering flexible, low-cost adoption.",
//       style: 'primary-border' 
//     },
//     {
//       icon: Lock, 
//       title: "The Technical Moat",
//       description: "The unique fusion of IoT hardware, WhatsApp compliance, and AI creates switching barriers incumbents can't match quickly.",
//       style: 'gradient-fill' 
//     }
//   ];

//   const team = [
//     {
//       name: "Jeevan Suresh",
//       role: "CEO & Founder",
//       bio: "Undergrad student at Vellore Institute of Technology, Chennai.",
//       image: "path/to/jeevan_image.jpg"
//     },
//     {
//       name: "Subrat Das",
//       role: "Co-founder",
//       bio: "Undergrad student at Sathyabama Institute of Science and Technology, Chennai.",
//       image: "path/to/subrat_image.jpg"
//     },
//     {
//       name: "Stuti Swaminathan",
//       role: "Software and Market Research Intern",
//       bio: "Undergrad student at Vellore Institute of Technology, Chennai.",
//       image: "path/to/stuti_image.jpg"
//     },
//     {
//       name: "Aaron George Varghese",
//       role: "AI Backend Intern",
//       bio: "Undergrad student at Vellore Institute of Technology, Chennai.",
//       image: "path/to/aaron_image.jpg"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />
      
//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-4xl mx-auto">
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
//               Revolutionizing Hospitality with{' '}
//               <span className="gradient-text">Artificial Intelligence</span>
//             </h1>
//             <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
//               Nexrova redefines how India's hotels and service apartments operate by using AI, IoT, and a WhatsApp-first platform to eliminate staff fraud, automate operations, and deliver seamless guest experiences.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="space-y-16 max-w-4xl mx-auto text-center">
//             <div>
//               <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 To empower every property, regardless of size, to achieve 50%+ fraud reduction and a 21st-century guest experience by providing affordable, plug-and-play AI and IoT automation.
//               </p>
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 A future where manual processes, cash leakage, and inventory theft are obsolete, enabling hotels to focus entirely on hospitality through real-time visibility and zero-friction digital workflows.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* NEW SECTION: Impact and Market Scale */}
//       <section className="py-20 bg-muted/50">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">The Scale of the Problem</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Hotels suffer from hidden revenue leakage, a cost far exceeding the solution.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <StatCard 
//               icon={DollarSign}
//               value="₹7-17 Lakhs"
//               label="Annual Loss per Property"
//               description="Revenue leakage due to fraud and inefficiency for every ₹1 crore turnover."
//             />
//             <StatCard 
//               icon={Users}
//               value="4.5 Lakhs+"
//               label="Target Properties"
//               description="The number of independent hotels and service apartments in India that need better technology."
//             />
//             <StatCard 
//               icon={TrendingUp}
//               value="50%+"
//               label="Guaranteed Fraud Reduction"
//               description="The minimum reduction Nexrova delivers, turning leakage into immediate profit."
//             />
//           </div>
//         </div>
//       </section>
      
//       {/* Core Pillars Section (now the 4th section) */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Core Pillars & Technical Moat</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               The unique combination of technology and focus that creates a genuine barrier to entry for incumbents.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
//             {corePillars.map((pillar, index) => (
//               <ValueCard 
//                 key={index}
//                 icon={pillar.icon}
//                 title={pillar.title}
//                 description={pillar.description}
//                 style={pillar.style}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* NEW SECTION: Why Now? (Market Readiness) */}
//       <section className="py-20 bg-primary/5">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">The Nexrova Advantage: Why Now?</h2>
//             <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//               Market trends and technological barriers have created the perfect window for Nexrova's unique solution.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//             <div className="p-6 bg-background rounded-xl shadow-lg border-l-4 border-primary/50">
//               <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
//               <h3 className="font-bold text-xl mb-2 text-foreground">Immediate ROI</h3>
//               <p className="text-muted-foreground">The cost lost to fraud (5-7% of revenue) is significantly greater than our monthly subscription, guaranteeing a fast ROI for eligible properties.</p>
//             </div>
//             <div className="p-6 bg-background rounded-xl shadow-lg border-l-4 border-primary/50">
//               <Bot className="h-8 w-8 text-primary mx-auto mb-4" />
//               <h3 className="font-bold text-xl mb-2 text-foreground">WhatsApp Dominance</h3>
//               <p className="text-muted-foreground">WhatsApp is the undisputed #1 guest interaction platform in India, ensuring rapid deployment and near-zero training for staff and guests alike.</p>
//             </div>
//             <div className="p-6 bg-background rounded-xl shadow-lg border-l-4 border-primary/50">
//               <TrendingUp className="h-8 w-8 text-primary mx-auto mb-4" />
//               <h3 className="font-bold text-xl mb-2 text-foreground">Digital Readiness</h3>
//               <p className="text-muted-foreground">Digitalization in smaller hotels is growing at 12–15% annually, signaling high willingness to adopt low-cost tech that solves real operational pain.</p>
//             </div>
//           </div>
//         </div>
//       </section>


//       {/* Team Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Students working together to transform hospitality
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {team.map((member, index) => (
//               <Card key={index} className="shadow-card hover:shadow-hover transition-smooth overflow-hidden">
//                 <CardContent className="p-6 text-center">
//                   <img
//                     // Placeholder for image path
//                     src={member.image}
//                     alt={member.name}
//                     className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
//                   />
//                   <h3 className="font-semibold text-lg text-foreground mb-1">{member.name}</h3>
//                   <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
//                   <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-br from-primary/10 to-background">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto">
//             <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
//               Stop the Leakage. Start the Future.
//             </h2>
//             <p className="text-lg text-muted-foreground mb-8">
//               See how Nexrova can deliver 50%+ fraud reduction and a modern guest experience for your property.
//             </p>
//             <div className="space-x-4">
//               <Button asChild size="lg" className="glow-btn bg-black text-white">
//                 <Link to="/request-demo">Request a Demo</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default About;

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
// Core Icons
import { Users, Target, Award, Eye, Lock, Zap, Bot, Shield, Plug, DollarSign, TrendingUp, Clock } from 'lucide-react'; 

// --- Component for Core Pillars (using styles) ---
const CorePillarCard = ({ icon: Icon, title, description, style = 'default' }) => {
  const baseClasses = "p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300";
  let cardClasses = "";
  let iconClasses = "inline-flex items-center justify-center w-16 h-16 rounded-full mb-4";
  
  // Define different styles
  switch (style) {
    case 'primary-border':
      cardClasses = `${baseClasses} border-t-4 border-primary bg-background`;
      iconClasses += " bg-primary/10 text-primary";
      break;
    case 'gradient-fill':
      cardClasses = `${baseClasses} bg-gradient-to-r from-muted/50 to-background/50`;
      iconClasses += " bg-primary text-primary-foreground shadow-lg shadow-primary/30";
      break;
    default:
      cardClasses = `${baseClasses} bg-card`;
      iconClasses += " bg-primary/10 text-primary";
  }

  return (
    <div className={cardClasses}>
      <div className={iconClasses}>
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="font-semibold text-xl text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};
// -----------------------------------------------

// --- Component for Impact/Traction Stats ---
const StatCard = ({ icon: Icon, value, label, description }) => (
  <Card className="text-center bg-white dark:bg-gray-800 border-b-4 border-accent shadow-xl">
    <CardContent className="p-6">
      <div className="flex justify-center items-center mb-4">
        <div className="bg-accent/10 rounded-full p-3">
          <Icon className="h-6 w-6 text-accent" />
        </div>
      </div>
      <p className="text-4xl font-bold text-foreground mb-1">{value}</p>
      <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">{label}</p>
      <p className="text-xs text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);
// ------------------------------------------

const About = () => {
  // Reintroduced the original 'values' list (Cultural Principles)
  const coreValues = [
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
      icon: Eye, // Used Eye for Transparency/Visibility
      title: "Transparency",
      description: "We believe in honest communication and clear reporting on the impact of our solutions."
    }
  ];

  // Core Pillars (Strategic/Product Principles)
  const corePillars = [
    {
      icon: Shield, 
      title: "Fraud Elimination",
      description: "Our core promise: Using AI and IoT to deliver 50%+ fraud reduction and ensure maximum revenue retention for owners.",
      style: 'primary-border' 
    },
    {
      icon: Zap,
      title: "Seamless Automation",
      description: "Automated cash handling, check-ins, and POS reconciliation powered by AI to remove manual errors and workload.",
      style: 'gradient-fill' 
    },
    {
      icon: Bot, 
      title: "WhatsApp-First CX",
      description: "Instant, no-app-needed guest experience for check-in, orders, and support—the channel customers prefer in India.",
      style: 'default' 
    },
    {
      icon: Plug, 
      title: "Modular Integration",
      description: "Plug-and-play modules integrate into existing tech, or act as a custom PMS, offering flexible, low-cost adoption.",
      style: 'primary-border' 
    },
    {
      icon: Lock, 
      title: "The Technical Moat",
      description: "The unique fusion of IoT hardware, WhatsApp compliance, and AI creates switching barriers incumbents can't match quickly.",
      style: 'gradient-fill' 
    }
  ];

  const team = [
    {
      name: "Jeevan Suresh",
      role: "CEO & Founder",
      bio: "Undergrad student at Vellore Institute of Technology, Chennai.",
      image: "path/to/jeevan_image.jpg"
    },
    {
      name: "Subrat Das",
      role: "Co-founder",
      bio: "Undergrad student at Sathyabama Institute of Science and Technology, Chennai.",
      image: "path/to/subrat_image.jpg"
    },
    {
      name: "Stuti Swaminathan",
      role: "Software and Market Research Intern",
      bio: "Undergrad student at Vellore Institute of Technology, Chennai.",
      image: "path/to/stuti_image.jpg"
    },
    {
      name: "Aaron George Varghese",
      role: "AI Backend Intern",
      bio: "Undergrad student at Vellore Institute of Technology, Chennai.",
      image: "path/to/aaron_image.jpg"
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
              Revolutionizing Hospitality with{' '}
              <span className="gradient-text">Artificial Intelligence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Nexrova redefines how India's hotels and service apartments operate by using AI, IoT, and a WhatsApp-first platform to eliminate staff fraud, automate operations, and deliver seamless guest experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 max-w-4xl mx-auto text-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower every property, regardless of size, to achieve 50%+ fraud reduction and a 21st-century guest experience by providing affordable, plug-and-play AI and IoT automation.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A future where manual processes, cash leakage, and inventory theft are obsolete, enabling hotels to focus entirely on hospitality through real-time visibility and zero-friction digital workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Impact and Market Scale */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">The Scale of the Problem</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hotels suffer from hidden revenue leakage, a cost far exceeding the solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard 
              icon={DollarSign}
              value="₹7-17 Lakhs"
              label="Annual Loss per Property"
              description="Revenue leakage due to fraud and inefficiency for every ₹1 crore turnover."
            />
            <StatCard 
              icon={Users}
              value="4.5 Lakhs+"
              label="Target Properties"
              description="The number of independent hotels and service apartments in India that need better technology."
            />
            <StatCard 
              icon={TrendingUp}
              value="50%+"
              label="Guaranteed Fraud Reduction"
              description="The minimum reduction Nexrova delivers, turning leakage into immediate profit."
            />
          </div>
        </div>
      </section>

      {/* Core Pillars Section (Strategic/Product Principles) */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Core Pillars</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The strategic differentiators and unique technology that power Nexrova's promise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {corePillars.map((pillar, index) => (
              <CorePillarCard 
                key={index}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
                style={pillar.style}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Values Section (Cultural Principles) - REINTRODUCED ORIGINAL STYLE */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Nexrova
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
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

      {/* Why Now? (Market Readiness) */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">The Nexrova Advantage: Why Now?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Market trends and technological barriers have created the perfect window for Nexrova's unique solution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-background rounded-xl shadow-lg border-l-4 border-primary/50">
              <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2 text-foreground">Immediate ROI</h3>
              <p className="text-muted-foreground">The cost lost to fraud (5-7% of revenue) is significantly greater than our monthly subscription, guaranteeing a fast ROI for eligible properties.</p>
            </div>
            <div className="p-6 bg-background rounded-xl shadow-lg border-l-4 border-primary/50">
              <Bot className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2 text-foreground">WhatsApp Dominance</h3>
              <p className="text-muted-foreground">WhatsApp is the undisputed #1 guest interaction platform in India, ensuring rapid deployment and near-zero training for staff and guests alike.</p>
            </div>
            <div className="p-6 bg-background rounded-xl shadow-lg border-l-4 border-primary/50">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2 text-foreground">Digital Readiness</h3>
              <p className="text-muted-foreground">Digitalization in smaller hotels is growing at 12–15% annually, signaling high willingness to adopt low-cost tech that solves real operational pain.</p>
            </div>
          </div>
        </div>
      </section>


      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Students working together to transform hospitality
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
              Stop the Leakage. Start the Future.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              See how Nexrova can deliver 50%+ fraud reduction and a modern guest experience for your property.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg" className="glow-btn bg-black text-white">
                <Link to="/request-demo">Request a Demo</Link>
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