$(document).ready(function(){
	console.log('main.js loaded');

	window.ponyExpress = new PonyExpress({
		io : window.location.origin
	});

	window.routers.base = new Puls3.Routers.Base();

	window.ponyExpress.bind("connect", function(){
		window.plugs.article = new PonyExpress.BackbonePlug({
			collection : window.collections.articles
		});
	});

	window.views.app = new Puls3.Views.App ( $("body"));
	window.collections.articles = new Puls3.Collections.Articles();

	window.collections.articles.on("add", function(model){
		//console.log("Se ha agregado" , model.toJSON());
		var view = new Puls3.Views.Article({model: model});
		view.render();
		$(".posts").prepend(view.$el.fadeIn(function(){
			$(this).css({"display": "inline-block"});
		}));
		//view.$el.prependTo(".posts");
	});

	var xhr = window.collections.articles.fetch();	

	xhr.done(function(){
		Backbone.history.start({
			root : "/",
			pushState : true
		});
	});

});