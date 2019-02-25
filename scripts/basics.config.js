'use strict';
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const webpack = require('webpack');
const path = require('path');
const rootDir = path.resolve(__dirname, '..');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = function(userConfig = {}, isDev = true) {
  const limit = userConfig.limit || 1;
  const assetsPath = userConfig.assetsPath || 'static';
  const jsFileName = '[name].js';
  const cssFileName = '[name].css';
  const picName = '[name].[ext]';
  return {
    target: 'web',
    mode: isDev ? 'development' : 'production',
    performance: {
      hints: false
    },
    output: {
      path: path.posix.join(rootDir, 'dist'),
      publicPath: './',
      filename: path.posix.join(assetsPath, jsFileName),
      chunkFilename: path.posix.join(assetsPath, jsFileName)
    },
    resolve: {
      extensions: ['.js', '.json', '.vue', '.css'],
      alias: {
        'vue': 'vue/dist/vue.esm.js'
      }
    },
    module: {
      rules: [
        {
          test: /\.otf|ttf|woff|woff2|eot|svg(\?\S*)?$/,
          loader: 'url-loader',
          options: {
            limit,
            name: path.posix.join(assetsPath, picName)
          }
        },
        {
          test: /\.(gif|png|jpe?g)(\?\S*)?$/,
          loader: 'url-loader',
          options: {
            limit: limit,
            name: path.posix.join(assetsPath, picName)
          }
        },
        {
          test: /\.html$/,
          loaders: ['html-loader?minimize=false'],
          exclude: /node_modules|bower_components/
        },
        {
          test: /\.css$/,
          use: isDev ? [
            'style-loader',
            'css-loader',
            'postcss-loader'
          ] : [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../'
              }
            },
            'css-loader',
            'postcss-loader',
          ]
        },
        {
          test: /\.json$/,
          use: ['json-loader'],
          exclude: /node_modules|bower_components/
        }, {
          test: /\.(jsx?|babel|es6)$/,
          exclude: /node_modules|bower_components/,
          loaders: ['babel-loader?cacheDirectory=true']
        },
        {
          test: /\.less$/,
          use: isDev ? ['style-loader', 'css-loader',
            'less-loader',
            'postcss-loader'] : [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '../'
                }
              },
              'css-loader',
              'postcss-loader',
              'less-loader'
            ]
        },
        {
          test: /\.vue$/,
          use: [
            {
              loader: 'vue-loader',
              options: {
                compilerOptions: {
                  preserveWhitespace: false
                }
              }
            }
          ],
          exclude: /node_modules|bower_components/
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new CaseSensitivePathsPlugin(),
      new ProgressBarPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: isDev ? '"development"' : '"production"'
        }
      }),
      new MiniCssExtractPlugin({
        name: 'common',
        filename: path.posix.join(assetsPath, cssFileName)
      }),
      new webpack.optimize.SplitChunksPlugin({
        chunks: 'async',
        minSize: 30000,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          main: {
            name: 'common',
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          // 设置多个缓存规则
          vendor: {
            test: /\.js$/,
            chunks: 'all',
            name: 'common',
            // 表示缓存的优先级
            priority: 10,
            enforce: true
          },
          styles: {
            name: 'common',
            test: /\.(css|scss|less)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }),
      ...((!isDev)
        ? [
          new OptimizeCss({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
              discardComments: {
                removeAll: true
              },
              autoprefixer: {
                remove: false
              }
            },
            canPrint: true
          }),
          // 并行压缩js
          new ParallelUglifyPlugin({
            uglifyJS: {
              output: {
                comments: false
              },
              compress: {
                warnings: false
              }
            }
          })
        ]
        : []
      )
    ],
    node: {
      dgram: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty'
    }
  };
};
