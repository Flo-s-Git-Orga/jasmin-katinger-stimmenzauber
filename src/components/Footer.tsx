
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Mail, Phone, Home } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Logo className="mb-4" />
            <p className="text-dark-green/80 text-sm max-w-xs text-center md:text-left">
              Ich begleite Ihre wichtigsten Lebensmomente mit meiner Stimme und helfe Ihnen, Ihre Geschichte zu erzählen.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-xl mb-4 text-dark-green">Navigation</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-dark-green/80 hover:text-dark-green transition-colors">
                Home
              </Link>
              <Link to="/galerie" className="text-dark-green/80 hover:text-dark-green transition-colors">
                Galerie
              </Link>
              <Link to="/kontakt" className="text-dark-green/80 hover:text-dark-green transition-colors">
                Kontakt
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-xl mb-4 text-dark-green">Kontakt</h3>
            <div className="flex flex-col space-y-3">
              <a href="mailto:info@jasmin-pemmer.de" className="flex items-center text-dark-green/80 hover:text-dark-green transition-colors">
                <Mail size={18} className="mr-2" />
                <span>info@jasmin-pemmer.de</span>
              </a>
              <a href="tel:+491234567890" className="flex items-center text-dark-green/80 hover:text-dark-green transition-colors">
                <Phone size={18} className="mr-2" />
                <span>+49 123 456 7890</span>
              </a>
              <div className="flex items-center text-dark-green/80">
                <Home size={18} className="mr-2" />
                <span>Wien, Österreich</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-dark-green/20 mt-8 pt-8 text-center">
          <p className="text-dark-green/60 text-sm">
            © {new Date().getFullYear()} Jasmin Pemmer. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
