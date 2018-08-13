let mix = require('laravel-mix');
const CopyWebpackPlugin = require('copy-webpack-plugin')
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/Main.js', 'public/js')
    .js('resources/assets/js/Obj-tree.js', 'public/js')
    .js('resources/assets/js/Auth.js', 'public/js')
    .js('resources/assets/js/Register.js', 'public/js')
    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve('resources/assets/sass')
            }
        },
        plugins: [
            new CopyWebpackPlugin([
                { from: 'resources/assets/js/functions.js', to: 'js' },
            ]),
        ],
    })
   .sass('resources/assets/sass/app.scss', 'public/css').extract(['vue','vuetify']);
