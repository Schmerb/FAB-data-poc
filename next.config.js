module.exports = {
  webpack: (config) => {
    config.resolve.modules.push('./src'); // resolve root imports

    return config;
  },
  exportPathMap: () => {
    let pathMap = {};

    // insert code that generates routes

    return pathMap;
  },
};
