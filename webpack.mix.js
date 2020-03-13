let mix = require('laravel-mix');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
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

mix.js('resources/assets/js/main/Main.js', 'public/js')
	.js('resources/assets/js/main/Obj-tree.js', 'public/js')
	.js('resources/assets/js/main/Obj-view.js', 'public/js')
	.js('resources/assets/js/main/Auth.js', 'public/js')
	.js('resources/assets/js/main/Register.js', 'public/js')
	.webpackConfig({
		resolve: {
			alias: {
				'@': path.resolve('resources/assets/sass')
			}
		},
		plugins: [
			new CopyWebpackPlugin([
				{ from: 'resources/assets/js/helpers/functions.js', to: 'js' },
				{ from: 'node_modules/vanilla-masker/build/vanilla-masker.min.js', to: 'js' },
			]),
			new VuetifyLoaderPlugin(),
		],
	})
   .sass('resources/assets/sass/app.scss', 'public/css')
   .extract(['vue','vuetify','vue-axios','axios','vuex','vue-router','socket.io-client','laravel-echo']);