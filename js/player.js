$.player = function(){
	this.name = "Cloud";
	this.Strength = 2; //2
	//this.Agility = 6;
	this.Resilience = 3; //3
	this.Avoidance = 96; // ****percent of the frequency you avoid fights
	this.MaxHP = 15;//15
	this.MaxMP = 5;//5
	this.HP = this.MaxHP;
	this.MP = this.MaxMP;
	//this.Attack = this.Strength + 1;  //weapon damage + strength -- these are sums of the prior
	this.Defense = this.Resilience + 0; //armor + resilience -- these are sums of the prior // this is trash
	this.xp = 0;
	this.Level = 0;
	this.gold = 0;
	
	this.Status = null;
	
	this.canReverse = false;
	
	this.Armor = armor[0];
	this.Weapon = weapon[0];
	this.Shield = shield[0];
	
	this.Inventory = [armor[0],weapon[0],shield[0]];
	this.Spells = [];
	
	this.x = 750;
	this.y = 250;
	
	this.damageTick = 60;//60
	this.damageTimer = 60;
	this.recievingDamage = 0;
	this.opac = .75;
	
	this.inventoryScreen = document.getElementById('inventoryMenu');
	this.inventoryGold = document.getElementById('playerGold');
	this.inventoryStats= document.getElementById('playerstats');
	this.inventoryItems= document.getElementById('playerItems');
	this.inventoryOptions= document.getElementById('inventoryOptions');
//	this.inventoryBack= document.getElementById('inventoryBack');

}

$.player.prototype.attack = function(){
	var target = $.battle.enemy;
	var damage = Math.max((this.Strength+this.Weapon.damage) - target.Defense, 1);
	target.HP -= damage;

	if (target.HP<=0){target.Status='Dead';}
	return damage;
}

$.player.prototype.flee = function(){
	//need % chance to run away
}

$.player.prototype.useSpell = function(i){
	var spell = this.Spells[i];
	var result = 0;
	if (spell.damage != undefined){
		var target = $.battle.enemy;
		target.HP -= spell.damage;
		this.MP -= spell.mp;
		result = spell.damage;
		if (target.HP<=0){target.Status='Dead';}
	}
	else if (spell.heal != undefined){
		this.HP = Math.min(spell.heal+this.HP,this.MaxHP) ;
		this.MP -= spell.mp;
		result = spell.heal;
		if($.battle==undefined){
			this.closeInventory();
			$.newMessage = new $.message("You have been healed by " + result);
		}
	}

	return result;
}

$.player.prototype.useItem = function(){
	
}

$.player.prototype.addInventory = function(item){
	this.Inventory.push(item);
	//this.showInventory();
}

$.player.prototype.buy = function(item){
	if (item.cost <= this.gold){
		if(item.type == 'inn'){
			this.HP = this.MaxHP;
			this.MP = this.MaxMP;
			
			//$.newStore.exit();
			
		    //$.frontctx.fillStyle = "#000";
		    //$.frontctx.strokeStyle = $.frontctx.fillStyle;
			//$.frontctx.fillRect(0,0,$.W,$.H);
		}
		else{
			this.addInventory(item);
			if(item.type != 'item' ){
				this.equip(item);
			}	
		}
		this.gold -= item.cost;

	}
	else
	{
		$.newStore.efunc = function(){$.newStore.exit(); $.newMessage = new $.message("Sorry, you don't have enough gold for that.");};
	}
}

$.player.prototype.equip = function(item){
	if(item.type=='weapon'){
		this.Weapon = item;
	}
	else if(item.type=='armor'){
		this.Armor = item;
	}
	else if(item.type=='shield'){
		this.Shield = item;
	}
		this.updateStats();
}

$.player.prototype.levelUp = function(xp){
	this.xp += xp;
	var nextLVL = levels[this.Level];
	if(nextLVL != undefined && this.xp>=nextLVL.XPneeded){
		this.Strength+=nextLVL.Strength||0;
		this.Agility+=nextLVL.Agility||0;
		this.Resilience+=nextLVL.Resilience||0;
		this.MaxHP+=nextLVL.MaxHP||0;
		this.MaxMP+=nextLVL.MaxMP||0;
		if(nextLVL.spell!=undefined){
			this.Spells.push(nextLVL.spell);
		}
		this.Level += 1;
		return levels[this.Level-1];
	}
}

