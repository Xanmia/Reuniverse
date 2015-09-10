$.person = function(opt){
	for( var k in opt ) {
		this[k] = opt[k];
	}
	this.alive=this.alive|| function(){return 1;} ;//==undefined?1:this.alive;
	//this.x = x;
	//this.y = y;
	//this.text = function(){$.newStore = new $.store(store);};
	this.contextclue = false;
	this.status = 1;
}

$.person.prototype.update = function(){
	if(this.alive()){
		if (((this.x/25 >= ($.Player.x/25) - 1 && this.x/25 <= ($.Player.x/25) + 1))
			&& ((this.y/25 >= ($.Player.y/25) - 1 && this.y/25 <= ($.Player.y/25) + 1)))
			{
				this.contextclue = true;
				$.context = this.text;
			}
			else{
				this.contextclue = false;	
				if(this.text == $.context)
					$.context = undefined;
			}
	}
	else{
		if(this.text == $.context)
			$.context = undefined;
	}



}

$.person.prototype.draw = function(){
	if(this.alive()){
		$.mainctx.drawImage($.chars[this.image], this.x,this.y);
		if (this.contextclue && this.text!=undefined)	
			$.mainctx.drawImage($.types[13], this.x+12.5,this.y-15);
	}

		
}