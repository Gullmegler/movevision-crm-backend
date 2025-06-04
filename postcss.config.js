// postcss.config.js
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes';

export default {
  plugins: {
    tailwindcss,
    autoprefixer,
    'postcss-flexbugs-fixes': {},
  },
};
