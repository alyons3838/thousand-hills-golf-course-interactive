import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '@/assets/uploads/aerial-sunset.jpg';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-ev-id="ev_e1c89fd119" className="bg-charcoal text-white">
      {/* Main Footer */}
      <div data-ev-id="ev_a6c70e5fec" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div data-ev-id="ev_eec2ec7465" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div data-ev-id="ev_3ba70650fc" className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img data-ev-id="ev_4fbf7692a4" src={logo} alt="Thousand Hills" className="h-14 w-auto" />
            </Link>
            <p data-ev-id="ev_87906dae45" className="text-white/60 text-sm leading-relaxed mb-6">
              Branson's premier golf destination. Award-winning course design nestled in the beautiful Ozark hills.
            </p>
            <div data-ev-id="ev_6d30f6feac" className="flex gap-4">
              {[
              { icon: Facebook, href: '#' },
              { icon: Instagram, href: '#' },
              { icon: Twitter, href: '#' }].
              map((social, i) =>
              <motion.a
                key={i}
                whileHover={{ scale: 1.1, y: -2 }}
                href={social.href}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition-colors duration-300">

                  <social.icon className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div data-ev-id="ev_734f5f16cb">
            <h3 data-ev-id="ev_1e2d372c38" className="font-serif text-lg font-semibold mb-6">Quick Links</h3>
            <ul data-ev-id="ev_868f36e1c5" className="flex flex-col gap-3">
              {[
              { label: 'The Course', href: '/course' },
              { label: 'Rates & Specials', href: '/rates' },
              { label: 'Groups & Events', href: '/groups' },
              { label: 'Contact Us', href: '/contact' }].
              map((link) =>
              <li data-ev-id="ev_fa9db8eba4" key={link.href}>
                  <Link
                  to={link.href}
                  className="text-white/60 hover:text-gold transition-colors duration-200 text-sm">

                    {link.label}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div data-ev-id="ev_6dec05f454">
            <h3 data-ev-id="ev_9540ff147f" className="font-serif text-lg font-semibold mb-6">Contact</h3>
            <ul data-ev-id="ev_68206a4419" className="flex flex-col gap-4">
              <li data-ev-id="ev_bde186bfca" className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span data-ev-id="ev_c446744a86" className="text-white/60 text-sm leading-relaxed">
                  245 South Wildwood Drive<br data-ev-id="ev_524270bd6b" />Branson, MO 65616
                </span>
              </li>
              <li data-ev-id="ev_691420c356">
                <a data-ev-id="ev_609a877cc6"
                href="tel:8772620430"
                className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors text-sm">

                  <Phone className="w-5 h-5 text-gold" />
                  (877) 262-0430
                </a>
              </li>
              <li data-ev-id="ev_c68bf2e316">
                <a data-ev-id="ev_2b7536f2a3"
                href="mailto:proshop@thousandhillsvacations.com"
                className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors text-sm">

                  <Mail className="w-5 h-5 text-gold" />
                  proshop@thousandhills.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div data-ev-id="ev_9b4d151c46">
            <h3 data-ev-id="ev_47ffd9f855" className="font-serif text-lg font-semibold mb-6">Hours</h3>
            <div data-ev-id="ev_dc8291d103" className="flex items-start gap-3 mb-4">
              <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <div data-ev-id="ev_1660ce517b" className="text-sm">
                <p data-ev-id="ev_51e1fd2720" className="text-white/80 font-medium">Pro Shop Hours</p>
                <p data-ev-id="ev_75ac8375e9" className="text-white/60">Dawn to Dusk, Daily</p>
                <p data-ev-id="ev_798b473b53" className="text-white/60 mt-2">Tee times available sunrise to 4pm</p>
              </div>
            </div>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://thousandhills.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-charcoal px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors mt-4">

              Book Online
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div data-ev-id="ev_950be6abab" className="border-t border-white/10">
        <div data-ev-id="ev_a83437958c" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div data-ev-id="ev_3ebd8f7407" className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p data-ev-id="ev_927788f195" className="text-white/40 text-sm">
              © {currentYear} Thousand Hills Golf Resort. All rights reserved.
            </p>
            <div data-ev-id="ev_55c9db8216" className="flex items-center gap-6">
              <a data-ev-id="ev_7d6fcddb4c" href="#" className="text-white/40 hover:text-white/60 text-sm transition-colors">
                Privacy Policy
              </a>
              <a data-ev-id="ev_fca5837247" href="#" className="text-white/40 hover:text-white/60 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>);

}