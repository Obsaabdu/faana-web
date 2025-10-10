import { cn } from "@/lib/utils";

interface WaveDividerProps {
  className?: string;
  variant?: "top" | "bottom" | "both";
  color?: "primary" | "muted" | "background";
}

export function WaveDivider({
  className,
  variant = "bottom",
  color = "muted",
}: WaveDividerProps) {
  const getColorClass = () => {
    switch (color) {
      case "primary":
        return "fill-primary";
      case "background":
        return "fill-background";
      default:
        return "fill-muted";
    }
  };

  const getWavePath = () => {
    if (variant === "top") {
      return "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z";
    } else if (variant === "bottom") {
      return "M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,48C672,32,768,32,864,48C960,64,1056,96,1152,96C1248,96,1344,64,1392,48L1440,32L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z";
    } else {
      return "M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,80C960,96,1056,128,1152,128C1248,128,1344,96,1392,80L1440,64L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z";
    }
  };

  return (
    <div className={cn("relative w-full", className)}>
      <svg
        className={cn("w-full h-16", variant === "top" ? "rotate-180" : "")}
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Wave divider"
      >
        <title>Wave divider</title>
        <path d={getWavePath()} className={getColorClass()} />
      </svg>
    </div>
  );
}
