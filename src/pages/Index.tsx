
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
            Bedachte Worte für besondere Momente
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Gemeinsam feiern wir deine besonderen Momente und geben ihnen den Rahmen, den sie verdienen. Meine Zeremonien sind darauf ausgerichtet, die Menschen in den Mittelpunkt zu stellen, die Einzigartigkeit jedes Einzelnen zu würdigen und die besonderen Momente des Lebens in den Vordergrund zu stellen.
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
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-dark-green font-bold"
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
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="multiple" className="space-y-6">
              {/* Trauerfeier */}
              <AccordionItem value="trauerfeier" className="border border-dark-green/20 rounded-lg px-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8 py-4">
                  <div className="flex flex-col items-center lg:items-start lg:min-w-[200px] mb-4 lg:mb-0">
                    <img 
                      src="/placeholder.svg" 
                      alt="Trauerfeier" 
                      className="w-20 h-20 object-cover rounded-full mb-4"
                    />
                    <h3 className="font-serif text-2xl text-dark-green text-center lg:text-left">
                      Trauerfeier
                    </h3>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-dark-green/80 mb-4 leading-relaxed">
                      Eine Trauerfeier, die von einer Freien Rednerin gestaltet wird, ist eine persönliche und individuelle Zeremonie, die das Leben und die Einzigartigkeit des Verstorbenen würdigt. Mit einfühlsamen Worten wird eine Atmosphäre des Gedenkens und der Wertschätzung geschaffen, die Trost spendet und die besonderen Momente des Lebens des Verstorbenen in den Vordergrund stellt.
                    </p>
                    
                    <AccordionTrigger className="text-dark-green font-semibold hover:text-dark-green/80 hover:no-underline py-2">
                      Meine Leistungen anzeigen
                    </AccordionTrigger>
                  </div>
                </div>
                
                <AccordionContent>
                  <div className="pb-4">
                    <ul className="text-dark-green/80 space-y-2 pl-4">
                      <li>• Ein gemeinsames Vorgespräch: gerne bei Ihnen zuhause oder auf Wunsch auch online</li>
                      <li>• Beratung über die Gestaltungsmöglichkeiten der Zeremonie, gemäß Ihrer Wünsche und Vorstellungen</li>
                      <li>• Das Leiten der Zeremonie</li>
                      <li>• Individuelle, sehr persönliche Rede die die Persönlichkeit und das Leben hervorhebt</li>
                      <li>• Bis zum Ende der Zeremonie, stehe ich für Fragen zur Seite</li>
                      <li>• Redner-Sicherheit: bei einem krankheitsbedingten Ausfall, organisiere ich zuverlässig adäquaten Ersatz</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              {/* Freie Trauung */}
              <AccordionItem value="freie-trauung" className="border border-dark-green/20 rounded-lg px-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8 py-4">
                  <div className="flex flex-col items-center lg:items-start lg:min-w-[200px] mb-4 lg:mb-0">
                    <img 
                      src="/placeholder.svg" 
                      alt="Freie Trauung" 
                      className="w-20 h-20 object-cover rounded-full mb-4"
                    />
                    <h3 className="font-serif text-2xl text-dark-green text-center lg:text-left">
                      Freie Trauung
                    </h3>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-dark-green/80 mb-4 leading-relaxed">
                      Eine freie Trauung ist eine individuelle und persönliche Hochzeitszeremonie, die unabhängig von religiösen oder staatlichen Vorgaben gestaltet wird. Sie bietet Paaren die Freiheit, ihre Liebe und Verbundenheit auf eine Weise zu feiern, die ganz ihren Wünschen und Vorstellungen entspricht.
                    </p>
                    
                    <AccordionTrigger className="text-dark-green font-semibold hover:text-dark-green/80 hover:no-underline py-2">
                      Meine Leistungen anzeigen
                    </AccordionTrigger>
                  </div>
                </div>
                
                <AccordionContent>
                  <div className="pb-4">
                    <ul className="text-dark-green/80 space-y-2 pl-4">
                      <li>• Persönliches, unverbindliches Kennenlerngespräch (auf Wunsch auch digital möglich)</li>
                      <li>• Nach Zusage: Zweitgespräch zur konkreten Planung der Zeremonie</li>
                      <li>• Das Leiten der Zeremonie vom Einzug bis zum Auszug</li>
                      <li>• Individuelle, sehr persönliche Rede über euch</li>
                      <li>• Bis zu eurem Tag, stehe ich jederzeit für Fragen zur Seite</li>
                      <li>• Redner-Sicherheit: bei einem krankheitsbedingten Ausfall, organisiere ich zuverlässig adäquaten Ersatz</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              {/* Kinderwillkommensfest */}
              <AccordionItem value="kinderwillkommensfest" className="border border-dark-green/20 rounded-lg px-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8 py-4">
                  <div className="flex flex-col items-center lg:items-start lg:min-w-[200px] mb-4 lg:mb-0">
                    <img 
                      src="/placeholder.svg" 
                      alt="Kinderwillkommensfeste" 
                      className="w-20 h-20 object-cover rounded-full mb-4"
                    />
                    <h3 className="font-serif text-2xl text-dark-green text-center lg:text-left">
                      Kinderwillkommensfest
                    </h3>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-dark-green/80 mb-4 leading-relaxed">
                      Eine Geburt oder eine Adoption eines Kindes, stellt einen unvergleichlich besonderen Moment im Leben dar. Mit einem Kinderwillkommensfest (kurz KIWI) ist es möglich, das neue Familienmitglied mit einer neutralen, religiös unabhängigen Zeremonie willkommen zu heißen und auch Paten zu ernennen.
                    </p>
                    
                    <AccordionTrigger className="text-dark-green font-semibold hover:text-dark-green/80 hover:no-underline py-2">
                      Meine Leistungen anzeigen
                    </AccordionTrigger>
                  </div>
                </div>
                
                <AccordionContent>
                  <div className="pb-4">
                    <ul className="text-dark-green/80 space-y-2 pl-4">
                      <li>• Persönliches, unverbindliches Kennenlerngespräch (auf Wunsch auch digital möglich)</li>
                      <li>• Nach Zusage: Zweitgespräch zur konkreten Planung der Zeremonie</li>
                      <li>• Beratung über die Gestaltungsmöglichkeiten der Zeremonie, gemäß euer Wünsche und Vorstellungen</li>
                      <li>• Ideen und Erfahrungen zum Einbinden der Paten/der Gäste</li>
                      <li>• Individuelle, sehr persönliche Rede über euch als Familie</li>
                      <li>• Das Leiten der Zeremonie von Anfang bis zum Ende</li>
                      <li>• Redner-Sicherheit: bei einem krankheitsbedingten Ausfall, organisiere ich zuverlässig adäquaten Ersatz</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            {/* Zentraler CTA Button */}
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                className="border-2 border-dark-green bg-transparent text-dark-green hover:bg-dark-green hover:text-white font-semibold text-lg px-8 py-3"
                asChild
              >
                <Link to="/kontakt">Unverbindliches Angebot anfragen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-beige">
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
          
          <div className="max-w-2xl mx-auto">
            <div className="testimonial-card">
              <div className="flex items-center mb-4">
                <img 
                  src="/lovable-uploads/fc18bd29-7ecc-4eae-bf64-bb64db7dada2.png" 
                  alt="Claudia Greimel"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-dark-green">Claudia Greimel</h4>
                  <p className="text-sm text-dark-green/70">Google Bewertung</p>
                </div>
              </div>
              <p className="text-dark-green/80 italic">
                "Jasmin macht mit ihrer einfühlsamen Art jede Zeremonie zu einem einzigartigen und persönlichen Fest. Dadurch bleibt es allen lange in Erinnerung. Vielen Dank für dafür!"
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
            className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-dark-green font-bold"
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
