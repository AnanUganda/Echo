import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Solid bar appears as soon as the page leaves the top of the hero.
      setIsScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Only the homepage has a full-bleed hero behind the header.
  const hasBackground = location.pathname === '/' ? isScrolled : true;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/about' },
    { name: 'Itinerary', path: '/itinerary' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-forest/20 selection:text-ink">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          hasBackground
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-line'
            : 'bg-transparent py-6 border-b border-white/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group justify-self-start">
            <Heart
              className={`w-6 h-6 transition-colors ${hasBackground ? 'text-clay' : 'text-white'}`}
              fill="currentColor"
            />
            <span
              className={`text-xl font-serif font-medium tracking-tight ${
                hasBackground ? 'text-ink' : 'text-white'
              }`}
            >
              ECHO Trips
            </span>
          </Link>

          {/* Desktop Nav (centered) */}
          <nav className="hidden md:flex items-center gap-9 justify-self-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[15px] font-medium transition-colors duration-200 ${
                  hasBackground ? 'text-ink/80 hover:text-clay' : 'text-white hover:text-white/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Apply button */}
          <div className="hidden md:flex justify-self-end">
            <Link
              to="/signup"
              className="inline-flex items-center h-11 px-6 rounded-lg text-[15px] font-medium bg-clay text-white hover:bg-clay-dark transition-colors duration-300"
            >
              Apply to Join
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2 justify-self-end"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${hasBackground ? 'text-ink' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${hasBackground ? 'text-ink' : 'text-white'}`} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-28 px-6 pb-12 flex flex-col md:hidden"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-2xl font-serif text-ink hover:text-clay transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/signup"
                className="mt-8 inline-flex items-center justify-center h-12 px-8 bg-clay text-white rounded-lg text-lg font-medium hover:bg-clay-dark mx-auto transition-colors"
              >
                Apply to Join
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      {/* Footer — forest block, 32px radius, inset from the edges */}
      <footer className="px-4 sm:px-6 pb-6 mt-20">
        <div className="mx-auto max-w-[1320px] bg-forest text-white rounded-[32px] px-8 py-16 md:px-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
            {/* Tagline column */}
            <div className="col-span-2 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-5 group">
                <Heart className="w-6 h-6 text-clay" fill="currentColor" />
                <span className="text-xl font-serif font-medium tracking-tight text-white">ECHO Trips</span>
              </Link>
              {/* TODO(copy): founding year unknown — copy doc tagline ends "since [year]". */}
              <p className="text-white/70 text-[15px] leading-[1.6] max-w-xs">
                Mission trips to Kenya, working beside local churches.
              </p>
            </div>

            {/* Pages */}
            <div>
              <h4 className="font-sans text-white font-semibold mb-5 text-[15px]">Pages</h4>
              <ul className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-white/70 hover:text-white transition-colors text-[15px]">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trips */}
            <div>
              <h4 className="font-sans text-white font-semibold mb-5 text-[15px]">Trips</h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link to="/signup" className="text-white/70 hover:text-white transition-colors text-[15px]">
                    Apply to Join
                  </Link>
                </li>
                <li>
                  <Link to="/itinerary" className="text-white/70 hover:text-white transition-colors text-[15px]">
                    Cost &amp; Schedule
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="text-white/70 hover:text-white transition-colors text-[15px]">
                    See Upcoming Trips
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-sans text-white font-semibold mb-5 text-[15px]">Contact</h4>
              <ul className="flex flex-col gap-3 text-[15px]">
                <li>
                  <a
                    href="mailto:projectechokenya@gmail.com"
                    className="text-white/70 hover:text-white transition-colors break-words"
                  >
                    projectechokenya@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+14786624515" className="text-white/70 hover:text-white transition-colors">
                    +1 (478) 662-4515
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/echo.kenya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom row: logo left, copyright right */}
          <div className="mt-14 pt-8 border-t border-white/15 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-white/60">
            <span className="font-serif text-lg text-white">ECHO Trips</span>
            <p>
              © {new Date().getFullYear()} ECHO Trips Kenya · Designed by{' '}
              <a
                href="https://openbrands.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                openbrands.studio
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
