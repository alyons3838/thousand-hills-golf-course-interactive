import { Layout } from '@/components/Layout';
import { PageHero } from '@/components/PageHero';
import { MapPin, Phone, Mail, Clock, Navigation, Car, Plane, Map } from 'lucide-react';

export default function Contact() {
  return (
    <Layout>
      <PageHero
        title="Contact Us"
        subtitle="We're here to help with tee times, group bookings, and any questions."
      />

      {/* Contact Info */}
      <section data-ev-id="ev_0f6c95304c" className="py-20 bg-cream">
        <div data-ev-id="ev_9e4efe0ada" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-ev-id="ev_8266c2175f" className="grid sm:grid-cols-2 gap-6">
            <div data-ev-id="ev_5def4088ab" className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div data-ev-id="ev_7cdbb7ffbc" className="w-14 h-14 rounded-full bg-fairway/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-fairway" />
              </div>
              <h3 data-ev-id="ev_b76782a604" className="font-semibold mb-2">Address</h3>
              <p data-ev-id="ev_30e78381fc" className="text-muted-foreground">
                245 South Wildwood Drive<br data-ev-id="ev_11a2f06923" />Branson, MO 65616
              </p>
            </div>
            <div data-ev-id="ev_6dae05e486" className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div data-ev-id="ev_7ceb7d08cb" className="w-14 h-14 rounded-full bg-fairway/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-fairway" />
              </div>
              <h3 data-ev-id="ev_e5e2daf62b" className="font-semibold mb-2">Phone</h3>
              <p data-ev-id="ev_ce8ce67aff" className="text-muted-foreground flex flex-col gap-1">
                <span data-ev-id="ev_dee762a11d" className="whitespace-nowrap">Toll Free: <a data-ev-id="ev_1846569e80" href="tel:8772620430" className="text-fairway hover:underline">(877) 262-0430</a></span>
                <span data-ev-id="ev_015058a210" className="whitespace-nowrap">Local: <a data-ev-id="ev_9f5ffab9f3" href="tel:4173344553" className="text-fairway hover:underline">(417) 334-4553</a></span>
              </p>
            </div>
            <div data-ev-id="ev_c406254b0d" className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div data-ev-id="ev_3ff2ac63d4" className="w-14 h-14 rounded-full bg-fairway/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-fairway" />
              </div>
              <h3 data-ev-id="ev_4a046c7ce6" className="font-semibold mb-2">Email</h3>
              <p data-ev-id="ev_4453b5dd71" className="text-muted-foreground">
                <a data-ev-id="ev_b2b320c89d" href="mailto:proshop@thousandhillsvacations.com" className="text-fairway hover:underline text-sm break-all">
                  proshop@thousandhillsvacations.com
                </a>
              </p>
            </div>
            <div data-ev-id="ev_fe5a24ec2a" className="bg-white rounded-xl p-8 text-center shadow-sm">
              <div data-ev-id="ev_8e775a19d5" className="w-14 h-14 rounded-full bg-fairway/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-fairway" />
              </div>
              <h3 data-ev-id="ev_ba1f755723" className="font-semibold mb-2">Pro Shop Hours</h3>
              <p data-ev-id="ev_4e18ede25d" className="text-muted-foreground">
                Open Daily<br data-ev-id="ev_cb5f10dba8" />Sunrise to Sunset
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section data-ev-id="ev_d484c17e4e" className="py-16 bg-white">
        <div data-ev-id="ev_f84508267d" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 data-ev-id="ev_0379306c35" className="font-serif text-3xl font-bold text-center mb-8">Find Us</h2>
          <div data-ev-id="ev_119da32b59" className="rounded-2xl overflow-hidden shadow-xl h-[400px] bg-muted">
            <iframe data-ev-id="ev_611535b848"
            title="Thousand Hills Golf Course Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.9876543210!2d-93.26234568426344!3d36.64234567912345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf0238c9a9e8c7%3A0x1234567890abcdef!2sThousand%20Hills%20Golf%20Resort!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" />

          </div>
          <div data-ev-id="ev_6fc5692f2b" className="mt-6 text-center">
            <a data-ev-id="ev_01d16346d0"
            href="https://www.google.com/maps/dir//245+S+Wildwood+Dr,+Branson,+MO+65616"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-fairway hover:bg-fairway-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors">

              <Navigation className="w-5 h-5" />
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section data-ev-id="ev_f4fe2a8da9" className="py-16 bg-sand-light">
        <div data-ev-id="ev_e73d453d39" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 data-ev-id="ev_46968a18c3" className="font-serif text-3xl font-bold text-center mb-12">Getting Here</h2>
          
          <div data-ev-id="ev_d182bbdcd1" className="grid md:grid-cols-3 gap-8">
            <div data-ev-id="ev_d763cec9ca" className="bg-white rounded-xl p-8">
              <div data-ev-id="ev_5c470f6acb" className="flex items-center gap-3 mb-4">
                <div data-ev-id="ev_1e270fa26c" className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <Car className="w-5 h-5 text-gold" />
                </div>
                <h3 data-ev-id="ev_83346d7a86" className="font-semibold">By Car</h3>
              </div>
              <p data-ev-id="ev_b3591c3822" className="text-muted-foreground">
                Located two blocks south of the Grand Palace and Andy Williams Moon River Theatre on the famous 76 strip. Easy access from all major highways.
              </p>
            </div>
            <div data-ev-id="ev_fa377f441e" className="bg-white rounded-xl p-8">
              <div data-ev-id="ev_5daf9b1d44" className="flex items-center gap-3 mb-4">
                <div data-ev-id="ev_2adffed40d" className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <Plane className="w-5 h-5 text-gold" />
                </div>
                <h3 data-ev-id="ev_5380f825e9" className="font-semibold">Nearest Airport</h3>
              </div>
              <p data-ev-id="ev_bfe08706e2" className="text-muted-foreground">
                Branson Airport (BKG) is approximately 10 minutes away. Springfield-Branson National Airport (SGF) is about 45 minutes north.
              </p>
            </div>
            <div data-ev-id="ev_8e382bf5a7" className="bg-white rounded-xl p-8">
              <div data-ev-id="ev_3ff4edb611" className="flex items-center gap-3 mb-4">
                <div data-ev-id="ev_c7344c982c" className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <Map className="w-5 h-5 text-gold" />
                </div>
                <h3 data-ev-id="ev_1e9ec13fe8" className="font-semibold">Nearby</h3>
              </div>
              <p data-ev-id="ev_3ce1cb8d25" className="text-muted-foreground">
                Within 5 minutes of Lake Taneycomo and 10 minutes from Table Rock Lake. Perfect for combining golf with other Branson attractions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section data-ev-id="ev_8bd5cb2b0d" className="py-16 bg-white">
        <div data-ev-id="ev_d7c7d05abd" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 data-ev-id="ev_601f651961" className="font-serif text-3xl font-bold text-center mb-12">Contact Departments</h2>
          
          <div data-ev-id="ev_e8de8d92f3" className="grid md:grid-cols-2 gap-8">
            <div data-ev-id="ev_a01b0abefd" className="border border-border rounded-xl p-6">
              <h3 data-ev-id="ev_528e179919" className="font-semibold text-lg mb-3">Pro Shop & Tee Times</h3>
              <p data-ev-id="ev_a9d9f858d6" className="text-muted-foreground mb-4">For reservations, general inquiries, and golf shop purchases.</p>
              <div data-ev-id="ev_05f8a5a3f5" className="flex flex-col gap-2">
                <a data-ev-id="ev_49ce680314" href="tel:8772620430" className="flex items-center gap-2 text-fairway hover:underline">
                  <Phone className="w-4 h-4" />
                  (877) 262-0430
                </a>
                <a data-ev-id="ev_efca07e0b4" href="mailto:proshop@thousandhillsvacations.com" className="flex items-center gap-2 text-fairway hover:underline">
                  <Mail className="w-4 h-4" />
                  proshop@thousandhillsvacations.com
                </a>
              </div>
            </div>
            <div data-ev-id="ev_8ee4a70df9" className="border border-border rounded-xl p-6">
              <h3 data-ev-id="ev_77422570d7" className="font-semibold text-lg mb-3">Group Outings & Tournaments</h3>
              <p data-ev-id="ev_6fbfa37f1d" className="text-muted-foreground mb-4">For corporate events, charity tournaments, and group bookings.</p>
              <div data-ev-id="ev_1f546ca5bb" className="flex flex-col gap-2">
                <a data-ev-id="ev_3aea178f8c" href="tel:8008644145" className="flex items-center gap-2 text-fairway hover:underline">
                  <Phone className="w-4 h-4" />
                  1-800-864-4145 ext. 219
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section data-ev-id="ev_6c5f16d26b" className="py-20 bg-gradient-to-br from-fairway-dark to-fairway text-white">
        <div data-ev-id="ev_427d1147ef" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 data-ev-id="ev_ba7ffef71c" className="font-serif text-4xl font-bold mb-6">Ready to Book Your Round?</h2>
          <p data-ev-id="ev_b88f03784a" className="text-xl text-white/80 mb-8">
            Reserve your tee time online or call us today.
          </p>
          <div data-ev-id="ev_4f456674d6" className="flex flex-col sm:flex-row justify-center gap-4">
            <a data-ev-id="ev_51dfe6ee8e"
            href="https://thousandhills.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold hover:bg-gold-light text-charcoal px-8 py-4 rounded-lg text-lg font-semibold transition-colors">

              Book Tee Time
            </a>
            <a data-ev-id="ev_164ec042dc"
            href="tel:8772620430"
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">

              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </Layout>);

}