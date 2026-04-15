import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <a href="#" className="text-3xl font-serif tracking-[0.2em] text-white">
              MANASH
            </a>
            <p className="text-white/40 text-sm font-light leading-relaxed max-w-xs">
              Redefining luxury grooming through precision, artistry, and an unwavering commitment to excellence.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/40 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/40 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-serif text-lg mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Pricing', 'Gallery'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/40 text-sm hover:text-gold transition-colors font-light tracking-wide">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-serif text-lg mb-8">Services</h4>
            <ul className="space-y-4">
              {['Hair Styling', 'Beard Grooming', 'Facial & Skin', 'Hair Spa', 'Bridal Grooming'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-white/40 text-sm hover:text-gold transition-colors font-light tracking-wide">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-lg mb-8">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="text-gold shrink-0" size={18} />
                <span className="text-white/40 text-sm font-light leading-relaxed">
                  123 Luxury Lane, Elite District, <br /> Haridwar, Uttarakhand 249401
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="text-gold shrink-0" size={18} />
                <span className="text-white/40 text-sm font-light">+91 92587 11610</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="text-gold shrink-0" size={18} />
                <span className="text-white/40 text-sm font-light">concierge@manash.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.2em]">
            © 2024 MANASH Luxury Salon. All Rights Reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-white/20 text-[10px] uppercase tracking-[0.2em] hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/20 text-[10px] uppercase tracking-[0.2em] hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
