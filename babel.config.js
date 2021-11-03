module.exports = {
    presets: [
        '@babel/preset-env',
        ['@babel/preset-react', { 
            runtime: 'automatic'                                                // configura para que não seja nescessario importar explicitamente o react
        }]
    ]
};