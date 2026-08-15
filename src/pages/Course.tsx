import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { HoleCard } from '@/components/HoleCard';
import { InteractiveScorecard } from '@/components/InteractiveScorecard';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { holes, courseStats } from '@/data/holes';
import { Flag, Mountain, TreeDeciduous, Waves, ChevronRight, Play } from 'lucide-react';
import fairwayScenic from '@/assets/uploads/fairway-scenic.jpg';

export default function Course() {
  const [filter, setFilter] = useState<'all' | 3 | 4 | 5>('all');

  const filteredHoles = filter === 'all' ? holes : holes.filter((h) => h.par === filter);

  const parCounts = {
    3: holes.filter((h) => h.par === 3).length,
    4: holes.filter((h) => h.par === 4).length,
    5: holes.filter((h) => h.par === 5).length
  };

  return (
    <Layout>
      {/* Hero */}
      <section data-ev-id="ev_c412d47711" className="relative py-40 overflow-hidden">
        {/* Background image */}
        <div data-ev-id="ev_8c9ca4003f" className="absolute inset-0">
          <img data-ev-id="ev_b9d96ae54d" src={fairwayScenic} alt="Scenic Ozark fairway" className="w-full h-full object-cover" />
          <div data-ev-id="ev_207c3541b8" className="absolute inset-0 bg-gradient-to-b from-fairway-dark/90 via-fairway-dark/80 to-fairway-dark/95" />
        </div>

        {/* Content */}
        <div data-ev-id="ev_07dbc67b4e" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-ev-id="ev_de5be66ce6" className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-gold text-sm font-semibold uppercase tracking-widest mb-4">

              18-Hole Masterpiece
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">

              The Course
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/80 leading-relaxed">

              A journey through stunning Ozark landscape. Each hole offers unique challenges and breathtaking views.
            </motion.p>
          </div>
        </div>

        {/* Decorative wave */}
        <div data-ev-id="ev_5293bdb095" className="absolute bottom-0 left-0 right-0">
          <svg data-ev-id="ev_b0e94fca93" viewBox="0 0 1200 120" className="w-full h-20 fill-white">
            <path data-ev-id="ev_4c50bd6abd" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.94,118.74,140.55,78.39,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* Course Stats - Floating cards */}
      <section data-ev-id="ev_dec1b030ad" className="relative -mt-10 z-10 pb-16">
        <div data-ev-id="ev_9abe58b2fc" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.1}>
            {[
            { value: courseStats.holes, label: 'Holes', sublabel: 'Championship' },
            { value: `Par ${courseStats.par}`, label: 'Executive Style', sublabel: 'Challenge' },
            { value: courseStats.tees[0].yardage.toLocaleString(), label: 'Yards', sublabel: 'Black Tees' },
            { value: courseStats.tees[0].slope, label: 'Slope Rating', sublabel: 'Challenging' }].
            map((stat) =>
            <StaggerItem key={stat.label}>
                <div data-ev-id="ev_295bcbd8f1"
              className="bg-white rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform duration-300"
              style={{ boxShadow: 'var(--shadow-xl)' }}>

                  <div data-ev-id="ev_a25f8bf6fd" className="text-3xl md:text-4xl font-serif font-bold text-fairway">{stat.value}</div>
                  <div data-ev-id="ev_4755892ce6" className="text-sm font-medium text-charcoal mt-1">{stat.label}</div>
                  <div data-ev-id="ev_a2030aa783" className="text-xs text-muted-foreground mt-0.5">{stat.sublabel}</div>
                </div>
              </StaggerItem>
            )}
          </StaggerContainer>
        </div>
      </section>

      {/* Course Features */}
      <section data-ev-id="ev_ebe892e43f" className="py-16 bg-cream">
        <div data-ev-id="ev_dd08b8fd72" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-4 gap-6" staggerDelay={0.1}>
            {[
            { icon: TreeDeciduous, title: 'Hardwood Forests', desc: 'Scenic oak and hickory lined fairways' },
            { icon: Mountain, title: 'Rock Formations', desc: 'Dramatic Ozark bluffs and outcroppings' },
            { icon: Waves, title: 'Ozark Streams', desc: 'Wildwood Creek crosses multiple holes' },
            { icon: Flag, title: 'Bentgrass Greens', desc: 'U.S.G.A. Crenshaw putting surfaces' }].
            map((feature) =>
            <StaggerItem key={feature.title}>
                <div data-ev-id="ev_a9eeefc184" className="flex items-start gap-4 p-5 rounded-xl bg-white" style={{ boxShadow: 'var(--shadow-md)' }}>
                  <div data-ev-id="ev_ccf6d169bf" className="w-12 h-12 rounded-xl bg-fairway/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-fairway" />
                  </div>
                  <div data-ev-id="ev_a9bd8ea6ed">
                    <h3 data-ev-id="ev_60a670dbe3" className="font-semibold text-charcoal">{feature.title}</h3>
                    <p data-ev-id="ev_0e0ad92c9d" className="text-sm text-muted-foreground mt-1">{feature.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            )}
          </StaggerContainer>
        </div>
      </section>

      {/* Interactive Scorecard */}
      <section data-ev-id="ev_7ff46846e9" className="py-20 bg-white">
        <div data-ev-id="ev_5d9d21450c" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <span data-ev-id="ev_6856ef59b6" className="text-sm font-semibold text-gold uppercase tracking-widest">Navigate the Course</span>
            <h2 data-ev-id="ev_ee76548976" className="font-serif text-4xl font-bold text-charcoal mt-2 mb-4">Interactive Scorecard</h2>
            <p data-ev-id="ev_13f1c4071d" className="text-muted-foreground max-w-xl mx-auto">
              Click any hole to explore the detailed guide with flyover video and strategy tips.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <InteractiveScorecard />
          </AnimatedSection>
        </div>
      </section>

      {/* Tee Information */}
      <section data-ev-id="ev_e62538ba1c" className="py-20 bg-sand-light">
        <div data-ev-id="ev_b73e9bad79" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <span data-ev-id="ev_8902f58b76" className="text-sm font-semibold text-gold uppercase tracking-widest">Choose Your Challenge</span>
            <h2 data-ev-id="ev_cc2efb98b4" className="font-serif text-3xl font-bold text-charcoal mt-2">Tee Options</h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div data-ev-id="ev_7420b244d1" className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: 'var(--shadow-xl)' }}>
              <div data-ev-id="ev_cff25022cb" className="overflow-x-auto">
                <table data-ev-id="ev_98cde6a236" className="w-full">
                  <thead data-ev-id="ev_ed1d3aa825" className="bg-fairway text-white">
                    <tr data-ev-id="ev_87cd93bd5a">
                      <th data-ev-id="ev_334d664f1b" className="px-6 py-4 text-left font-semibold">Tee</th>
                      <th data-ev-id="ev_fc09c3dccf" className="px-6 py-4 text-center font-semibold">Yardage</th>
                      <th data-ev-id="ev_b12e43dd8b" className="px-6 py-4 text-center font-semibold">Rating</th>
                      <th data-ev-id="ev_bf5200ebaf" className="px-6 py-4 text-center font-semibold">Slope</th>
                    </tr>
                  </thead>
                  <tbody data-ev-id="ev_7b5e3bd459">
                    {courseStats.tees.map((tee, index) =>
                    <tr data-ev-id="ev_c95fa11913" key={tee.name} className={index % 2 === 0 ? 'bg-white' : 'bg-muted/30'}>
                        <td data-ev-id="ev_c0ede5245d" className="px-6 py-4">
                          <div data-ev-id="ev_b04f0fea50" className="flex items-center gap-3">
                            <div data-ev-id="ev_f093e419e8"
                          className={`w-4 h-4 rounded-full ${
                          tee.name.includes('Black') ? 'bg-charcoal' :
                          tee.name.includes('White') ? 'bg-gray-200 border border-gray-300' :
                          tee.name.includes('Gold') ? 'bg-gold' :
                          'bg-red-500'}`
                          } />

                            <span data-ev-id="ev_f4784dafbd" className="font-medium">{tee.name}</span>
                          </div>
                        </td>
                        <td data-ev-id="ev_3d082f7868" className="px-6 py-4 text-center font-semibold">{tee.yardage.toLocaleString()}</td>
                        <td data-ev-id="ev_fc0fdf4fbb" className="px-6 py-4 text-center">{tee.rating || '-'}</td>
                        <td data-ev-id="ev_41830238d1" className="px-6 py-4 text-center">{tee.slope}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Hole-by-Hole Guide */}
      <section data-ev-id="ev_ec89f90677" className="py-24 bg-cream">
        <div data-ev-id="ev_5c0153241e" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-ev-id="ev_5ce3f7f4ae" className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <AnimatedSection>
              <span data-ev-id="ev_6a7fc30a19" className="text-sm font-semibold text-gold uppercase tracking-widest">Complete Guide</span>
              <h2 data-ev-id="ev_9cf41fe115" className="font-serif text-4xl font-bold text-charcoal mt-2 mb-3">Hole-by-Hole</h2>
              <p data-ev-id="ev_5e156da740" className="text-muted-foreground max-w-lg">
                Click any hole to see detailed strategy, video flyover, and course tips from our PGA staff.
              </p>
            </AnimatedSection>

            {/* Filter Buttons */}
            <AnimatedSection delay={0.1}>
              <div data-ev-id="ev_6f641e5726" className="flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFilter('all')}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  filter === 'all' ?
                  'bg-fairway text-white shadow-md' :
                  'bg-white text-charcoal hover:bg-muted'}`
                  }
                  style={filter === 'all' ? { boxShadow: 'var(--shadow-md)' } : {}}>

                  All ({holes.length})
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFilter(3)}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  filter === 3 ?
                  'bg-emerald-500 text-white shadow-md' :
                  'bg-white text-charcoal hover:bg-muted'}`
                  }>

                  Par 3 ({parCounts[3]})
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFilter(4)}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  filter === 4 ?
                  'bg-sky-500 text-white shadow-md' :
                  'bg-white text-charcoal hover:bg-muted'}`
                  }>

                  Par 4 ({parCounts[4]})
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setFilter(5)}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  filter === 5 ?
                  'bg-amber-500 text-white shadow-md' :
                  'bg-white text-charcoal hover:bg-muted'}`
                  }>

                  Par 5 ({parCounts[5]})
                </motion.button>
              </div>
            </AnimatedSection>
          </div>

          {/* Holes Grid */}
          <div data-ev-id="ev_baec7e4ef7" className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredHoles.map((hole, index) =>
            <HoleCard key={hole.number} hole={hole} index={index} />
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section data-ev-id="ev_ec0f95a585" className="py-20 bg-fairway">
        <div data-ev-id="ev_a19b757cfe" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 data-ev-id="ev_3df94682b1" className="font-serif text-4xl font-bold text-white mb-4">Ready to Experience It?</h2>
            <p data-ev-id="ev_d96fd009d7" className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Book your tee time and discover why golfers keep coming back to Thousand Hills.
            </p>
            <div data-ev-id="ev_4dd6449160" className="flex flex-col sm:flex-row justify-center gap-4">
              <a data-ev-id="ev_e4af96e983"
              href="https://thousandhills.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-charcoal px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:-translate-y-0.5">

                Book Tee Time
                <ChevronRight className="w-5 h-5" />
              </a>
              <a data-ev-id="ev_82e5ad9d3e"
              href="tel:8772620430"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors">

                <Play className="w-5 h-5" />
                Call Pro Shop
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>);

}