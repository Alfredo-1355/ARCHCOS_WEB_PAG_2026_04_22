import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';
import Logo from '../../../components/Logo';

export const Footer = memo(() => {
  return (
    <footer id="contact" className="bg-[#1E293B] text-white pt-24 pb-8 px-8 md:px-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2 mb-8 group">
              <Logo className="h-[1.5rem] w-[1.5rem]" />
              <span className="font-bold text-2xl tracking-tighter group-hover:text-white transition-colors">ARCHCOS</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-sm mb-10 leading-relaxed">
              Don't miss out on our interesting promotions, please follow our social media so you don't miss out on other interesting information.
            </p>
            <div className="flex flex-col gap-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gray-400 mt-0.5" /> 
                <div className="flex flex-col">
                  <a href="mailto:adrianasarro@archcos.com" className="hover:text-white transition-colors">adrianasarro@archcos.com</a>
                  <a href="mailto:rgaytan@archcos.com" className="hover:text-white transition-colors">rgaytan@archcos.com</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-400" /> 
                <a href="tel:2817718684" className="hover:text-white transition-colors">281 771 8684</a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <h4 className="font-semibold mb-8 text-xs tracking-[0.2em] uppercase text-gray-500">Links</h4>
            <ul className="space-y-5 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How it works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Why us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Start project</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold mb-8 text-xs tracking-[0.2em] uppercase text-gray-500">Our Offices</h4>
            <ul className="space-y-5 text-sm text-gray-300 mb-12">
              <li className="flex items-center gap-3"><span className="text-lg">🇺🇸</span> Houston, Texas</li>
              <li className="flex items-center gap-3"><span className="text-lg">🇲🇽</span> Durango, DGO</li>
            </ul>
            <h4 className="font-semibold mb-6 text-xs tracking-[0.2em] uppercase text-gray-500">Follow</h4>
            <div className="flex gap-5 text-gray-400">
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563eb] hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.5)] transition-all duration-300 ease-in-out"><Linkedin className="w-5 h-5" /></a>
              <a href="https://www.instagram.com/archcoschd/" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563eb] hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.5)] transition-all duration-300 ease-in-out"><Instagram className="w-5 h-5" /></a>
              <a href="https://www.facebook.com/profile.php?id=100027974965889" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563eb] hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.5)] transition-all duration-300 ease-in-out"><Facebook className="w-5 h-5" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563eb] hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.5)] transition-all duration-300 ease-in-out"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div>2024 All rights reserved &nbsp;&nbsp; Privacy Policy</div>
          <div className="hover:text-gray-300 cursor-pointer transition-colors">Terms of Service</div>
        </div>
      </div>
    </footer>
  );
});
