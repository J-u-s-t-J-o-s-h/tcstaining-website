import { useState } from 'react';
import { defaultStainColor } from '../data/stainColors';
import { DEFAULT_FINISH_TYPE } from '../data/stainFinishTypes';
import { StainColorContext } from './stainColorContext';

export function StainColorProvider({ children }) {
  const [selectedColor, setSelectedColor] = useState(defaultStainColor);
  const [selectedFinish, setSelectedFinish] = useState(DEFAULT_FINISH_TYPE);

  return (
    <StainColorContext.Provider
      value={{ selectedColor, setSelectedColor, selectedFinish, setSelectedFinish }}
    >
      {children}
    </StainColorContext.Provider>
  );
}
