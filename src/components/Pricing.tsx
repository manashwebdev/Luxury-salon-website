import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Essential',
    price: '₹1,500',
    description: 'Perfect for regular maintenance.',
    features: ['Classic Haircut', 'Beard Trim', 'Hair Wash', 'Styling Advice'],
    popular: false
  },
  {
    name: 'Signature',
    price: '₹3,500',
    description: 'Our most requested luxury experience.',
    features: ['Master Haircut', 'Premium Beard Sculpting', 'Face Massage', 'Hair Spa Treatment', 'Complimentary Drink'],
    popular: true
  },
  {
    name: 'Elite',
    price: '₹6,000',
    description: 'The ultimate grooming transformation.',
    features: ['Director Haircut', 'Royal Shave', 'Anti-Aging Facial', 'Scalp Detox', 'Home Care Kit', 'VIP Lounge Access'],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.4em] text-xs font-medium mb-4 block"
          >
            Investment in Style
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif text-white"
          >
            Luxury <span className="italic text-gold-gradient">Packages</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-10 border ${
                plan.popular ? 'border-gold bg-charcoal/50' : 'border-white/10 bg-transparent'
              } rounded-sm flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-black text-[10px] font-bold uppercase tracking-[0.2em] py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-serif text-white mb-2">{plan.name}</h3>
                <p className="text-white/40 text-sm font-light">{plan.description}</p>
              </div>

              <div className="mb-10">
                <span className="text-5xl font-serif text-gold">{plan.price}</span>
                <span className="text-white/30 text-sm ml-2">/ session</span>
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-3">
                    <Check className="text-gold" size={16} />
                    <span className="text-white/70 text-sm font-light tracking-wide">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 uppercase tracking-[0.2em] text-xs font-bold transition-all duration-500 ${
                  plan.popular
                    ? 'bg-gold text-black hover:bg-champagne'
                    : 'border border-white/20 text-white hover:border-gold hover:text-gold'
                }`}
              >
                Book This Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
