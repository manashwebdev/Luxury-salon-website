import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop"
          alt="Luxury Salon Interior"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="inline-block text-gold uppercase tracking-[0.4em] text-xs md:text-sm mb-6 font-medium">
            Est. 2024 • Premium Grooming
          </span>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-white mb-8 leading-[1.1] tracking-tight">
            Where Style Meets <br />
            <span className="italic text-gold-gradient">Perfection</span>
          </h1>
          <p className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto mb-12 font-light tracking-wide leading-relaxed">
            Experience the pinnacle of luxury grooming at MANASH. Our master stylists blend traditional artistry with modern sophistication.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#book"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gold text-black uppercase tracking-[0.2em] text-xs font-bold hover:bg-champagne transition-colors duration-300 w-full sm:w-auto"
            >
              Book Appointment
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border border-white/30 text-white uppercase tracking-[0.2em] text-xs font-bold hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto"
            >
              Explore Services
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">Scroll</span>
        <ChevronDown className="text-gold/50" size={20} />
      </motion.div>

      {/* Subtle Glow Effect */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}
