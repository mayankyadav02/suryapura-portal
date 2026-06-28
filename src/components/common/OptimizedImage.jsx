import { useState } from 'react';
import { cn } from '../../utils/cn';

export default function OptimizedImage({
  src,
  alt,
  className = '',
  priority = false,
  width,
  height,
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={cn('relative overflow-hidden rounded-2xl bg-surya-100 dark:bg-slate-800', className)}>
      {!loaded && !error && (
        <div className="absolute inset-0 animate-pulse bg-surya-200 dark:bg-slate-700" />
      )}

      {error ? (
        <div className="flex h-full min-h-[180px] items-center justify-center bg-surya-50 text-center text-sm font-medium text-ink-low dark:bg-slate-900 dark:text-slate-400">
          Image not available
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={cn(
            'h-full w-full object-cover transition-all duration-700',
            loaded ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
          )}
        />
      )}
    </div>
  );
}