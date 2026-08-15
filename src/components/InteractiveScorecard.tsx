import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router';
import { holes, courseStats } from '@/data/holes';
import { ChevronRight } from 'lucide-react';

export function InteractiveScorecard() {
  const [hoveredHole, setHoveredHole] = useState<number | null>(null);
  const [selectedNine, setSelectedNine] = useState<'front' | 'back'>('front');

  const frontNine = holes.slice(0, 9);
  const backNine = holes.slice(9, 18);
  const displayedHoles = selectedNine === 'front' ? frontNine : backNine;

  const getParColor = (par: number) => {
    switch (par) {
      case 3:return 'bg-emerald-500';
      case 4:return 'bg-sky-500';
      case 5:return 'bg-amber-500';
      default:return 'bg-gray-500';
    }
  };

  const frontNinePar = frontNine.reduce((sum, h) => sum + h.par, 0);
  const backNinePar = backNine.reduce((sum, h) => sum + h.par, 0);

  return (
    <div data-ev-id="ev_a191be73d1" className="bg-white rounded-2xl overflow-hidden" style={{
      boxShadow: `
        0 1px 1px rgba(45,90,61,0.04),
        0 2px 2px rgba(45,90,61,0.04),
        0 4px 4px rgba(45,90,61,0.04),
        0 8px 8px rgba(45,90,61,0.04),
        0 16px 16px rgba(45,90,61,0.04),
        0 32px 32px rgba(45,90,61,0.04)
      `
    }}>
      {/* Header */}
      <div data-ev-id="ev_4890c94e74" className="bg-gradient-to-r from-fairway-dark to-fairway p-6">
        <div data-ev-id="ev_652cdcfe90" className="flex items-center justify-between">
          <div data-ev-id="ev_e70ee61c4e">
            <h3 data-ev-id="ev_1068550e9c" className="font-serif text-2xl font-bold text-white">Interactive Scorecard</h3>
            <p data-ev-id="ev_0529d9d976" className="text-white/70 mt-1">Par {courseStats.par} • {courseStats.holes} Holes</p>
          </div>
          <div data-ev-id="ev_1ce59000e9" className="flex gap-2">
            <button data-ev-id="ev_98378d293c"
            onClick={() => setSelectedNine('front')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            selectedNine === 'front' ?
            'bg-white text-fairway' :
            'bg-white/10 text-white hover:bg-white/20'}`
            }>

              Front 9
            </button>
            <button data-ev-id="ev_1de455a093"
            onClick={() => setSelectedNine('back')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
            selectedNine === 'back' ?
            'bg-white text-fairway' :
            'bg-white/10 text-white hover:bg-white/20'}`
            }>

              Back 9
            </button>
          </div>
        </div>
      </div>

      {/* Scorecard Grid */}
      <div data-ev-id="ev_487709de9b" className="p-6">
        {/* Header Row */}
        <div data-ev-id="ev_f40f3b7def" className="grid grid-cols-10 gap-2 mb-4">
          <div data-ev-id="ev_a9ba202b0a" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Hole</div>
          {displayedHoles.map((hole) =>
          <div data-ev-id="ev_db239c9f25"
          key={hole.number}
          className="text-center text-sm font-bold text-charcoal">

              {hole.number}
            </div>
          )}
        </div>

        {/* Par Row */}
        <div data-ev-id="ev_fe505fbc70" className="grid grid-cols-10 gap-2 mb-4">
          <div data-ev-id="ev_f9840dcbb3" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Par</div>
          {displayedHoles.map((hole) =>
          <motion.div
            key={hole.number}
            onHoverStart={() => setHoveredHole(hole.number)}
            onHoverEnd={() => setHoveredHole(null)}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer">

              <Link to={`/course/hole/${hole.number}`}>
                <div data-ev-id="ev_420d9dd754"
              className={`${getParColor(hole.par)} text-white text-center py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
              hoveredHole === hole.number ? 'ring-2 ring-offset-2 ring-fairway' : ''}`
              }>

                  {hole.par}
                </div>
              </Link>
            </motion.div>
          )}
        </div>

        {/* Yardage Row */}
        <div data-ev-id="ev_21ea926566" className="grid grid-cols-10 gap-2 mb-6">
          <div data-ev-id="ev_3dc49d4aa4" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Yards</div>
          {displayedHoles.map((hole) =>
          <div data-ev-id="ev_32c21346f5"
          key={hole.number}
          className={`text-center text-sm text-muted-foreground transition-colors duration-300 ${
          hoveredHole === hole.number ? 'text-fairway font-medium' : ''}`
          }>

              {hole.yardage.black || '-'}
            </div>
          )}
        </div>

        {/* Totals */}
        <div data-ev-id="ev_196379bc3b" className="flex items-center justify-between pt-4 border-t border-border">
          <div data-ev-id="ev_ddc42e12d7" className="flex items-center gap-6">
            <div data-ev-id="ev_6ed62c12de">
              <span data-ev-id="ev_3dc17dd757" className="text-sm text-muted-foreground">Front 9 Par: </span>
              <span data-ev-id="ev_6b41eaaf17" className="font-bold text-charcoal">{frontNinePar}</span>
            </div>
            <div data-ev-id="ev_bb59dd2384">
              <span data-ev-id="ev_03ed01f030" className="text-sm text-muted-foreground">Back 9 Par: </span>
              <span data-ev-id="ev_a3efdfdf11" className="font-bold text-charcoal">{backNinePar}</span>
            </div>
            <div data-ev-id="ev_1a41f9c9e7">
              <span data-ev-id="ev_77a0a1f26e" className="text-sm text-muted-foreground">Total Par: </span>
              <span data-ev-id="ev_9f5684b261" className="font-bold text-fairway">{courseStats.par}</span>
            </div>
          </div>
          <Link
            to="/course"
            className="flex items-center gap-2 text-sm font-medium text-fairway hover:text-fairway-dark transition-colors">

            View All Holes
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Hover Info */}
      {hoveredHole &&
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-6 pb-6">

          <div data-ev-id="ev_03d6231fea" className="bg-sand-light rounded-xl p-4">
            <div data-ev-id="ev_58e4fd0580" className="flex items-center justify-between">
              <div data-ev-id="ev_1e5daeeccf">
                <h4 data-ev-id="ev_61ec11b6a2" className="font-serif font-semibold text-charcoal">
                  Hole {hoveredHole}: {holes[hoveredHole - 1].name}
                </h4>
                <p data-ev-id="ev_c8448222df" className="text-sm text-muted-foreground mt-1 line-clamp-1">
                  {holes[hoveredHole - 1].description}
                </p>
              </div>
              <Link
              to={`/course/hole/${hoveredHole}`}
              className="flex-shrink-0 bg-fairway text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-fairway-dark transition-colors">

                View Details
              </Link>
            </div>
          </div>
        </motion.div>
      }
    </div>);

}