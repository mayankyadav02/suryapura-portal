import { cn } from '../../utils/cn';

/**
 * -----------------------------------------------------------------------------
 * Container Component
 * -----------------------------------------------------------------------------
 * A reusable responsive layout wrapper used across the Suryapura Portal.
 *
 * Features:
 * • Mobile-first responsive spacing
 * • Center aligned content
 * • Maximum readable width
 * • Supports semantic HTML elements via "as" prop
 *
 * Example:
 * <Container>
 *    ...
 * </Container>
 *
 * <Container as="section">
 *    ...
 * </Container>
 * -----------------------------------------------------------------------------
 */

export default function Container({
  children,
  className = '',
  as: Component = 'div',
}) {
  return (
    <Component
      className={cn(
        `
        mx-auto
        w-full
        max-w-7xl
        px-4
        sm:px-6
        lg:px-8
        xl:px-10
        3xl:max-w-[1536px]
        `,
        className
      )}
    >
      {children}
    </Component>
  );
}