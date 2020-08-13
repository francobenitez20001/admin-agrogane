const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry:{
        app:path.resolve(__dirname,'src/index.js')
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'js/[name].js',
        publicPath:process.env.PUBLIC_PATH,
        chunkFilename:'js/[id].[chunkhash].js'
    },
    mode:'production',
    module:{
        rules:[
            {
                test:/\.css$/,//cuando encuentra un archivo css en js, uso los siguientes loaders:
                use:[
                    {
                        loader:MiniCSSExtractPlugin.loader
                    },
                    'css-loader'
                ]
            },
            {
                test:/\.js$/,//cuando encuentra un archivo js, uso los siguientes loaders:
                use:'babel-loader',
                exclude: '/node_modules/',//que ignore la compilacion de los archivos de esta carpeta
            },
            {
                test:/\.jpg|png|jpeg|gif|woff|eot|ttf|svg|mp4|webm$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:1000 //limite de bytes que soporta, si supera ya no lo pasa a base64.
                    }
                }
            },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'public/index.html'),
        }),
        new MiniCSSExtractPlugin({
            filename:'css/[name].css',
            chunkFilename:'css/[id].css'
        }),
        new webpack.DllReferencePlugin({
            manifest:require('./modules-manifest.json'),
            context:path.resolve(__dirname,'src')
        })
    ]
}