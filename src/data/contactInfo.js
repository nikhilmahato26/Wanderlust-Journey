export const contactInfo = {
  businessName: "The Wanderlust Journeys",
  phone: "+91 93171 12634",
  phoneRaw: "919317112634",
  whatsapp: "919317112634",
  email: "info@thewanderlustjourneys.com",
  address: {
    line1: "Near Mall Road, Opposite Beas River",
    line2: "Manali, District Kullu",
    state: "Himachal Pradesh",
    pincode: "175131",
    country: "India"
  },
  operatingHours: "24/7 Available (All Days)",
  googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13506.015243171321!2d77.18047913374825!3d32.24445831627961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390487db9b89793f%3A0x19dfa996eb38c92a!2sManali%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  whatsappLink: (message = "Hello! I am interested in booking a vehicle with The Wanderlust Journeys. Please guide me.") => {
    return `https://wa.me/919317112634?text=${encodeURIComponent(message)}`;
  }
};
