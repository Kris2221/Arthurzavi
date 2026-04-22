import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  variant?: "full" | "compact" | "emblem";
};

const LOGO_SRC = "/publiclogo-zavi.png.png";

const BrandLogo = ({ className, variant = "full" }: BrandLogoProps) => {
  const sizeClass =
    variant === "compact"
      ? "h-12 w-auto sm:h-14"
      : variant === "emblem"
        ? "h-24 w-auto sm:h-28"
        : "h-40 w-auto md:h-48";

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl opacity-60" />
      <img
        src={LOGO_SRC}
        alt="Logo Zavi Treinador"
        className={cn(
          "relative object-contain drop-shadow-[0_16px_36px_rgba(0,0,0,0.38)]",
          sizeClass,
        )}
        loading="eager"
      />
    </div>
  );
};

export default BrandLogo;
