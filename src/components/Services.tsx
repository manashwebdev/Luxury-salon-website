import { motion } from 'motion/react';
import { Scissors, User, Sparkles, Droplets, Heart } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    name: 'Hair Styling',
    description: 'Precision cuts tailored to your face shape and lifestyle.',
    price: '₹1,200',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdYyZSdAwX1mL7OKqB3HDMHP8rxMuP0GT1ZA&s'
  },
  {
    icon: User,
    name: 'Beard Grooming',
    description: 'Expert shaping and hot towel treatment for the perfect beard.',
    price: '₹800',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: Sparkles,
    name: 'Facial & Skin Care',
    description: 'Rejuvenating treatments using premium organic products.',
    price: '₹2,500',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: Droplets,
    name: 'Hair Spa',
    description: 'Deep conditioning and scalp massage for ultimate health.',
    price: '₹1,800',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2070&auto=format&fit=crop'
  },
  {
    icon: Heart,
    name: 'Bridal Grooming',
    description: 'Complete transformation for your most special day.',
    price: '₹5,000',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2069&auto=format&fit=crop'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.4em] text-xs font-medium mb-4 block"
          >
            Exquisite Offerings
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif text-white"
          >
            Our <span className="italic text-gold-gradient">Signature</span> Services
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-black border border-white/5 overflow-hidden rounded-sm"
            >
              {/* Background Image Hover */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="relative z-10 p-10 flex flex-col h-full">
                <div className="mb-8 w-14 h-14 rounded-full border border-gold/20 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                  <service.icon className="text-gold group-hover:text-black transition-colors duration-500" size={24} />
                </div>
                
                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold transition-colors duration-300">
                  {service.name}
                </h3>
                
                <p className="text-white/50 font-light text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-gold font-serif text-lg">{service.price}</span>
                  <button className="text-[10px] uppercase tracking-[0.2em] text-white/40 group-hover:text-gold transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Gold Border Glow on Hover */}
              <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
