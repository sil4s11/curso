Puls3.Routers.Base = Backbone.Router.extend({
	routes:{
		"":"root",
		'article/:id':'articleSingle'
	},
	root:function(){
		console.log("el root");

		window.app.state = 'root'
		window.app.article = null
	},
	articleSingle:function(id){
		console.log("el articleSingle");

		window.app.state = 'articleSingle'
		window.app.article = id


	}

});