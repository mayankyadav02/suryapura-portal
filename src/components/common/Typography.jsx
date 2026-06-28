import { cn } from '../../utils/cn';

/* =========================
   Heading 1
========================= */

export function H1({
  children,
  className = '',
}) {
  return (
    <h1
      className={cn(
        `
        font-display
        text-4xl
        font-bold
        leading-tight
        tracking-tight

        sm:text-5xl
        lg:text-6xl

        text-ink-high
        dark:text-slate-50
        `,
        className
      )}
    >
      {children}
    </h1>
  );
}

/* =========================
   Heading 2
========================= */

export function H2({
  children,
  className = '',
}) {
  return (
    <h2
      className={cn(
        `
        font-display
        text-3xl
        font-bold
        leading-tight
        tracking-tight

        md:text-4xl
        lg:text-5xl

        text-ink-high
        dark:text-slate-50
        `,
        className
      )}
    >
      {children}
    </h2>
  );
}

/* =========================
   Heading 3
========================= */

export function H3({
  children,
  className = '',
}) {
  return (
    <h3
      className={cn(
        `
        text-xl
        font-semibold
        leading-snug

        md:text-2xl

        text-ink-high
        dark:text-slate-100
        `,
        className
      )}
    >
      {children}
    </h3>
  );
}

/* =========================
   Paragraph
========================= */

export function P({
  children,
  className = '',
}) {
  return (
    <p
      className={cn(
        `
        text-base
        leading-7

        text-ink-low
        dark:text-slate-300
        `,
        className
      )}
    >
      {children}
    </p>
  );
}

/* =========================
   Lead Paragraph
========================= */

export function Lead({
  children,
  className = '',
}) {
  return (
    <p
      className={cn(
        `
        text-lg
        leading-8
        font-medium

        md:text-xl

        text-ink-low
        dark:text-slate-300
        `,
        className
      )}
    >
      {children}
    </p>
  );
}

/* =========================
   Small Text
========================= */

export function Small({
  children,
  className = '',
}) {
  return (
    <small
      className={cn(
        `
        text-sm
        leading-6

        text-ink-low
        dark:text-slate-400
        `,
        className
      )}
    >
      {children}
    </small>
  );
}

/* =========================
   Caption
========================= */

export function Caption({
  children,
  className = '',
}) {
  return (
    <span
      className={cn(
        `
        text-xs
        uppercase
        tracking-[0.18em]
        font-semibold

        text-surya-600
        dark:text-surya-300
        `,
        className
      )}
    >
      {children}
    </span>
  );
}

export default {
  H1,
  H2,
  H3,
  P,
  Lead,
  Small,
  Caption,
};