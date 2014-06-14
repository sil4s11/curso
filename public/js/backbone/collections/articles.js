Puls3.Collections.Articles = Backbone.Collection.extend({
	model:Puls3.Models.Article, // relacionar con la Clase de los modelos a agregar
	url:'/articles/all', // para cuando se haga fetch , llame a esta ruta y traiga un json para pasarlo a models
	name:'articles'
});