export function getRank(xp: number) {
  if (xp >= 500) return "Vanguard Elite";
  if (xp >= 300) return "Specialist";
  if (xp >= 150) return "Operator";
  if (xp >= 50) return "Initiate";
  return "Recruit";
}