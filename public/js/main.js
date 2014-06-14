$(document).ready(function(){
	console.log('main.js loaded');

	window.collections.articles = new Puls3.Collections.Articles();

	//EVENTOS EN LA COLECCION
	window.collections.articles.on('add', function (model){
		// console.log('se ha agregado ', model.toJSON());
		var view = new Puls3.Views.Article({model: model}); 
		// crea su vercion en html relacionada al modelo
		//cuando se agrega la variable model , ya se agrega directamente en el view 
		view.render();
		view.$el.appendTo(".posts");

	});

	// hace un ajax a /articles con get
	// todo lo obtenido lo pasa a json y a modelos dentro de la collecion
	window.collections.articles.fetch(); 

});
