import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form data:', data);
    // In production, this would send to your backend/email service
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-warm-beige" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-walnut mb-4">
            Get Your <span className="text-accent-gold">Free Estimate</span>
          </h2>
          <p className="text-xl text-charcoal-gray max-w-3xl mx-auto">
            Ready to protect and beautify your fence or deck? Contact us today for a free, no-obligation quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-lg shadow-xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-charcoal-gray mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-charcoal-gray mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-charcoal-gray mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9\s\-\(\)]+$/,
                      message: 'Invalid phone number',
                    },
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none transition-all"
                  placeholder="(706) 555-0123"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-charcoal-gray mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  {...register('message', { required: 'Please describe your project' })}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your fence or deck staining project..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-accent-gold text-white py-4 rounded-lg font-semibold text-lg hover:bg-dark-walnut transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg"
                >
                  <FaCheckCircle />
                  <span className="font-semibold">Message sent successfully! We'll be in touch soon.</span>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-dark-walnut mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <FaEnvelope className="text-accent-gold text-xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-charcoal-gray">Email</p>
                    <a
                      href="mailto:tyler@tcstaining.com"
                      className="text-dark-walnut hover:text-accent-gold transition-colors"
                    >
                      tyler@tcstaining.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaPhone className="text-accent-gold text-xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-charcoal-gray">Phone</p>
                    <a
                      href="tel:+17065550123"
                      className="text-dark-walnut hover:text-accent-gold transition-colors"
                    >
                      (706) 555-0123
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="text-accent-gold text-xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-charcoal-gray">Service Area</p>
                    <p className="text-dark-walnut">Greater Augusta, GA / CSRA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white p-4 rounded-lg shadow-xl">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212270.5441984869!2d-82.20907695!3d33.4734978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f9cede636def8f%3A0x788ff6de5f9d01c9!2sAugusta%2C%20GA!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Augusta, GA location"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

