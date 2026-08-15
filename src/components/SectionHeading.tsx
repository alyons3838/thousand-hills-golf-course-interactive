import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | ReactNode;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
  className = ''
}: SectionHeadingProps) {
  return (
    <div data-ev-id="ev_0c8d78080d" className={`${centered ? 'text-center' : ''} ${className}`}>
      {/* Eyebrow */}
      {eyebrow &&
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-block text-sm font-semibold text-gold uppercase tracking-widest mb-3">

          {eyebrow}
        </motion.span>
      }
      
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
        light ? 'text-white' : 'text-charcoal'}`
        }>

        {title}
      </motion.h2>

      {/* Animated gold accent line */}
      <div data-ev-id="ev_b0bee47606" className={`flex ${centered ? 'justify-center' : 'justify-start'} mt-6 mb-4`}>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative origin-center">

          {/* Main gold line */}
          <div data-ev-id="ev_2570a3c270" className="h-0.5 w-16 bg-gradient-to-r from-gold/0 via-gold to-gold/0 rounded-full" />
          {/* Diamond accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gold rotate-45" />

        </motion.div>
      </div>

      {/* Subtitle */}
      {subtitle &&
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${
        light ? 'text-white/70' : 'text-muted-foreground'}`
        }>

          {subtitle}
        </motion.p>
      }
    </div>);

}