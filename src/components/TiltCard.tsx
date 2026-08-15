import { useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
}

export function TiltCard({
  children,
  className = '',
  intensity = 10,
  glare = true
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientY - rect.top - rect.height / 2) / intensity;
    const y = -(e.clientX - rect.left - rect.width / 2) / intensity;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg)`;
    cardRef.current.style.transition = 'transform 0.1s ease-out';

    // Glare effect
    if (glare && glareRef.current) {
      const glareX = (e.clientX - rect.left) / rect.width * 100;
      const glareY = (e.clientY - rect.top) / rect.height * 100;
      glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.15) 0%, transparent 60%)`;
      glareRef.current.style.opacity = '1';
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    cardRef.current.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';

    if (glare && glareRef.current) {
      glareRef.current.style.opacity = '0';
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
      style={{ transformStyle: 'preserve-3d' }}>

      {children}
      {glare &&
      <div data-ev-id="ev_4f2b74bebd"
      ref={glareRef}
      className="absolute inset-0 rounded-inherit pointer-events-none opacity-0 transition-opacity duration-300"
      style={{ borderRadius: 'inherit' }} />

      }
    </motion.div>);

}