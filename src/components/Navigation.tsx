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

import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Home, Layers, Info, Briefcase, Phone } from 'lucide-react';

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/', icon: <Home size={24} /> },
  { label: 'Solutions', path: '/solutions', icon: <Layers size={24} /> },
  { label: 'About', path: '/about', icon: <Info size={24} /> },
  { label: 'Careers', path: '/careers', icon: <Briefcase size={24} /> },
  { label: 'Contact', path: '/contact', icon: <Phone size={24} /> },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-nexrova-navy backdrop-blur-md border-b border-nexrova-soft-gray sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-cyan-purple rounded-lg flex items-center justify-center shadow-cyan">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="font-bold text-xl text-white relative">
              Nexrova
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-nexrova-gold"></div>
            </span>
          </Link>

          {/* Desktop Nav */}
          {!isMobile && (
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <div
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`flex flex-col items-center justify-center px-4 py-2 rounded-xl cursor-pointer transition-all duration-300
                    ${isActive(item.path) ? 'bg-nexrova-cyan/20 text-white shadow-md' : 'text-white hover:bg-nexrova-cyan/10'}`}
                >
                  <div className="mb-1">{item.icon}</div>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
              <Button asChild className="ml-4 btn-gradient">
                <Link to="/request-demo">Request Demo</Link>
              </Button>
            </div>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(true)}
              className="text-white hover:text-nexrova-cyan"
            >
              <span className="text-2xl">☰</span>
            </Button>
          )}
        </div>
      </div>

      {/* Mobile CardNav Overlay */}
      {isMobile && isMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex flex-col items-center justify-center p-6 space-y-6">
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-nexrova-cyan transition-colors"
          >
            ×
          </button>

          {/* Nav Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md">
            {navItems.map((item) => (
              <div
                key={item.path}
                onClick={() => {
                  navigate(item.path);
                  setIsMenuOpen(false);
                }}
                className={`flex flex-col items-center justify-center p-6 rounded-2xl cursor-pointer transition-all duration-300
                  ${isActive(item.path) ? 'bg-nexrova-cyan/30 text-white shadow-lg' : 'bg-white/10 text-white hover:bg-nexrova-cyan/20'}`}
              >
                <div className="mb-2">{item.icon}</div>
                <span className="font-semibold text-lg">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Request Demo Button */}
          <Button asChild className="mt-6 w-full max-w-xs btn-gradient">
            <Link to="/request-demo" onClick={() => setIsMenuOpen(false)}>
              Request Demo
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
