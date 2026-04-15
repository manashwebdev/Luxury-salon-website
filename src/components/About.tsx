import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] relative z-10 overflow-hidden rounded-sm">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop"
              alt="Salon Ambiance"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-32 h-32 border-t border-l border-gold/30 z-0" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b border-r border-gold/30 z-0" />
          <div className="absolute top-1/2 -right-12 -translate-y-1/2 hidden lg:block">
            <span className="text-8xl font-serif text-white/5 select-none whitespace-nowrap tracking-tighter">
              ESTABLISHED 2024
            </span>
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
            Our Legacy
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            The Art of <br />
            <span className="italic text-gold-gradient">Refined Grooming</span>
          </h2>
          <div className="space-y-6 text-white/60 font-light leading-relaxed tracking-wide">
            <p>
              MANASH was born from a vision to redefine the grooming experience. We believe that a haircut is more than just a service—it's a statement of identity and a moment of self-care.
            </p>
            <p>
              Our sanctuary in the heart of the city offers an escape from the mundane. Every detail, from the scent of premium oils to the precision of our blades, is curated to provide an unparalleled experience of luxury and comfort.
            </p>
            <p className="font-serif italic text-white/90 text-xl pt-4">
              "We don't just cut hair; we craft confidence."
            </p>
          </div>
          
          <div className="mt-12 flex items-center space-x-8">
            <div>
              <p className="text-3xl font-serif text-gold mb-1">15+</p>
              <p className="text-[10px] uppercase tracking-widest text-white/40">Master Stylists</p>
            </div>
            <div className="w-[1px] h-12 bg-white/10" />
            <div>
              <p className="text-3xl font-serif text-gold mb-1">5k+</p>
              <p className="text-[10px] uppercase tracking-widest text-white/40">Happy Clients</p>
            </div>
            <div className="w-[1px] h-12 bg-white/10" />
            <div>
              <p className="text-3xl font-serif text-gold mb-1">4.9</p>
              <p className="text-[10px] uppercase tracking-widest text-white/40">Google Rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
