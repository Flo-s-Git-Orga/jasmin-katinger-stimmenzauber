
import React from 'react';

const Datenschutz = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl text-dark-green mb-10">Datenschutzerklärung</h1>
        
        <div className="prose max-w-3xl text-dark-green/80">
          <h2 className="font-serif text-2xl text-dark-green mt-8 mb-4">1. Datenschutz auf einen Blick</h2>
          <h3 className="font-serif text-xl text-dark-green mt-6 mb-3">Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit deinen personenbezogenen Daten passiert, 
            wenn du diese Website besuchst. Personenbezogene Daten sind alle Daten, mit denen du persönlich identifiziert 
            werden kannst. Ausführliche Informationen zum Thema Datenschutz entnimmst du unserer unter diesem Text 
            aufgeführten Datenschutzerklärung.
          </p>
          
          <h3 className="font-serif text-xl text-dark-green mt-6 mb-3">Datenerfassung auf dieser Website</h3>
          <h4 className="font-medium text-lg text-dark-green mt-4 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
            kannst du dem Impressum dieser Website entnehmen.
          </p>
          
          <h4 className="font-medium text-lg text-dark-green mt-4 mb-2">Wie erfassen wir deine Daten?</h4>
          <p>
            Deine Daten werden zum einen dadurch erhoben, dass du uns diese mitteilst. Hierbei kann es sich z. B. 
            um Daten handeln, die du in ein Kontaktformular eingibst.
          </p>
          <p>
            Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor 
            allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die 
            Erfassung dieser Daten erfolgt automatisch, sobald du diese Website betrittst.
          </p>
          
          <h2 className="font-serif text-2xl text-dark-green mt-8 mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3 className="font-serif text-xl text-dark-green mt-6 mb-3">Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz deiner persönlichen Daten sehr ernst. Wir behandeln deine 
            personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie 
            dieser Datenschutzerklärung.
          </p>
          
          <h3 className="font-serif text-xl text-dark-green mt-6 mb-3">Hinweis zur verantwortlichen Stelle</h3>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p>
            Jasmin Pemmer<br />
            Musterstraße 123<br />
            1010 Wien<br />
            Österreich
          </p>
          <p>
            Telefon: +49 123 456 7890<br />
            E-Mail: info@jasmin-pemmer.de
          </p>
          
          <p className="mt-10 text-dark-green/60">
            [Dieser Text ist ein Platzhalter und muss vor der finalen Veröffentlichung der Website durch einen 
            juristisch geprüften Datenschutztext ersetzt werden.]
          </p>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
