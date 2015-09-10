$.message = function(text,efunc){
	this.screen = document.getElementById('genMessage');
	this.efunc = efunc;
	this.screen.innerHTML = text;
	this.screen.style.display = "block";
}

$.message.prototype.exit = function(){
	if (this.efunc != undefined)
	{
		this.efunc();
	}
	this.screen.style.display = "none";
	$.newMessage = undefined;
}
