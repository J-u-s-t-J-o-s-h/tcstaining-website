import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Lightbox from '../components/Lightbox';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      alt: 'Stained fence before and after',
      label: 'Fence Restoration - Before & After',
    },
    {
      src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop',
      alt: 'Beautiful deck staining',
      label: 'Deck Staining Project',
    },
    {
      src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop',
      alt: 'Privacy fence staining',
      label: 'Privacy Fence Protection',
    },
    {
      src: 'https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=2070&auto=format&fit=crop',
      alt: 'Wood fence treatment',
      label: 'Wood Fence Treatment',
    },
    {
      src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
      alt: 'Deck restoration',
      label: 'Complete Deck Restoration',
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop',
      alt: 'Fence refinishing',
      label: 'Fence Refinishing Work',
    },
    {
      src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
      alt: 'Natural wood staining',
      label: 'Natural Wood Stain Finish',
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?q=80&w=2070&auto=format&fit=crop',
      alt: 'Backyard fence staining',
      label: 'Backyard Fence Project',
    },
    {
      src: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2070&auto=format&fit=crop',
      alt: 'Professional fence work',
      label: 'Professional Fence Staining',
    },
  ];

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-20 bg-charcoal-gray" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-warm-beige mb-4">
            Our <span className="text-accent-gold">Work</span>
          </h2>
          <p className="text-xl text-warm-beige/80 max-w-3xl mx-auto">
            Browse our portfolio of completed projects. Click any image to view it larger.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => setLightboxIndex(index)}
            >
              <div className="aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-walnut/90 via-dark-walnut/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-warm-beige font-semibold text-lg">{image.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
};

export default Gallery;

