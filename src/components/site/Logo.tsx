

type LogoProps = {
  className?: string;
  animated?: boolean;
};

/** Full NEETika logo: lotus + caduceus mark with the wordmark. */
export function LogoImage({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img
      src= "/images/neetkalogo.png"
      alt="NEETika — from the doctors to the future doctors"
      className={className}
      width={480}
      height={280}
    />
  );
}

/** Mark-only usage still renders the official logo artwork. */
export function LogoMark({ className = "h-10 w-auto", animated = false }: LogoProps) {
  return <LogoImage className={`${className} ${animated ? "animate-float" : ""}`} />;
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
  return <LogoImage className={`h-11 w-auto ${className}`} />;
}
