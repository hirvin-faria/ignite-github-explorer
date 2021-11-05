module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',                                             // plugin para o babel entendo typescritpt
        ['@babel/preset-react', { 
            runtime: 'automatic'                                                // configura para que não seja nescessario importar explicitamente o react
        }]
    ]
};