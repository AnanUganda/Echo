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
      // Background appears once scroll surpasses the main viewport height
      setIsScrolled(window.scrollY > 1000);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const hasBackground = location.pathname === '/' ? isScrolled : true;
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/about' },
    { name: 'Itinerary', path: '/itinerary' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-text-primary/30 selection:text-text-primary">
      {/* Header */}
      <header
        className={`absolute top-0 w-full z-50 transition-all duration-300 ${
          hasBackground ? 'bg-background/90 backdrop-blur-md shadow-sm py-4 border-b border-border/20' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <Heart className={`w-6 h-6 transition-colors ${hasBackground ? 'text-text-primary' : 'text-white group-hover:text-white/80'}`} />
            <span className={`text-xl font-serif font-medium tracking-tight ${hasBackground ? 'text-text-primary' : 'text-white'}`}>
              ECHO Trips
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`group relative text-sm font-semibold tracking-wide transition-[color,transform] duration-300 hover:-translate-y-0.5 after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                  hasBackground
                    ? 'text-earth-900 hover:text-accent'
                    : 'text-white hover:text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/signup"
              className="px-6 py-2.5 rounded-full text-sm font-semibold bg-accent text-white transition-all duration-300 hover:opacity-95 hover:shadow-lg hover:shadow-accent/25 hover:scale-105 active:scale-100"
            >
              Join a Trip
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 ${hasBackground ? 'text-text-primary' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${hasBackground ? 'text-text-primary' : 'text-white'}`} />
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
            className="fixed inset-0 z-40 bg-background pt-24 px-6 pb-12 flex flex-col md:hidden"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-2xl font-serif text-text-primary hover:text-text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/signup"
                className="mt-8 px-8 py-4 bg-accent text-white rounded-full text-lg font-medium hover:opacity-90 inline-block mx-auto"
              >
                Join a Trip
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-background text-text-primary py-16 px-6 md:px-12 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 text-text-primary group">
              <Heart className="w-6 h-6 text-text-primary" />
              <span className="text-2xl font-serif font-medium tracking-tight">
                ECHO Trips
              </span>
            </Link>
            <p className="text-text-secondary max-w-sm leading-relaxed">
              Connecting believers with communities in Kenya through Christ-centered service, cultural exchange, and practical ministry.
            </p>
          </div>
          <div>
            <h4 className="text-text-primary font-medium mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-text-secondary hover:text-text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-text-primary font-medium mb-6 uppercase tracking-wider text-sm">Connect</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="https://www.instagram.com/echo.kenya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-text-primary transition-colors">Facebook</a>
              </li>
              <li>
                <Link to="/contact" className="text-text-secondary hover:text-text-primary transition-colors">Email Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-earth-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-secondary">
          <p>© {new Date().getFullYear()} ECHO Trips Kenya. All rights reserved.</p>
          <p>
            Designed by Anan ·{' '}
            <a
              href="https://openbrands.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary font-medium hover:text-accent transition-colors"
            >
              openbrands.studio
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
