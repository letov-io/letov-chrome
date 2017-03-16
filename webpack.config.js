module.exports = {
  entry: './index.js',
  output: {
    path: `${__dirname}/letov`,
    filename: 'letov.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ],
  }
};