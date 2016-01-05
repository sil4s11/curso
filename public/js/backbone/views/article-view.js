Puls3.Views.Article = Backbone.View.extend({
	events: {
		"click .votos .up" : "upVote",
		"click .votos .down" : "downVote",
		"click .descripcion" : "mostrarArticulo"
	},
	tagName: "article",
	className: "post",
	initialize: function() {
		//debugger;
		var self = this;
		this.model.on("change", function(model){
			if(window.app.state === "articleSingle"){
				self.extRender();
			} else {
				self.render();	
			}
			
		});

		window.routers.base.on("route:root",function(){
			self.$el.css("display", "");
			self.render();
		});
		window.routers.base.on("route:articleSingle", function(){
			if(window.app.article === self.model.get("id")){
				self.extRender();
			} else {
				self.$el.hide();
			}
		});

		this.template = _.template( $("#article-template").html());
		this.templateEx = _.template( $("#article-templateExtended").html());
		//this.template = swig.compile( $("#article-template").html());

	},
	upVote : function(e) {
		
		e.preventDefault();
		var votes = parseInt( this.model.get("votes"),10);
		this.model.set("votes", ++votes);
		this.model.save();
		
	},
	downVote : function(e) {
		
		e.preventDefault();
		var votes = parseInt( this.model.get("votes"),10);
		this.model.set("votes", --votes);
		this.model.save();
		
	},
	mostrarArticulo : function(){
		var id = this.model.get("id");
		Backbone.history.navigate("/article/" + id, {trigger: true});

	},
	extRender : function(){
		var data = this.model.toJSON();
		var html = this.templateEx(data);
		this.$el.css("width", "100%");
		this.$el.html( html );
	},
	render: function() {
		var data = this.model.toJSON();
		var html = this.template(data);
		this.$el.css("width", "48%");
		this.$el.html( html );
	}
});