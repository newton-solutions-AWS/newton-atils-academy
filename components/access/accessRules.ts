import { User } from "@/components/context/UserProvider";

/**
 * 🔐 CENTRAL ACCESS RULES
 * This file is the single source of truth for all division access.
 * Every gate, paywall, lesson, and badge must use this.
 */

export function canAccessSentinel(user: User | null): boolean {
  if (!user) return false;

  // 🟣 Founder override – absolute authority
  if (user.role === "founder") return true;

  // 🟨 Phoenix (veterans get Sentinel automatically)
  if (user.isVeteran) return true;

  // 🔵 Rank-based unlock (Vanguard Elite and above)
  if (user.stats.rank >= 3) return true;

  // ❌ Otherwise locked (paywall applies)
  return false;
}