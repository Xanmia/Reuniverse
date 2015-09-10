window.requestAnimFrame = (function(){
    return window.requestAnimationFrame ||
           window.webkitRequestAnimationFrame ||
           window.mozRequestAnimationFrame ||
           function(callback){
               setInterval(callback, 60);
           };
})();

$.setup = function() {
    $.main = document.getElementById('main');
	$.back = document.getElementById('back');
	$.front = document.getElementById('front');
//	$.mainmenu = document.getElementById('container');
	$.deathmenu = document.getElementById('deathmenu');
    $.W = 640; //window.innerWidth; 320
    $.H = 568;//window.innerHeight; 568
	
    $.mainctx = $.main.getContext('2d');
	$.backctx = $.back.getContext('2d');
	$.frontctx = $.front.getContext('2d');
	
    $.main.width = $.W; //window.innerWidth;
    $.main.height = $.H; //window.innerHeight;
    
    $.back.width = $.W; //window.innerWidth;
    $.back.height = $.H; //window.innerHeight;
	
    $.front.width = $.W; //window.innerWidth;
    $.front.height = $.H; //window.innerHeight;
 	$.playing = false;
	
	window.addEventListener( 'keydown', $.keydown );
	window.addEventListener( 'keyup', $.keyup );
	
	$.keys = {
		w: 0,
		s: 0,
		a: 0,
		d: 0,
		space:0
	};
	
	$.context = undefined;
	$.reverse = false;
		
	$.currentMap = $.worldMapping;
	
    $.types = [];
	$.types[1] = grass();
	$.types[30] = grass();///person holder
	$.types[2] = createSprite(caveMapping,cavePalette,grass());
	$.types[3] = createSprite(townMapping,townPalette,grass());
	$.types[4] = createSprite(mountainMapping,mountainPalette,grass());
	$.types[5] = sand();
	$.types[6] = water();
	$.types[7] = water(1);
	$.types[8] = water(2);
	$.types[9] = water(3);
	$.types[10] = water(4);
	$.types[11] = water(5);
	$.types[12] = water(6);
	$.types[13] = createSprite(contextClue,contextCluePalette);
	$.types[14] = createSprite(brick,brickPalette);
	$.types[15] = createSprite(brick,brick2Palette);
	$.types[16] = createSprite(brick,groundPalette);
	$.types[17] = createSprite(weaponStore,brickPalette);
	$.types[18] = water(7);
	$.types[19] = water(8);
	$.types[20] = water(9);
	$.types[21] = water(10);
	$.types[22] = water(11);
	$.types[23] = water(12);
	$.types[24] = water(13);
	$.types[25] = water(14);
	$.types[26] = createSprite(tree,treePalette,grass());
	$.types[27] = createSprite(innStore,brickPalette);
	$.types[28] = water(4);
	
	$.chars =[];
	$.chars[0] = createSprite(dog,contextCluePalette);
	$.chars[1] = createSprite(creepythin,creepythinPalette);
	$.chars[2] = createSprite(slime,slimePalette);
	$.chars[3] = createSprite(bat,batPalette);
	$.chars[4] = createSprite(yeti,yetiPalette);
	$.chars[5] = createSprite(bear,bearPalette);	
	$.chars[6] = createSprite(bat,regbatPalette);	
	$.chars[7] = createSprite(playermapping,npcPalette);
	$.chars[8] = createSprite(ninja,ninjaPalette);
	$.chars[9] = createSprite(playermapping,npc2Palette);
	$.chars[10] = createSprite(playermapping,npc3Palette);
	$.chars[11] = createSprite(playermapping,playerPalette);
	$.chars[12] = createSprite(ninja,ninja2Palette);
	$.battle = undefined; // new $.battleSystem();
	
	$.playerSprite = createSprite(playermapping,playerPalette);
	
	$.Player = new $.player();
	$.Player.x = $.currentMap.PlayerInit.x;
	$.Player.y = $.currentMap.PlayerInit.y;
	
	$.Enemy = undefined;//new $.enemy(enemies[1]);
	
	$.world = undefined;
	

	$.npc = [];
		
	
		$.newStore = undefined; // new $.store(0);
		$.newMessage = undefined; // new $.store(0);
	$.updateDelta();
	$.createStarsBackground();
	//$.world = new $.worldCreator();
    $.loop();
}

