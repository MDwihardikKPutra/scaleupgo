/**
 * Shared Framer Motion constants used across all section components.
 */

/** Standard spring-like ease — smooth, energetic entry */
export const EASE = [0.16, 1, 0.3, 1] as const;

/** Standard viewport config for scroll-triggered animations */
export const VIEWPORT = { once: true, margin: "-80px" } as const;
