import { motion } from "framer-motion";

const galleryImages = [
  {
    id: 1,
    title: "Thar Off Roading",
    category: "4x4 Adventure",
    image: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=800&q=80",
    size: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    id: 2,
    title: "Jimny in Spiti Valley",
    category: "Winter Drive",
    image: "https://images.unsplash.com/photo-1595662979146-5debe49ee312?auto=format&fit=crop&w=800&q=80",
    size: "col-span-1 row-span-1"
  },
  {
    id: 3,
    title: "Atal Tunnel Highway",
    category: "Himalayan Road",
    image: "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&w=800&q=80",
    size: "col-span-1 row-span-1"
  },
  {
    id: 4,
    title: "High Altitude Camping",
    category: "Camp Sites",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
    size: "col-span-1 md:col-span-2 row-span-1"
  },
  {
    id: 5,
    title: "Snowy Rohtang Pass",
    category: "Glacier Trail",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
    size: "col-span-1 row-span-2"
  },
  {
    id: 6,
    title: "Fortuner Cruising",
    category: "Luxury Travel",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    size: "col-span-1 row-span-1"
  },
  {
    id: 7,
    title: "Sissu Waterfall",
    category: "Lahaul Valley",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    size: "col-span-1 md:col-span-2 row-span-1"
  }
];

export default function BentoGallery() {
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#111827] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-luxury font-bold text-xs uppercase tracking-widest text-[#D97706]">
            Visual Diaries
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold">
            Adventure Bento Gallery
          </h2>
          <p className="font-body text-sm text-gray-400">
            A glimpse into the extreme paths, camp nights, off-road vehicles, and frozen valley landscapes conquered by The Wanderlust Journeys.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[240px]">
          {galleryImages.map((img) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`${img.size} rounded-3xl overflow-hidden relative group border border-white/5 shadow-lg`}
            >
              {/* Image */}
              <img
                src={img.image}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
              />
              {/* Glassmorphic Overlay Details on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="font-luxury font-bold text-[9px] uppercase tracking-wider text-[#D97706] mb-1">
                  {img.category}
                </span>
                <h3 className="font-heading text-xl font-bold text-white leading-tight">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
