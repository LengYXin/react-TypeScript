const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const data = require('./data');
const extractSASS = new ExtractTextPlugin('styles-one.css');
const extractCSS = new ExtractTextPlugin('styles-two.css');
module.exports = evn => {
    //evn.Development= true 为 开发环境
    evn.Development = evn.Development == "true"
    console.log(`------------------- ${evn.Development?'开发':'生产'}环境 -------------------`);
    let plugins = [
        //全局变量
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Tether: 'tether'
            // plupload: "plupload"
        }),
        // new ExtractTextPlugin('styles.css'), //生成对应的css文件
        extractSASS,
        extractCSS,
        // 注明共享 层次关系 app- > vendor- > polyfills
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),
        // 把生成的文件插入到 启动页中
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CopyWebpackPlugin([{
            from: 'node_modules/babel-polyfill/dist/polyfill.min.js',
            to: 'assets/js/polyfill.min.js'
        }]),
    ];
    // 生产环境添加压缩插件
    evn.Development ? undefined : plugins.push(new UglifyJSPlugin({
        warning: false,
        mangle: true,
        compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true
        }
    }));
    return {
        entry: {
            'vendor': './src/vendor.ts', //第三方依赖
            'app': './src/index.tsx' //应用程序
        },
        output: {
            path: __dirname + '/www',
            publicPath: '/',
            filename: '[name].js',
            chunkFilename: '[id].chunk.js'
        },
        // 启动 dev-server 的服务配置
        devServer: {
            // contentBase: "www", //本地服务器所加载的页面所在的目录
            inline: true, //检测文件变化，实时构建并刷新浏览器
            port: "8012",
            // https: true,
            proxy: {

            },
            //404 页面返回 index.html 
            historyApiFallback: true,
            setup(app) { //模拟数据
                data(app);
            }
        },
        // 生成环境 生成 map 文件  
        devtool: evn.Development ? 'source-map' : 'nosources-source-map',
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"]
        },
        module: {
            rules: [{
                    test: /\.css$/,
                    use: extractCSS.extract({
                        fallback: "style-loader",
                        // 生产环境 不生成map 且压缩css
                        use: `css-loader?sourceMap=${evn.Development}&minimize=${!evn.Development}`
                    })
                },
                {
                    // 这个只处理 bootstrap 等源文件 如果需要项目中使用可以在配置一个
                    test: /\.scss$/,
                    include: path.resolve(__dirname, "assets"), //只包含 assets目录
                    use: extractSASS.extract({
                        fallback: 'style-loader',
                        // 生产环境 不生成map 且压缩css
                        use: [`css-loader?sourceMap=${evn.Development}&minimize=${!evn.Development}`, 'sass-loader']
                    })
                },
                {
                    test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                    loader: 'url-loader?limit=50000&name=[path][name].[ext]'
                },
                {
                    test: /\.tsx?$/,
                    loader: 'awesome-typescript-loader',
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                },
            ]
        },
        plugins: plugins,

    }
}