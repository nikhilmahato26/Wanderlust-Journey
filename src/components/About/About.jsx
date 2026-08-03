import { motion } from "framer-motion";
import { ShieldCheck, Compass, Map, Key, UserCheck, Snowflake, HeartHandshake, Clock, Sparkles, AlertCircle } from "lucide-react";

export default function About() {
  const whyChooseUsData = [
    {
      title: "Premium SUVs",
      desc: "Our vehicles are rigorously maintained and custom-equipped for mountain trails.",
      icon: Sparkles
    },
    {
      title: "Self Drive Experience",
      desc: "Drive yourself into the wild. Ultimate freedom with zero mileage constraints.",
      icon: Key
    },
    {
      title: "4x4 Specialists",
      desc: "True off-road capability (low-range gears, mud/snow tyres, underbody protection).",
      icon: Compass
    },
    {
      title: "Experienced Drivers",
      desc: "For taxi services, travel with veteran mountain pilots who know every hairpin curve.",
      icon: UserCheck
    },
    {
      title: "Adventure Experts",
      desc: "We organize the absolute finest winter expeditions and high-altitude highway crossings.",
      icon: Snowflake
    },
    {
      title: "Mountain Safety",
      desc: "Every expedition vehicle is fitted with oxygen cylinders, snow chains, and medical kits.",
      icon: ShieldCheck
    },
    {
      title: "Flexible Rentals",
      desc: "Rent by day, week, or customized durations matching your holiday itinerary.",
      icon: HeartHandshake
    },
    {
      title: "Affordable Pricing",
      desc: "Ultra-premium adventure luxury at transparent, competitive, and honest pricing.",
      icon: Clock
    },
    {
      title: "Local Guides",
      desc: "Benefit from authentic local knowledge of hidden camp sites, valleys, and cafes.",
      icon: Map
    },
    {
      title: "24/7 Road Support",
      desc: "Always on standby. Round-the-clock emergency recovery and technical assistance.",
      icon: AlertCircle
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FFFFFF] text-gray-900 overflow-hidden relative">
      {/* Editorial layout container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main narrative block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-10 bg-[#1E5631]" />
              <span className="font-luxury font-bold text-xs uppercase tracking-widest text-[#D97706]">
                Since 2018 in Manali
              </span>
            </div>
            
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900">
              Every Road Leads <br />
              <span className="italic text-[#1E5631]">To Adventure.</span>
            </h2>

            <p className="font-body text-base text-gray-600 leading-relaxed">
              Welcome to **The Wanderlust Journeys**, your ultimate adventure partner based in Manali. We specialize in providing premium self-drive SUV rentals, high-altitude 4x4 taxi services, custom mountain expeditions, and local sightseeing packages across Himachal Pradesh.
            </p>
            
            <p className="font-body text-base text-gray-600 leading-relaxed">
              We design travel experiences that merge rugged off-road exploration with absolute premium comfort. Whether you want to conquer the deep snows of Winter Spiti, drive the majestic Rohtang Pass, or cross the extreme altitudes of Shinkula and Baralacha, we supply the vehicles and expertise to make your dream Himalayan journey a reality.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-150">
              <div className="space-y-1">
                <div className="font-luxury font-black text-2xl sm:text-3xl text-[#1E5631]">100%</div>
                <div className="font-body text-xs font-semibold text-gray-500 uppercase tracking-wider">Safety Record</div>
              </div>
              <div className="space-y-1">
                <div className="font-luxury font-black text-2xl sm:text-3xl text-[#1E5631]">4x4</div>
                <div className="font-body text-xs font-semibold text-gray-500 uppercase tracking-wider">Armed Fleet</div>
              </div>
              <div className="space-y-1">
                <div className="font-luxury font-black text-2xl sm:text-3xl text-[#1E5631]">5k+</div>
                <div className="font-body text-xs font-semibold text-gray-500 uppercase tracking-wider">Expeditions Done</div>
              </div>
            </div>
          </motion.div>

          {/* Right Collage Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <img
                src="https://www.sahyogmantratours.com/images/blogs/rohtang-pass-20231007115721-1_crop.jpg"
                alt="Thar Driving through Snow Road"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white font-body">
                <p className="text-xs uppercase tracking-widest text-[#D97706] font-bold">Snow Expedition</p>
                <h4 className="text-lg font-heading font-bold mt-1">Rohtang Pass Snow Drive</h4>
              </div>
            </div>

            {/* Secondary Floating Image */}
            {/* <div className="absolute -bottom-10 -left-10 w-2/3 hidden sm:block rounded-2xl overflow-hidden border-8 border-white shadow-xl aspect-square group">
              <img
                src="https://www.sahyogmantratours.com/images/blogs/rohtang-pass-20231007115721-1_crop.jpg"
                alt="Off Road Jimny Trail"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div> */}
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-28">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="font-luxury font-bold text-xs uppercase tracking-widest text-[#D97706]">
              Engineered For The Extreme
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900">
              Why Expedition Experts Choose Us
            </h3>
            <p className="font-body text-sm text-gray-500">
              Every detail of our operations is designed around safety, off-road performance, and client satisfaction in demanding high-altitude terrain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChooseUsData.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  className="bg-gray-50 hover:bg-[#1E5631] rounded-2xl p-6 border border-gray-100 hover:border-[#1E5631] transition-all duration-300 group hover:shadow-xl hover:shadow-[#1E5631]/10 flex flex-col items-start"
                >
                  <div className="w-12 h-12 bg-[#1E5631]/5 group-hover:bg-white/10 rounded-xl flex items-center justify-center text-[#1E5631] group-hover:text-[#D97706] mb-5 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-luxury font-bold text-sm text-gray-900 group-hover:text-white tracking-wide mb-2 uppercase">
                    {card.title}
                  </h4>
                  <p className="font-body text-xs text-gray-500 group-hover:text-white/80 leading-relaxed mt-auto">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
