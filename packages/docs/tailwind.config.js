// $primary-100: #E2EEFF;
// $primary-200: #C9DFFF;
// $primary-300: #96C0FF;
// $primary-400: #68A5FF;
// $primary-500: #3083FF;
// $primary-600: #2B76E6;
// $primary-700: #005BE2;
// $primary-800: #0051C9;
// $primary-900: #0046AF;

module.exports = {
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      primary: {
        100: '#E2EEFF',
        200: '#C9DFFF',
        300: '#96C0FF',
        400: '#68A5FF',
        500: '#3083FF',
        600: '#2B76E6',
        700: '#005BE2',
        800: '#0051C9',
        900: '#0046AF',
      },

      // ...
    },
  },
  content: [
    './src/**/*.{html,js,vue,ts,md}',
    './src/.vitepress/**/*.{html,js,vue,ts,md}',
  ],
};
