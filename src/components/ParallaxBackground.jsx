/**
 * Parallax background layer: moves at a different rate than scroll for depth.
 * Pass the section ref and the same background class the section would use.
 */
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxBackground({ sectionRef, className = '' }) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [48, 0, -48]);

  return (
    <motion.div
      className={`absolute left-0 right-0 top-0 w-full min-h-[120%] -top-[10%] ${className}`}
      style={{ y }}
      aria-hidden
    />
  );
}
