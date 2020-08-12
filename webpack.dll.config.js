const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry:{
        //DEPENDENCIAS QUE QUEREMOS QUE CARGUEN SOLO UNA VEZ Y SE GUARDEN EN EL CACHE DEL BROWSER
        modules:[
           'react',
           'react-dom',
           'react-router-dom'
        ] 
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'js/[name].js',
        library:'[name]'
    },
    mode:'production',
    plugins:[
        //DONDE SE VA GUARDAR NUESTRO JSON CON LA CONFIGURACION INDICADA PARA QUE NO SE CARGUE DE NUEVO LAS LIBRERIAS
        new webpack.DllPlugin({
            name:'[name]',
            path:path.join(__dirname,'[name]-manifest.json')
        })
    ],
} 