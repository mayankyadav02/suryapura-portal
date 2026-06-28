import { cn } from "../../utils/cn";

export default function Card({
  children,
  className = "",
  hover = true,
  glass = false,
}) {
  return (
    <div
      className={cn(
        // Base
        "relative overflow-hidden rounded-3xl border transition-all duration-300 ease-out",

        // Default Surface
        glass
          ? [
              "border-white/20",
              "bg-white/70",
              "backdrop-blur-xl",
              "dark:border-white/10",
              "dark:bg-slate-900/60",
            ]
          : [
              "border-surface-muted",
              "bg-white",
              "shadow-sm",
              "dark:border-slate-700",
              "dark:bg-slate-900",
            ],

        // Hover Effects
        hover &&
          [
            "hover:-translate-y-1",
            "hover:shadow-xl",
            "hover:border-surya-200",
            "dark:hover:border-surya-700",
          ],

        className
      )}
    >
      {/* Decorative Gradient */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-surya-300/60
          to-transparent
          dark:via-surya-500/40
        "
      />

      {children}
    </div>
  );
}