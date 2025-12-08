// app/components/Crest.tsx
import Image from "next/image";

type CrestProps = {
  size?: "sm" | "lg";
};

export default function Crest({ size = "sm" }: CrestProps) {
  const dimension = size === "sm" ? 40 : 80;

  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-sky-500/10 blur-xl" />
      <Image
        src="/icons/newton-crest.png" // <- put your latest primary crest here
        alt="Newton Solutions Crest"
        width={dimension}
        height={dimension}
        className="relative drop-shadow-[0_0_18px_rgba(56,189,248,0.55)]"
      />
    </div>
  );
}