$.player.prototype.update = function(){
	if ($.battle == undefined && $.newStore == undefined && $.newMessage == undefined && this.inventoryScreen.style.display !="block"){
		if($.keys.s){
			this.moveDown();
			$.keys.s = 0;
		}
	
		if($.keys.d){
			this.moveRight();
			$.keys.d = 0;
		}
	
		if($.keys.a){
			this.moveLeft();
			$.keys.a = 0;
		}	
		if($.keys.w){
			this.moveUp();
			$.keys.w = 0
		}
		if($.keys.space){
			//$.reverse = !$.reverse;
		}
	}
	if (!this.validMove(this.x,this.y)){
		this.recievingDamage=1;
		this.damageTimer += $.dt; 
		if(this.damageTimer>this.damageTick && this.HP>0)
		{
			this.opac=.75;
			this.HP -= 1;
			this.damageTimer=0;
		}
		this.opac-=.01;
	}
	else{
		if(this.recievingDamage==1){
			$.frontctx.clearRect(0, 0, $.W, $.H);
		}
		this.recievingDamage=0;
	}
	
	if (this.HP<=0){
		$.deathmenu.style.display = "block";
		document.getElementById('options').style.display="none";
		if($.battle!=undefined)
			$.battle.close();
	}

}

$.player.prototype.showInventory = function()
{
	//this.inventoryScreen = 
	this.updateStats();
	this.inventoryItems.innerHTML = "";
	//this.inventoryItems.style.display = "block";
	this.inventoryScreen.style.display = "block";
	//this.inventoryBack.style.display = "block";
	//this.inventoryOptions.style.display = "block";
//	for( var k in this.Inventory ) {
//			this.inventoryItems.innerHTML += "<button onclick='$.Player.equip($.Player.Inventory["+k+"]);'>" + this.Inventory[k].name + "</button>";
//	}
	
}

$.player.prototype.updateStats = function()
{
	this.inventoryGold.innerHTML = this.gold + "g";
	this.inventoryStats.innerHTML = "Level:" + this.Level + "<br>";
	this.inventoryStats.innerHTML += "HP:" + this.HP + "/" + this.MaxHP + " <br>";
	this.inventoryStats.innerHTML += "MP:" + this.MP + "/" + this.MaxMP + " <br>";
	this.inventoryStats.innerHTML += "Attack: " + (this.Strength+this.Weapon.damage) + " <br>";
	this.inventoryStats.innerHTML += "Defense: " + (this.Resilience+this.Armor.armor+this.Shield.armor) + " <br>";
	this.inventoryStats.innerHTML += "XP to next level: " + (levels[this.Level]!=undefined?(levels[this.Level].XPneeded - this.xp):0) + " <br>";
	this.inventoryStats.innerHTML += "Armor: " + this.Armor.name + " <br>";
	this.inventoryStats.innerHTML += "Weapon: " + this.Weapon.name + " <br>";
	this.inventoryStats.innerHTML += "Shield: " + this.Shield.name + " <br>";
}

$.player.prototype.showSpells= function()
{
	this.inventoryItems.innerHTML = "";
	this.inventoryItems.style.display = "block";
	var i = this.Spells.length; while( i-- ){ 
		if(this.Spells[i].heal != undefined){
			var disabled = this.Spells[i].mp > this.MP?"disabled":"";
			this.inventoryItems.innerHTML += "<button " + disabled + " onclick='$.Player.useSpell("+ i +" )'>" + this.Spells[i].name + "<div class='mp'>"+ this.Spells[i].mp  +" mp</div></button>";
		}
	}
	this.inventoryScreen.style.display = "block"; 
//	this.inventoryOptions.style.display = "none";
//	this.inventoryBack.style.display = "block";
}

$.player.prototype.showEquipment = function()
{
	this.inventoryItems.innerHTML = "";
	this.inventoryItems.style.display = "block";
	for( var k in this.Inventory ) {
			this.inventoryItems.innerHTML += "<button onclick='$.Player.equip($.Player.Inventory["+k+"]);'>" + this.Inventory[k].name + "</button>";
	}
	this.inventoryScreen.style.display = "block"; 
//	this.inventoryOptions.style.display = "none";
//	this.inventoryBack.style.display = "block";
}

