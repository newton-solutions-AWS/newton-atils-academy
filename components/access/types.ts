// components/access/types.ts

/**
 * Defines all valid access levels / divisions in the platform.
 * This is the single source of truth for gating.
 */
export type RequiredAccess =
  | "default"
  | "vanguard"
  | "sentinel"
  | "phoenix";