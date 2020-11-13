module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.tx',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    inset: {
      '0': 0,
      auto: 'auto',
      '2': '1.5rem',
      '3': '2.5rem'
    },
    extend: {
      colors: {
        'brand-gray': '#CCCCCC',
        'brand-gray-dark': '#AAAAAA',
        'brand-blue': '#94BFFF',
        'brand-blue-dark': '#61A0FF',
        'brand-red': '#ff4433',
        'brand-red-dark': '#d13a26'
      }
    },
  },
  variants: {

  },
  plugins: [],
};
