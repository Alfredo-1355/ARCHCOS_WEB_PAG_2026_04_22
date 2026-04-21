import { memo } from 'react';
import { Search, Calendar, CreditCard, Compass } from 'lucide-react';

export const ProcessSection = memo(() => {
  return (
    <section className="py-24 px-8 md:px-16 max-w-[1400px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="w-full lg:w-1/2">
          <div className="relative h-[650px] rounded-[2.5rem] overflow-hidden">
            <img src="/projects/road-west-racket-social-club/R-01.png" alt="Road West Racket Social Club" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8">
          <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">How it works</span>
          <h2 className="text-4xl md:text-5xl font-semibold mt-4 mb-16 tracking-tight">Design ordering process</h2>

          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 shadow-sm">
                <Search className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <h4 className="font-semibold text-xl">Find your inspiration</h4>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed max-w-md">Explore our portfolio to discover your dream architectural style and spatial arrangement.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 shadow-sm">
                <Calendar className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <h4 className="font-semibold text-xl">Book a consultation</h4>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed max-w-md">Ensure a smooth design experience by booking a consultation with our expert architects.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 shadow-sm">
                <CreditCard className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <h4 className="font-semibold text-xl">Make payment</h4>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed max-w-md">We offer a variety of payment options to meet your preferences and ensure a hassle-free process.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 shadow-sm">
                <Compass className="w-6 h-6 text-gray-700" />
              </div>
              <div>
                <h4 className="font-semibold text-xl">Explore design</h4>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed max-w-md">You'll be immersed in a captivating tapestry of spaces, materials, and light as you walk through the plans.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
