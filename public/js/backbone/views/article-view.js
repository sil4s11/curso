Puls3.Views.Article = Backbone.View.extend({
	 tagName:'article',
	 className:'post',
	 initialize: function (){

	 	// this.template = _.template( $("#article-template").html());
	 	this.template = swig.compile( $("#article-template").html() );

	 },
	 render : function (){

	 	var data = this.model.toJSON();
	 	var html = this.template(data); 
	 	//ACTUALIZA EL HTML DEL VIEW
	 	this.$el.html( html );
	 }
});
