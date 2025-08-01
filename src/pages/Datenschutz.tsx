
import React from 'react';

const Datenschutz = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl text-dark-green mb-10">Erklärung zur Informationspflicht</h1>
        
        <div className="prose max-w-3xl text-dark-green/80">
          <h2 className="font-serif text-2xl text-dark-green mt-8 mb-4">Datenschutzerklärung</h2>
          <p>
            In folgender Datenschutzerklärung informiere ich Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen der Webseite von Jasmin Katinger. Der Schutz Ihrer Daten ist von höchster Priorität, weshalb personenbezogene Daten nur auf Grundlage der gesetzlichen Bestimmungen erhoben und verarbeitet werden (Datenschutzgrundverordnung, Telekommunikationsgesetz 2003).
          </p>
          <p>
            Sobald Sie als Benutzer auf der Webseite von Jasmin Katinger zugreifen oder diese besuchen wird Ihre IP-Adresse, Beginn sowie Beginn und Ende der Sitzung erfasst. Dies ist technisch bedingt und stellt somit ein berechtigtes Interesse iSv Art 6 Abs 1 lit f DSGVO.
          </p>
          
          <h2 className="font-serif text-2xl text-dark-green mt-8 mb-4">Kontaktaufnahme</h2>
          <p>
            Wenn Sie Jasmin Katinger, entweder über das Kontaktformular auf der Website oder per E-Mail kontaktieren, dann werden die von Ihnen übermittelten Daten zwecks Bearbeitung Ihrer Anfrage oder für den Fall von weiteren Anschlussfragen für sechs Monate gespeichert. Die Zustimmung dazu, erteilen Sie bei Verwendung des Kontaktformulars oder bei Senden einer Emailanfrage.
          </p>
          <p>
            Bitte bedenken Sie beim Eingehen einer Vertragsverpflichtung die gesetzlichen Aufbewahrungspflichten für ausgestellte Rechnungen (Finanzamt), welche die Websiteinhaberin dazu verpflichten diese für eine gesetzlich vorgegebene Dauer aufzubewahren.
          </p>
          <p>
            Ihre Daten werden nicht zu Werbe- oder Verkaufszwecke an Dritte weitergegeben. Eine Weitergabe an Dritte (wie Behörden, Inkassobüro, Rechtsanwälte) erfolgt ausschließlich dann, wenn es zur Geltendmachung von Rechtsansprüchen erfolgt.
          </p>
          
          <h2 className="font-serif text-2xl text-dark-green mt-8 mb-4">Cookies</h2>
          <p>
            Diese Website verwendet so genannte Cookies. Dabei handelt es sich um kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden an. Cookies werden dazu genutzt, das Angebot nutzerfreundlich zu gestalten. Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es, Ihren Browser beim nächsten Besuch wiederzuerkennen. Wenn Sie dies nicht wünschen, so können Sie Ihren Browser so einrichten, dass er Sie über das Setzen von Cookies informiert und Sie dies nur im Einzelfall erlauben. Bei der Deaktivierung von Cookies kann die Funktionalität der Website eingeschränkt sein.
          </p>
          
          <h2 className="font-serif text-2xl text-dark-green mt-8 mb-4">Ihre Rechte als Betroffener</h2>
          <p>
            Sie als Betroffener haben bezüglich Ihrer Daten, welche bei Jasmin Katinger gespeichert sind, grundsätzlich ein Recht auf:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Auskunft</li>
            <li>Löschung der Daten</li>
            <li>Berichtigung der Daten</li>
            <li>Übertragbarkeit der Daten</li>
            <li>Widerruf und Widerspruch zur Datenverarbeitung</li>
            <li>Einschränkung</li>
          </ul>
          <p>
            Wenn Sie vermuten, dass im Zuge der Verarbeitung Ihrer Daten Verstöße gegen das Datenschutzrecht passiert sind, so haben Sie die Möglichkeit sich bei der Inhaberin der Website (kontakt@jasminkatinger.at) oder der Datenschutzbehörde zu beschweren.
          </p>
          
          <h2 className="font-serif text-2xl text-dark-green mt-8 mb-4">Kontaktdaten</h2>
          <p>
            Webseitenbetreiber: Jasmin Katinger<br />
            Telefonnummer: +43 676 7023556<br />
            Email: kontakt@jasminkatinger.at
          </p>
          
          <p className="mt-8 text-sm text-dark-green/60">
            Quelle: Datenschutzgenerator Österreich DSGVO
          </p>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
