/**
 * webpack config
 */
var webpack = require('webpack');

module.exports = {
    entry: [
        // './html/test/react/like.jsx',
        // './html/test/react/list.jsx'
        './html/redux/test.js'
    ],
    output: {
        // filename: './html/react/main-bundle.js'
        filename: './html/redux/main-bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.js|jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React',
        'react-dom': 'ReactDOM',
        'redux': 'Redux'
    }
};
