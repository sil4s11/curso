module.exports = function(grunt) {
	
	grunt.initConfig({
		uglify : {
			options: {
				compress: true,
				report: true,
				banner: "/* Minified on <%= grunt.template.date() %>*/\n"
				},
			app : {
				files : {
					"public/app.min.js" : [
						"public/js/init.js",
						"public/js/backbone/models/article.js",
						"public/js/backbone/collections/articles.js",
						"public/js/backbone/backbone/views/article-view.js"
					]
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-uglify");


	grunt.registerTask("default", ["uglify"]);
};