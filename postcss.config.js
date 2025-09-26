export default {
  plugins: {
    'postcss-input-range': {},
    'postcss-preset-env': {
      stage: 2,
      enableClientSidePolyfills: false,
      features: {
        'custom-selectors': true
      },
    },
  },
};
