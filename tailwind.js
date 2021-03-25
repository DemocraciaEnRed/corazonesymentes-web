module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.svelte', './src/**/*.html'],
    options: {
      keyframes: true,
      // considers dynamic class bindings when purging unused classes
      // credit: https://github.com/matebek https://dev.to/matebek
      defaultExtractor: (content) => [
        ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
        ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "800px",
        xl: "1200px"
      },
    },
    extend: {},
    fontFamily: {
      'sans': ['Circular', 'Helvetica', 'Arial', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
