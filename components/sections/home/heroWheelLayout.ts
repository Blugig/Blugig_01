/**
 * Hero wheel geometry the page needs before the wheel itself loads.
 * Kept out of HeroWheel.tsx so the hero can reserve the card band without
 * pulling in the wheel, motion, or Three.js.
 */

const C = { x: 891, y: 0 };
const R = 549.15;
const BOX = { t: -52, w: 380, h: 104, r: 22 };
const REST = [32, 16, 0, -16, -32];

export const VARIANTS = {
  wide: { w: 2500, h: 887, nx: 1249.333, ny: 443.833, k: 1 },
  desk: { w: 1280, h: 900, nx: 661.654, ny: 450.481, k: 0.8 },
  tablet: { w: 820, h: 1200, nx: 24.741, ny: 860.432, k: 0.85 },
  mobile: { w: 420, h: 1200, nx: -93.086, ny: 870.967, k: 0.8 },
} as const;

const rad = (deg: number) => (deg * Math.PI) / 180;
export const TABLET_DROP = 8;

function stackedZone(variant: "tablet" | "mobile") {
  const V = VARIANTS[variant];
  const top = V.ny + V.k * (C.y - R * Math.sin(rad(REST[0])) + BOX.t);
  const cqw = (((V.h - top) / V.w) * 100).toFixed(2);
  return variant === "tablet" ? `calc(${cqw}cqw - ${TABLET_DROP}px)` : `${cqw}cqw`;
}

export const STACKED_ZONE = { tablet: stackedZone("tablet"), mobile: stackedZone("mobile") } as const;
