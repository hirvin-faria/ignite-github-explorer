const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevelopment ? 'development' : 'production',                         // configuracao de ambiente de desenvolvimento ou producao do webpack
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',                  // configuracao de source map do projeto
    entry: path.resolve(__dirname, 'src', 'index.jsx'),                         // arquivo de entrada da aplicação
    output: {
        path: path.resolve(__dirname, 'dist'),                                  // pasta onde sera gerada o bundle
        filename: 'bundle.js'                                                   // nome do arquivo do bundle
    },
    resolve: {
        extensions: ['.js', '.jsx'],                                            // extenções que o webpack deve resolver dentro da aplicação
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'public'),                       // configuração do servidor de desenvolvimento do webpack
        },
        hot: true,
    },
    plugins: [
        isDevelopment && new ReactRefreshWebpackPlugin(),                       // configura o plugin React Refresh Webpack Plugin
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')           // injeta o script de importacao do bundle.js dentro do index.html
        })
    ].filter(Boolean),
    module: {                                                                   // configuração/regras para resolução de arquivos do webpack
        rules: [
            {
                test: /\.jsx$/,                                                 // expressao regular para identificar o arquivo
                exclude: /node_modules/,                                        // expressao regular de arquivos a ser excluidos
                use: {
                    loader: 'babel-loader',                                     // plugin do babel para integração do webpack
                    options: {
                        plugins: [
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                }                                             
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use:['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use:['style-loader', 'css-loader', 'sass-loader']
            }
        ],
    }
};