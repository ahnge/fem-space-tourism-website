module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        belle: ["Bellefair", "serif"],
        barlow: ["Barlow Condensed", "sans-serif"],
      },
      colors: {
        pur: "#D0D6F9",
        milk: "#FFFFFF",
        space: "#0B0D17  ",
      },
      screens: {
        xll: "1440px",
        extral: "1920px",
      },
      backgroundImage: {
        "home-mobile": "url('./assets/home/background-home-mobile.jpg')",
        "home-teblet": "url('./assets/home/background-home-tablet.jpg')",
        "home-desktop": "url('./assets/home/background-home-desktop.jpg')",
        "destination-mobile":
          "url('./assets/destination/background-destination-mobile.jpg')",
        "destination-teblet":
          "url('./assets/destination/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('./assets/destination/background-destination-desktop.jpg')",
        "crew-mobile": "url('./assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('./assets/crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('./assets/crew/background-crew-desktop.jpg')",
        "tech-mobile":
          "url('./assets/technology/background-technology-mobile.jpg')",
        "tech-tablet":
          "url('./assets/technology/background-technology-tablet.jpg')",
        "tech-desktop":
          "url('./assets/technology/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
