import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
  };

  return (
    <footer className="bg-nexrova-gray-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-nexrova-blue to-nexrova-blue-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="font-bold text-xl">Nexrova</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transforming hotel operations with AI-powered automation solutions that enhance guest satisfaction while reducing operational costs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/solutions" className="block text-gray-300 hover:text-white transition-smooth text-sm">
                Solutions
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-smooth text-sm">
                About Us
              </Link>
              <Link to="/careers" className="block text-gray-300 hover:text-white transition-smooth text-sm">
                Careers
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-smooth text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Support</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-smooth text-sm">
                Help Center
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-smooth text-sm">
                Documentation
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-smooth text-sm">
                API Reference
              </a>
              <Link to="/request-demo" className="block text-gray-300 hover:text-white transition-smooth text-sm">
                Request Demo
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Stay Updated</h3>
            <p className="text-gray-300 text-sm">
              Get the latest updates on AI hotel automation and industry insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button type="submit" className="w-full bg-nexrova-blue hover:bg-nexrova-blue-dark">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Nexrova. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-300 hover:text-white transition-smooth">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-smooth">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-smooth">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-smooth">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;