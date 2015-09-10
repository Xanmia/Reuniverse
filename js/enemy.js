$.enemy = function(opt){
	for( var k in opt ) {
		this[k] = opt[k];
	}
	
	//this.Agility = 0;
	//this.MaxHP = 0;
	//this.MaxMP = 0;
	this.runChance = this.runChance || 20; /// default chance to run
	this.HP = this.MaxHP;
	this.MP = this.MaxMP;
	//this.Attack = 0;  //weapon damage + strength
	//this.Defense = 0; //armor + resilience
	
	this.Status = null;

	//this.Spells = [];
}

$.enemy.prototype.performAction = function(target){
	var spellusage = (Math.random()*100) < 30;
	
	if (spellusage && this.spell != undefined && this.MP >= this.spell.mp)
	{
		var damage = this.magic(target);
		this.MP -= this.magic.mp;
		return "enemy used " + this.spell.name + " for " + damage;
	}
	else{
		var damage = this.attack(target);
		return "enemy attacks for " + damage;
	}

}

$.enemy.prototype.magic = function(target){
	if (this.spell.damage != undefined){
		target.HP -= this.spell.damage;
		result = this.spell.damage;
		
	}
	else if (this.spell.heal != undefined){
		this.HP = Math.min(this.spell.heal+this.HP,this.MaxHP) ;
		result = this.spell.heal;
	}
	
	//if (target.HP<=0){target.Status='Dead';}
	return result;
}


$.enemy.prototype.attack = function(target){
	var damage = Math.max(this.Attack - (target.Resilience+target.Armor.armor+target.Shield.armor), 1);
	target.HP -= damage;
	
	//if (target.HP<=0){target.Status='Dead';}
	return damage;
}

$.enemy.prototype.flee = function(){
	
}

$.enemy.prototype.useSpell = function(){
	
}