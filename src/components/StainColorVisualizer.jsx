import { motion, AnimatePresence } from 'framer-motion';
import { useCallback, useRef, useState } from 'react';
import { FaArrowsAltH } from 'react-icons/fa';
import { stainColors } from '../data/stainColors';
import { useStainColor } from '../hooks/useStainColor';
import { scrollToSection } from '../utils/scrollToSection';

const SCENES = [
  { id: 'fence', label: 'Privacy Fence', src: '/images/stains/fence.webp' },
  { id: 'deck', label: 'Deck Boards', src: '/images/stains/deck.webp' },
  { id: 'planks', label: 'Wood Planks', src: '/images/stains/planks.webp' },
];

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function ScenePreview({ scene, color, intensity }) {
  const containerRef = useRef(null);
  const [pos, setPos] = useState(50);

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(clamp(pct, 0, 100));
  }, []);

  const handlePointerDown = useCallback(
    (e) => {
      // Drive the drag from window listeners so touch moves outside the
      // element (or fast flicks) don't drop the gesture.
      updateFromClientX(e.clientX);

      const handleMove = (ev) => updateFromClientX(ev.clientX);
      const handleUp = () => {
        window.removeEventListener('pointermove', handleMove);
        window.removeEventListener('pointerup', handleUp);
        window.removeEventListener('pointercancel', handleUp);
      };

      window.addEventListener('pointermove', handleMove, { passive: true });
      window.addEventListener('pointerup', handleUp);
      window.addEventListener('pointercancel', handleUp);
    },
    [updateFromClientX]
  );

  return (
    <div className="space-y-3">
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        className="relative w-full aspect-[4/3] sm:aspect-[3/2] overflow-hidden rounded-2xl shadow-2xl select-none cursor-ew-resize"
        style={{ touchAction: 'none' }}
        role="slider"
        aria-label="Drag to compare original and stained wood"
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {/* Original wood (before) */}
        <img
          src={scene.src}
          alt={`${scene.label} before staining`}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
          loading="lazy"
          decoding="async"
        />

        {/* Stained (after) — clipped to the right of the divider */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 0 0 ${pos}%)`, isolation: 'isolate' }}
        >
          <img
            src={scene.src}
            alt={`${scene.label} stained ${color.name}`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'grayscale(1) brightness(1.22) contrast(0.98)' }}
            draggable={false}
            loading="lazy"
            decoding="async"
          />
          <motion.div
            className="absolute inset-0"
            style={{ mixBlendMode: 'multiply' }}
            animate={{ backgroundColor: color.hex, opacity: intensity }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
          {/* Subtle sheen to keep the wood looking real */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(120deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 35%, rgba(0,0,0,0.10) 100%)',
            }}
          />
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 text-xs font-semibold tracking-wide uppercase bg-black/45 text-white px-2.5 py-1 rounded-full backdrop-blur-sm">
          Before
        </span>
        <span className="absolute top-3 right-3 text-xs font-semibold tracking-wide uppercase bg-black/55 text-white px-2.5 py-1 rounded-full backdrop-blur-sm">
          After
        </span>

        {/* Divider + grip */}
        <div className="absolute top-0 bottom-0 pointer-events-none" style={{ left: `${pos}%` }}>
          <div className="absolute top-0 bottom-0 -translate-x-1/2 w-0.5 bg-white/90 shadow-[0_0_8px_rgba(0,0,0,0.4)]" />
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
            <FaArrowsAltH className="text-dark-walnut" />
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-charcoal-gray/80">
        Drag the slider to compare bare wood with <span className="font-semibold text-dark-walnut">{color.name}</span>.
      </p>
    </div>
  );
}

function SwatchButton({ color, isSelected, onSelect, index }) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(color)}
      aria-label={`Select ${color.name} stain`}
      aria-pressed={isSelected}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileTap={{ scale: 0.92 }}
      className={`relative flex-shrink-0 touch-manipulation rounded-full transition-shadow duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 ${
        isSelected ? 'ring-2 ring-accent-gold ring-offset-2 shadow-lg' : 'ring-1 ring-dark-walnut/15'
      }`}
      style={{ width: '3.25rem', height: '3.25rem', backgroundColor: color.hex }}
    >
      {isSelected && (
        <motion.span
          layoutId="swatch-indicator"
          className="absolute -inset-1 rounded-full border-2 border-accent-gold"
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      )}
    </motion.button>
  );
}

export default function StainColorVisualizer({ compact = false }) {
  const { selectedColor, setSelectedColor } = useStainColor();
  const [scene, setScene] = useState(SCENES[0]);
  const [intensity, setIntensity] = useState(0.85);

  if (compact) {
    return (
      <div className="space-y-3">
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory scrollbar-hide">
          {stainColors.map((color, i) => (
            <div key={color.id} className="snap-center">
              <SwatchButton
                color={color}
                isSelected={selectedColor.id === color.id}
                onSelect={setSelectedColor}
                index={i}
              />
            </div>
          ))}
        </div>
        <p className="text-sm text-charcoal-gray">
          Selected: <span className="font-semibold text-dark-walnut">{selectedColor.name}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Preview */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="order-1"
      >
        <ScenePreview scene={scene} color={selectedColor} intensity={intensity} />

        {/* Scene selector */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          {SCENES.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setScene(s)}
              className={`group relative overflow-hidden rounded-lg aspect-[3/2] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold transition-all duration-300 ${
                scene.id === s.id ? 'ring-2 ring-accent-gold shadow-md' : 'ring-1 ring-dark-walnut/10 opacity-80 hover:opacity-100'
              }`}
              aria-label={`Preview on ${s.label}`}
              aria-pressed={scene.id === s.id}
            >
              <img src={s.src} alt={s.label} className="w-full h-full object-cover" loading="lazy" decoding="async" />
              <span className="absolute bottom-0 inset-x-0 text-[11px] font-medium text-white bg-black/45 py-1 text-center">
                {s.label}
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedColor.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="mt-5 text-center lg:text-left"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-dark-walnut">{selectedColor.name}</h3>
            <p className="text-charcoal-gray mt-1 text-base sm:text-lg">{selectedColor.description}</p>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Swatches & controls */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="order-2"
      >
        <p className="text-charcoal-gray mb-4 text-center lg:text-left">
          Tap a swatch to preview the stain on real wood.
        </p>

        {/* Mobile: horizontal scroll */}
        <div className="flex gap-3 overflow-x-auto pb-3 -mx-1 px-1 snap-x snap-mandatory scrollbar-hide sm:hidden">
          {stainColors.map((color, i) => (
            <div key={color.id} className="snap-center flex flex-col items-center gap-2">
              <SwatchButton
                color={color}
                isSelected={selectedColor.id === color.id}
                onSelect={setSelectedColor}
                index={i}
              />
              <span
                className={`text-xs font-medium whitespace-nowrap ${
                  selectedColor.id === color.id ? 'text-dark-walnut' : 'text-charcoal-gray/70'
                }`}
              >
                {color.name}
              </span>
            </div>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden sm:grid grid-cols-3 gap-4">
          {stainColors.map((color) => (
            <button
              key={color.id}
              type="button"
              onClick={() => setSelectedColor(color)}
              className={`group flex items-center gap-3 p-3 rounded-xl transition-all duration-300 touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold ${
                selectedColor.id === color.id
                  ? 'bg-white shadow-lg ring-1 ring-accent-gold/30'
                  : 'bg-white/60 hover:bg-white hover:shadow-md'
              }`}
            >
              <span
                className="flex-shrink-0 w-10 h-10 rounded-full ring-1 ring-dark-walnut/10"
                style={{ backgroundColor: color.hex }}
              />
              <span
                className={`text-sm font-medium text-left ${
                  selectedColor.id === color.id ? 'text-dark-walnut' : 'text-charcoal-gray'
                }`}
              >
                {color.name}
              </span>
            </button>
          ))}
        </div>

        {/* Intensity */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="stain-intensity" className="text-sm font-semibold text-charcoal-gray">
              Stain Intensity
            </label>
            <span className="text-sm text-charcoal-gray/70">{Math.round(intensity * 100)}%</span>
          </div>
          <input
            id="stain-intensity"
            type="range"
            min="0.35"
            max="1"
            step="0.01"
            value={intensity}
            onChange={(e) => setIntensity(parseFloat(e.target.value))}
            className="w-full accent-accent-gold touch-manipulation"
          />
          <p className="text-xs text-charcoal-gray/60 mt-1">
            Lighter for a translucent, semi-transparent finish; higher for a rich, solid coat.
          </p>
        </div>

        <motion.button
          type="button"
          onClick={() => scrollToSection('#contact')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 w-full bg-accent-gold text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-dark-walnut transition-colors duration-300 shadow-lg touch-manipulation"
        >
          Love this color? Get a Free Quote
        </motion.button>
      </motion.div>
    </div>
  );
}
