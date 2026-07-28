type LogoProps = {
  className?: string;
  animated?: boolean;
};

/**
 * NEETika mark: a lotus cradling a medical rod-and-serpent motif.
 * Recreated as vector art so it stays crisp at any size.
 */
export function LogoMark({ className = "h-10 w-10", animated = false }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="NEETika emblem"
      className={className}
      fill="none"
    >
      {/* lotus petals */}
      <path
        d="M32 46c-9 0-16-5-19-11 6-3 13-2 17 2"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="2.5"
        strokeLinecap="round"
        className={animated ? "animate-draw" : undefined}
      />
      <path
        d="M32 46c9 0 16-5 19-11-6-3-13-2-17 2"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="2.5"
        strokeLinecap="round"
        className={animated ? "animate-draw" : undefined}
      />
      <path
        d="M22 41c-3-6-2-13 2-17 4 3 6 9 5 14"
        className="text-rose"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M42 41c3-6 2-13-2-17-4 3-6 9-5 14"
        className="text-rose"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* rod */}
      <path
        d="M32 8v38"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* serpent */}
      <path
        d="M32 14c5 1 5 6 0 7s-5 6 0 7 5 6 0 7"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        className={animated ? "animate-draw" : undefined}
      />
      <circle cx="32" cy="8" r="2.6" fill="currentColor" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display leading-none tracking-tight ${className}`}>
      <span className="font-extrabold text-brand">NEET</span>
      <span className="font-semibold italic text-rose">ika</span>
    </span>
  );
}

export function LogoLockup({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark className="h-8 w-8 text-brand" />
      <Wordmark className="text-2xl" />
    </span>
  );
}
