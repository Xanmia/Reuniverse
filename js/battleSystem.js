$.battleSystem = function(e,efunc){
	this.screen = document.getElementById('battleWindow');
	this.actions = document.getElementById('actionPlate');
	this.log = document.getElementById('outputPlate');
	this.spells = document.getElementById('spellsPlate');
	this.backButton = document.getElementById('battleBack');
	this.enemyImage = document.getElementById('enemyImage');

	document.getElementById('options').style.display="none";
	this.endFunc = efunc;
	this.turnTick = 90;//60
	this.turnTimer = 0;
	this.effect = 0;
	this.turn = 0;
    //var canvas = document.createElement('canvas');
    this.enemycontext = enemyImage.getContext('2d');
	this.enemycontext.clearRect(0, 0, $.W, $.H);
	this.hp = document.getElementById('hp');
	this.mp = document.getElementById('mp');
	this.show();
	this.player = $.Player;

	var enemy = 0;
	var enemyLocs = $.currentMap.enemylocations;
	if (e)
		enemy = e;
	else{
		if($.reverse && $.currentMap.canReverse){
			enemyLocs = $.currentMap.RevEnemylocations;
		}
		var enemydefs = enemyLocs.filter(function(value){ return ( ($.Player.x >= value.x && $.Player.x <= value.x + value.w)
																						&& ($.Player.y >= value.y && $.Player.y <= value.y + value.h) )});
		
		var randEnemy = Math.round(Math.random()*(enemydefs[0].type.length-1));
		enemy = enemydefs[0].type[randEnemy];
	}
		

	this.enemy = new $.enemy(enemies[enemy]);// randomize
	this.enemycontext.drawImage($.chars[enemies[enemy].image], 0,0);
	

	this.showLog('a ' + this.enemy.name + ' appeared');
	//this.turn = undefined;
	//var spells = this.player.Spells;
	//this.spells.innerHTML = "";
	//var i = this.player.Spells.length; while( i-- ){ 
	//	this.spells.innerHTML += "<button onclick='$.battle.actionSpell("+ i +" )'>" + this.player.Spells[i].name + "</button>";
//	}
}

$.battleSystem.prototype.enemyDamage = function(d){
		this.effect = 20;
	var i = 10;while(i--){
		this.enemycontext.fillStyle =  "rgb(255,0,0)"; 
		this.enemycontext.strokeStyle = $.frontctx.fillStyle;
		this.enemycontext.fillRect(Math.random()*25,Math.random()*25,Math.random()*2,Math.random()*2);
	}
}

$.battleSystem.prototype.actionAttack = function(){
	var damage = this.player.attack();
	//this.showLog("you hit for " + damage);
	this.showLog("you hit for " + damage);
	this.enemyDamage(damage);
	if (this.checkStatus() == false){
		return;
	}
	else{  /// need a effect, wait, then enemy action
		//this.enemyAction();
		this.turnTimer=0;
		this.turn=1;
	}
}

$.battleSystem.prototype.checkStatus = function(){
	if (this.enemy.HP<=0){
		if (this.endFunc != undefined)
			this.endFunc();
		this.player.gold += this.enemy.gold;
		this.showLog("you have gained " + this.enemy.XP + " xp and " + this.enemy.gold + " gold");
		if(this.enemy.item != undefined){
			this.player.addInventory(this.enemy.item);
			this.showLog("you recieved a " + this.enemy.item.name);
		}

		var levelup = this.player.levelUp(this.enemy.XP);
	
		if(levelup!=undefined){
			this.showLog("you leveled up! ");
			for( var k in levelup ) {
				if(k=="spell")
					this.showLog("Learned new magic: " + levelup[k].name);
				else if(k!="XPneeded")
					this.showLog(k + " +" + levelup[k]);
			}
		}
		return false;
	}
	return true;
}

$.battleSystem.prototype.enemyAction = function(){
	var message = this.enemy.performAction(this.player);
	this.effect = 20;
	this.showLog(message);
}

$.battleSystem.prototype.close = function(){
	this.screen.style.display = "none";
	$.battle = undefined;
	document.getElementById('options').style.display="block";
	
}

$.battleSystem.prototype.show = function(){
	this.screen.style.display = "block";
}

$.battleSystem.prototype.showActions = function(){
	if(this.enemy.Status=='Dead'){this.close();}
	if(this.turn==0){
		this.log.innerHTML = "";
		this.backButton.style.display = "none";
		this.spells.style.display = "none";
		this.log.style.display = "none";
		this.actions.style.display = "block";
	}

}

$.battleSystem.prototype.showLog = function(text){
	this.actions.style.display = "none";
	this.spells.style.display = "none";
	this.backButton.style.display = "none";
	this.log.style.display = "block";
	this.log.innerHTML += text + "<br>";
}

$.battleSystem.prototype.showSpells = function(text){
	this.spells.innerHTML = "";
	var i = this.player.Spells.length; while( i-- ){ 
		var disabled = this.player.Spells[i].mp > this.player.MP?"disabled":"";
		this.spells.innerHTML += "<button " + disabled + " onclick='$.battle.actionSpell("+ i +" )'>" + this.player.Spells[i].name + "<div class='mp'>"+ this.player.Spells[i].mp  +" mp</div></button>";
	}
	this.actions.style.display = "none";
	this.backButton.style.display = "block";
	this.spells.style.display = "block";
}

$.battleSystem.prototype.actionSpell = function(i){
	var damage = this.player.useSpell(i);
	//this.showLog("you hit for " + damage);
	this.showLog("your spell hit for " + damage);
	this.enemyDamage(damage);
	if (this.checkStatus() == false){
		return;
	}
	else{
		this.turnTimer=0;
		this.turn=1;
	}
}

$.battleSystem.prototype.actionRun = function(){
	var run = (Math.random()*100) < this.enemy.runChance;
	if (run==true){
		this.close();
	}
	else{
		this.showLog("You failed to run away.");
		this.turnTimer=0;
		this.turn=1;
	}
}

$.battleSystem.prototype.update = function(){
	if(this.player.HP<=0){
		//$.deathmenu.style.display = "block";
		//you dead
	}
	this.turnTimer += $.dt; 
	if(this.turnTimer>this.turnTick&&this.player.HP>0&&this.enemy.HP>0)
	{
		if(this.turn){//enemy turn
			this.enemyAction();
			this.turn=0;
		}
		else
		{
			if(this.log.style.display=="block"){
				this.showActions();
			}


		}
		this.turnTick = 60;
		this.turnTimer=0;
	}
	this.effect = this.effect > 0?this.effect -=1:0; 
}

$.battleSystem.prototype.draw = function(){
	this.hp.innerHTML = this.player.HP;
	this.mp.innerHTML = this.player.MP;
	if(this.turn==0){
		$.container.style.marginLeft = (Math.random()*this.effect) + 'px';//Math.random()*this.opac*4 + 'px';
		$.container.style.marginTop = Math.random()*this.effect + 'px';
	}
	else{

		this.enemyImage.style.marginTop = Math.random()*this.effect + 'px';
	}


	//this.enemyImagethis.enemyImage 
	
		//draw name box with health, and magic
		//draw middle enemy box with his name
		//draw timer 
	//draw options menu
	//draw notifications window
}