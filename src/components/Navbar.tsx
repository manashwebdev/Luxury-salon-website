import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Phone } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12',
        isScrolled ? 'bg-black/80 backdrop-blur-md py-3 border-b border-gold/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group">
          <span className="text-2xl md:text-3xl font-serif tracking-[0.2em] text-white group-hover:text-gold transition-colors duration-300">
            MANASH
          </span>
          <div className="h-[1px] w-0 group-hover:w-full bg-gold transition-all duration-500" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.2em] font-medium text-white/70 hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#book"
            className="px-6 py-2 border border-gold/50 text-gold text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-black transition-all duration-500"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-charcoal border-b border-gold/10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif tracking-widest text-white hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#book"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-block text-center px-6 py-3 bg-gold text-black uppercase tracking-widest text-sm font-bold"
              >
                Book Appointment
              </a>
              <div className="flex justify-center space-x-6 pt-4 border-t border-white/10">
                <Instagram className="text-gold" size={20} />
                <Phone className="text-gold" size={20} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
