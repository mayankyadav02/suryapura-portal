import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCounter({ value, suffix = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const obj = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: value,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          once: true,
        },
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent =
              Math.floor(obj.val).toLocaleString('en-IN') + suffix;
          }
        },
      });
    });

    return () => ctx.revert();
  }, [value, suffix]);

  return (
    <span ref={ref} className="font-bold">
      0{suffix}
    </span>
  );
}