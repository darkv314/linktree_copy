import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#633cff',
        'primary-light': '#beadff',
        'primary-extra-light': '#efebff',
        black: '#333333',
        gray: '#737373',
        'gray-light': '#d9d9d9',
        'gray-extra-light': '#fafafa',
        red: '#ff3939',
        blue: '#326BFD',
      },
      fontFamily: {
        'Instrument-Sans': ['Instrument Sans', 'sans-serif'],
      },
      boxShadow: {
        purple: '0px 0px 5px 1px #633cff',
      },
    },
  },
  plugins: [],
} satisfies Config;
