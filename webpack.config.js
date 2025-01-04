const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    '@assets': path.resolve(__dirname, 'src/assets'),
  }),
  config => {
    const oneOfRule = config.module.rules.find(rule => rule.oneOf);
    if (oneOfRule) {
      oneOfRule.oneOf.unshift({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
    }
    return config;
  }
);