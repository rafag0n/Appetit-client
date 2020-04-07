const htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
        stats: {
            children: false,
            maxModules: 0
        },
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test:  /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test:  /\.css$/,
                use: ["css-loader", "style-loader"]
            },
            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader', {
                    loader: 'sass-resources-loader',
                    options: {
                        resources: ['./src/public/sass/vars.scss']
                    }
                }]
            },
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: 'svg-url-loader',
                    options: {
                      limit: 10000,
                    },
                  },
                ],
            },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/public/index.html",
            filename: "./index.html"
        })
    ]
}