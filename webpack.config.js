const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',                                                        // configuracao de ambiente de desenvolvimento ou producao do webpack
    devtool: 'eval-source-map',                                                 // configuracao de source map do projeto
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
            directory: path.resolve(__dirname, 'public'),                         // configuração do servidor de desenvolvimento do webpack
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')           // injeta o script de importacao do bundle.js dentro do index.html
        })
    ],
    module: {                                                                   // configuração/regras para resolução de arquivos do webpack
        rules: [
            {
                test: /\.jsx$/,                                                 // expressao regular para identificar o arquivo
                exclude: /node_modules/,                                        // expressao regular de arquivos a ser excluidos
                use: 'babel-loader'                                             // plugin do babel para integração do webpack
            },
        ],
    }
};