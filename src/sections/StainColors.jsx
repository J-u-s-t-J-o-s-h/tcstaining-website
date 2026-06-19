import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ParallaxBackground from '../components/ParallaxBackground';
import StainColorVisualizer from '../components/StainColorVisualizer';

const StainColors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="stain-colors" className="relative py-20 overflow-hidden section-depth" ref={ref}>
      <ParallaxBackground sectionRef={ref} className="bg-warm-beige" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-walnut mb-4">
            Find Your <span className="text-accent-gold">Perfect Stain</span>
          </h2>
          <p className="text-lg sm:text-xl text-charcoal-gray max-w-2xl mx-auto">
            Preview popular stain colors on a fence before you commit. Pick the shade that fits your home.
          </p>
        </motion.div>

        <StainColorVisualizer />
      </div>
    </section>
  );
};

export default StainColors;
