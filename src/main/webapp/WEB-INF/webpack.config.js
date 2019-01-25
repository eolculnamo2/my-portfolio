const path = require('path')

const browserConfig = {
    entry: './src/Index.js',
    output: {
        path: path.resolve('./assets/dist'),
        filename: 'bundle.js'
    },
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        publicPath: '/',
        compress: true,
        port: 3000,
        proxy: {
            '/': 'http://127.0.0.1:8080/'
          }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname,'src'),
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
}

const serverConfig = {
    entry: './src/server.js',
    output: {
        path: path.resolve('./public'),
        filename: 'serverbuild.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname,'src'),
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                }
            },
            {
                test: /\.scss$/,
                loader: 'css-loader!sass-loader'
            }
        ]
    }
}


module.exports = [browserConfig, serverConfig];