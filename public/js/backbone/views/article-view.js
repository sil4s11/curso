Puls3.Views.Article = Backbone.View.extend({
	 tagName:'article',
	 className:'post',
	 initialize: function (){

	 },
	 render : function (){
	 	this.$el.html( this.model.get("title"));
	 }
});
