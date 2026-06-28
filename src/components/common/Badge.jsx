import { cn } from '../../utils/cn';

export default function Badge({
  children,
  className = '',
}) {
  return (
    <span
      className={cn(
        `
        inline-flex items-center justify-center
        rounded-full
        border border-surya-200/80
        bg-surya-50/90
        px-4 py-1.5
        text-[11px] font-semibold uppercase
        tracking-[0.18em]
        text-surya-700
        shadow-sm
        backdrop-blur-sm
        transition-all duration-300

        dark:border-surya-700/60
        dark:bg-surya-900/30
        dark:text-surya-100
        `,
        className
      )}
    >
      {children}
    </span>
  );
}