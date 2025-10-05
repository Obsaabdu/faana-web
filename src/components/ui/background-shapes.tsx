import { cn } from "@/lib/utils";

interface BackgroundShapesProps {
  className?: string;
  variant?: "legal" | "corporate" | "justice" | "team";
}

export function BackgroundShapes({
  className,
  variant = "legal",
}: BackgroundShapesProps) {
  const getShapes = () => {
    switch (variant) {
      case "legal":
        return (
          <>
            {/* Scale of Justice */}
            <div className="absolute top-20 right-10 w-32 h-32 opacity-10">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-primary"
                aria-label="Scale of justice">
                <title>Scale of justice</title>
                <path
                  d="M50 10 L30 40 L70 40 Z"
                  fill="currentColor"
                  className="drop-shadow-lg"
                />
                <circle
                  cx="30"
                  cy="45"
                  r="8"
                  fill="currentColor"
                />
                <circle
                  cx="70"
                  cy="45"
                  r="8"
                  fill="currentColor"
                />
                <rect
                  x="45"
                  y="50"
                  width="10"
                  height="40"
                  fill="currentColor"
                />
              </svg>
            </div>
            {/* Legal Documents */}
            <div className="absolute bottom-20 left-10 w-24 h-32 opacity-5">
              <div className="relative">
                <div className="w-full h-24 bg-primary/20 rounded-sm shadow-lg transform rotate-12"></div>
                <div className="absolute top-2 left-2 w-full h-20 bg-primary/10 rounded-sm transform rotate-6"></div>
                <div className="absolute top-4 left-4 w-full h-16 bg-primary/5 rounded-sm"></div>
              </div>
            </div>
          </>
        );
      case "corporate":
        return (
          <>
            {/* Building */}
            <div className="absolute top-16 right-16 w-40 h-40 opacity-10">
              <div className="relative">
                <div className="w-8 h-32 bg-primary/30 rounded-sm shadow-lg"></div>
                <div className="absolute left-8 w-8 h-28 bg-primary/20 rounded-sm shadow-lg"></div>
                <div className="absolute left-16 w-8 h-36 bg-primary/40 rounded-sm shadow-lg"></div>
                <div className="absolute left-24 w-8 h-24 bg-primary/15 rounded-sm shadow-lg"></div>
              </div>
            </div>
            {/* Growth Chart */}
            <div className="absolute bottom-16 left-16 w-32 h-24 opacity-8">
              <svg
                viewBox="0 0 100 60"
                className="w-full h-full text-primary"
                aria-label="Growth chart">
                <title>Growth chart</title>
                <polyline
                  points="10,50 30,40 50,30 70,20 90,10"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  className="drop-shadow-lg"
                />
                <circle
                  cx="10"
                  cy="50"
                  r="3"
                  fill="currentColor"
                />
                <circle
                  cx="30"
                  cy="40"
                  r="3"
                  fill="currentColor"
                />
                <circle
                  cx="50"
                  cy="30"
                  r="3"
                  fill="currentColor"
                />
                <circle
                  cx="70"
                  cy="20"
                  r="3"
                  fill="currentColor"
                />
                <circle
                  cx="90"
                  cy="10"
                  r="3"
                  fill="currentColor"
                />
              </svg>
            </div>
          </>
        );
      case "justice":
        return (
          <>
            {/* Gavel */}
            <div className="absolute top-24 right-20 w-28 h-28 opacity-8">
              <svg
                viewBox="0 0 80 80"
                className="w-full h-full text-primary"
                aria-label="Gavel">
                <title>Gavel</title>
                <rect
                  x="35"
                  y="20"
                  width="10"
                  height="40"
                  fill="currentColor"
                  className="drop-shadow-lg"
                />
                <rect
                  x="20"
                  y="15"
                  width="40"
                  height="8"
                  fill="currentColor"
                  className="drop-shadow-lg"
                />
                <circle
                  cx="40"
                  cy="70"
                  r="8"
                  fill="currentColor"
                  className="drop-shadow-lg"
                />
              </svg>
            </div>
            {/* Scales */}
            <div className="absolute bottom-24 left-20 w-32 h-32 opacity-6">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-primary"
                aria-label="Scales of justice">
                <title>Scales of justice</title>
                <path
                  d="M50 10 L30 40 L70 40 Z"
                  fill="currentColor"
                  className="drop-shadow-lg"
                />
                <circle
                  cx="30"
                  cy="45"
                  r="6"
                  fill="currentColor"
                />
                <circle
                  cx="70"
                  cy="45"
                  r="6"
                  fill="currentColor"
                />
                <rect
                  x="47"
                  y="50"
                  width="6"
                  height="30"
                  fill="currentColor"
                />
              </svg>
            </div>
          </>
        );
      case "team":
        return (
          <>
            {/* People */}
            <div className="absolute top-20 right-12 w-36 h-36 opacity-8">
              <div className="flex space-x-4">
                <div className="w-8 h-24 bg-primary/20 rounded-full shadow-lg"></div>
                <div className="w-8 h-28 bg-primary/30 rounded-full shadow-lg"></div>
                <div className="w-8 h-20 bg-primary/15 rounded-full shadow-lg"></div>
              </div>
            </div>
            {/* Handshake */}
            <div className="absolute bottom-20 left-12 w-28 h-28 opacity-6">
              <svg
                viewBox="0 0 80 80"
                className="w-full h-full text-primary"
                aria-label="Handshake">
                <title>Handshake</title>
                <path
                  d="M20 40 Q30 30 40 40 Q50 30 60 40"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  className="drop-shadow-lg"
                />
                <circle
                  cx="20"
                  cy="40"
                  r="6"
                  fill="currentColor"
                />
                <circle
                  cx="60"
                  cy="40"
                  r="6"
                  fill="currentColor"
                />
              </svg>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}>
      {getShapes()}
    </div>
  );
}
