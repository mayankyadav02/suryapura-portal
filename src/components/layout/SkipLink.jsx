/**
 * ------------------------------------------------------------------
 * Skip Link
 * ------------------------------------------------------------------
 * Accessibility helper for keyboard users.
 * Allows users to skip navigation and jump directly
 * to the main content.
 * ------------------------------------------------------------------
 */

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="
        sr-only

        focus:not-sr-only
        focus:fixed
        focus:top-4
        focus:left-4
        focus:z-[9999]

        rounded-xl

        bg-surya-600
        px-5
        py-3

        text-sm
        font-semibold
        text-white

        shadow-xl

        transition-all
        duration-300

        focus:outline-none
        focus:ring-4
        focus:ring-terra-500

        dark:bg-surya-500
      "
    >
      मुख्य सामग्री पर जाएँ
    </a>
  );
}