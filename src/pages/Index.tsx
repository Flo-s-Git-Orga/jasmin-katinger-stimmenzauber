
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const scrollToVideo = () => {
    const videoSection = document.querySelector('.py-16.bg-beige');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVideoVisible) {
            setIsVideoVisible(true);
            if (videoRef.current) {
              videoRef.current.src = videoRef.current.src.replace('autoplay=0', 'autoplay=1');
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [isVideoVisible]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://www.youtube.com/embed/ACMTGx-Khj0?autoplay=1&mute=1&loop=1&playlist=ACMTGx-Khj0&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&autohide=1"
            className="w-full h-full object-cover"
            allow="autoplay; encrypted-media"
            style={{ 
              filter: 'blur(2px)',
              transform: 'scale(1.8)',
              pointerEvents: 'none',
              transformOrigin: 'center center'
            }}
          ></iframe>
          <div className="absolute inset-0 bg-dark-green/40"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="font-handwriting text-4xl md:text-6xl lg:text-7xl text-white mb-6">
            Bedachte Worte für besondere Momente
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Gemeinsam feiern wir deine besonderen Momente und geben ihnen den Rahmen, den sie verdienen. Meine Zeremonien sind darauf ausgerichtet, die Menschen in den Mittelpunkt zu rücken, die Einzigartigkeit jedes Einzelnen zu würdigen und die besonderen Momente des Lebens entsprechend zu feiern.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="default" 
              className="bg-dark-green hover:bg-light-green text-white"
              onClick={scrollToVideo}
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
          onClick={scrollToVideo}
        >
          <ArrowDown size={32} />
        </button>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-dark-green text-center mb-16">
            Über mich
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-dark-green/80 leading-relaxed">
              <p className="mb-6">
                Mein Name ist Jasmin Katinger, ich bin 44 Jahre alt und lebe mit großer Freude sowohl in Emmersdorf an der Donau als auch in Wien – zwei Orte, die mir auf unterschiedliche Weise viel bedeuten. Ich habe das große Glück, zwei (mittlerweile erwachsene) Töchter zu haben, die mein Leben bereichern und mich immer wieder inspirieren.
              </p>
              
              <p className="mb-6">
                Sport ist ein wichtiger Teil meines Alltags – besonders Tennis, Radfahren und Kraftsport, den ich versuche mehrmals pro Woche zu betreiben. Bewegung gibt mir Energie, hält mich in Balance und stärkt nicht nur den Körper, sondern auch meinen Geist. Noch mehr Kraft tanke ich in der Natur: Sie ist mein Rückzugsort, mein Kompass. Hier finde ich Klarheit, treffe Entscheidungen und spüre, was wirklich zählt.
              </p>
              
              <p className="mb-6">
                Tiere liegen mir sehr am Herzen. Ich kümmere mich gerne um sie und schätze die tiefe, ehrliche Freundschaft, die sie schenken – frei von Masken und Erwartungen. Auch im Umgang mit Menschen ist mir Authentizität wichtig. Ich liebe es, gemeinsam etwas Neues zu erschaffen, Ideen zu entwickeln und mit Begeisterung umzusetzen.
              </p>
              
              <p className="mb-6">
                Humor und Sinnhaftigkeit sind für mich die perfekte Kombination: Wenn ich Spaß an einer Sache habe und gleichzeitig das Gefühl, dass sie Bedeutung hat, bin ich mit voller Freude und Hingabe dabei.
              </p>
              
              <p>
                Was ich nicht mag? Verschwendung, Unzuverlässigkeit, Gewalt und allzu wilde Abenteuer – ich schätze Achtsamkeit, Freundschaft, Verlässlichkeit und ein respektvolles Miteinander.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
                      src="/lovable-uploads/ef16d38a-2e4a-4ba3-b6d1-5cc76a595c65.png" 
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
                      <li>• Ein gemeinsames Vorgespräch: gerne bei euch zuhause oder auf Wunsch auch online</li>
                      <li>• Beratung über die Gestaltungsmöglichkeiten der Zeremonie, gemäß euren Wünschen und Vorstellungen</li>
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
                      src="/lovable-uploads/abc50373-ab7e-4fc9-a698-6f3276b0fb61.png" 
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
                      src="/lovable-uploads/12003b59-518b-44d1-9675-b9879f170795.png" 
                      alt="Kinderwillkommensfeste" 
                      className="w-20 h-20 object-cover rounded-full mb-4"
                    />
                    <h3 className="font-serif text-2xl text-dark-green text-center lg:text-left">
                      Kinderwillkommensfest
                    </h3>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-dark-green/80 mb-4 leading-relaxed">
                      Eine Geburt oder eine Adoption eines Kindes, stellt einen unvergleichlich besonderen Moment im Leben dar. Mit einem Kinderwillkommensfest ist es möglich, das neue Familienmitglied mit einer neutralen, religiös unabhängigen Zeremonie willkommen zu heißen und auch Paten zu ernennen.
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
                      <li>• Beratung über die Gestaltungsmöglichkeiten der Zeremonie, gemäß euren Wünschen und Vorstellungen</li>
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
            <div className="text-center mt-8 md:mt-12">
              <Button 
                variant="outline" 
                className="border-2 border-dark-green bg-transparent text-dark-green hover:bg-dark-green hover:text-white font-semibold text-base md:text-lg px-6 md:px-8 py-2 md:py-3 mx-4"
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
          
          <div className="max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden">
            <iframe
              ref={videoRef}
              src="https://www.youtube.com/embed/ii71Ukq-iko?autoplay=0&controls=1&modestbranding=1&rel=0&showinfo=0&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=1"
              className="w-full h-full"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              title="Das bin ich - Jasmin Katinger"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl text-dark-green text-center mb-16">
            Das sagen meine Kunden
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <iframe 
              src="https://widget.taggbox.com/294121?website=1" 
              style={{width:'100%',height:'100%',overflow:'auto',border:'none'}}
              title="Kundenbewertungen"
            ></iframe>
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
