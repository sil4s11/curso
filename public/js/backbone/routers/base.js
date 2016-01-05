Puls3.Routers.Base = Backbone.Router.extend({
	routes : {
		"" : "root",
		"article/:id" : "articleSingle"
	},
	root : function(){
		console.log("ROOT");
		window.app.state = "root";
		window.app.article= null;
	},
	articleSingle : function(id) {
		console.log("SiNGLE");
		window.app.state="articleSingle";
		window.app.article = id;
	}
});