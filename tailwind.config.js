/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['barlow', ...fontFamily.sans],
        fraunces: ['fraunces', ...fontFamily.sans],
      },
      backgroundImage: {
        'text-gradient': 'linear-gradient(to bottom, #83888F, #FFFFFF)',
      },
    },
    screens: {
      tablet: '600px',
      desktop: '980px',
    },
    colors: {
      white: '#FFFFFF',
      'dark-cyan': '#0E8784',
      'light-cyan': '#66D2CF',
      'dark-grey-blue': '#333D4B',
      'darked-grey-blue': '#2C343E',
      'pale-orange': '#FDD6BA',
      'light-cream': '#FEFCF7',
      grey: '#83888F',
      disabled: '#E2DEDB',
    },
  },
  plugins: [],
};
