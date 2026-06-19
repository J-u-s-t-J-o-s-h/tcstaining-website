import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ElfsightReviews from '../components/ElfsightReviews';
import ParallaxBackground from '../components/ParallaxBackground';

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="reviews" className="relative py-20 overflow-hidden section-depth" ref={ref}>
      <ParallaxBackground sectionRef={ref} className="bg-[#F0EDE8]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-walnut mb-4">
            What Our <span className="text-accent-gold">Customers Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-charcoal-gray max-w-2xl mx-auto">
            Real feedback from homeowners across the Aiken, Augusta, and Edgefield area.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white rounded-lg shadow-xl p-4 sm:p-6 md:p-8 min-h-[280px]"
        >
          <ElfsightReviews />
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
