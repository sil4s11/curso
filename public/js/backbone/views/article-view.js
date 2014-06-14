Puls3.Views.Article = Backbone.View.extend({
	events:{
		"click .votos .up":"upvote",
		"click .votos .down":"downvote"
	},
	 tagName:'article',
	 className:'post',
	 initialize: function (){
	 	var self = this
	 	 this.template = _.template( $("#article-template").html());
	 	//this.template = swig.compile( $("#article-template").html() );
	 	this.model.on("change",function(){
	 		self.render();
	 	});

	 },
	 render : function (){

	 	var data = this.model.toJSON();
	 	var html = this.template(data); 
	 	//ACTUALIZA EL HTML DEL VIEW
	 	this.$el.html( html );
	 },
	 upvote:function(e){
	 	e.preventDefault();
	 	var votes = parseInt( this.model.get('votes') , 10 );
	 	this.model.set('votes', ++votes);
	 	this.model.save();

	 },
	 downvote:function(){
	 	var votes = parseInt( this.model.get('votes') , 10 );
	 	this.model.set('votes', --votes);
	 	this.model.save();


	 }
});
