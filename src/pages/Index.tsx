import { Link } from 'react-router';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { HoleCard } from '@/components/HoleCard';
import { InteractiveScorecard } from '@/components/InteractiveScorecard';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { EditorialReveal, EditorialStagger, EditorialStaggerItem } from '@/components/EditorialReveal';
import { SectionHeading } from '@/components/SectionHeading';
import { MagneticButton } from '@/components/MagneticButton';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { SpotlightSection } from '@/components/SpotlightSection';
import { holes, courseStats } from '@/data/holes';
import { MapPin, Award, Star, Users, Clock, ChevronRight, Phone, Play, TreeDeciduous, Mountain, Waves } from 'lucide-react';
import heroBackground from '@/assets/uploads/logo.png';
import clubhouse from '@/assets/uploads/clubhouse.jpg';
import fairwayBunker from '@/assets/uploads/fairway-bunker.jpg';
import courseOverview from '@/assets/uploads/course-overview.jpg';
import courseLayoutMap from '@/assets/uploads/thousand-hills-layout.jpg';
import fairwayScenic from '@/assets/uploads/fairway-scenic.jpg';
import fairwayBluffs from '@/assets/uploads/fairway-bluffs.jpg';

export default function Index() {
  const featuredHoles = [holes[0], holes[8], holes[17]]; // Holes 1, 9, 18
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  return (
    <Layout>
      {/* Hero Section - Full viewport with parallax */}
      <section data-ev-id="ev_1b6a9e8521" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0"
          style={{ y: heroY }}>

          <video data-ev-id="ev_8a5b4b7491"
          autoPlay
          muted
          loop
          playsInline
          poster={courseOverview}
          className="w-full h-[120%] object-cover">

            <source data-ev-id="ev_f81853e5c8" src="https://res.cloudinary.com/auzechau/video/upload/v1783038601/DJI_0048l_c5uyl3.mp4" type="video/mp4" />
            <img data-ev-id="ev_16940f30ac" src={courseOverview} alt="Aerial view of Thousand Hills Golf Course" className="w-full h-[120%] object-cover" />
          </video>

          <div data-ev-id="ev_0334cb3e22" className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
          <div data-ev-id="ev_b30d5587aa" className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
        </motion.div>
        
        {/* Hero Content */}
        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
          style={{ opacity: heroOpacity }}>

          <div data-ev-id="ev_449d9ec9ec" className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div data-ev-id="ev_14bfb83f0a">
              {/* Rating badge - cinematic entrance */}
              <motion.div
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex items-center gap-3 mb-8">

                <div data-ev-id="ev_9cee595ca5" className="flex items-center gap-1">
                  {[...Array(4)].map((_, i) =>
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}>

                      <Star className="w-5 h-5 fill-gold text-gold" />
                    </motion.div>
                  )}
                </div>
                <span data-ev-id="ev_1bcb089a45" className="text-white/70 text-sm font-medium tracking-widest uppercase">Golf Digest Rating</span>
              </motion.div>
              
              {/* Main headline - slower, cinematic reveal */}
              <motion.h1
                initial={{ opacity: 0, y: 50, filter: 'blur(12px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.4, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-[1.1] tracking-tight"
                style={{ textShadow: '0 4px 40px rgba(0,0,0,0.4)' }}>

                Thousand Hills
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
                  className="block text-gold mt-2">

                  Golf Resort
                </motion.span>
              </motion.h1>

              {/* Refined decorative line with caption */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.3 }}
                className="flex items-center gap-4 mb-8">

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="h-px w-16 bg-gradient-to-r from-gold to-gold/0 origin-left" />

                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-white/50 text-sm tracking-[0.2em] uppercase font-light">

                  Est. Branson, Missouri
                </motion.span>
              </motion.div>
              
              {/* Description - editorial blur reveal */}
              <motion.p
                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-xl text-white/80 mb-10 leading-relaxed max-w-lg font-light">

                Branson's most celebrated golf destination. An 18-hole masterpiece through scenic Ozark hills, just moments from the famous 76 strip.
              </motion.p>
              
              {/* CTA buttons - final reveal */}
              <motion.div
                initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, delay: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex flex-col sm:flex-row gap-4">

                <MagneticButton
                  href="https://thousandhills.teesnap.net/"
                  className="group inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-charcoal px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-500 shadow-lg hover:shadow-xl"
                  strength={0.4}>

                  Book Your Tee Time
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </MagneticButton>
                <Link
                  to="/course"
                  className="group inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-500">

                  <Play className="w-5 h-5" />
                  Explore Course
                </Link>
              </motion.div>
            </div>

            {/* Right - Stats card - cinematic entrance */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.4, delay: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="hidden lg:block">

              <div data-ev-id="ev_85cc513263" className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 relative overflow-hidden">
                {/* Subtle inner glow */}
                <div data-ev-id="ev_1e942b668f" className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                
                <div data-ev-id="ev_d18738f1ab" className="relative grid grid-cols-2 gap-6">
                  {[
                  { label: 'Holes', value: 18, icon: '⛳' },
                  { label: 'Par', value: 64, icon: '🏌️' },
                  { label: 'Yardage', value: 5111, icon: '📏', format: true },
                  { label: 'Slope', value: 125, icon: '⛰️' }].
                  map((stat, i) =>
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.8, delay: 2.2 + i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                    className="text-center p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-500 hover:scale-105">

                      <div data-ev-id="ev_ace442ed95" className="text-2xl mb-2">{stat.icon}</div>
                      <div data-ev-id="ev_7cba6d6f66" className="text-3xl font-serif font-bold text-white">
                        <AnimatedCounter
                        target={stat.value}
                        format={stat.label === 'Yardage'}
                        duration={2000} />

                      </div>
                      <div data-ev-id="ev_f3c16b6ac2" className="text-sm text-white/60 uppercase tracking-wider mt-1">{stat.label}</div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator - delayed appearance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2">

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-2 backdrop-blur-sm">

            <motion.div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Premium Intro Block */}
      <section data-ev-id="ev_6509b80c43" className="relative py-16 bg-cream overflow-hidden">
        {/* Decorative background elements */}
        <div data-ev-id="ev_51ef002a72" className="absolute inset-0 pointer-events-none">
          <div data-ev-id="ev_a8b202006a" className="absolute top-0 left-1/4 w-64 h-64 bg-fairway/5 rounded-full blur-3xl" />
          <div data-ev-id="ev_80ba3089aa" className="absolute bottom-0 right-1/4 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />
        </div>
        
        <div data-ev-id="ev_549ceebc2b" className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>

            {/* Decorative top flourish */}
            <div data-ev-id="ev_3669e0efd5" className="flex justify-center mb-6">
              <div data-ev-id="ev_d4c2f6736b" className="flex items-center gap-3">
                <div data-ev-id="ev_dac65aaf92" className="h-px w-12 bg-gradient-to-r from-transparent to-gold/60" />
                <div data-ev-id="ev_021093b8f2" className="w-2 h-2 rotate-45 bg-gold" />
                <div data-ev-id="ev_7551f8c0ce" className="h-px w-12 bg-gradient-to-l from-transparent to-gold/60" />
              </div>
            </div>
            
            <p data-ev-id="ev_c386c5bf7f" className="font-serif text-2xl md:text-3xl text-charcoal/80 leading-relaxed italic">
              "Where the Ozark hills meet championship golf"
            </p>
            
            <p data-ev-id="ev_b18f06fff8" className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
              Nestled among ancient hardwoods and dramatic bluffs, Thousand Hills delivers an unforgettable round just minutes from the heart of Branson.
            </p>
            
            {/* Decorative bottom flourish */}
            <div data-ev-id="ev_139989db00" className="flex justify-center mt-8">
              <div data-ev-id="ev_5db6a106a3" className="flex items-center gap-2">
                <div data-ev-id="ev_0bb34367b2" className="h-px w-8 bg-gold/40" />
                <div data-ev-id="ev_48dcfca3bb" className="w-1.5 h-1.5 rotate-45 bg-gold/60" />
                <div data-ev-id="ev_cd6ec392a7" className="h-px w-8 bg-gold/40" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accolades Bar */}
      <SpotlightSection className="py-8 bg-fairway" spotlightSize={400} spotlightOpacity={0.08}>
        <div data-ev-id="ev_830f302014" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="flex flex-wrap justify-center items-center gap-8 md:gap-16" staggerDelay={0.1}>
            {[
            { icon: Award, title: 'Best of the Ozarks', subtitle: 'Springfield News-Leader' },
            { icon: Star, title: '4-Star Rating', subtitle: 'Golf Digest Magazine' },
            { icon: Award, title: 'Best Golf Course', subtitle: '417 Magazine Readers\' Choice' }].
            map((item) =>
            <StaggerItem key={item.title}>
                <div data-ev-id="ev_8013466792" className="flex items-center gap-3 text-white">
                  <item.icon className="w-7 h-7 text-gold flex-shrink-0" />
                  <div data-ev-id="ev_502714a515">
                    <div data-ev-id="ev_50ffda3332" className="font-serif font-semibold">{item.title}</div>
                    <div data-ev-id="ev_461d6a7043" className="text-sm text-white/60">{item.subtitle}</div>
                  </div>
                </div>
              </StaggerItem>
            )}
          </StaggerContainer>
        </div>
      </SpotlightSection>

      {/* About Section - Asymmetric layout */}
      <section data-ev-id="ev_057187891b" className="py-24 bg-cream overflow-hidden">
        <div data-ev-id="ev_257c10a933" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-ev-id="ev_f4bd225c40" className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Text content - wider */}
            <div data-ev-id="ev_abb6fa917f" className="lg:col-span-5">
              <EditorialReveal blur>
                <span data-ev-id="ev_76292818e0" className="text-sm font-semibold text-gold uppercase tracking-widest">Est. Branson, Missouri</span>
                <h2 data-ev-id="ev_d2dd23bb68" className="font-serif text-4xl lg:text-5xl font-bold text-charcoal mt-4 mb-6 leading-tight">
                  A Masterpiece in the<br data-ev-id="ev_5ccfa0249c" />
                  <span data-ev-id="ev_c52ba4dfe7" className="text-fairway">Heart of the Ozarks</span>
                </h2>
              </EditorialReveal>
              
              <EditorialReveal delay={0.2} blur>
                <p data-ev-id="ev_317530188e" className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Designed by renowned architect Robert E. Cupp, Thousand Hills offers a journey through beautiful hardwood forests, past unique rock formations, and over pristine Ozark streams.
                </p>
              </EditorialReveal>
              
              <EditorialReveal delay={0.35} blur>
                <p data-ev-id="ev_3030cbee34" className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our Par 64 executive-style layout emphasizes precision and iron play, making it both challenging and fair for golfers of all skill levels.
                </p>
              </EditorialReveal>

              <EditorialStagger baseDelay={0.5} stagger={0.15}>
                <div data-ev-id="ev_14ba8ccff3" className="flex flex-col gap-4">
                  <EditorialStaggerItem>
                    <div data-ev-id="ev_4c07cef6b6" className="flex items-center gap-4 p-4 rounded-xl bg-white" style={{ boxShadow: 'var(--shadow-md)' }}>
                      <div data-ev-id="ev_d44ca3e3ae" className="w-12 h-12 rounded-full bg-fairway/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-fairway" />
                      </div>
                      <div data-ev-id="ev_2db21ad392">
                        <div data-ev-id="ev_dbc861e902" className="font-semibold text-charcoal">Prime Location</div>
                        <div data-ev-id="ev_d9bba3b5a2" className="text-sm text-muted-foreground">2 blocks from the famous 76 strip</div>
                      </div>
                    </div>
                  </EditorialStaggerItem>
                  <EditorialStaggerItem>
                    <div data-ev-id="ev_3b02f0e581" className="flex items-center gap-4 p-4 rounded-xl bg-white" style={{ boxShadow: 'var(--shadow-md)' }}>
                      <div data-ev-id="ev_44355b5fd6" className="w-12 h-12 rounded-full bg-fairway/10 flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-fairway" />
                      </div>
                      <div data-ev-id="ev_2905a09e80">
                        <div data-ev-id="ev_0d60a063f5" className="font-semibold text-charcoal">PGA Pro Staff</div>
                        <div data-ev-id="ev_d5827ecfa6" className="text-sm text-muted-foreground">Expert lessons & course guidance</div>
                      </div>
                    </div>
                  </EditorialStaggerItem>
                </div>
              </EditorialStagger>
            </div>

            {/* Image grid - creative layout with editorial reveals */}
            <div data-ev-id="ev_9337a0afbf" className="lg:col-span-7">
              <div data-ev-id="ev_4b89767ff6" className="grid grid-cols-12 gap-4">
                <EditorialReveal className="col-span-7" direction="right" delay={0.1}>
                  <div data-ev-id="ev_33ea8dcf74" className="overflow-hidden rounded-2xl" style={{ boxShadow: 'var(--shadow-xl)' }}>
                    <img data-ev-id="ev_30670f5316"
                    src={clubhouse}
                    alt="Thousand Hills Club House"
                    className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105" />

                  </div>
                </EditorialReveal>
                <EditorialReveal className="col-span-5 mt-12" direction="left" delay={0.25}>
                  <div data-ev-id="ev_e77b70e13e" className="overflow-hidden rounded-2xl" style={{ boxShadow: 'var(--shadow-xl)' }}>
                    <img data-ev-id="ev_f5d6672a78"
                    src={fairwayBunker}
                    alt="Golf fairway with bunker"
                    className="w-full h-52 object-cover transition-transform duration-700 hover:scale-105" />

                  </div>
                </EditorialReveal>
                <EditorialReveal className="col-span-5" direction="right" delay={0.4}>
                  <div data-ev-id="ev_80be5f43ca" className="overflow-hidden rounded-2xl" style={{ boxShadow: 'var(--shadow-xl)' }}>
                    <img data-ev-id="ev_89b084e71c"
                    src={heroBackground}
                    alt="Course overview"
                    className="w-full h-44 object-cover transition-transform duration-700 hover:scale-105" />

                  </div>
                </EditorialReveal>
                <EditorialReveal className="col-span-7" direction="left" delay={0.55}>
                  <div data-ev-id="ev_dc6531fd9f" className="overflow-hidden rounded-2xl" style={{ boxShadow: 'var(--shadow-xl)' }}>
                    <img data-ev-id="ev_ab77c03cc0"
                    src={fairwayScenic}
                    alt="Scenic fairway view at Thousand Hills"
                    className="w-full h-56 object-cover transition-transform duration-700 hover:scale-105" />

                  </div>
                </EditorialReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section data-ev-id="ev_8479ffe27e" className="py-20 bg-sand-light">
        <div data-ev-id="ev_d9fb160a17" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Course Features"
            subtitle="What makes Thousand Hills a must-play destination"
            className="mb-12" />

          
          <EditorialStagger className="grid md:grid-cols-4 gap-6" stagger={0.12}>
            {[
            { icon: TreeDeciduous, title: 'Hardwood Forests', desc: 'Scenic oak and hickory lined fairways' },
            { icon: Mountain, title: 'Rock Formations', desc: 'Dramatic Ozark bluffs and outcroppings' },
            { icon: Waves, title: 'Ozark Streams', desc: 'Wildwood Creek crosses multiple holes' },
            { icon: Star, title: 'Bentgrass Greens', desc: 'U.S.G.A. Crenshaw putting surfaces' }].
            map((feature) =>
            <EditorialStaggerItem key={feature.title}>
                <div data-ev-id="ev_83f6f95ee9" className="group bg-white rounded-2xl p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl" style={{ boxShadow: 'var(--shadow-lg)' }}>
                  <div data-ev-id="ev_f4b72c1152" className="w-14 h-14 mx-auto mb-4 rounded-full bg-fairway/10 flex items-center justify-center group-hover:bg-fairway/20 group-hover:scale-110 transition-all duration-500">
                    <feature.icon className="w-7 h-7 text-fairway" />
                  </div>
                  <h3 data-ev-id="ev_9af2e11399" className="font-semibold mb-2 text-charcoal group-hover:text-fairway transition-colors duration-300">{feature.title}</h3>
                  <p data-ev-id="ev_31736d0caa" className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </EditorialStaggerItem>
            )}
          </EditorialStagger>
        </div>
      </section>

      {/* Featured Holes - Breaking the 3-card pattern */}
      <section data-ev-id="ev_bd6808965e" className="py-24 bg-white">
        <div data-ev-id="ev_b485924887" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Signature Holes"
            title="Challenge Awaits"
            subtitle="Discover what makes Thousand Hills one of Branson's most rewarding golf experiences."
            className="mb-12" />


          {/* Asymmetric grid */}
          <div data-ev-id="ev_b618ad2804" className="grid lg:grid-cols-12 gap-6">
            <div data-ev-id="ev_2d55ddc9b9" className="lg:col-span-5">
              <HoleCard hole={featuredHoles[0]} featured index={0} />
            </div>
            <div data-ev-id="ev_4fedd69e50" className="lg:col-span-7">
              <HoleCard hole={featuredHoles[1]} featured index={1} />
            </div>
            <div data-ev-id="ev_82982d1cdb" className="lg:col-span-7">
              <HoleCard hole={featuredHoles[2]} featured index={2} />
            </div>
            <div data-ev-id="ev_1fdf101f88" className="lg:col-span-5 flex flex-col justify-center">
              <EditorialReveal delay={0.3} blur>
                <div data-ev-id="ev_bc81f2f781" className="bg-gradient-to-br from-fairway to-fairway-dark rounded-2xl p-8 text-white relative overflow-hidden" style={{ boxShadow: 'var(--shadow-xl)' }}>
                  {/* Decorative element */}
                  <div data-ev-id="ev_1de4f15b05" className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div data-ev-id="ev_39d69f73a0" className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                  
                  <div data-ev-id="ev_0f1044a692" className="relative">
                    <h3 data-ev-id="ev_8ac67a7382" className="font-serif text-2xl font-bold mb-4">Ready to Play?</h3>
                    <p data-ev-id="ev_28f475f7e7" className="text-white/80 mb-6">
                      Explore all 18 holes with detailed flyover videos and strategy tips.
                    </p>
                    <Link
                      to="/course"
                      className="group inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-charcoal px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg">

                      View All Holes
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </EditorialReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Scorecard Section */}
      <section data-ev-id="ev_ca936e458c" className="py-24 bg-cream">
        <div data-ev-id="ev_9facb376b7" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Course Overview"
            title="Scorecard"
            subtitle="Hover over any hole to see details. Click to view the full hole guide with video flyover."
            className="mb-12" />

          
          <EditorialReveal delay={0.2} blur>
            <InteractiveScorecard />
          </EditorialReveal>
        </div>
      </section>

      {/* Course Map Section */}
      <section data-ev-id="ev_7b59438948" className="py-24 bg-sand-light">
        <div data-ev-id="ev_dd8c468a5a" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Navigate"
            title="Course Layout"
            className="mb-12" />

          
          <EditorialReveal delay={0.2} blur>
            <div data-ev-id="ev_f1c077754e" className="rounded-3xl overflow-hidden group cursor-pointer" style={{ boxShadow: 'var(--shadow-2xl)' }}>
              <img data-ev-id="ev_b65cbbb3e6"
              src={courseLayoutMap}
              alt="Thousand Hills Golf Course aerial map showing all 18 holes layout"
              className="w-full h-auto transition-transform duration-1000 ease-out group-hover:scale-[1.02]" />

            </div>
          </EditorialReveal>
        </div>
      </section>

      {/* Rates Preview */}
      <section data-ev-id="ev_443acfa17e" className="py-24 bg-white">
        <div data-ev-id="ev_9f93ba626d" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div data-ev-id="ev_a845ddad33"
            className="bg-gradient-to-br from-fairway via-fairway to-fairway-dark rounded-3xl p-10 md:p-14 text-white overflow-hidden relative"
            style={{ boxShadow: 'var(--shadow-2xl)' }}>

              {/* Decorative elements */}
              <div data-ev-id="ev_fbedbbcd39" className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div data-ev-id="ev_ed752e4f93" className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div data-ev-id="ev_be18a08851" className="relative grid lg:grid-cols-2 gap-10 items-center">
                <div data-ev-id="ev_41a5fd7f1d">
                  <span data-ev-id="ev_a573d2fcda" className="text-gold text-sm font-semibold uppercase tracking-widest">2026 Season</span>
                  <h2 data-ev-id="ev_54ecd04229" className="font-serif text-4xl lg:text-5xl font-bold mt-2 mb-6">Ready to Play?</h2>
                  <p data-ev-id="ev_51c996abbc" className="text-white/80 text-lg mb-8 leading-relaxed">
                    Rates start at just $55 and include GPS-equipped carts. Seniors and military receive 10% off all rounds.
                  </p>
                  <div data-ev-id="ev_1dfb9a8c80" className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/rates"
                      className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-charcoal px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5">

                      View Full Rates
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                    <a data-ev-id="ev_7818a51cea"
                    href="tel:8772620430"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur px-6 py-3.5 rounded-xl font-semibold transition-colors">

                      <Phone className="w-5 h-5" />
                      (877) 262-0430
                    </a>
                  </div>
                </div>
                
                <div data-ev-id="ev_51a2627599" className="grid grid-cols-2 gap-4">
                  {[
                  { time: 'Before 3pm', price: '$69', note: 'Prime Time' },
                  { time: 'After 3pm', price: '$55', note: 'Twilight' }].
                  map((rate) =>
                  <div data-ev-id="ev_58cbf2a94e" key={rate.time} className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center hover:bg-white/15 transition-colors">
                      <Clock className="w-8 h-8 mx-auto mb-3 text-gold" />
                      <div data-ev-id="ev_e4b6f426f4" className="text-sm text-white/60 mb-1">{rate.note}</div>
                      <div data-ev-id="ev_8c44e30fd4" className="font-serif text-3xl font-bold">{rate.price}</div>
                      <div data-ev-id="ev_7e6ae8481d" className="text-sm text-white/70 mt-1">{rate.time}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact CTA */}
      <section data-ev-id="ev_800967c918" className="py-24 bg-cream">
        <div data-ev-id="ev_43b4dd3161" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span data-ev-id="ev_31ce618e0e" className="text-sm font-semibold text-gold uppercase tracking-widest">Visit Us</span>
            <h2 data-ev-id="ev_0f61080b59" className="font-serif text-4xl font-bold text-charcoal mt-2 mb-4">Plan Your Visit</h2>
            <p data-ev-id="ev_0663f9df9c" className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Located in the heart of Branson, just two blocks south of the famous 76 strip. We're within 5 minutes of Lake Taneycomo and 10 minutes from Table Rock Lake.
            </p>
            <div data-ev-id="ev_4ba0109f7d" className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-fairway hover:bg-fairway-dark text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{ boxShadow: 'var(--shadow-lg)' }}>

                Get Directions
                <MapPin className="w-5 h-5" />
              </Link>
              <Link
                to="/groups"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-muted border border-border text-charcoal px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
                style={{ boxShadow: 'var(--shadow-md)' }}>

                Plan a Group Outing
                <Users className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>);

}