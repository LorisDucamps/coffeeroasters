/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend : {
      fontFamily: {
        barlow: ['barlow', ...fontFamily.sans],
        fraunces: ['fraunces', ...fontFamily.sans],
      },
    },
    colors: {
      'white': '#FFFFFF',
      'dark-cyan' : '#0E8784',
      'light-cyan': '#66D2CF',
      'dark-grey-blue': '#333D4B',
      'pale-orange' : '#FDD6BA',
      'light-cream' : '#FEFCF7',
      'grey' : '#83888F'
    },
  },
  plugins: [],
};
