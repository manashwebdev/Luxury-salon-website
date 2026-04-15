import { motion } from 'motion/react';
import { Calendar, Clock, User, Phone, Scissors } from 'lucide-react';

export default function Booking() {
  return (
    <section id="book" className="py-24 md:py-32 px-6 md:px-12 bg-charcoal relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.4em] text-xs font-medium mb-4 block"
          >
            Reservations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif text-white mb-8"
          >
            Book Your <br />
            <span className="italic text-gold-gradient">Transformation</span>
          </motion.h2>
          <p className="text-white/50 font-light leading-relaxed tracking-wide mb-12 max-w-md">
            Secure your slot at MANASH. Select your preferred service, date, and time. Our team will confirm your appointment shortly.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                <Phone className="text-gold" size={20} />
              </div>
              <div>
                <h4 className="text-white font-serif text-lg mb-1">Call Us Directly</h4>
                <p className="text-white/40 text-sm font-light">+91 92587 11610</p>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                <Calendar className="text-gold" size={20} />
              </div>
              <div>
                <h4 className="text-white font-serif text-lg mb-1">Opening Hours</h4>
                <p className="text-white/40 text-sm font-light">Mon - Sun: 10:00 AM - 09:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-black p-8 md:p-12 border border-white/5 rounded-sm shadow-2xl"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-charcoal border border-white/10 py-4 pl-12 pr-4 text-white text-sm focus:border-gold outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                  <input
                    type="tel"
                    placeholder="+91 00000 00000"
                    className="w-full bg-charcoal border border-white/10 py-4 pl-12 pr-4 text-white text-sm focus:border-gold outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Select Service</label>
              <div className="relative">
                <Scissors className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                <select className="w-full bg-charcoal border border-white/10 py-4 pl-12 pr-4 text-white text-sm focus:border-gold outline-none transition-colors appearance-none">
                  <option>Hair Styling</option>
                  <option>Beard Grooming</option>
                  <option>Facial & Skin Care</option>
                  <option>Hair Spa</option>
                  <option>Elite Package</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                  <input
                    type="date"
                    className="w-full bg-charcoal border border-white/10 py-4 pl-12 pr-4 text-white text-sm focus:border-gold outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 ml-1">Time</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
                  <input
                    type="time"
                    className="w-full bg-charcoal border border-white/10 py-4 pl-12 pr-4 text-white text-sm focus:border-gold outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            <button className="w-full py-5 bg-gold text-black uppercase tracking-[0.3em] text-xs font-bold hover:bg-champagne transition-all duration-500 mt-4">
              Confirm Booking
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
