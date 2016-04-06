/**
 * webpack config
 */

module.exports = {
    entry: './html/test/react/test',
    output: {
        filename: './html/test/react/test-bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['es2015']
            }
        }]
    }
};
