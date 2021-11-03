const path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),                         // arquivo de entrada da aplicação
    output: {
        path: path.resolve(__dirname, 'dist'),                                  // pasta onde sera gerada o bundle
        filename: 'bundle.js'                                                   // nome do arquivo do bundle
    },
    resolve: {
        extensions: ['.js', '.jsx'],                                            // extenções que o webpack deve resolver dentro da aplicação
    },
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