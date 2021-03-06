/**
 * webpack config
 */
var webpack = require('webpack');

module.exports = {
    entry: {
        // 'main-bundle': [
        //     './html/react/like.jsx',
        //     './html/react/list.jsx'
        // ]
        // '05_combine-reducers': './html/redux/05_combine-reducers.js',
        // '08_dispatch-async-action': './html/redux/08_dispatch-async-action.js',
        // '10_state-subscriber': './html/redux/10_state-subscriber.js'
        // 'index': './html/printer/index.js'
        // 'index': './html/todos-redux/index.jsx'
        // 'index': './html/async-action/index.jsx'
        // 'index': './html/router/index.jsx'
        // 'index': './html/router-redux/index.jsx'
        'index': './html/test/index.js'
    },
    output: {
        filename: '[name].js',
        // path: './html/react'
        // path: './html/redux/dist'
        // path: './html/printer/dist'
        // path: './html/todos-redux/dist'
        // path: './html/async-action/dist'
        // path: './html/router-redux/dist'
        path: './html/test/dist'
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
                plugins: ['transform-object-rest-spread'],
                presets: ['react', 'es2015']
            }
        }]
    },
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React',
        'react-dom': 'ReactDOM',
        'redux': 'Redux',
        'react-redux': 'ReactRedux',
        'react-router': 'ReactRouter'
    },
    // add this handful of plugins that optimize the build
    // when we're in production
    plugins: process.env.NODE_ENV === 'production' ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ] : []
};
