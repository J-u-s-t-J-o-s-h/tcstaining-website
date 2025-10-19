import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, image, delay }) => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-walnut/60 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-dark-walnut mb-3">{title}</h3>
        <p className="text-charcoal-gray mb-6 leading-relaxed">{description}</p>
        <button
          onClick={scrollToContact}
          className="w-full bg-accent-gold text-white py-3 rounded-lg font-semibold hover:bg-dark-walnut transition-colors duration-300"
        >
          Get Quote
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;

