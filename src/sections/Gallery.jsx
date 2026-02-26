import { motion, useMotionValue } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect, forwardRef } from 'react';
import Lightbox from '../components/Lightbox';

// --- Shared Utility for Random Rotation ---
function getRandomNumberInRange(min, max) {
  if (min >= max) {
    throw new Error("Min value should be less than max value");
  }
  return Math.random() * (max - min) + min;
}

const MotionImage = motion(
  forwardRef(function MotionImage(props, ref) {
    return <img ref={ref} {...props} />;
  })
);

// --- The Photo Component (Adapted from 21st.dev) ---
export const Photo = ({
  src,
  alt,
  className = "",
  direction = "right",
  width,
  height,
  onClick,
  ...props
}) => {
  const [rotation, setRotation] = useState(0);
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  useEffect(() => {
    const randomRotation =
      getRandomNumberInRange(1, 4) * (direction === "left" ? -1 : 1);
    setRotation(randomRotation);
  }, [direction]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  const resetMouse = () => {
    x.set(200);
    y.set(200);
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileTap={{ scale: 1.2, zIndex: 9999 }}
      whileHover={{
        scale: 1.1,
        rotateZ: 2 * (direction === "left" ? -1 : 1),
        zIndex: 9999,
      }}
      whileDrag={{
        scale: 1.1,
        zIndex: 9999,
      }}
      initial={{ rotate: 0 }}
      animate={{ rotate: rotation }}
      style={{
        width,
        height,
        perspective: 400,
        zIndex: 1,
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
        touchAction: "none",
      }}
      className={`relative mx-auto shrink-0 cursor-pointer active:cursor-grabbing ${className}`}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      draggable={false}
      tabIndex={0}
      onClick={onClick}
    >
      <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] border-4 border-charcoal-gray">
        <MotionImage
          className="rounded-[20px] object-cover w-full h-full"
          src={src}
          alt={alt}
          {...props}
          draggable={false}
        />
      </div>
    </motion.div>
  );
};

const Gallery = ({ animationDelay = 0.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate the full list for the lightbox (23 images)
  const fullGalleryImages = Array.from({ length: 23 }, (_, i) => {
    const n = i + 1;
    return {
      src: `/images/gallery/${n}.png`,
      srcWebp: `/images/gallery/${n}.webp`,
      alt: 'Fence and deck staining work',
      label: '',
    };
  });

  // Highlighted Top 5 for the interactive stack layout
  const topPhotos = [
    {
      id: 1, order: 0, x: "-240px", y: "15px", zIndex: 50, direction: "left", index: 0,
      src: fullGalleryImages[0].srcWebp,
    },
    {
      id: 2, order: 1, x: "-120px", y: "32px", zIndex: 40, direction: "left", index: 1,
      src: fullGalleryImages[1].srcWebp,
    },
    {
      id: 3, order: 2, x: "0px", y: "8px", zIndex: 30, direction: "right", index: 2,
      src: fullGalleryImages[2].srcWebp,
    },
    {
      id: 4, order: 3, x: "120px", y: "22px", zIndex: 20, direction: "right", index: 3,
      src: fullGalleryImages[3].srcWebp,
    },
    {
      id: 5, order: 4, x: "240px", y: "44px", zIndex: 10, direction: "left", index: 4,
      src: fullGalleryImages[4].srcWebp,
    },
  ];

  useEffect(() => {
    if (!isInView) return;

    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, animationDelay * 1000);

    const animationTimer = setTimeout(() => {
      setIsLoaded(true);
    }, (animationDelay + 0.4) * 1000);

    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(animationTimer);
    };
  }, [animationDelay, isInView]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const photoVariants = {
    hidden: () => ({
      x: 0, y: 0, rotate: 0, scale: 1, opacity: 0
    }),
    visible: (custom) => ({
      x: custom.x,
      y: custom.y,
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
        mass: 1,
        delay: custom.order * 0.15,
      },
    }),
  };

  const handleNext = () => setLightboxIndex((prev) => (prev + 1) % fullGalleryImages.length);
  const handlePrev = () => setLightboxIndex((prev) => (prev - 1 + fullGalleryImages.length) % fullGalleryImages.length);

  return (
    <section id="gallery" className="relative py-28 bg-charcoal-gray overflow-hidden" ref={ref}>
      {/* Background Subtle Grid Pattern from 21st.dev Component */}
      <div className="absolute inset-0 top-[100px] z-0 h-[500px] w-full bg-transparent bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <p className="lg:text-md mb-2 text-center text-sm font-light uppercase tracking-widest text-warm-beige/60">
            A Journey Through Visual Stories
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-warm-beige lg:pb-6">
            Our <span className="text-accent-gold">Work</span>
          </h2>
        </motion.div>

        {/* Interactive Photo Stack */}
        <div className="relative h-[300px] sm:h-[400px] w-full flex items-center justify-center mt-8 mb-16">
          <motion.div
            className="flex w-full max-w-7xl justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.div
              className="relative flex w-full justify-center"
              variants={containerVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
            >
              <div className="relative h-[200px] w-[200px] sm:h-[260px] sm:w-[260px]">
                {[...topPhotos].reverse().map((photo) => (
                  <motion.div
                    key={photo.id}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:left-0 sm:top-0 sm:translate-x-0 sm:translate-y-0"
                    style={{ zIndex: photo.zIndex }}
                    variants={photoVariants}
                    custom={{ x: photo.x, y: photo.y, order: photo.order }}
                  >
                    <Photo
                      width={window.innerWidth < 640 ? 200 : 260}
                      height={window.innerWidth < 640 ? 200 : 260}
                      src={photo.src}
                      alt={`Gallery Project ${photo.id}`}
                      direction={photo.direction}
                      onClick={() => setLightboxIndex(photo.index)}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Action Button */}
        <motion.div layout className="flex justify-center mt-16 z-20 relative">
          <motion.button
            onClick={() => setLightboxIndex(0)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent-gold text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-accent-gold/90 transition-all duration-300 shadow-[0_4px_14px_0_rgba(212,175,55,0.39)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.23)] hover:bg-[rgba(212,175,55,0.9)] "
          >
            View All {fullGalleryImages.length} Projects
          </motion.button>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={fullGalleryImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
};

export default Gallery;