$.player.prototype.clickBack = function()
{
	//this.inventoryItems.innerHTML = "";
//		this.inventoryItems.style.display = "none";
//	this.inventoryOptions.style.display = "block";
//	this.inventoryBack.style.display = "none";
}

$.player.prototype.closeInventory = function()
{
		this.inventoryScreen.style.display = "none";
}


$.player.prototype.validMove = function(x,y){
	
	//$.currentMap.graph[y].length-x)
		 	 if($.reverse && $.currentMap.canReverse){
				 var tileOn = $.currentMap.graph[y/25][$.currentMap.graph[y/25].length - (x/25)]; 
			 }
			 else{
			 	var tileOn = $.currentMap.graph[y/25][x/25]; 
			 }
 
		//this.inventoryGold.innerHTML = "x:" + x/25 + " y:" + y/25 ;
		if (tileOn == 1 || tileOn == 2 || tileOn == 3 || tileOn == 5|| tileOn == 16 || tileOn == 28) {


			return true;
		}
		return false; //false
}

$.player.prototype.isfight = function(){
	var fight = (Math.random()*100) > this.Avoidance;
	if (fight==true && $.currentMap.danger){
		$.battle = new $.battleSystem();
	}
	
}

$.player.prototype.moveUp = function(){
	//this.y -= 25;
	if (this.validMove(this.x,this.y) && this.validMove(this.x,this.y-25))
			{this.y -= 25;this.isfight();}
}
$.player.prototype.moveDown = function(){
	//this.y += 25;
	if (this.validMove(this.x,this.y) && this.validMove(this.x,this.y+25))
			{this.y += 25;this.isfight();}
}
$.player.prototype.moveLeft = function(){
	//this.x -= 25;
	if (this.validMove(this.x,this.y) && this.validMove(this.x-25,this.y))
			{this.x -= 25;this.isfight();}
}
$.player.prototype.moveRight = function(){
	//this.x += 25;
	if (this.validMove(this.x,this.y) && this.validMove(this.x+25,this.y))
			{this.x += 25;this.isfight();}
}

$.player.prototype.draw = function(){
	$.mainctx.save();


	$.mainctx.fillStyle = "#000";
	$.mainctx.strokeStyle = $.mainctx.fillStyle;
	$.mainctx.drawImage($.playerSprite, this.x,this.y);
	//$.mainctx.fillRect(this.x,this.y,25,25);
	   $.mainctx.restore();
	   
	   
	   if(this.recievingDamage && this.HP>0){
		   $.frontctx.clearRect(0, 0, $.W, $.H);
		   	$.frontctx.fillStyle =  "rgba(255,0,0," + this.opac + ")";  //"rgba(255,0,0," + (this.damageTimer==0?1:.4) + ")";
		   	$.frontctx.strokeStyle = $.frontctx.fillStyle;
		 	$.frontctx.fillRect(0,0,$.W,$.H);
			
		 //	$.main.style.marginLeft =  - 100;//Math.random()*this.opac*4 + 'px';
		// 	$.main.style.marginTop = parseInt($.main.style.marginTop) +  Math.random()*this.opac*4 + 'px';
	   }
	   if(this.HP<=0){
		   var i = 10; while(i--){
			   $.frontctx.shadowBlur=20;
			   $.frontctx.shadowColor="black";
   		   	$.frontctx.fillStyle =  "rgba(255,0,0,1.0)";  //"rgba(255,0,0," + (this.damageTimer==0?1:.4) + ")";
   		   	$.frontctx.strokeStyle = $.frontctx.fillStyle;
			var size = Math.random()*25;
   		 	$.frontctx.fillRect(Math.random()*$.W,Math.random()*$.H,size,size);
		   }

	   }

//good for inn
  // 	$.frontctx.fillStyle = "rgba(255,255,255,.2)";
 // 	$.frontctx.strokeStyle = $.frontctx.fillStyle;
//	$.frontctx.fillRect(0,0,$.W,$.H);
	
}



