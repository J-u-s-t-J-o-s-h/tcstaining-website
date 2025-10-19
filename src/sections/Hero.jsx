import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const Hero = () => {
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
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
          alt="Freshly stained wooden fence"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-walnut/70 via-dark-walnut/50 to-dark-walnut/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Protect & Beautify Your Fence
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-warm-beige font-semibold mb-8">
            Expert Staining You Can Trust
          </p>
          <p className="text-lg sm:text-xl text-warm-beige/90 mb-10 max-w-2xl mx-auto">
            Serving the Greater Augusta, GA area
          </p>
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent-gold text-white px-12 py-5 rounded-lg text-xl font-bold hover:bg-accent-gold/90 transition-all duration-300 shadow-xl hover:shadow-2xl min-w-[280px] touch-manipulation"
          >
            Get a Free Quote
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaChevronDown className="text-warm-beige text-3xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

