const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry:{
        app:path.resolve(__dirname,'src/index.js')
    },
    output:{
        //path es donde voy a guardar el archivo y filename es el nombre que se le va asignar
        path:path.resolve(__dirname,'dist'),
        filename:'js/[name].js',//[name] hace que automaticamente se le asigne el nombre que se le asigno en el entry.
        publicPath:'http://localhost:8080/',
        chunkFilename:'js/[id].[chunkhash].js'
    },
    mode:'development',
    devServer:{
        contentBase:path.resolve('http:localhost:8080/'),
        open:true,
        port:8080,
        hot:true,
    },

    //loader
    module:{
        rules:[
            {
                test:/\.css$/,//cuando encuentra un archivo css en js, uso los siguientes loaders:
                use:[
                    'style-loader',
                    'css-loader'//permite leer el css en el archivo js
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
                    loader:'file-loader',
                    options:{
                        outputPath:'assets/'
                    }
                }
            },
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'public/index.html'),
        })
    ]
} 