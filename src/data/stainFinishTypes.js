export const FINISH_INTENSITY_MAP = {
  transparent: 0.35,
  semiTransparent: 0.6,
  solid: 0.85,
};

export const STAIN_FINISH_OPTIONS = [
  { id: 'transparent', label: 'Transparent' },
  { id: 'semiTransparent', label: 'Semi-Transparent' },
  { id: 'solid', label: 'Solid' },
];

export const DEFAULT_FINISH_TYPE = 'semiTransparent';

export function getFinishIntensity(finishType) {
  return FINISH_INTENSITY_MAP[finishType] ?? FINISH_INTENSITY_MAP.semiTransparent;
}

export function getFinishLabel(finishType) {
  return STAIN_FINISH_OPTIONS.find((option) => option.id === finishType)?.label ?? 'Semi-Transparent';
}
