import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface EditorialRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'fade';
  blur?: boolean;
}

export function EditorialReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  blur = true
}: EditorialRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getInitialState = () => {
    const base = { opacity: 0, filter: blur ? 'blur(8px)' : 'blur(0px)' };
    switch (direction) {
      case 'up':return { ...base, y: 60 };
      case 'left':return { ...base, x: 60 };
      case 'right':return { ...base, x: -60 };
      case 'fade':return base;
      default:return { ...base, y: 60 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialState()}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        x: 0,
        filter: 'blur(0px)'
      } : getInitialState()}
      transition={{
        duration: 1,
        delay,
        ease: [0.25, 0.1, 0.25, 1] // Custom cubic-bezier for editorial feel
      }}
      className={className}>

      {children}
    </motion.div>);

}

// Staggered editorial container for multiple elements
interface EditorialStaggerProps {
  children: ReactNode;
  className?: string;
  baseDelay?: number;
  stagger?: number;
}

export function EditorialStagger({
  children,
  className = '',
  baseDelay = 0,
  stagger = 0.15
}: EditorialStaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: baseDelay,
            staggerChildren: stagger
          }
        }
      }}
      className={className}>

      {children}
    </motion.div>);

}

export function EditorialStaggerItem({
  children,
  className = '',
  blur = true




}: {children: ReactNode;className?: string;blur?: boolean;}) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
          filter: blur ? 'blur(6px)' : 'blur(0px)'
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1]
          }
        }
      }}
      className={className}>

      {children}
    </motion.div>);

}

// For large hero text with character-by-character reveal
export function EditorialTextReveal({
  text,
  className = '',
  delay = 0




}: {text: string;className?: string;delay?: number;}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const words = text.split(' ');

  return (
    <span data-ev-id="ev_5d19caab6e" ref={ref} className={className}>
      {words.map((word, wordIndex) =>
      <span data-ev-id="ev_826c9b4147" key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split('').map((char, charIndex) =>
        <motion.span
          key={charIndex}
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={isInView ? {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)'
          } : {}}
          transition={{
            duration: 0.5,
            delay: delay + wordIndex * 0.1 + charIndex * 0.03,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="inline-block">

              {char}
            </motion.span>
        )}
        </span>
      )}
    </span>);

}