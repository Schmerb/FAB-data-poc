require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

module.exports = withImages(
  withCSS({
    webpack: (config) => {
      config.plugins = config.plugins || [];
      config.plugins = [
        ...config.plugins,

        // Read the .env file
        new Dotenv({
          path: path.join(__dirname, '.env'),
          systemvars: true,
        }),
      ];

      config.resolve = {
        ...(config.resolve || {}),
        alias: {
          ...(config.resolve.alias || {}),
          'react-spring$': 'react-spring/web.cjs',
          'react-spring/renderprops$': 'react-spring/renderprops.cjs',
        },
      };
      return config;
    },
  }),
);

// module.exports = {
//   webpack: (config) => {
//     config.resolve.modules.push('./src'); // resolve root imports

//     return config;
//   },
//   exportPathMap: () => {
//     let pathMap = {};

//     // insert code that generates routes

//     return pathMap;
//   },
// };
