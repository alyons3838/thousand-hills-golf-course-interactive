import { Layout } from '@/components/Layout';
import { PageHero } from '@/components/PageHero';
import { SpotlightSection } from '@/components/SpotlightSection';
import { MagneticButton } from '@/components/MagneticButton';
import { Link } from 'react-router';
import { Check, Clock, Users, Phone, Calendar, CreditCard, AlertCircle } from 'lucide-react';

export default function Rates() {
  const rates = [
  { season: 'March & April', before3: 84, after3: 64 },
  { season: 'May - Oct 17th', before3: 108, after3: 69 },
  { season: 'Oct 17th - Nov 8th', before3: 79, after3: 64 },
  { season: 'Nov 9th - Dec 31st', before3: 69, after3: 59 },
  { season: 'Winter (Jan/Feb)', before3: 55, after3: 55 }];


  return (
    <Layout>
      <PageHero
        title="Rates & Tee Times"
        subtitle="All rates include 18 holes and a GPS-equipped golf cart." />


      {/* Rates Table */}
      <section data-ev-id="ev_a173e04cbe" className="py-20 bg-cream">
        <div data-ev-id="ev_6ee2c3f060" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 data-ev-id="ev_e75278bd52" className="font-serif text-3xl font-bold text-center mb-12">2026 Daily Rates</h2>
          
          <div data-ev-id="ev_fad107f13f" className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div data-ev-id="ev_693d9f4b6b" className="grid grid-cols-3 bg-fairway text-white">
              <div data-ev-id="ev_92b189ac86" className="px-6 py-4 font-semibold">Season</div>
              <div data-ev-id="ev_f562dfc15a" className="px-6 py-4 font-semibold text-center">
                <Clock className="w-4 h-4 inline mr-2" />Before 3pm
              </div>
              <div data-ev-id="ev_d0b27782c6" className="px-6 py-4 font-semibold text-center">
                <Clock className="w-4 h-4 inline mr-2" />After 3pm
              </div>
            </div>
            {rates.map((rate, index) =>
            <div data-ev-id="ev_5818c11168"
            key={rate.season}
            className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-white' : 'bg-muted/30'}`}>

                <div data-ev-id="ev_cdae4b816b" className="px-6 py-5 font-medium border-b border-border">{rate.season}</div>
                <div data-ev-id="ev_38930674a8" className="px-6 py-5 text-center text-2xl font-bold text-fairway border-b border-border">
                  ${rate.before3}
                </div>
                <div data-ev-id="ev_2824e92964" className="px-6 py-5 text-center text-2xl font-bold text-fairway border-b border-border">
                  ${rate.after3}
                </div>
              </div>
            )}
          </div>

          <p data-ev-id="ev_be109e6b81" className="text-center text-sm text-muted-foreground mt-4">
            *After 3pm rates: 18 holes not guaranteed. Prices plus tax/fees.
          </p>
        </div>
      </section>

      {/* Additional Fees */}
      <section data-ev-id="ev_3bdf17ea5b" className="py-16 bg-white">
        <div data-ev-id="ev_3b6b5f1475" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 data-ev-id="ev_e37e20cf2c" className="font-serif text-3xl font-bold text-center mb-12">Additional Services</h2>
          
          <div data-ev-id="ev_5ccdd0cee8" className="grid md:grid-cols-3 gap-6">
            <div data-ev-id="ev_b10041fdd6" className="bg-sand-light rounded-xl p-6 text-center">
              <div data-ev-id="ev_41cdf18ef9" className="text-3xl font-bold text-fairway mb-2">$35</div>
              <div data-ev-id="ev_82fa13d056" className="font-semibold mb-1">Club Rentals</div>
              <div data-ev-id="ev_c83e10ca2e" className="text-sm text-muted-foreground">Golf balls not included</div>
            </div>
            <div data-ev-id="ev_3a35669738" className="bg-sand-light rounded-xl p-6 text-center">
              <div data-ev-id="ev_6a4520212e" className="text-3xl font-bold text-fairway mb-2">$24</div>
              <div data-ev-id="ev_8ab0beed28" className="font-semibold mb-1">Rider/Spectator Fee</div>
              <div data-ev-id="ev_9d2a14905d" className="text-sm text-muted-foreground">Per non-player</div>
            </div>
            <div data-ev-id="ev_ea3ee936dd" className="bg-sand-light rounded-xl p-6 text-center">
              <div data-ev-id="ev_6f8d471260" className="text-3xl font-bold text-fairway mb-2">$36</div>
              <div data-ev-id="ev_cc36238fde" className="font-semibold mb-1">Extra Cart</div>
              <div data-ev-id="ev_5ec6e66228" className="text-sm text-muted-foreground">Single rider cart</div>
            </div>
          </div>
        </div>
      </section>

      {/* Specials */}
      <section data-ev-id="ev_c925edc0f3" className="py-16 bg-fairway/5">
        <div data-ev-id="ev_90e40120f1" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 data-ev-id="ev_b736b3a1c2" className="font-serif text-3xl font-bold text-center mb-12">Specials & Discounts</h2>
          
          <div data-ev-id="ev_82aa0aa3d8" className="grid md:grid-cols-2 gap-6">
            <div data-ev-id="ev_937ef56d93" className="bg-white rounded-xl p-6 flex items-start gap-4 shadow-sm">
              <div data-ev-id="ev_d6e83e677d" className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-gold" />
              </div>
              <div data-ev-id="ev_5a9ba4847b">
                <h3 data-ev-id="ev_3b88ee470c" className="font-semibold text-lg mb-1">Seniors & Military</h3>
                <p data-ev-id="ev_e50df1f184" className="text-muted-foreground">10% off for seniors (60+), active military, and veterans.</p>
              </div>
            </div>
            <div data-ev-id="ev_c56d04b113" className="bg-white rounded-xl p-6 flex items-start gap-4 shadow-sm">
              <div data-ev-id="ev_67c6b7deef" className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-gold" />
              </div>
              <div data-ev-id="ev_ea2ec3e33b">
                <h3 data-ev-id="ev_dd31b4b080" className="font-semibold text-lg mb-1">13 Hole Special</h3>
                <p data-ev-id="ev_99420c009c" className="text-muted-foreground">30% off the 18-hole rate for shorter rounds.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section data-ev-id="ev_594873bd06" className="py-16 bg-white">
        <div data-ev-id="ev_c3dda5d98c" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 data-ev-id="ev_0798d505d9" className="font-serif text-3xl font-bold text-center mb-12">Booking Policies</h2>
          
          <div data-ev-id="ev_deddd6e6a9" className="grid md:grid-cols-2 gap-8">
            <div data-ev-id="ev_95a322ca60" className="flex flex-col gap-4">
              <div data-ev-id="ev_70c1914121" className="flex items-start gap-3">
                <Check className="w-5 h-5 text-fairway mt-1 flex-shrink-0" />
                <p data-ev-id="ev_af333cb6ad">Tee times can be booked 30-60 days in advance</p>
              </div>
              <div data-ev-id="ev_dd17ad5c96" className="flex items-start gap-3">
                <Check className="w-5 h-5 text-fairway mt-1 flex-shrink-0" />
                <p data-ev-id="ev_267e1c5ec9">Singles and twosomes may be paired with other groups</p>
              </div>
              <div data-ev-id="ev_f0a4864f99" className="flex items-start gap-3">
                <Check className="w-5 h-5 text-fairway mt-1 flex-shrink-0" />
                <p data-ev-id="ev_95aacde011">Five-somes permitted after 12:00 PM only</p>
              </div>
            </div>
            <div data-ev-id="ev_ecf928abfc" className="flex flex-col gap-4">
              <div data-ev-id="ev_e59188c02b" className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <p data-ev-id="ev_e895e92cef"><strong data-ev-id="ev_5da93cfb4a">24-hour cancellation policy.</strong> No-shows will be charged.</p>
              </div>
              <div data-ev-id="ev_d067e8b131" className="flex items-start gap-3">
                <CreditCard className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" />
                <p data-ev-id="ev_ed98e2bb3d">We accept Visa, Mastercard, and Discover. <strong data-ev-id="ev_49d1d26afd">No American Express.</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <SpotlightSection className="py-20 bg-gradient-to-br from-fairway to-fairway-dark text-white">
        <div data-ev-id="ev_2e6399d1d0" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 data-ev-id="ev_b411c664f7" className="font-serif text-4xl font-bold mb-6">Ready to Play?</h2>
          <p data-ev-id="ev_dc97f30500" className="text-xl text-white/80 mb-8">
            Book your tee time online or call our Pro Shop directly.
          </p>
          <div data-ev-id="ev_6669d129c5" className="flex flex-col sm:flex-row justify-center gap-4">
            <MagneticButton
              href="https://thousandhills.teesnap.net/"
              className="bg-gold hover:bg-gold-light text-charcoal px-8 py-4 rounded-lg text-lg font-semibold transition-colors">

              Book Online
            </MagneticButton>
            <a data-ev-id="ev_eebb7a3492"
            href="tel:8772620430"
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">

              <Phone className="w-5 h-5" />
              (877) 262-0430
            </a>
          </div>
        </div>
      </SpotlightSection>
    </Layout>);

}