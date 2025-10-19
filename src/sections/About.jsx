import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-warm-beige" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-dark-walnut mb-6">
              About <span className="text-accent-gold">TC Staining</span>
            </h2>
            <div className="space-y-4 text-charcoal-gray text-lg leading-relaxed">
              <p>
                At TC Staining, we believe every fence deserves to stand strong and look beautiful. 
                Your outdoor wood surfaces are an investment, and proper care ensures they last for years to come.
              </p>
              <p>
                Tyler brings years of hands-on experience restoring and protecting wooden fences across 
                the CSRA using premium stains and sealants. From weathered gray wood to fresh natural tones, 
                we transform outdoor spaces with attention to detail and quality craftsmanship.
              </p>
              <p>
                We're not just about making your fence look good—we're about protecting your investment 
                from the elements, preventing rot and decay, and enhancing your property's curb appeal. 
                Every project receives the same level of care and professionalism, whether it's a small 
                residential fence or a large deck restoration.
              </p>
              <p className="font-semibold text-dark-walnut">
                Let us help you protect and beautify your outdoor wood surfaces with expert staining services 
                you can trust.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?q=80&w=2070&auto=format&fit=crop"
                alt="Professional fence staining work"
                className="w-full h-[500px] object-cover"
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

