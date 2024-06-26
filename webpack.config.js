const path = require('path');
const loader = require('sass-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    mode: 'development',
    entry: {
      main: path.resolve(__dirname,'src/index.js')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name][contenthash].js',
      clean: true,
      assetModuleFilename: '[name][ext]'
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist')
      },
      port: 3000,
      open: true,
      hot: true,
      compress: true,
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            } 
          }
        },
        {
          test: /\.(png|svg|jpg|jpeg|svg)$/i,
          type: 'asset/resource'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Nodeapp',
        filename: 'index.html',
        template: './src/template.html'
      }),
      new BundleAnalyzerPlugin()
    ]
  };