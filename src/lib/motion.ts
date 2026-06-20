/** Strong ease-out for entrances and press feedback */
export const EASE_ENTER = "cubic-bezier(0.22, 1, 0.36, 1)";

/** Strong ease-in-out for on-screen movement (tabs, pills, panels) */
export const EASE_MOVE = "cubic-bezier(0.25, 1, 0.5, 1)";

/** iOS-like drawer curve */
export const EASE_DRAWER = "cubic-bezier(0.32, 0.72, 0, 1)";

type DistanceDurationOptions = {
  min?: number;
  max?: number;
  perPx?: number;
};

/** Larger travel distances get longer durations so motion feels weighted. */
export function durationForDistance(
  distance: number,
  { min = 160, max = 340, perPx = 0.4 }: DistanceDurationOptions = {},
) {
  return Math.round(Math.min(max, Math.max(min, min + distance * perPx)));
}
