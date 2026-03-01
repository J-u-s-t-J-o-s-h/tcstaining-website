/**
 * Fancy craftsman section divider with scroll-triggered animation.
 * Double lines + ornate center medallion; lines draw in and center pops when in view.
 */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SectionDivider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="w-full flex items-center justify-center py-3 overflow-hidden" aria-hidden>
      {/* Left: double line, draws in from left */}
      <motion.div
        className="flex-1 flex flex-col gap-1 min-w-0 origin-left"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="h-px w-full bg-dark-walnut/40" />
        <div className="h-px w-full bg-dark-walnut/25 max-w-[95%]" />
      </motion.div>

      {/* Center: logo, pops in */}
      <motion.div
        className="flex-shrink-0 mx-4 flex items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.45, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative flex items-center justify-center">
          {/* Soft glow behind logo */}
          <div
            className="absolute inset-0 rounded-full bg-accent-gold/20 blur-xl scale-150"
            aria-hidden
          />
          <img
            src="/logo.svg"
            alt=""
            className="relative w-16 h-16 object-contain"
            aria-hidden
          />
        </div>
      </motion.div>

      {/* Right: double line, draws in from right */}
      <motion.div
        className="flex-1 flex flex-col gap-1 min-w-0 origin-right"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="h-px w-full bg-dark-walnut/40" />
        <div className="h-px w-full bg-dark-walnut/25 max-w-[95%] ml-auto" />
      </motion.div>
    </div>
  );
}
