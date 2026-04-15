import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Vikram Singh',
    role: 'Business Executive',
    text: 'The attention to detail at MANASH is simply unmatched. It is not just a haircut; it is a therapeutic experience that leaves you feeling like a new man.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Arjun Kapoor',
    role: 'Creative Director',
    text: 'I have been to luxury salons across the globe, but the precision and ambiance at MANASH are world-class. My go-to place for grooming.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop'
  },
  {
    name: 'Rohan Mehta',
    role: 'Entrepreneur',
    text: 'From the moment you walk in, you are treated with royalty. The Signature package is worth every penny. Highly recommended!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-black overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.4em] text-xs font-medium mb-4 block"
          >
            Client Voices
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif text-white"
          >
            Words of <span className="italic text-gold-gradient">Appreciation</span>
          </motion.h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="bg-charcoal/30 backdrop-blur-sm border border-white/5 p-10 md:p-16 rounded-sm relative"
            >
              <Quote className="absolute top-8 left-8 text-gold/10" size={80} />
              
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="flex space-x-1 mb-8">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="text-gold fill-gold" size={16} />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl font-serif text-white/90 leading-relaxed mb-10 italic">
                  "{testimonials[current].text}"
                </p>
                
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gold/30"
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-left">
                    <h4 className="text-white font-serif text-lg">{testimonials[current].name}</h4>
                    <p className="text-gold text-xs uppercase tracking-widest">{testimonials[current].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center mt-12 space-x-6">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
