var webpack = require('webpack')
var path = require('path')
var BundleAnalyzerPlugin = require(
  'webpack-bundle-analyzer'
).BundleAnalyzerPlugin
var StatsPlugin = require('./webpack.stats.plugin')
var OptimizeJsPlugin = require('optimize-js-plugin')
var customAlias = require('../../build.config')

var outputPath = path.join(__dirname, '../../dest')
var alias = Object.assign({}, customAlias)
var entry = {
  index: path.join(__dirname, '../entry/client'),
  vendor: [
    'react',
    'react-dom',
    'relite',
    'create-app',
    'classnames',
    'querystring',
    'babel-polyfill',
    'whatwg-fetch'
  ]
}
var output = {
  path: outputPath,
  filename: `[name].js`,
  chunkFilename: '[name].js'
}

var plugins = [
  new StatsPlugin('stats.json'),
  // new webpack.optimize.OccurrenceOrderPlugin(false),
  // extract vendor chunks for better caching
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity
  }),
  new webpack.optimize.CommonsChunkPlugin({
    children: true,
    minChunks: 5
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(
      process.env.NODE_ENV || 'development'
    )
  })
]
var watch = true
var devtool = '#source-map'

if (process.env.NODE_ENV === 'production') {
  devtool = ''
  output = {
    path: outputPath,
    filename: '[name]-[hash:6].js',
    chunkFilename: '[name]-[chunkhash:6].js'
  }
  plugins = plugins.concat([
    // banner
    // new webpack.BannerPlugin(banner),
    new webpack.optimize.DedupePlugin(),
    // minify JS
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new OptimizeJsPlugin({
      sourceMap: false
    })
  ])
  watch = false
}

if (process.env.SHOW === 'yes') {
  plugins = plugins.concat([
    new BundleAnalyzerPlugin({
      // Automatically open analyzer page in default browser
      openAnalyzer: true,
      // Analyzer HTTP-server port
      analyzerPort: 8090
    })
  ])
}

module.exports = {
  watch: watch,
  devtool: devtool,
  entry: entry,
  output: output,
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, '../../node_modules/react-imvc'),
          path.resolve(
            __dirname,
            `../../node_modules/.${require('../package').version}@react-imvc`
          )
        ]
      }
    ],
    postLoaders: [
      {
        test: /controller\.jsx?$/,
        loader: 'bundle-loader',
        query: {
          lazy: true,
          name: 'app-[1]/js/[folder]',
          regExp: /[\/\\]app-([^\/\\]+)[\/\\]/.source
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins: plugins,
  resolve: {
    extensions: ['', '.js'],
    root: __dirname,
    alias: alias
  }
}