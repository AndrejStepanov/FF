let mix = require('laravel-mix');
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

mix.js('resources/js/admin.js', 'public/js')
    	.webpackConfig({
		resolve: {
			alias: {
				'@': path.resolve('resources/sass')
			}
		},
		plugins: [
			new VuetifyLoaderPlugin(),
		],
	})
   .sass('resources/sass/app.scss', 'public/css')
   .extract(['vue','vuetify','vue-axios','axios','vuex','vue-router','socket.io-client','laravel-echo']);
