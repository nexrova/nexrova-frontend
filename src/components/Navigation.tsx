// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Menu, X } from 'lucide-react';

// const Navigation = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'Solutions', path: '/solutions' },
//     { name: 'About', path: '/about' },
//     { name: 'Careers', path: '/careers' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav className="bg-nexrova-navy backdrop-blur-md border-b border-nexrova-soft-gray sticky top-0 z-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <div className="w-8 h-8 gradient-cyan-purple rounded-lg flex items-center justify-center shadow-cyan">
//               <span className="text-white font-bold text-lg">N</span>
//             </div>
//             <span className="font-bold text-xl text-white relative">
//               Nexrova
//               <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-nexrova-gold"></div>
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={`text-sm font-medium transition-smooth hover:text-nexrova-cyan ${
//                   isActive(item.path) ? 'text-nexrova-cyan' : 'text-white'
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <Button asChild className="ml-4 btn-gradient">
//               <Link to="/request-demo">Request Demo</Link>
//             </Button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-white hover:text-nexrova-cyan"
//             >
//               {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden border-t border-nexrova-soft-gray">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.path}
//                   to={item.path}
//                   className={`block px-3 py-2 text-sm font-medium rounded-md transition-smooth ${
//                     isActive(item.path)
//                       ? 'text-nexrova-cyan bg-nexrova-cyan/10'
//                       : 'text-white hover:text-nexrova-cyan hover:bg-white/10'
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <div className="px-3 pt-2">
//                 <Button asChild className="w-full btn-gradient">
//                   <Link to="/request-demo" onClick={() => setIsMenuOpen(false)}>
//                     Request Demo
//                   </Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;

// import React, { useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Home, Layers, Info, Briefcase, Phone } from 'lucide-react';

// interface NavItem {
//   label: string;
//   path: string;
//   icon: React.ReactNode;
// }

// const navItems: NavItem[] = [
//   { label: 'Home', path: '/', icon: <Home size={24} /> },
//   { label: 'Solutions', path: '/solutions', icon: <Layers size={24} /> },
//   { label: 'About', path: '/about', icon: <Info size={24} /> },
//   { label: 'Careers', path: '/careers', icon: <Briefcase size={24} /> },
//   { label: 'Contact', path: '/contact', icon: <Phone size={24} /> },
// ];

// const Navigation = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav className="bg-nexrova-navy backdrop-blur-md border-b border-nexrova-soft-gray sticky top-0 z-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Hamburger Icon */}
//           <button
//             onClick={() => setIsMenuOpen(true)}
//             className="text-white text-2xl hover:text-nexrova-cyan transition-colors"
//           >
//             ☰
//           </button>

//           {/* Logo + Name */}
//           <Link to="/" className="flex items-center space-x-2">
//             <div className="w-8 h-8 gradient-cyan-purple rounded-lg flex items-center justify-center shadow-cyan">
//               <span className="text-white font-bold text-lg">N</span>
//             </div>
//             <span className="font-bold text-xl text-white relative">
//               Nexrova
//               <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-nexrova-gold"></div>
//             </span>
//           </Link>

//           {/* Request Demo Button */}
//           <Button asChild className="btn-gradient">
//             <Link to="/request-demo">Request Demo</Link>
//           </Button>
//         </div>
//       </div>

//       {/* Overlay Menu (for both mobile and desktop) */}
//       {isMenuOpen && (
//         <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-6 space-y-6">
//           {/* Close Button */}
//           <button
//             onClick={() => setIsMenuOpen(false)}
//             className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-nexrova-cyan transition-colors"
//           >
//             ×
//           </button>

//           {/* Nav Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl">
//             {navItems.map((item) => (
//               <div
//                 key={item.path}
//                 onClick={() => {
//                   navigate(item.path);
//                   setIsMenuOpen(false);
//                 }}
//                 className={`flex flex-col items-center justify-center p-6 rounded-2xl cursor-pointer transition-all duration-300
//                   ${isActive(item.path) ? 'bg-nexrova-cyan/30 text-white shadow-lg' : 'bg-white/10 text-white hover:bg-nexrova-cyan/20'}`}
//               >
//                 <div className="mb-2">{item.icon}</div>
//                 <span className="font-semibold text-lg">{item.label}</span>
//               </div>
//             ))}
//           </div>

//           {/* Optional: Request Demo button in overlay */}
//           <Button asChild className="mt-6 w-full max-w-xs btn-gradient">
//             <Link to="/request-demo" onClick={() => setIsMenuOpen(false)}>
//               Request Demo
//             </Link>
//           </Button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navigation;


// export default function Navigation() {
//   return (
//     <CardNav
//       logo={logo}
//       items={navItems}
//       baseColor="#fff"
//       menuColor="#000"
//       buttonBgColor="#111"
//       buttonTextColor="#fff"
//     />
//   );
// }

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import CardNav, { CardNavItem } from './CardNav';
// import logo from '../assets/logo.png'; // make sure the path to your logo is correct

// const navItems: CardNavItem[] = [
//   {
//     label: 'Home',
//     bgColor: '#0D0716',
//     textColor: '#fff',
//     links: [{ label: 'Home', ariaLabel: 'Home Page', href: '/' }]
//   },
//   {
//     label: 'Solutions',
//     bgColor: '#170D27',
//     textColor: '#fff',
//     links: [
//       { label: 'AI Solutions', ariaLabel: 'AI Solutions Page', href: '/solutions' },
//       { label: 'Features', ariaLabel: 'Features Page', href: '/solutions#features' }
//     ]
//   },
//   {
//     label: 'About',
//     bgColor: '#271E37',
//     textColor: '#fff',
//     links: [
//       { label: 'Company', ariaLabel: 'Company Page', href: '/about' },
//       { label: 'Careers', ariaLabel: 'Careers Page', href: '/careers' }
//     ]
//   },
//   {
//     label: 'Contact',
//     bgColor: '#3A2C4B',
//     textColor: '#fff',
//     links: [{ label: 'Contact', ariaLabel: 'Contact Page', href: '/contact' }]
//   }
// ];

// export default function Navigation() {
//   const navigate = useNavigate();

//   return (
//     <CardNav
//       logo={logo}
//       logoAlt="Nexrova Logo"
//       items={navItems}
//       baseColor="#fff"
//       menuColor="#000"
//       buttonBgColor="#111"
//       buttonTextColor="#fff"
//     />
//   );
// }



// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Menu, X } from 'lucide-react';
// import logo from '@/assets/logo.png'; // <- add your PNG logo here

// const Navigation = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'Solutions', path: '/solutions' },
//     { name: 'About', path: '/about' },
//     { name: 'Careers', path: '/careers' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav className="bg-nexrova-navy backdrop-blur-md border-b border-nexrova-soft-gray sticky top-0 z-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <img src={logo} alt="Nexrova Logo" className="h-8 w-auto" />
//             <span className="font-bold text-xl text-white relative">
//               Nexrova
//               <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-nexrova-gold"></div>
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 className={`text-sm font-medium transition-smooth hover:text-nexrova-cyan ${
//                   isActive(item.path) ? 'text-nexrova-cyan' : 'text-white'
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <Button asChild className="ml-4 btn-gradient">
//               <Link to="/request-demo">Request Demo</Link>
//             </Button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-white hover:text-nexrova-cyan"
//             >
//               {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden border-t border-nexrova-soft-gray">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.path}
//                   to={item.path}
//                   className={`block px-3 py-2 text-sm font-medium rounded-md transition-smooth ${
//                     isActive(item.path)
//                       ? 'text-nexrova-cyan bg-nexrova-cyan/10'
//                       : 'text-white hover:text-nexrova-cyan hover:bg-white/10'
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <div className="px-3 pt-2">
//                 <Button asChild className="w-full btn-gradient">
//                   <Link to="/request-demo" onClick={() => setIsMenuOpen(false)}>
//                     Request Demo
//                   </Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Nexrova Logo" className="h-8 w-auto" />
            <span className="font-bold text-xl text-black relative">
              Nexrova
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-black"></div>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-gray-700 ${
                  isActive(item.path)
                    ? 'text-black underline underline-offset-4'
                    : 'text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="ml-4 px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition-colors duration-200">
              <Link to="/request-demo">Request Demo</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-gray-700"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-black font-semibold underline underline-offset-4'
                      : 'text-gray-900 hover:text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 pt-2">
                <Button asChild className="w-full px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition-colors duration-200">
                  <Link to="/request-demo" onClick={() => setIsMenuOpen(false)}>
                    Request Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

