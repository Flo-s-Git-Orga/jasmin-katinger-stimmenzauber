
import React from 'react';

const Galerie = () => {
  // Placeholder images for the gallery
  const images = [
    { id: 1, src: '/placeholder.svg', alt: 'Freie Trauung im Garten', category: 'Trauung' },
    { id: 2, src: '/placeholder.svg', alt: 'Trauerfeier', category: 'Trauerfeier' },
    { id: 3, src: '/placeholder.svg', alt: 'Kinderwillkommensfest', category: 'Kinderwillkommen' },
    { id: 4, src: '/placeholder.svg', alt: 'Hochzeit am See', category: 'Trauung' },
    { id: 5, src: '/placeholder.svg', alt: 'Trauung im Weinberg', category: 'Trauung' },
    { id: 6, src: '/placeholder.svg', alt: 'Gedenkfeier', category: 'Trauerfeier' },
    { id: 7, src: '/placeholder.svg', alt: 'Willkommensfest für Zwillinge', category: 'Kinderwillkommen' },
    { id: 8, src: '/placeholder.svg', alt: 'Herbsthochzeit', category: 'Trauung' },
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
