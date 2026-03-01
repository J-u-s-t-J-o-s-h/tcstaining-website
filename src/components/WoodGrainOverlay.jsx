/**
 * Reusable wood-grain SVG overlay for section contrast and texture.
 * Use as first child inside a relative container; pass opacity via className.
 * Scales with cover so the texture behaves well across all screen sizes.
 */
export default function WoodGrainOverlay({ className = '' }) {
  return (
    <div
      className={`wood-grain-overlay pointer-events-none overflow-hidden ${className}`}
      aria-hidden
    />
  );
}
