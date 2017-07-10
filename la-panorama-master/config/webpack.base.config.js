var path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    StyleLintPlugin = require('stylelint-webpack-plugin'),
    thumb = require('./thumbnails'),
    config = require('./config.json')
;
var stylelintFile = config.stylelintFile;

var titles = Object.keys(config.titles).reduce(function (result,item) {
    result[item] = config.mainTitle + config.titles[item];
    return result
},{})
thumb({
    source: path.resolve(__dirname,'../src/images/gallery'),
    destination: path.resolve(__dirname,'../src/images/thumbnails/gallery')
})

module.exports = {
    entry: Object.keys(titles).reduce(function (result,item) {
        result[item] = './src/pages/' + item + '/index.js'
        return result
    },{}),
    output: {
        filename: "[name].bundle-[hash].js",
        chunkFilename: "[id].bundle-[hash].js"
    },
  module: {
        rules: [
            {
                test: /\.(js|pug)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                options: {
                    formatter: require('eslint-friendly-formatter'),
                    fix: true
                }
            },
            {
                test: /\.js$/,
                use: ["babel-loader"],
                exclude: [/node_modules/, /build/]
            },
            {
                test: /\.(jade|pug)$/,
                use: ["pug-loader"],
                exclude: [/node_modules/]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 1 } }, // TODO: add minimize option in production
                        'postcss-loader',
                        'sass-loader',
                      { loader: 'stylefmt-loader', options: { config: stylelintFile } }
                    ]
                })
            },{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(gif|svg|png|jpe?g)$/i,
                loaders: [
                    'file-loader?name=./images/[hash].[ext]',
                    {
                        loader: 'image-webpack-loader',
                        query: {
                            mozjpeg: {
                                progressive: true,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            optipng: {
                                optimizationLevel: 4,
                            },
                            pngquant: {
                                quality: '75-90',
                                speed: 3,
                            },
                        }
                    }
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options:{
                    name: "./fonts/[name].[ext]",
                    limit: 8192
                }
            },
            {
                test: /\.mp4$/,
                loader: 'file-loader',
                options:{
                    name: "[name].[ext]"
                }
            }
        ]
    },
    plugins: Object.keys(titles).map(function (key) {
            return new HtmlWebpackPlugin({
                chunks: [key],
                template: './src/pages/' + key + '/index.pug',
                filename: key + '.html',
                title: titles[key]
            })
        }).concat([
        new ExtractTextPlugin('[name].style-[contenthash].css'), // TODO: fix bug with font require if font in another build directory
        new StyleLintPlugin({ configFile: stylelintFile})
    ])
};