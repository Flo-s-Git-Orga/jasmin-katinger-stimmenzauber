
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Home } from 'lucide-react';

const Kontakt = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form handling logic will go here
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl text-dark-green text-center mb-4">
          Kontakt
        </h1>
        <p className="text-center text-dark-green/80 max-w-2xl mx-auto mb-12">
          Ich freue mich auf Deine Nachricht und beantworte gerne alle Fragen. Bitte um Verständnis, dass nur Anfragen mit vollständigem Namen und mit angegebener Emailadresse berücksichtigt werden.
        </p>
        
        <div className="max-w-6xl mx-auto bg-cream rounded-xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact Form */}
            <div className="p-8">
              <h2 className="font-serif text-2xl text-dark-green mb-6">
                Schreiben Sie mir
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-green mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Ihr Name"
                    className="bg-white border-dark-green/20 focus:border-dark-green focus:ring-dark-green"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-green mb-1">
                    E-Mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Ihre E-Mail-Adresse"
                    className="bg-white border-dark-green/20 focus:border-dark-green focus:ring-dark-green"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-dark-green mb-1">
                    Telefon (optional)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Ihre Telefonnummer"
                    className="bg-white border-dark-green/20 focus:border-dark-green focus:ring-dark-green"
                  />
                </div>
                
                <div>
                  <label htmlFor="event" className="block text-sm font-medium text-dark-green mb-1">
                    Anlass
                  </label>
                  <select
                    id="event"
                    name="event"
                    required
                    className="w-full px-3 py-2 rounded-md border border-dark-green/20 focus:border-dark-green focus:ring-dark-green bg-white"
                  >
                    <option value="">Bitte wählen</option>
                    <option value="Trauerfeier">Trauerfeier</option>
                    <option value="Freie Trauung">Freie Trauung</option>
                    <option value="Kinderwillkommensfest">Kinderwillkommensfest</option>
                    <option value="Sonstiges">Sonstiges</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-green mb-1">
                    Nachricht
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Ihre Nachricht"
                    rows={5}
                    className="bg-white border-dark-green/20 focus:border-dark-green focus:ring-dark-green resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-dark-green hover:bg-light-green text-white"
                >
                  Nachricht senden
                </Button>
              </form>
            </div>
            
            {/* Contact Image and Info */}
            <div className="relative">
              <div className="absolute inset-0">
                <img 
                  src="/placeholder.svg" 
                  alt="Jasmin Katinger" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-dark-green/70 flex flex-col justify-end p-8">
                <h3 className="font-serif text-2xl text-white mb-6">
                  Kontaktinformationen
                </h3>
                <div className="space-y-4 text-white">
                  <div className="flex items-center">
                    <Mail size={20} className="mr-3" />
                    <a href="mailto:kontakt@jasminkatinger.at" className="hover:underline">
                      kontakt@jasminkatinger.at
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone size={20} className="mr-3" />
                    <a href="tel:+4367670235556" className="hover:underline">
                      +43 676 70 23 556
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Home size={20} className="mr-3" />
                    <span>Emmersdorf a.d. Donau & Wien, Österreich</span>
                  </div>
                  <div className="mt-6">
                    <p className="text-sm text-white/90 mb-2">
                      Jasmin Katinger, zertifizierte Freie Rednerin
                    </p>
                    <p className="text-xs text-white/80">
                      Freie Trauung, Trauerfeier, Kinderwillkommensfest, Jubiläen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
