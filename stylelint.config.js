module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-css-modules'],
  plugins: ['stylelint-no-unused-selectors', 'stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true,
    'plugin/no-unused-selectors': true
  }
};
