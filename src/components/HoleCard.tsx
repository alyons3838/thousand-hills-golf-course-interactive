import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { ChevronRight, Flag, Play } from 'lucide-react';
import { TiltCard } from '@/components/TiltCard';
import type { HoleData } from '@/data/holes';

interface HoleCardProps {
  hole: HoleData;
  featured?: boolean;
  index?: number;
}

export function HoleCard({ hole, featured = false, index = 0 }: HoleCardProps) {
  const getParColor = (par: number) => {
    switch (par) {
      case 3:return 'from-emerald-500 to-emerald-600';
      case 4:return 'from-sky-500 to-sky-600';
      case 5:return 'from-amber-500 to-amber-600';
      default:return 'from-gray-500 to-gray-600';
    }
  };

  const getParBadge = (par: number) => {
    switch (par) {
      case 3:return 'bg-emerald-500/90';
      case 4:return 'bg-sky-500/90';
      case 5:return 'bg-amber-500/90';
      default:return 'bg-gray-500/90';
    }
  };

  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 0.6,
          delay: index * 0.15,
          ease: [0.22, 1, 0.36, 1]
        }}>

        <TiltCard intensity={15} glare>
          <Link
            to={`/course/hole/${hole.number}`}
            className="group block relative overflow-hidden rounded-2xl bg-white transition-shadow duration-700 ease-out"
            style={{
              boxShadow: `
                0 1px 1px rgba(45,90,61,0.04),
                0 2px 2px rgba(45,90,61,0.04),
                0 4px 4px rgba(45,90,61,0.04),
                0 8px 8px rgba(45,90,61,0.04),
                0 16px 16px rgba(45,90,61,0.04)
              `
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `
                0 4px 6px rgba(184,134,11,0.08),
                0 8px 15px rgba(184,134,11,0.08),
                0 16px 30px rgba(184,134,11,0.06),
                0 32px 60px rgba(184,134,11,0.04),
                0 0 0 1px rgba(184,134,11,0.15)
              `;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `
                0 1px 1px rgba(45,90,61,0.04),
                0 2px 2px rgba(45,90,61,0.04),
                0 4px 4px rgba(45,90,61,0.04),
                0 8px 8px rgba(45,90,61,0.04),
                0 16px 16px rgba(45,90,61,0.04)
              `;
            }}>


          {/* Visual Card */}
          <div data-ev-id="ev_e01aef30fd" className={`aspect-[4/3] relative overflow-hidden bg-gradient-to-br ${getParColor(hole.par)}`}>
            {/* Large hole number background - softer zoom */}
            <div data-ev-id="ev_d48d781c84" className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <span data-ev-id="ev_8669b2b39d"
                className="text-[180px] font-serif font-bold text-white/10 select-none transition-all duration-[900ms] ease-out group-hover:scale-105 group-hover:rotate-1">

                {hole.number}
              </span>
            </div>
            
            {/* Soft overlay that intensifies on hover */}
            <div data-ev-id="ev_8dab9f8e3c" className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
            
            {/* Play button overlay - elegant fade */}
            <div data-ev-id="ev_8930b01a2f" className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
              <div data-ev-id="ev_0cc9fcc60e" className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-500 ease-out border border-white/20">
                <Play className="w-7 h-7 text-white fill-white ml-1" />
              </div>
            </div>

            {/* Info badges - slide up elegantly */}
            <div data-ev-id="ev_b8681e7e1a" className="absolute bottom-0 left-0 right-0 p-5">
              <div data-ev-id="ev_9817e83f8c" className="flex items-center gap-3 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span data-ev-id="ev_7278c88235" className={`${getParBadge(hole.par)} text-white text-sm font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm shadow-lg`}>
                  Par {hole.par}
                </span>
                {hole.yardage.black &&
                  <span data-ev-id="ev_55e9ce3972" className="bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full">
                    {hole.yardage.black} yds
                  </span>
                  }
              </div>
            </div>
          </div>

          {/* Content - elegant reveal */}
          <div data-ev-id="ev_71ca4d29fe" className="p-6 relative">
            {/* Gold accent line that grows on hover */}
            <div data-ev-id="ev_781df6009d" className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/40 transition-all duration-700" />
            
            <div data-ev-id="ev_a1d59429dc" className="flex items-start justify-between gap-4 mb-3">
              <h3 data-ev-id="ev_78fb632a4a" className="font-serif text-xl font-semibold text-charcoal group-hover:text-fairway transition-colors duration-500">
                Hole {hole.number}
              </h3>
              <div data-ev-id="ev_9e8f26b2a5" className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-gold transition-colors duration-500">
                <span data-ev-id="ev_e10ded2d70" className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">View</span>
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-500" />
              </div>
            </div>
            <p data-ev-id="ev_143d2bfcd4" className="text-base font-medium text-charcoal-light mb-2 group-hover:text-charcoal transition-colors duration-500">{hole.name}</p>
            <p data-ev-id="ev_0d6dab32a0" className="text-sm text-muted-foreground line-clamp-2 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-500">{hole.description}</p>
          </div>

          {/* Premium gold border glow */}
          <div data-ev-id="ev_63d04c93f6" className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gold/30 transition-all duration-700 pointer-events-none" />
          <div data-ev-id="ev_513d36d310" className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ boxShadow: 'inset 0 0 20px rgba(184,134,11,0.05)' }} />
        </Link>
        </TiltCard>
      </motion.div>);

  }

  // Compact list view
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index % 6 * 0.05,
        ease: [0.22, 1, 0.36, 1]
      }}>

      <Link
        to={`/course/hole/${hole.number}`}
        className="group flex items-center gap-5 p-4 bg-white rounded-xl border border-border/50 hover:border-fairway/30 transition-all duration-300"
        style={{
          boxShadow: '0 1px 3px rgba(45,90,61,0.04), 0 2px 6px rgba(45,90,61,0.02)'
        }}>

        {/* Hole number badge */}
        <div data-ev-id="ev_d153559d4f" className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getParColor(hole.par)} flex items-center justify-center flex-shrink-0 transform group-hover:scale-105 transition-transform duration-300`}>
          <span data-ev-id="ev_5d7369a919" className="font-serif text-2xl font-bold text-white">{hole.number}</span>
        </div>

        {/* Content */}
        <div data-ev-id="ev_6a36d4d0dc" className="flex-grow min-w-0">
          <h3 data-ev-id="ev_32289ff565" className="font-semibold text-charcoal group-hover:text-fairway transition-colors duration-300 truncate">
            {hole.name}
          </h3>
          <div data-ev-id="ev_e910ebefe0" className="flex items-center gap-4 mt-1.5">
            <span data-ev-id="ev_47d3e5958a" className="text-sm text-muted-foreground flex items-center gap-1.5">
              <Flag className="w-3.5 h-3.5" /> Par {hole.par}
            </span>
            {hole.yardage.black &&
            <span data-ev-id="ev_cc7bd6e29e" className="text-sm text-muted-foreground">{hole.yardage.black} yds</span>
            }
          </div>
        </div>

        {/* Arrow */}
        <div data-ev-id="ev_73b65cf1a6" className="flex-shrink-0 w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center group-hover:bg-fairway/10 transition-colors duration-300">
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-fairway group-hover:translate-x-0.5 transition-all duration-300" />
        </div>
      </Link>
    </motion.div>);

}