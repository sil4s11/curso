Puls3.Views.App = Backbone.View.extend({
	events: {
		"click .logo" : "navigateHome",
		"click .publicar" : "showForm",
		"submit form" : "createArticle"
	},
	initialize: function($el){
		this.$el = $el;
	},
	showForm: function() {
		this.$el.find("form").show();
	},
	navigateHome : function(){
		Backbone.history.navigate("/",{trigger:true});
	},
	createArticle : function(e){
		e.preventDefault();

		var titulo = $("input[name=titulo]").val();
		var autor = $("input[name=autor]").val();
		var tag = $("input[name=tag]").val();

		var data = {
			"title" : titulo,
			"image" : "/imagenes/img4.jpg",
			"user" : autor,
			"tag" : tag,
			"votes" : 0
		};

		var model = new Puls3.Models.Article(data);

		model.save();
	}
});