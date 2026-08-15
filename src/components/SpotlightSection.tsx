import { useRef, ReactNode } from 'react';

interface SpotlightSectionProps {
  children: ReactNode;
  className?: string;
  spotlightSize?: number;
  spotlightOpacity?: number;
}

export function SpotlightSection({
  children,
  className = '',
  spotlightSize = 600,
  spotlightOpacity = 0.06
}: SpotlightSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current || !spotlightRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    spotlightRef.current.style.background = `radial-gradient(${spotlightSize}px circle at ${x}px ${y}px, rgba(255,255,255,${spotlightOpacity}), transparent 80%)`;
    spotlightRef.current.style.opacity = '1';
  };

  const handleMouseLeave = () => {
    if (!spotlightRef.current) return;
    spotlightRef.current.style.opacity = '0';
  };

  return (
    <section data-ev-id="ev_40464f463f"
    ref={sectionRef}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
    className={`relative overflow-hidden ${className}`}>

      <div data-ev-id="ev_df3a2c7e5f"
      ref={spotlightRef}
      className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500"
      style={{ zIndex: 1 }} />

      <div data-ev-id="ev_a6b4246d91" className="relative" style={{ zIndex: 2 }}>
        {children}
      </div>
    </section>);

}