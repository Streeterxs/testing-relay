module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
  plugins: [
    [
      'relay',
      {
        schema: 'data/schema.graphql',
      },
    ],
    "@babel/plugin-transform-runtime"
  ]
};