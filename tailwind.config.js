/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: { "./src/**/*.{js,ts,jsx,tsx,mdx}": [] }, // './src/**/*.{js,ts,jsx,tsx,mdx}
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      defaultColors: {
        accent1: "#7DB54C",
        accent2: "#344727",
        "primary-bg-color": "#FFFFFF",
        grey: "#808080",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["DM Serif Display", "serif"],
      },
    },
  },
  plugins: [],
};
