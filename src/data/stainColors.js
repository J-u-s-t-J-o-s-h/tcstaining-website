import catalog from './olympicStainCatalog.json';

/**
 * Maps catalog entries to the shape consumed by StainColorVisualizer and
 * StainColorProvider. Only customer-facing fields are exposed here.
 */
function toVisualizerColor(entry) {
  return {
    id: entry.id,
    name: entry.name,
    hex: entry.swatchColor,
    description: entry.description,
  };
}

/** @type {import('./olympicStainCatalog.json')} */
export const olympicStainCatalog = catalog;

export const stainColors = catalog.colors.map(toVisualizerColor);

export const defaultStainColor = stainColors[0];
