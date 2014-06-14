$(document).ready(function(){
	console.log('main.js loaded');

	window.collections.articles = new Puls3.Collections.Articles();

	// hace un ajax a /articles con get
	// todo lo obtenido lo pasa a json y a modelos dentro de la collecion
	window.collections.articles.fetch(); 

});
