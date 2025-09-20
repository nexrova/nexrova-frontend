import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-smooth hover:text-nexrova-cyan ${
                  isActive(item.path) ? 'text-nexrova-cyan' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="ml-4 btn-gradient">
              <Link to="/request-demo">Request Demo</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-nexrova-cyan"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-nexrova-soft-gray">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-sm font-medium rounded-md transition-smooth ${
                    isActive(item.path)
                      ? 'text-nexrova-cyan bg-nexrova-cyan/10'
                      : 'text-white hover:text-nexrova-cyan hover:bg-white/10'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 pt-2">
                <Button asChild className="w-full btn-gradient">
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