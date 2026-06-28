import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes safely.
 *
 * Example:
 * cn(
 *   "px-4 py-2",
 *   isActive && "bg-surya-600",
 *   className
 * )
 */
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}

export default cn;