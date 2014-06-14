Puls3.Views.Article = Backbone.View.extend({
	events:{
		"click .votos .up":"upvote",
		"click .votos .down":"downvote",
		"click" : "navigate"
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

	 	window.routers.base.on('route:root',function(){
	 		self.$el.css('display','');
	 	});

	 	window.routers.base.on('route:articleSingle',function(){
	 		if(window.app.article === self.model.get('id')){
	 			console.log('render as extended')
	 		}else{
	 			self.$el.hide();
	 		}

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
	 	e.preventDefault();

	 	var votes = parseInt( this.model.get('votes') , 10 );
	 	this.model.set('votes', --votes);
	 	this.model.save();


	 },
	 navigate:function(){
	 	Backbone.history.navigate('article/'+this.model.get('id'),{trigger:true})
	 }


});






