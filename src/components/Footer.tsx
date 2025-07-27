
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Mail, Phone, Home, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Logo className="mb-4" />
            <p className="text-dark-green/80 text-sm max-w-xs text-center md:text-left">
              Ich begleite deine wichtigsten Lebensmomente mit meiner Stimme und helfe dir, deine Geschichte zu erzählen.
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
              <Link to="/impressum" className="text-dark-green/80 hover:text-dark-green transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-dark-green/80 hover:text-dark-green transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-serif text-xl mb-4 text-dark-green">Kontakt</h3>
            <div className="flex flex-col space-y-3">
              <a href="mailto:kontakt@jasminkatinger.at" className="flex items-center text-dark-green/80 hover:text-dark-green transition-colors">
                <Mail size={18} className="mr-2" />
                <span>kontakt@jasminkatinger.at</span>
              </a>
              <a href="tel:+4367670235556" className="flex items-center text-dark-green/80 hover:text-dark-green transition-colors">
                <Phone size={18} className="mr-2" />
                <span>+43 676 70 23 556</span>
              </a>
              <div className="flex items-center text-dark-green/80">
                <Home size={18} className="mr-2" />
                <span>Emmersdorf a.d. Donau & Wien</span>
              </div>
              <div className="mt-3 text-xs text-dark-green/70">
                <p>Jasmin Katinger, zertifizierte Freie Rednerin</p>
                <p>Freie Trauung, Trauerfeier, Kinderwillkommensfest, Jubiläen</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-dark-green/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-green/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Jasmin Pemmer. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6">
            <Link to="/impressum" className="text-dark-green/60 text-sm hover:text-dark-green transition-colors flex items-center">
              <ExternalLink size={14} className="mr-1" />
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-dark-green/60 text-sm hover:text-dark-green transition-colors flex items-center">
              <ExternalLink size={14} className="mr-1" />
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
