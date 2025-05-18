
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
      isScrolled ? "bg-beige/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo className="h-14 w-auto" />
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-dark-green p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/galerie" className="nav-link">Galerie</Link>
          <Link to="/kontakt" className="nav-link">Kontakt</Link>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <nav className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-beige/95 backdrop-blur-sm transition-all duration-300 overflow-hidden",
        mobileMenuOpen ? "max-h-60 shadow-md" : "max-h-0"
      )}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link 
            to="/" 
            className="text-dark-green hover:text-light-green py-2 border-b border-muted"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/galerie" 
            className="text-dark-green hover:text-light-green py-2 border-b border-muted"
            onClick={() => setMobileMenuOpen(false)}
          >
            Galerie
          </Link>
          <Link 
            to="/kontakt" 
            className="text-dark-green hover:text-light-green py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Kontakt
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
