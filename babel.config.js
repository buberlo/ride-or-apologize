module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // If you add react-native-reanimated for guilt-meter animations,
      // uncomment this and keep it as the last plugin in the list.
      // 'react-native-reanimated/plugin',
    ],
  };
};