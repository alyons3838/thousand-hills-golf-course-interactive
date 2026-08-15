import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  backgroundImage?: string;
  overlayClassName?: string;
}

export function PageHero({ title, subtitle, children, backgroundImage, overlayClassName }: PageHeroProps) {
  // Split title into words for staggered animation
  const words = title.split(' ');

  return (
    <section data-ev-id="ev_d7ebb65b19" className="relative py-32 md:py-40 text-white text-center overflow-hidden">
      {/* Background */}
      {backgroundImage ?
      <>
          <img data-ev-id="ev_3c600e6eb5" src={backgroundImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div data-ev-id="ev_5445a658e6" className={overlayClassName || 'absolute inset-0 bg-gradient-to-b from-fairway-dark/90 via-fairway-dark/80 to-fairway-dark/95'} />
        </> :

      <div data-ev-id="ev_8c8c1ed751" className="absolute inset-0 bg-gradient-to-br from-fairway-dark via-fairway to-fairway-dark" />
      }
      
      {/* Subtle pattern overlay */}
      <div data-ev-id="ev_7d7a68535a" className="absolute inset-0 opacity-10 pointer-events-none">
        <div data-ev-id="ev_4af6986ea5" className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div data-ev-id="ev_54aa963542" className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title with staggered word animation */}
        <h1 data-ev-id="ev_ad5d9e3b51" className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
          <span data-ev-id="ev_d8ed6ffbe0" className="sr-only">{title}</span>
          <span data-ev-id="ev_db2a621bd4" aria-hidden="true" className="flex flex-wrap justify-center gap-x-4">
            {words.map((word, i) =>
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="inline-block"
              style={{ textShadow: '0 4px 30px rgba(0,0,0,0.3)' }}>

                {word}
              </motion.span>
            )}
          </span>
        </h1>

        {/* Animated gold accent line */}
        <div data-ev-id="ev_8f76ca444f" className="flex justify-center mb-8">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative">

            {/* Main gold line */}
            <div data-ev-id="ev_198bd41435" className="h-1 w-24 bg-gradient-to-r from-gold/0 via-gold to-gold/0 rounded-full" />
            {/* Diamond accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gold rotate-45" />

          </motion.div>
        </div>

        {/* Subtitle */}
        {subtitle &&
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light tracking-wide">

            {subtitle}
          </motion.p>
        }

        {/* Additional content slot */}
        {children &&
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8">

            {children}
          </motion.div>
        }
      </div>

      {/* Bottom fade gradient */}
      <div data-ev-id="ev_100dac713e" className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/10 to-transparent" />
    </section>);

}