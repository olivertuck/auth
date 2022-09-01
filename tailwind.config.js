const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        body: colors.gray[800],
        danger: colors.red[600],
        muted: colors.gray[500],
        primary: colors.indigo[600],
      },
    },
  },
};
