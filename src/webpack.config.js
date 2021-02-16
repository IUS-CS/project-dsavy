const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  "entry": './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index_bundle.js',
<<<<<<< HEAD
=======
    publicPath: '/'
>>>>>>> ffee40b1a23aedabd31e5c2d165fd41d9988fee6
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'), 'node_modules'
    ],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [{
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
<<<<<<< HEAD
  mode: 'development',
=======
  devServer: {
    historyApiFallback: true,
  },
>>>>>>> ffee40b1a23aedabd31e5c2d165fd41d9988fee6
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
  ],
<<<<<<< HEAD
=======
  mode: 'development'
>>>>>>> ffee40b1a23aedabd31e5c2d165fd41d9988fee6
};