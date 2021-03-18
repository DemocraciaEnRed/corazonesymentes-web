const tailwind = require('tailwindcss');
const cssnano = require('cssnano');
const postcssImport = require('postcss-import');
const presetEnv = require('postcss-preset-env')({
  features: {
    'nesting-rules': true,
  },
});

const plugins =
  process.env.NODE_ENV === 'production'
    ? [postcssImport, tailwind("./tailwind.js"), presetEnv, cssnano]
    : [postcssImport, tailwind("./tailwind.js"), presetEnv];

module.exports = { plugins };
