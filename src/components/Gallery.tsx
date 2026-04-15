import { motion } from 'motion/react';

const galleryImages = [
  {
    url: 'https://www.lifestylesalons.com/wp-content/uploads/2023/10/mens-haircut.jpg',
    title: 'Modern Fade',
    category: 'Haircut'
  },
  {
    url: 'https://content.jdmagicbox.com/v2/comp/trichy/v8/0431px431.x431.250120193227.u1v8/catalogue/comfort-luxury-men-s-salon-tharanallur-trichy-beauty-parlours-x09fnhdzrk.jpg',
    title: 'Classic Shave',
    category: 'Grooming'
  },
  {
    url: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop',
    title: 'Luxury Interior',
    category: 'Ambiance'
  },
  {
    url: 'https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=2070&auto=format&fit=crop',
    title: 'Beard Sculpt',
    category: 'Grooming'
  },
  {
    url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1974&auto=format&fit=crop',
    title: 'Hair Spa',
    category: 'Treatment'
  },
  {
    url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop',
    title: 'Precision Work',
    category: 'Artistry'
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 px-6 md:px-12 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gold uppercase tracking-[0.4em] text-xs font-medium mb-4 block"
            >
              Visual Excellence
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-serif text-white"
            >
              The <span className="italic text-gold-gradient">Gallery</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <a href="#" className="text-xs uppercase tracking-[0.3em] text-gold hover:text-white transition-colors duration-300 border-b border-gold/30 pb-1">
              View All Styles
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.url}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center">
                <span className="text-gold text-[10px] uppercase tracking-[0.4em] mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {image.category}
                </span>
                <h3 className="text-2xl font-serif text-white mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {image.title}
                </h3>
                <div className="w-12 h-[1px] bg-gold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150" />
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold/0 group-hover:border-gold/50 transition-all duration-500" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold/0 group-hover:border-gold/50 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
