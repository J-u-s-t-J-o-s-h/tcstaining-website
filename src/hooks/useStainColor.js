import { useContext } from 'react';
import { StainColorContext } from '../context/stainColorContext';

export function useStainColor() {
  const context = useContext(StainColorContext);
  if (!context) {
    throw new Error('useStainColor must be used within a StainColorProvider');
  }
  return context;
}
