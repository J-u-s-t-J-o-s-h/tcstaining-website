import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: 'Fence Staining',
      bullets: [
        'Protects wood from weather and UV damage',
        'Premium stains for long-lasting protection',
        'Enhances natural wood beauty',
        'Custom color options',
      ],
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Deck Staining',
      bullets: [
        'Moisture and UV protection',
        'Variety of colors to match your style',
        'Durable finish for high-traffic areas',
        'Adds value to your home',
      ],
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Fence Restoration',
      bullets: [
        'Deep cleaning of weathered wood',
        'Repairs and spot fixes',
        'Refinishing for a like-new look',
        'Enhanced protection against rot and decay',
      ],
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-walnut mb-4">
            <span className="text-accent-gold">Services</span>
          </h2>
          <p className="text-xl text-charcoal-gray max-w-3xl mx-auto">
            Wood staining and restoration to protect and beautify your outdoor spaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              bullets={service.bullets}
              image={service.image}
              delay={index * 0.12}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

