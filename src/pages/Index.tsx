
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/placeholder.svg" 
            alt="Jasmin Pemmer" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark-green/30"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="font-handwriting text-4xl md:text-6xl lg:text-7xl text-white mb-6">
            Worte für besondere Momente
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Als freie Reednerin gestalte ich deine Trauerfeier, Trauung oder dein Kinderwillkommensfest mit Herz und Persönlichkeit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="default" 
              className="bg-dark-green hover:bg-light-green text-white"
              onClick={scrollToAbout}
            >
              Über mich
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-dark-green font-semibold"
              asChild
            >
              <Link to="/kontakt">Kontaktieren</Link>
            </Button>
          </div>
        </div>
        
        <button 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
          onClick={scrollToAbout}
        >
          <ArrowDown size={32} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-dark-green text-center mb-16">
            Meine Angebote für dich
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="service-card flex flex-col items-center text-center">
              <img 
                src="/placeholder.svg" 
                alt="Trauerfeier" 
                className="w-20 h-20 object-cover rounded-full mb-4"
              />
              <h3 className="font-serif text-xl text-dark-green mb-3">Trauerfeier</h3>
              <p className="text-dark-green/80">
                Einfühlsame Worte für den letzten Abschied. Ich gestalte würdevolle Trauerfeiern, die das Leben der Verstorbenen würdigen.
              </p>
            </div>
            
            <div className="service-card flex flex-col items-center text-center">
              <img 
                src="/placeholder.svg" 
                alt="Freie Trauung" 
                className="w-20 h-20 object-cover rounded-full mb-4"
              />
              <h3 className="font-serif text-xl text-dark-green mb-3">Freie Trauung</h3>
              <p className="text-dark-green/80">
                Persönliche Zeremonien für deinen besonderen Tag. Ich gestalte deine Trauung genau nach deinen Vorstellungen.
              </p>
            </div>
            
            <div className="service-card flex flex-col items-center text-center">
              <img 
                src="/placeholder.svg" 
                alt="Kinderwillkommensfeste" 
                className="w-20 h-20 object-cover rounded-full mb-4"
              />
              <h3 className="font-serif text-xl text-dark-green mb-3">Kinderwillkommensfeste</h3>
              <p className="text-dark-green/80">
                Fröhliche und herzliche Zeremonien zur Begrüßung deines Kindes. Ein besonderer Start ins Leben.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl text-dark-green text-center mb-12">
            Das bin ich!
          </h2>
          
          <div className="max-w-3xl mx-auto aspect-video bg-dark-green/10 flex items-center justify-center rounded-lg overflow-hidden">
            {/* Video will be embedded here later */}
            <div className="text-dark-green text-center">
              <p className="mb-2 text-lg">Video wird hier platziert</p>
              <p className="text-sm">Ein persönlicher Einblick in meine Arbeit als Rednerin</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl text-dark-green text-center mb-16">
            Das sagen meine Kunden
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="testimonial-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-dark-green/10 mr-4"></div>
                <div>
                  <h4 className="font-medium text-dark-green">Maria & Thomas</h4>
                  <p className="text-sm text-dark-green/70">Freie Trauung</p>
                </div>
              </div>
              <p className="text-dark-green/80 italic">
                "Jasmin hat unsere freie Trauung zu etwas ganz Besonderem gemacht. Ihre warme Stimme und die persönlichen Worte haben alle Gäste berührt. Wir sind unendlich dankbar."
              </p>
            </div>
            
            <div className="testimonial-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-dark-green/10 mr-4"></div>
                <div>
                  <h4 className="font-medium text-dark-green">Familie Müller</h4>
                  <p className="text-sm text-dark-green/70">Trauerfeier</p>
                </div>
              </div>
              <p className="text-dark-green/80 italic">
                "Wir möchten uns herzlich für die einfühlsame Gestaltung der Trauerfeier bedanken. Jasmin hat es geschafft, das Leben unserer Mutter in all seinen Facetten zu würdigen."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-dark-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl mb-6">
            Lass uns gemeinsam deine Geschichte erzählen
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80">
            Ich freue mich darauf, mit dir ins Gespräch zu kommen und deine Wünsche kennenzulernen.
          </p>
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-dark-green font-semibold"
            asChild
          >
            <Link to="/kontakt">Jetzt kontaktieren</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
