import { forwardRef } from "react";
import { cn } from "../../utils/cn";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-surya-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.98]";

const variants = {
  primary: cn(
    "bg-surya-600",
    "text-white",
    "shadow-md",
    "hover:bg-surya-700",
    "hover:shadow-lg",
    "dark:bg-surya-500",
    "dark:hover:bg-surya-400"
  ),

  secondary: cn(
    "border",
    "border-surya-200",
    "bg-white",
    "text-surya-700",
    "shadow-sm",
    "hover:bg-surya-50",
    "hover:border-surya-300",
    "hover:shadow-md",

    "dark:border-slate-700",
    "dark:bg-slate-800",
    "dark:text-white",
    "dark:hover:bg-slate-700",
    "dark:hover:border-surya-500"
  ),

  ghost: cn(
    "bg-transparent",
    "text-surya-700",
    "hover:bg-surya-50",

    "dark:text-surya-300",
    "dark:hover:bg-slate-800"
  ),

  outline: cn(
    "border",
    "border-surya-600",
    "bg-transparent",
    "text-surya-700",
    "hover:bg-surya-600",
    "hover:text-white",

    "dark:border-surya-400",
    "dark:text-surya-300",
    "dark:hover:bg-surya-500",
    "dark:hover:text-white"
  ),
};

const sizes = {
  sm: "px-4 py-2 text-sm",

  md: "px-5 py-3 text-sm",

  lg: "px-7 py-3.5 text-base",

  xl: "px-8 py-4 text-lg",
};

const Button = forwardRef(
  (
    {
      as: Component = "button",
      variant = "primary",
      size = "md",
      fullWidth = false,
      className = "",
      children,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        type={Component === "button" ? type : undefined}
        className={cn(
          baseStyles,
          variants[variant] || variants.primary,
          sizes[size] || sizes.md,
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Button.displayName = "Button";

export default Button;