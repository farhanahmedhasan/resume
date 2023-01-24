/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },

      colors : {
        "primary-white" : "#ffffff",
        "primary-white-whale" : "#EDEEEF",
        "primary-black-boudoir" : "#464749",
        "primary-dark-charcoal" : "#313133",
        "primary-midnight-dreams" : "#001C2C",
        "primary-cormorant" : "#3F7167",
        "primary-alsot-olive" : "#DDD5B1",
      }
    },
  },
  
  plugins: [],
};
