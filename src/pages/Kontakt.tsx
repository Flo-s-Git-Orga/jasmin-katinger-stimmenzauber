
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Home, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Kontakt = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const event = formData.get('event') as string;
    const message = formData.get('message') as string;
    
    // Get current time
    const currentTime = new Date().toLocaleString('de-DE', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    try {
      await emailjs.send(
        'service_yaiprc5',
        'template_nm2i03n',
        {
          title: event,
          name: name,
          time: currentTime,
          phone: phone || 'Nicht angegeben',
          message: message,
          email: email
        },
        'V_cQIICqaURbdAT1B' // You'll need to replace this with your actual public key
      );
      
      setShowSuccess(true);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Es gab einen Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto bg-cream rounded-xl p-12 text-center shadow-lg">
            <div className="mb-8">
              <CheckCircle size={80} className="mx-auto text-dark-green mb-6" />
              <h1 className="font-serif text-3xl text-dark-green mb-4">
                Danke!
              </h1>
              <p className="text-dark-green text-lg mb-2">
                Deine Anfrage wurde abgeschickt!
              </p>
              <p className="text-dark-green/80">
                Ich werde mich zeitnah bei dir melden
              </p>
            </div>
            <Button 
              onClick={() => navigate('/')}
              className="bg-dark-green hover:bg-light-green text-white px-8 py-3"
            >
              Zur Startseite
            </Button>
          </div>
        </div>
      </div>
    );
  }

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
                  disabled={isSubmitting}
                  className="w-full bg-dark-green hover:bg-light-green text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </Button>
              </form>
            </div>
            
            {/* Contact Image and Info */}
            <div className="relative min-h-[400px] md:min-h-full">
              <div className="absolute inset-0">
                <img 
                  src="/lovable-uploads/4e28c3d4-28b4-4528-81f5-b33f17a5149b.png" 
                  alt="Jasmin Katinger" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-dark-green/70 flex flex-col justify-center md:justify-end p-6 md:p-8">
                <h3 className="font-serif text-xl md:text-2xl text-white mb-4 md:mb-6">
                  Kontaktinformationen
                </h3>
                <div className="space-y-3 md:space-y-4 text-white">
                  <div className="flex items-center">
                    <Mail size={18} className="mr-3 flex-shrink-0" />
                    <a href="mailto:kontakt@jasminkatinger.at" className="hover:underline text-sm md:text-base">
                      kontakt@jasminkatinger.at
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone size={18} className="mr-3 flex-shrink-0" />
                    <a href="tel:+4367670235556" className="hover:underline text-sm md:text-base">
                      +43 676 70 23 556
                    </a>
                  </div>
                  <div className="flex items-start">
                    <Home size={18} className="mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base">Emmersdorf a.d. Donau & Wien, Österreich</span>
                  </div>
                  <div className="mt-4 md:mt-6">
                    <p className="text-xs md:text-sm text-white/90 mb-1 md:mb-2">
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
