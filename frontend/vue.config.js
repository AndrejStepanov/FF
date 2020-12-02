module.exports = {
	transpileDependencies: [], 
	// proxy API requests to Valet during development
	devServer: {
		proxy: 'http://localhost:7380/'//с пушером траблы вызывает;
		/*proxy: {
			'^/api': {
				target: 'http://localhost:7380/api', //проксировать все api-запросы к ларавелу
				ws: true,
				changeOrigin: true
			}
		}*/
	},
	outputDir: '../public',
  indexPath: process.env.NODE_ENV === 'production' ? '../resources/views/spa.blade.php' : 'index.html'
}