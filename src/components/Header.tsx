import { Link, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import logo from '@/assets/uploads/aerial-sunset.jpg';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
  { href: '/', label: 'Home' },
  { href: '/course', label: 'The Course' },
  { href: '/rates', label: 'Rates' },
  { href: '/groups', label: 'Groups & Events' },
  { href: '/contact', label: 'Contact' }];


  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const isHomePage = location.pathname === '/';
  // Always use solid background for readability
  const headerBg = 'bg-cream/95 backdrop-blur-lg border-b border-border';
  const textColor = 'text-charcoal';
  const logoFilter = '';

  return (
    <header data-ev-id="ev_30d4cada4c"
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>

      <div data-ev-id="ev_d7b20a854b" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-ev-id="ev_03f8257b82" className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={logo}
              alt="Thousand Hills Golf Course"
              className={`h-12 w-auto transition-all duration-300 ${logoFilter}`} />

            <div data-ev-id="ev_f8c4988488" className={`hidden sm:block transition-colors duration-300 ${textColor}`}>
              <span data-ev-id="ev_9e3a786c83" className="font-serif text-lg font-semibold block leading-tight">Thousand Hills</span>
              <span data-ev-id="ev_aebbbd7cd2" className="text-xs tracking-widest uppercase text-muted-foreground">
                Golf Resort
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav data-ev-id="ev_698346e41b" className="hidden lg:flex items-center gap-1">
            {links.map((link) =>
            <Link
              key={link.href}
              to={link.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
              isActive(link.href) ?
              'text-fairway bg-fairway/5' :
              'text-charcoal hover:text-fairway hover:bg-fairway/5'}`
              }>

                {link.label}
                {isActive(link.href) &&
              <motion.div
                layoutId="nav-indicator"
                className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-fairway"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }} />

              }
              </Link>
            )}
          </nav>

          {/* CTA Buttons */}
          <div data-ev-id="ev_5dec21155b" className="hidden lg:flex items-center gap-4">
            <a data-ev-id="ev_c081b27324"
            href="tel:8772620430"
            className="flex items-center gap-2 text-sm transition-colors duration-300 text-muted-foreground hover:text-fairway">

              <Phone className="w-4 h-4" />
              (877) 262-0430
            </a>
            <motion.a
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              href="https://thousandhills.teesnap.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 bg-gold hover:bg-gold-light text-charcoal"
              style={{ boxShadow: 'var(--shadow-md)' }}>

              Book Tee Time
              <ChevronRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled || !isHomePage ?
            'text-charcoal hover:bg-muted' :
            'text-white hover:bg-white/10'}`
            }
            aria-label="Toggle menu">

            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen &&
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden">

              <div data-ev-id="ev_ca1160699f" className="py-4 border-t border-border/50 bg-white/90 backdrop-blur-lg rounded-b-2xl -mx-4 px-4 mb-4">
                <div data-ev-id="ev_1e43a26454" className="flex flex-col gap-1">
                  {links.map((link, i) =>
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}>

                      <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive(link.href) ?
                    'bg-fairway/10 text-fairway' :
                    'text-charcoal hover:bg-muted'}`
                    }>

                        {link.label}
                      </Link>
                    </motion.div>
                )}
                </div>
                <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                href="https://thousandhills.teesnap.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 bg-fairway hover:bg-fairway-dark text-white px-5 py-3.5 rounded-xl text-sm font-semibold text-center transition-colors">

                  Book Tee Time
                </motion.a>
              </div>
            </motion.nav>
          }
        </AnimatePresence>
      </div>
    </header>);

}