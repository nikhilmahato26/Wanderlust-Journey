import { useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Fleet from "./components/Fleet/Fleet";
import TaxiServices from "./components/TaxiServices/TaxiServices";
import AdventurePackages from "./components/AdventurePackages/AdventurePackages";
import Destinations from "./components/Destinations/Destinations";
import BentoGallery from "./components/Gallery/BentoGallery";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import StickyMobileCTA from "./components/StickyMobileCTA/StickyMobileCTA";
import FloatingWhatsApp from "./components/FloatingWhatsApp/FloatingWhatsApp";
import Loader from "./components/Loader/Loader";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) return;

    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loader onFinished={() => setLoading(false)} />
      ) : (
        <div className="relative bg-[#111827] text-white min-h-screen overflow-x-hidden selection:bg-[#D97706] selection:text-white">
          {/* Header Navigation */}
          <Navbar />

          {/* Main Sections */}
          <main>
            {/* Cinematic Hero Slider & Booking Overlay */}
            <Hero />

            {/* About & Why Choose Us */}
            <About />

            {/* Fleet Cards & Spec Comparisons */}
            <Fleet />

            {/* Route Pricing (4x4 & Normal Sightseeing) */}
            <TaxiServices />

            {/* Editorial Tour Packages (Winter Spiti, Custom roadtrips) */}
            <AdventurePackages />

            {/* Popular Destinations Guides Grid */}
            <Destinations />

            {/* CSS Bento Gallery */}
            

            {/* Touch Slide Testimonials Reviews */}
            <Testimonials />

            {/* Permitting & Customization Accordions */}
            <FAQ />

            {/* Embedded Google Maps, details, email form */}
            <Contact />
          </main>

          {/* Footer Info Desk */}
          <Footer />

          {/* Conversions Helpers */}
          <StickyMobileCTA />
          <FloatingWhatsApp />
        </div>
      )}
    </>
  );
}
