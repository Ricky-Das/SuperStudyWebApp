/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
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
=======
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
>>>>>>> 9da698d (Initial commit from Create Next App)
      },
    },
  },
  plugins: [],
<<<<<<< HEAD
};
=======
}
>>>>>>> 9da698d (Initial commit from Create Next App)
