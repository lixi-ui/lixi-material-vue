var path = require("path");
var webpack = require("webpack");

const { VueLoaderPlugin, default: loader } = require('vue-loader');

let externals = [
  {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
    },
  }
]

var config = {
  mode:"production",
  entry: path.resolve(process.cwd() , './src/index.js'),
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/',
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'LixiMaterialVue',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
    alias: {
      '@lixi': path.join(__dirname , '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        loader: 'babel-loader',
        options: {
          plugins: [
            "@vue/babel-plugin-jsx"
          ]
        }
      },
      {
        test: /\.(tsx?)$/,
        loader: 'babel-loader',
        options:{
          presets: [
            [
              "@babel/preset-typescript",
              {
                allExtensions: true,
                isTSX: true
              }
            ]
          ],
          plugins: [
            "@vue/babel-plugin-jsx"
          ]
        }
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false,
              },
            },
          },
          {
            loader: path.resolve(__dirname, '../site/md-loader/index.js'),
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 30,
              name: path.posix.join("static", 'img/[name].[ext]'),
              esModule: false
            }
          },
          // {
          //   loader: 'file-loader',
          //   options: {
          //     limit: 10,
          //     name: path.posix.join("static", 'img/[name].[hash:7].[ext]'),
          //     esModule: false
          //   }
          // },
        ]
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin()
  ],
  externals
}

webpack(config, function (err, data) {
  if(err){
    console.log(err)
  } else {
    console.log("build ok", data)
  }
})
