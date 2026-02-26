import { FaFacebook, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-walnut text-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img src="/logo.svg" alt="TC Staining" className="h-12 w-auto mb-4 [filter:brightness(0)_invert(1)_opacity(0.9)]" />
            <p className="text-warm-beige/80 mb-4">
              Professional fence and deck staining services.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-beige hover:text-accent-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-beige hover:text-accent-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-warm-beige/80 hover:text-accent-gold transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-warm-beige/80 hover:text-accent-gold transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-warm-beige/80 hover:text-accent-gold transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-warm-beige/80 hover:text-accent-gold transition-colors duration-300">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-warm-beige/80 hover:text-accent-gold transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-accent-gold" />
                <a
                  href="mailto:tyler@tcstaining.com"
                  className="text-warm-beige/80 hover:text-accent-gold transition-colors duration-300"
                >
                  tyler@tcstaining.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-accent-gold" />
                <span className="text-warm-beige/80">(803) 341-3133</span>
              </li>
              <li className="text-warm-beige/80">
                <strong>Service Area:</strong> Contact us for details
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-beige/20 mt-8 pt-8 text-center">
          <p className="text-warm-beige/60 text-sm">
            &copy; {currentYear} TC Staining. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