$.updateDelta = function(){
    var now = Date.now();
    $.dt = (now - $.lt) / (1000/60);
    $.lt = now;
    $.elapsed += $.dt;
}


$.loop = function () {
    requestAnimFrame($.loop);
	  $.updateDelta();
//	  if($.battle == undefined && $.newStore == undefined && $.newMessage == undefined && $.Player.inventoryScreen.style.display !="block" && $.deathmenu.style.display !="block"){
	//		  $.closeMenu();
//	  }
//	  else
//	  {
//		  $.closeMenu();
//	  }
if($.playing){
	$.Player.update();
	 $.world.update();
	var i = $.npc.length; while( i-- ){ $.npc[ i ].update() };
	 $.mainctx.save();
	 
    $.mainctx.clearRect(0, 0, $.W, $.H);

	/*
	while ($.Player.Status != 'Dead' && $.Enemy.Status != 'Dead'){
		$.Player.attack($.Enemy);
		$.Enemy.attack($.Player);
		console.log($.Enemy.HP + "-" + $.Player.HP);
	}
	*/
	
	
	

		 $.mainctx.translate(-($.Player.x - ($.W / 2)), -($.Player.y - ($.H / 2)));

	 $.world.draw();
	 i = $.npc.length; while( i-- ){ $.npc[ i ].draw( ) };


	 $.Player.draw();

	
	 $.mainctx.restore();
	 if($.battle != undefined){
		$.battle.update();
	    $.battle.draw();
	 }
 }
 else{
 	
 }
	
	
}
/*
$.showMenu = function(){
	$.mainmenu.style.display = "block";
}

$.closeMenu = function(){
	$.mainmenu.style.display = "none";
}
*/

$.worldTravel = function() // no ';' here
{
	var elem = document.getElementById("revText");
    if (elem.innerHTML=="Go to REVearth") elem.innerHTML = "Go to Earth";
    else elem.innerHTML = "Go to REVearth";
}

$.createStarsBackground = function(){
  $.mainctx.fillStyle = "#000";
  $.mainctx.fillRect(0, 0, $.W, $.H);
    for(i=0;i<5000;i++){
	    var X = Math.random()*$.W;
	    var Y = Math.random()*$.H;
	    var Opacity = (((Math.random()*10)+1)*0.1);
	    $.mainctx.fillStyle = "rgba(255,255,255," + Opacity + ")";
	    $.mainctx.fillRect(X,Y,1,1);

    }
	$.mainctx.drawImage($.playerSprite, 313,175);
};

$.startPlaying = function(){
	$.playing = true;
	$.world = new $.worldCreator();
	$.loop();
	document.getElementById('titleScreen').style.display='none'; 
	document.getElementById('options').style.display="block";
	$.newMessage = new $.message('How did you get here? <BR><br>That cave to the right of you looks like a good place to start.');
}

$.keydown = function(e){
	if( e.keyCode === 32 ){  }//space down
	if( e.keyCode === 87 ){ $.keys.w = 1; }
	if( e.keyCode === 83 ){ $.keys.s = 1; }
	if( e.keyCode === 68 ){ $.keys.d = 1; }
	if( e.keyCode === 65 ){ $.keys.a = 1; }
};

$.keyup = function(e){
	if( e.keyCode === 32 ){ if($.newMessage!=undefined){$.newMessage.exit();}
							else if($.battle!=undefined){ $.battle.showActions();}
							else{$.onclick();}
							}
	if( e.keyCode === 87 ){ $.keys.w = 0; }
	if( e.keyCode === 83 ){ $.keys.s = 0; }
	if( e.keyCode === 68 ){ $.keys.d = 0; }
	if( e.keyCode === 65 ){ $.keys.a = 0; }
};


$.onclick = function(){
	if ($.context!=undefined) 
		{
			$.context();
		}
}

window.addEventListener('load', function () {
    $.setup();
});