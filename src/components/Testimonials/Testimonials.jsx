import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Vikram Rathore",
    location: "Delhi",
    review: "Rented the Mahindra Thar 4x4 for our self-drive road trip to Spiti Valley. The vehicle was in immaculate condition, tyres were practically new, and it did not complain once during water crossings or deep mud. Incredible experience!",
    rating: 5,
    date: "Jan 2026",
    avatar: "VR"
  },
  {
    id: 2,
    name: "Ananya Sen",
    location: "Kolkata",
    review: "Booked the 4x4 taxi service for Rohtang Pass. Our driver, Ramesh, was a total expert. He drove safely through treacherous snow roads where other vehicles were sliding. The permit was fully handled by the company.",
    rating: 5,
    date: "Dec 2025",
    avatar: "AS"
  },
  {
    id: 3,
    name: "Rohan & Sneha",
    location: "Mumbai",
    review: "We took the Maruti Jimny for a weekend couples trip to Sissu and Lahaul valley. The booking process on WhatsApp was seamless, pickup near Mall Road was quick, and the car's small turning radius made driving hairpins a breeze.",
    rating: 5,
    date: "Feb 2026",
    avatar: "RS"
  },
  {
    id: 4,
    name: "Dr. Amit Verma",
    location: "Chandigarh",
    review: "Our family rented the Scorpio N Sigma for a week. The absolute best customer service in Manali. 24/7 technical team called to check on us when we were at Shinkula. Very professional and highly recommended!",
    rating: 5,
    date: "Mar 2026",
    avatar: "AV"
  }
];

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#FFFFFF] text-gray-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-luxury font-bold text-xs uppercase tracking-widest text-[#D97706]">
            Guest Journals
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold">
            Adventure Stories
          </h2>
          <p className="font-body text-sm text-gray-500">
            Real feedback from travellers, couples, and off-road enthusiasts who explored the high altitudes with us.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-[2.5rem] p-8 sm:p-16 border border-gray-150 relative shadow-xl">
          {/* Big Quote Symbol */}
          <div className="absolute top-8 right-12 text-gray-200 pointer-events-none">
            <Quote className="w-24 h-24 stroke-[1.5]" />
          </div>

          <div className="relative z-10 min-h-[220px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Rating stars */}
                <div className="flex gap-1">
                  {[...Array(testimonials[currentIdx].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D97706] text-[#D97706]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-body text-base sm:text-lg text-gray-700 italic leading-relaxed">
                  "{testimonials[currentIdx].review}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4">
                  <div className="w-12 h-12 rounded-full bg-[#1E5631] text-white flex items-center justify-center font-luxury font-black text-sm shadow-md">
                    {testimonials[currentIdx].avatar}
                  </div>
                  <div>
                    <h4 className="font-luxury font-bold text-sm text-gray-950 uppercase tracking-wide">
                      {testimonials[currentIdx].name}
                    </h4>
                    <p className="font-body text-xs text-gray-500">
                      {testimonials[currentIdx].location} • Verified Google Review • {testimonials[currentIdx].date}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation Buttons */}
            <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 flex items-center justify-center transition-colors shadow-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 flex items-center justify-center transition-colors shadow-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
