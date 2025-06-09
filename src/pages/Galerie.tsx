
import React from 'react';

const Galerie = () => {
  // Updated images for the gallery with real photos
  const images = [
    { id: 1, src: '/lovable-uploads/12003b59-518b-44d1-9675-b9879f170795.png', alt: 'Kinderwillkommensfest mit bunten Konfetti', category: 'Kinderwillkommen' },
    { id: 2, src: '/lovable-uploads/abc50373-ab7e-4fc9-a698-6f3276b0fb61.png', alt: 'Freie Trauung am Strand', category: 'Trauung' },
    { id: 3, src: '/lovable-uploads/1f2b1318-93cb-456f-afb3-b1d9e1c6b03e.png', alt: 'Hochzeitsauto mit Just Married Schild', category: 'Trauung' },
    { id: 4, src: '/lovable-uploads/ef16d38a-2e4a-4ba3-b6d1-5cc76a595c65.png', alt: 'Gedenkblumen bei Trauerfeier', category: 'Trauerfeier' },
    { id: 5, src: '/lovable-uploads/5c0a84d0-a7fe-43d6-80e4-1c6e85cfd2e5.png', alt: 'Weiße Rose am Strand - Gedenkzeremonie', category: 'Trauerfeier' },
    { id: 6, src: '/lovable-uploads/99e96f73-62a2-4b78-b407-8b22f6b44174.png', alt: 'Bunte Luftballons für Kinderwillkommensfest', category: 'Kinderwillkommen' },
  ];

  const [activeCategory, setActiveCategory] = React.useState('Alle');
  const categories = ['Alle', 'Trauung', 'Trauerfeier', 'Kinderwillkommen'];

  const filteredImages = activeCategory === 'Alle' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl text-dark-green text-center mb-4">
          Galerie
        </h1>
        <p className="text-center text-dark-green/80 max-w-2xl mx-auto mb-12">
          Eindrücke aus meiner Arbeit als freie Rednerin bei verschiedenen Anlässen
        </p>
        
        {/* Category Filter */}
        <div className="flex justify-center mb-12 flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-dark-green text-white'
                  : 'bg-cream text-dark-green hover:bg-dark-green/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map(image => (
            <div 
              key={image.id}
              className="aspect-square rounded-lg overflow-hidden hover-scale"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {filteredImages.length === 0 && (
          <div className="text-center py-12 text-dark-green/70">
            Keine Bilder in dieser Kategorie gefunden.
          </div>
        )}
      </div>
    </div>
  );
};

export default Galerie;
