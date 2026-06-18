import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ParallaxBackground from '../components/ParallaxBackground';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-20 overflow-hidden section-depth" ref={ref}>
      <ParallaxBackground sectionRef={ref} className="bg-warm-beige" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark-walnut mb-6">
              About <span className="text-accent-gold">TC Staining</span>
            </h2>
            <div className="space-y-4 text-charcoal-gray text-lg leading-relaxed">
              <p>
                I run TC Staining as a hands-on local business, and I take pride in helping homeowners
                protect and beautify their outdoor wood.
              </p>
              <p>
                I serve the Aiken, Augusta, and Edgefield area with practical, detail-focused fence and
                deck staining that holds up through heat, rain, and everyday wear.
              </p>
              <p>
                Whether your wood needs a refresh or long-term protection, I focus on quality prep,
                clean application, and results that look right and last.
              </p>
              <p className="font-semibold text-dark-walnut">
                I would be glad to help with your next project. Reach out when you are ready for a quote.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=800&auto=format&fit=crop"
                alt="Professional fence staining work"
                width={800}
                height={500}
                className="w-full h-[500px] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-walnut/30 to-transparent"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-gold/20 rounded-lg -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

