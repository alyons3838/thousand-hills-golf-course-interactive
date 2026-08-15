import { Layout } from '@/components/Layout';
import { PageHero } from '@/components/PageHero';
import { SpotlightSection } from '@/components/SpotlightSection';
import { MagneticButton } from '@/components/MagneticButton';
import { Check, Users, Award, Gift, Utensils, Phone } from 'lucide-react';
import aerialFairways from '@/assets/uploads/aerial-fairways.jpg';

export default function Groups() {
  return (
    <Layout>
      <PageHero
        title="Groups & Events"
        subtitle="Host your company outing, charity tournament, or group retreat at Branson's premier golf destination."
        backgroundImage={aerialFairways}
        overlayClassName="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />


      {/* Group Rates */}
      <section data-ev-id="ev_8c679b21c3" className="py-20 bg-cream">
        <div data-ev-id="ev_e239341bfa" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 data-ev-id="ev_1475c9c85c" className="font-serif text-3xl font-bold text-center mb-12">Group Rates</h2>
          
          <div data-ev-id="ev_91c731d9f7" className="grid md:grid-cols-2 gap-8">
            <div data-ev-id="ev_daa1c90f40" className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div data-ev-id="ev_22e1002d02" className="text-sm font-semibold text-fairway uppercase tracking-wider mb-2">December – February</div>
              <div data-ev-id="ev_23f6fe11da" className="text-5xl font-bold text-fairway mb-2">$39</div>
              <div data-ev-id="ev_893985a14a" className="text-muted-foreground">per player</div>
              <div data-ev-id="ev_f827749222" className="mt-4 pt-4 border-t border-border">
                <span data-ev-id="ev_20e9094133" className="text-sm text-muted-foreground">Regular rate: $39</span>
              </div>
            </div>
            <div data-ev-id="ev_8f55afce55" className="bg-gradient-to-br from-fairway to-fairway-dark rounded-2xl p-8 shadow-lg text-center text-white">
              <div data-ev-id="ev_ac1585ea23" className="text-sm font-semibold text-gold uppercase tracking-wider mb-2">March – November</div>
              <div data-ev-id="ev_4f8b336337" className="text-5xl font-bold mb-2">$45</div>
              <div data-ev-id="ev_271345baaa" className="text-white/70">per player</div>
              <div data-ev-id="ev_25d71f85ab" className="mt-4 pt-4 border-t border-white/20">
                <span data-ev-id="ev_28f8285b84" className="text-sm text-white/70">Regular rate: $59</span>
              </div>
            </div>
          </div>

          <p data-ev-id="ev_ad0fa29b1a" className="text-center text-muted-foreground mt-8">
            Rates include 18 holes with cart rental.
          </p>
        </div>
      </section>

      {/* Services */}
      <section data-ev-id="ev_597535efe3" className="py-20 bg-white">
        <div data-ev-id="ev_8d8341b2ee" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 data-ev-id="ev_574ce70ebd" className="font-serif text-3xl font-bold text-center mb-4">Professional Outing Services</h2>
          <p data-ev-id="ev_07c9ea1659" className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our dedicated team will handle every detail to ensure your event is a success.
          </p>
          
          <div data-ev-id="ev_268d203ba5" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
            { icon: Users, title: 'PGA Professional', desc: 'On-site coordination and support' },
            { icon: Award, title: 'Player Pairings', desc: 'Custom hole assignments and groupings' },
            { icon: Award, title: 'Professional Scoreboards', desc: 'Live scoring and leaderboards' },
            { icon: Gift, title: 'Proximity Markers', desc: 'Closest to pin and longest drive markers' },
            { icon: Gift, title: 'Pro Shop Access', desc: 'Gift cards and merchandise' },
            { icon: Utensils, title: 'Catering Options', desc: 'Wide variety of food and beverage services' }].
            map((service) =>
            <div data-ev-id="ev_e738ffc54c" key={service.title} className="bg-sand-light rounded-xl p-6 flex items-start gap-4">
                <div data-ev-id="ev_19379a1021" className="w-12 h-12 rounded-full bg-fairway/10 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6 text-fairway" />
                </div>
                <div data-ev-id="ev_21553e0c32">
                  <h3 data-ev-id="ev_a0661d536f" className="font-semibold mb-1">{service.title}</h3>
                  <p data-ev-id="ev_a86d317c30" className="text-sm text-muted-foreground">{service.desc}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section data-ev-id="ev_0efcb416dd" className="py-20 bg-sand-light">
        <div data-ev-id="ev_1f5468de92" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 data-ev-id="ev_3fe9455cdd" className="font-serif text-3xl font-bold text-center mb-12">Perfect For</h2>
          
          <div data-ev-id="ev_024e05bab0" className="grid md:grid-cols-3 gap-8">
            <div data-ev-id="ev_301f511f40" className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div data-ev-id="ev_13695b3c36" className="w-16 h-16 rounded-full bg-fairway mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 data-ev-id="ev_956be94ab3" className="font-serif text-xl font-semibold mb-3">Corporate Outings</h3>
              <p data-ev-id="ev_c3950669b9" className="text-muted-foreground">Build team relationships and entertain clients in a stunning natural setting.</p>
            </div>
            <div data-ev-id="ev_5c74204384" className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div data-ev-id="ev_c11705266e" className="w-16 h-16 rounded-full bg-gold mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-charcoal" />
              </div>
              <h3 data-ev-id="ev_7e33a2119f" className="font-serif text-xl font-semibold mb-3">Charity Tournaments</h3>
              <p data-ev-id="ev_413cae44e8" className="text-muted-foreground">Host a memorable fundraiser with professional tournament support.</p>
            </div>
            <div data-ev-id="ev_0cfb6cee6a" className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div data-ev-id="ev_a223c695c0" className="w-16 h-16 rounded-full bg-fairway-light mx-auto mb-4 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 data-ev-id="ev_ad874e33aa" className="font-serif text-xl font-semibold mb-3">Group Retreats</h3>
              <p data-ev-id="ev_8a6c83c5ad" className="text-muted-foreground">Combine golf with resort amenities for the ultimate group experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section data-ev-id="ev_bc5c8fc126" className="py-20 bg-white">
        <div data-ev-id="ev_bc52d35a58" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 data-ev-id="ev_cce65f8509" className="font-serif text-3xl font-bold text-center mb-12">What's Included</h2>
          
          <div data-ev-id="ev_8650ec7335" className="grid md:grid-cols-2 gap-4">
            {[
            '18 holes of golf per player',
            'GPS-equipped golf carts',
            'Practice putting green access',
            'Cart signs with player names',
            'Custom group web page',
            'Beverage cart service',
            'On-site PGA Professional',
            'Proximity markers'].
            map((item) =>
            <div data-ev-id="ev_bc7b4becfb" key={item} className="flex items-center gap-3 p-4 bg-sand-light rounded-lg">
                <Check className="w-5 h-5 text-fairway flex-shrink-0" />
                <span data-ev-id="ev_068bced3fd">{item}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <SpotlightSection className="py-20 bg-gradient-to-br from-fairway-dark to-fairway text-white">
        <div data-ev-id="ev_7667fce76f" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 data-ev-id="ev_845f7ea988" className="font-serif text-4xl font-bold mb-6">Plan Your Event</h2>
          <p data-ev-id="ev_384a0d9e90" className="text-xl text-white/80 mb-8">
            Contact our PGA Golf Professional to start planning your group outing.
          </p>
          <MagneticButton
            href="tel:8008644145"
            className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-charcoal px-8 py-4 rounded-lg text-lg font-semibold transition-colors">

            <Phone className="w-5 h-5" />
            1-800-864-4145 ext. 219
          </MagneticButton>
        </div>
      </SpotlightSection>
    </Layout>);

}