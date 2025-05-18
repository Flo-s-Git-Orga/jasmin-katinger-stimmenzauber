
import React from 'react';

const Impressum = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl text-dark-green mb-10">Impressum</h1>
        
        <div className="prose max-w-3xl text-dark-green/80">
          <h2 className="font-serif text-2xl text-dark-green mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
          <p>
            Jasmin Pemmer<br />
            Freie Rednerin<br />
            Musterstraße 123<br />
            1010 Wien<br />
            Österreich
          </p>
          
          <h2 className="font-serif text-2xl text-dark-green mt-8 mb-4">Kontakt</h2>
          <p>
            Telefon: +49 123 456 7890<br />
            E-Mail: info@jasmin-pemmer.de
          </p>
          
          <h2 className="font-serif text-2xl text-dark-green mt-8 mb-4">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE123456789
          </p>
          
          <h2 className="font-serif text-2xl text-dark-green mt-8 mb-4">Aufsichtsbehörde</h2>
          <p>
            Zuständige Kammer: [Placeholder]<br />
            Zuständige Aufsichtsbehörde: [Placeholder]
          </p>
          
          <h2 className="font-serif text-2xl text-dark-green mt-8 mb-4">Haftungsausschluss</h2>
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. 
            Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
