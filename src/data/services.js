export const services = [
  {
    id: "self-drive",
    title: "Self Drive Car Rental",
    description: "Take the wheel of a premium 4x4 SUV and explore the winding roads of Himachal at your own pace. Absolute privacy and freedom.",
    icon: "GiSteeringWheel",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "4x4-taxi",
    title: "4x4 Taxi Service",
    description: "Conquer tough terrains and high-altitude passes like Rohtang, Shinkula, and Baralacha in rugged 4x4 SUVs driven by seasoned mountain drivers.",
    icon: "GiCompass",
    image: "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "normal-taxi",
    title: "Normal Taxi Service",
    description: "Reliable and comfortable local cab rides for sightseeing, airport transfers, hotel pickup, and drop-offs across Manali.",
    icon: "FaTaxi",
    image: "https://images.unsplash.com/photo-1492664738948-2ec93a5c0942?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "local-sightseeing",
    title: "Local Sightseeing",
    description: "Fully customized half-day and full-day tours covering Hadimba Temple, Vashisht Temple, Solang Valley, and Old Manali markets.",
    icon: "FaMapMarkedAlt",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "adventure-tours",
    title: "Adventure Tours",
    description: "Thrill-seeking travel plans including paragliding at Solang, river rafting in Kullu, camping under the stars, and hiking trails.",
    icon: "GiMountainClimbing",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "high-altitude",
    title: "High Altitude Expeditions",
    description: "Fully planned, safety-first driving expeditions to extreme elevations including Baralacha Pass, Shinkula Pass, and Zanskar.",
    icon: "GiMountainCave",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  }
];

export const taxiServices4x4 = [
  {
    id: "rohtang",
    route: "Manali → Rohtang Pass",
    type: "4x4 Taxi Service",
    price: "7,000",
    description: "Explore the legendary snow-covered gateway of Rohtang Pass at 13,058 ft. Permit arrangements and high-clearance 4x4 vehicles included.",
    duration: "Full Day Trip",
    includes: ["Permit Assistance", "Hotel Pickup & Drop", "Experienced Snow Driver", "4x4 SUV Mode Activated"]
  },
  {
    id: "shinkula",
    route: "Manali → Shinkula Pass",
    type: "4x4 Taxi Service",
    price: "12,000",
    description: "Journey to the spectacular border pass between Himachal and Ladakh at 16,580 ft. Witness the magnificent Gumbo Ranjan peak.",
    duration: "Full Day Trip",
    includes: ["High Altitude Safety Gear", "Mountain Expert Driver", "Premium 4x4 Thar/Scorpio", "Hotel Pickup & Drop"]
  },
  {
    id: "baralacha",
    route: "Manali → Baralacha Pass",
    type: "4x4 Taxi Service",
    price: "12,000",
    description: "Cross the high mountain pass on the Leh-Manali highway at 16,040 ft, connecting Lahaul and Ladakh. Suraj Tal lake visit included.",
    duration: "Full Day Trip",
    includes: ["Oxygen Cylinder Support", "All Pass Permits", "Experienced Highway Driver", "Premium 4x4 SUV"]
  }
];

export const normalTaxiServices = [
  {
    id: "manali-local",
    title: "Manali Local Sightseeing",
    description: "Hadimba Temple, Club House, Tibetan Monastery, Vashisht Hot Springs, and Mall Road.",
    offers: ["One Day Trip", "Family Friendly", "Flexible Timings"]
  },
  {
    id: "atal-tunnel",
    title: "Atal Tunnel Tour",
    description: "Drive through the world's longest highway tunnel above 10,000 ft and witness the landscape change instantly.",
    offers: ["One Day Trip", "Customized Packages", "Couple Friendly"]
  },
  {
    id: "sissu",
    title: "Sissu Day Trip",
    description: "Cross the Atal Tunnel to visit the breathtaking Sissu Waterfall and Beas River bank in Lahaul Valley.",
    offers: ["Full Day Tour", "Group Packages", "Waterfall Trekking"]
  },
  {
    id: "kullu",
    title: "Kullu Day Tour",
    description: "Visit Kullu shawl factories, Vaishno Devi temple, and experience Beas River white water rafting.",
    offers: ["One Day Family Trip", "Adventure Inclusive", "Shopping Stop"]
  },
  {
    id: "manikaran",
    title: "Manikaran Sahib Tour",
    description: "Journey into Parvati Valley to visit the famous hot springs and Gurudwara Manikaran Sahib.",
    offers: ["Full Day Tour", "Customized Stopover", "Family Tour"]
  }
];

export const taxiFleet = [
  {
    id: "dzire",
    name: "Suzuki Swift Dzire",
    type: "Sedan (AC)",
    capacity: "4+1 Passengers",
    description: "Highly fuel-efficient and comfortable, perfect for couple trips, local sightseeing, and clean highway drives.",
    image: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/141899/swift-exterior-right-front-three-quarter.jpeg?isig=0&q=80"
  },
  {
    id: "ertiga",
    name: "Maruti Suzuki Ertiga",
    type: "MUV (AC)",
    capacity: "6+1 Passengers",
    description: "Budget-friendly family option with ample seating and luggage space, ideal for sightseeing and outstation packages.",
    image: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/115477/ertiga-exterior-right-front-three-quarter.jpeg?isig=0&q=80"
  },
  {
    id: "innova-crysta",
    name: "Toyota Innova Crysta",
    type: "Premium MUV (AC)",
    capacity: "7+1 Passengers",
    description: "The gold standard of premium long-distance travel, offering exceptional luxury, space, and ultimate suspension comfort.",
    image: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/134287/innova-crysta-exterior-right-front-three-quarter.jpeg?isig=0&q=80"
  },
  {
    id: "tempo-traveller",
    name: "Force Tempo Traveller",
    type: "Luxury Group Coach",
    capacity: "12 - 17 Passengers",
    description: "Perfect for larger groups, corporate treks, and big families. Equipped with pushback seats, screen entertainment, and ample boot space.",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Force-Motors/Tempo-Traveller/11536/1715837691896/front-left-side-47.jpg"
  },
  {
    id: "jimny-taxi",
    name: "Maruti Jimny 4x4",
    type: "Rugged 4x4 Taxi",
    capacity: "4 Passengers",
    description: "Compact 4x4 SUV driven by mountain experts. Perfect for narrow high-altitude passes, mud trails, and couple sightseeing.",
    image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Jimny/6182/1784178896232/front-left-side-47.jpg"
  },
  {
    id: "scorpio-n-taxi",
    name: "Mahindra Scorpio N 4x4",
    type: "Premium 4x4 SUV Taxi",
    capacity: "6/7 Passengers",
    description: "Conquer snow, sand, and mountains in style. Premium luxury seating coupled with advanced 4XPLOR terrain modes.",
    image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-11.jpeg?isig=0&q=80&q=80"
  },
  {
    id: "thar-taxi",
    name: "Mahindra Thar 4x4",
    type: "Rugged Offroad 4x4 Taxi",
    capacity: "4 Passengers",
    description: "The ultimate mountain legend. Prepare to climb snow banks and cross severe streams with zero hesitation.",
    image: "https://imgd.aeplcdn.com/1200x900/n/cw/ec/143951/mahindra-thar-right-front-three-quarter0.jpeg?isig=0&wm=0"
  }
];
