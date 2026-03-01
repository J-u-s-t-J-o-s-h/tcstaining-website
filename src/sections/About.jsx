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
                I believe every fence deserves to stand strong and look beautiful. 
                Your outdoor wood is an investment. With the right care, it'll last for years.
              </p>
              <p>
                I've got years of hands-on experience restoring and protecting wooden fences with 
                premium stains and sealants. Whether it's weathered gray wood or fresh natural tones, 
                I get it done right.
              </p>
              <p>
                Making your fence look good matters, but so does protecting it from the elements, rot, and decay. 
                I treat every job the same, from a small residential fence to a big deck restoration.
              </p>
              <p className="font-semibold text-dark-walnut">
                I'd be glad to help protect and beautify your outdoor wood. Give me a call when you're ready.
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

