const webpack = require('webpack');
const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@context': path.resolve(process.cwd(), 'src/AppContext.js'),
      '@stores': path.resolve(process.cwd(), 'src/common/stores'),
      '@components': path.resolve(process.cwd(), 'src/common/components'),
      '@blocks': path.resolve(process.cwd(), 'src/common/blocks'),
      '@constants': path.resolve(process.cwd(), 'src/common/constants'),
      '@models': path.resolve(process.cwd(), 'src/common/models'),
      '@pages': path.resolve(process.cwd(), 'src/common/pages'),
      '@config': path.resolve(process.cwd(), 'src/common/config'),
      '@layouts': path.resolve(process.cwd(), 'src/common/layouts'),
      '@': path.resolve(process.cwd(), 'src/common'),
      '@stubs': path.resolve(process.cwd(), 'src/common/stubs'),
      '@utils': path.resolve(process.cwd(), 'src/common/utils'),
      '@hooks': path.resolve(process.cwd(), 'src/common/hooks'),
      '@assets': path.resolve(process.cwd(), 'src/assets'),
      '@styles': path.resolve(process.cwd(), 'src/common/stylesheets'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: '@linaria/webpack-loader',
            options: {
              sourceMap: true,
            },
          }
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)(\?.*$|$)/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        stylus: {
          import: [
            path.resolve(process.cwd(), './src/common/stylesheets/variables.styl'),
            path.resolve(process.cwd(), './src/common/stylesheets/mixins.styl'),
            path.resolve(process.cwd(), './src/common/stylesheets/global.styl'),
          ],
        },
      },
    }),
  ],
};
