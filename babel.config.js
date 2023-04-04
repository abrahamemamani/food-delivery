module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'nativewind/babel',
      {
        mode: 'compileOnly',
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          'components': './src/components/index',
          'screens': './src/screens/index',
        },
      },
    ]
  ],
};
