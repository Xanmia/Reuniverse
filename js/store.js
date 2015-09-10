$.store = function(storeNumber,efunc){
	this.screen = document.getElementById('storeMenu');
	this.playerGold = document.getElementById('storeGold');
	this.items = document.getElementById('storeItems');
	this.efunc = efunc;
	this.items.innerHTML ="";
	var storeItems = store[storeNumber];
	var i = storeItems.length; while( i-- ){ 
		this.items.innerHTML += "<button onclick='$.newStore.buy(store["+storeNumber+"]["+i+"]);'>" + storeItems[i].name + "</button>" + storeItems[i].cost + "G";
	}
	
	this.playerGold.innerHTML = $.Player.gold + "g";
	this.screen.style.display = "block";

}

$.store.prototype.buy = function(item){
	$.Player.buy(item);
	if (this.efunc != undefined)
	{
		this.efunc();
	}
}

$.store.prototype.exit = function(){
	this.screen.style.display = "none";
	$.newStore = undefined;
	
}
