import { useState } from 'react';
import { defaultStainColor } from '../data/stainColors';
import { StainColorContext } from './stainColorContext';

export function StainColorProvider({ children }) {
  const [selectedColor, setSelectedColor] = useState(defaultStainColor);

  return (
    <StainColorContext.Provider value={{ selectedColor, setSelectedColor }}>
      {children}
    </StainColorContext.Provider>
  );
}
