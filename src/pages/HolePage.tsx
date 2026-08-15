import { useParams, Link, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { YouTubeEmbed } from '@/components/YouTubeEmbed';
import { holes } from '@/data/holes';
import { ChevronLeft, ChevronRight, Flag, Target, Lightbulb, MapPin } from 'lucide-react';

export default function HolePage() {
  const { number } = useParams();
  const navigate = useNavigate();
  const holeNumber = parseInt(number || '1', 10);

  const hole = holes.find((h) => h.number === holeNumber);
  const prevHole = holes.find((h) => h.number === holeNumber - 1);
  const nextHole = holes.find((h) => h.number === holeNumber + 1);

  if (!hole) {
    return (
      <Layout>
        <div data-ev-id="ev_ee2d5f931d" className="py-32 text-center">
          <h1 data-ev-id="ev_75d984b5d7" className="font-serif text-4xl font-bold mb-4">Hole Not Found</h1>
          <Link to="/course" className="text-fairway hover:underline">Back to Course</Link>
        </div>
      </Layout>);

  }

  const getParColor = (par: number) => {
    switch (par) {
      case 3:return 'bg-emerald-500';
      case 4:return 'bg-blue-500';
      case 5:return 'bg-purple-500';
      default:return 'bg-gray-500';
    }
  };

  return (
    <Layout>
      {/* Hero Header */}
      <section data-ev-id="ev_c24f045b19" className="relative py-24 md:py-32 bg-gradient-to-br from-fairway-dark via-fairway to-fairway-light overflow-hidden">
        {/* Large background hole number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none">

          <span data-ev-id="ev_89e3520fba" className="text-[300px] md:text-[400px] font-serif font-bold text-white">{hole.number}</span>
        </motion.div>
        
        {/* Subtle pattern overlay */}
        <div data-ev-id="ev_f6c5de1095" className="absolute inset-0 opacity-10 pointer-events-none">
          <div data-ev-id="ev_293a65966f" className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div data-ev-id="ev_152780ec5b" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>

            <Link
              to="/course"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">

              <ChevronLeft className="w-5 h-5" />
              Back to Course Guide
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center gap-4 mb-6">

            <span data-ev-id="ev_497df1d54c" className={`${getParColor(hole.par)} text-white text-sm font-bold px-3 py-1.5 rounded-lg`}>
              PAR {hole.par}
            </span>
            <span data-ev-id="ev_b00152398a" className="bg-white/20 text-white px-3 py-1.5 rounded-lg text-sm font-medium">
              Hole {hole.number} of 18
            </span>
            {hole.difficulty &&
            <span data-ev-id="ev_31c91a0487" className="bg-gold/90 text-charcoal px-3 py-1.5 rounded-lg text-sm font-medium">
                #{hole.difficulty} Handicap
              </span>
            }
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.3)' }}>

            {hole.name}
          </motion.h1>

          {/* Animated gold accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative origin-left mb-6">

            <div data-ev-id="ev_3cd1b9c784" className="h-1 w-20 bg-gradient-to-r from-gold via-gold to-gold/0 rounded-full" />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gold rotate-45" />

          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-white/80 max-w-2xl">

            {hole.description}
          </motion.p>
        </div>
      </section>

      {/* Yardage Table */}
      <section data-ev-id="ev_d3d7df436c" className="bg-white border-b border-border">
        <div data-ev-id="ev_2624092051" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div data-ev-id="ev_c4fda41860" className="flex flex-wrap justify-center gap-6 md:gap-12">
            {hole.yardage.black &&
            <div data-ev-id="ev_2fac1e3632" className="text-center">
                <div data-ev-id="ev_335ae65db6" className="w-4 h-4 rounded-full bg-charcoal mx-auto mb-2" />
                <div data-ev-id="ev_4d0309d672" className="text-2xl font-bold">{hole.yardage.black}</div>
                <div data-ev-id="ev_d43f0608c9" className="text-sm text-muted-foreground">Black</div>
              </div>
            }
            {hole.yardage.white &&
            <div data-ev-id="ev_b9cc326ff8" className="text-center">
                <div data-ev-id="ev_88f1cf0ec4" className="w-4 h-4 rounded-full bg-gray-300 border border-gray-400 mx-auto mb-2" />
                <div data-ev-id="ev_263c0d3e7f" className="text-2xl font-bold">{hole.yardage.white}</div>
                <div data-ev-id="ev_2bd506ca3b" className="text-sm text-muted-foreground">White</div>
              </div>
            }
            {hole.yardage.gold &&
            <div data-ev-id="ev_946bed906c" className="text-center">
                <div data-ev-id="ev_cabd8ac85b" className="w-4 h-4 rounded-full bg-gold mx-auto mb-2" />
                <div data-ev-id="ev_04c9b7f035" className="text-2xl font-bold">{hole.yardage.gold}</div>
                <div data-ev-id="ev_eaf44cdcc7" className="text-sm text-muted-foreground">Gold</div>
              </div>
            }
            {hole.yardage.red &&
            <div data-ev-id="ev_cc6842ee31" className="text-center">
                <div data-ev-id="ev_fe5df322d8" className="w-4 h-4 rounded-full bg-red-500 mx-auto mb-2" />
                <div data-ev-id="ev_029128c741" className="text-2xl font-bold">{hole.yardage.red}</div>
                <div data-ev-id="ev_4ec013ddc4" className="text-sm text-muted-foreground">Red</div>
              </div>
            }
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section data-ev-id="ev_d078464861" className="py-16 bg-cream">
        <div data-ev-id="ev_8636bcc070" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-ev-id="ev_8290d58643" className="grid lg:grid-cols-2 gap-12">
            {/* Video */}
            <div data-ev-id="ev_8074f4b4af">
              <h2 data-ev-id="ev_31783ba040" className="font-serif text-2xl font-bold mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-fairway" />
                Hole Flyover
              </h2>
              <YouTubeEmbed url={hole.videoUrl} title={`Hole ${hole.number} flyover`} />
            </div>

            {/* Strategy */}
            <div data-ev-id="ev_9f9a3687d1">
              <h2 data-ev-id="ev_11ff8be7fc" className="font-serif text-2xl font-bold mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-fairway" />
                Course Strategy
              </h2>
              <div data-ev-id="ev_373ea456c6" className="bg-white rounded-xl p-8 shadow-lg">
                <p data-ev-id="ev_46573e5fe9" className="text-lg text-muted-foreground leading-relaxed">
                  {hole.strategy}
                </p>
              </div>

              {/* Quick Tips */}
              <div data-ev-id="ev_2de2f912cf" className="mt-8 bg-gold/10 border border-gold/30 rounded-xl p-6">
                <h3 data-ev-id="ev_2d76976c00" className="font-semibold flex items-center gap-2 mb-4">
                  <Lightbulb className="w-5 h-5 text-gold" />
                  Pro Tips
                </h3>
                <ul data-ev-id="ev_2570fb2e87" className="flex flex-col gap-3 text-sm text-muted-foreground">
                  <li data-ev-id="ev_63a327732a" className="flex items-start gap-2">
                    <Flag className="w-4 h-4 text-fairway mt-0.5 flex-shrink-0" />
                    <span data-ev-id="ev_1f2276e118">Par {hole.par} holes require {hole.par === 3 ? 'precision iron play' : hole.par === 4 ? 'smart positioning off the tee' : 'strategic course management'}.</span>
                  </li>
                  <li data-ev-id="ev_e361ad8615" className="flex items-start gap-2">
                    <Flag className="w-4 h-4 text-fairway mt-0.5 flex-shrink-0" />
                    <span data-ev-id="ev_3b5611282e">Check the yardage from your chosen tees and select your club accordingly.</span>
                  </li>
                  <li data-ev-id="ev_603b74efb5" className="flex items-start gap-2">
                    <Flag className="w-4 h-4 text-fairway mt-0.5 flex-shrink-0" />
                    <span data-ev-id="ev_3a271ed9ee">Watch the video flyover to visualize the hole layout before you play.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section data-ev-id="ev_e1890edc78" className="py-8 bg-white border-t border-border">
        <div data-ev-id="ev_273f3405c2" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-ev-id="ev_2039c87abc" className="flex items-center justify-between">
            {prevHole ?
            <button data-ev-id="ev_5ac2bb1d51"
            onClick={() => navigate(`/course/hole/${prevHole.number}`)}
            className="flex items-center gap-3 px-6 py-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors">

                <ChevronLeft className="w-5 h-5" />
                <div data-ev-id="ev_3f21b62963" className="text-left">
                  <div data-ev-id="ev_b80ff4789d" className="text-xs text-muted-foreground">Previous</div>
                  <div data-ev-id="ev_f2f277e9f1" className="font-medium">Hole {prevHole.number}</div>
                </div>
              </button> :

            <div data-ev-id="ev_75722c0faf" />
            }

            <Link
              to="/course"
              className="hidden md:block px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors font-medium">

              View All Holes
            </Link>

            {nextHole ?
            <button data-ev-id="ev_e9e5be64f0"
            onClick={() => navigate(`/course/hole/${nextHole.number}`)}
            className="flex items-center gap-3 px-6 py-3 rounded-lg bg-fairway text-white hover:bg-fairway-dark transition-colors">

                <div data-ev-id="ev_2d3e67ef64" className="text-right">
                  <div data-ev-id="ev_eff1e94788" className="text-xs text-white/70">Next</div>
                  <div data-ev-id="ev_7908d7dee6" className="font-medium">Hole {nextHole.number}</div>
                </div>
                <ChevronRight className="w-5 h-5" />
              </button> :

            <Link
              to="/course"
              className="flex items-center gap-3 px-6 py-3 rounded-lg bg-gold text-charcoal hover:bg-gold-light transition-colors font-semibold">

                <div data-ev-id="ev_0e90f80945" className="text-right">
                  <div data-ev-id="ev_14b847663b" className="text-xs">You've completed the tour!</div>
                  <div data-ev-id="ev_a5fc84e7c1" className="font-medium">Back to Course</div>
                </div>
                <Flag className="w-5 h-5" />
              </Link>
            }
          </div>
        </div>
      </section>
    </Layout>);

}