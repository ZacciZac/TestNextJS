/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        whitesmoke: { "100": "#ebeef2", "200": "#eaeaea" },
        orange: "#f99a0e",
        darkorange: "#dc880b",
        peru: "#9e6104",
        "primary-contrast": "#fff",
        "studio-lightmode-midseparator-dee3eb": "#dee3eb",
        slategray: "#576074",
        darkslategray: "#434343",
        "studio-darkmode-normalsolid-icons-96a2be": "#96a2be",
        dimgray: "#495367",
        "studio-lightmode-lightseparator-ecf0f6": "#ecf0f6",
        "studio-darkmode-exportbg-1a202e": "#1a202e",
        "studio-darkmode-maincta-457eff": "#457eff",
      },
      fontFamily: {
        "components-button-large": "Roboto",
        poppins: "Poppins",
        "source-code-pro": "'Source Code Pro'",
        alegreya: "Alegreya",
        display: ["var(--font-sf)", "system-ui", "sans-serif"],
        default: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: { "3xs": "10px" },
      animation: {
        // Tooltip
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        // Tooltip
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
    fontSize: {
      mini: "15px",
      xl: "20px",
      lg: "18px",
      "3xl": "22px",
      sm: "14px",
      mid: "17px",
      base: "16px",
      "7xl": "26px",
    },
    screens: { md: { max: "960px" }, sm: { max: "420px" } },
  },
  corePlugins: { preflight: false },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    plugin(({ addVariant }) => {
      addVariant("radix-side-top", '&[data-side="top"]');
      addVariant("radix-side-bottom", '&[data-side="bottom"]');
    }),
  ],
};
