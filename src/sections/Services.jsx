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
      description: 'Professional fence staining services to protect your wood from weather damage while enhancing its natural beauty. We use premium stains that penetrate deep into the wood for long-lasting protection.',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Deck Staining',
      description: 'Transform your deck with expert staining that protects against moisture, UV rays, and everyday wear. Choose from a variety of colors to complement your outdoor space and add lasting value to your home.',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Fence Restoration',
      description: 'Breathe new life into weathered and faded fences. Our restoration process includes thorough cleaning, repairs, and refinishing to restore your fence to its former glory with enhanced protection.',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-walnut mb-4">
            Our <span className="text-accent-gold">Services</span>
          </h2>
          <p className="text-xl text-charcoal-gray max-w-3xl mx-auto">
            Professional wood staining and restoration services tailored to protect and beautify your outdoor spaces.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

