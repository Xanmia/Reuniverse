$.worldCreator = function(){
	this.change();
}

$.worldCreator.prototype.update = function(){
	var POI = $.currentMap.POI.filter(function(value){ return value.x == $.Player.x/25 && value.y == $.Player.y/25 });
	 
	if(POI.length!=0){
		$.npc = [];
		$.context = undefined;
		$.currentMap = POI[0].map||$.worldMapping;
		$.Player.x = POI[0].returnX||$.currentMap.PlayerInit.x;
		$.Player.y = POI[0].returnY||$.currentMap.PlayerInit.y;
		this.change();
		var i = $.currentMap.People.length||0;
		while(i--){
			$.npc.push(new $.person($.currentMap.People[i]));
		}
		if (!$.currentMap.danger && $.battle != undefined){
			$.battle.close();
		}
	
		
		return true;
	}
}

$.worldCreator.prototype.reverse = function(){
	
}

$.worldCreator.prototype.change = function(){
	if ($.currentMap.background){
		for (var y = 0; y < 25; y++) {
	        for (var x = 0; x < 60; x++) {
				$.backctx.drawImage($.types[6], (x*25)-4, (y*25)-3); //4 is for offset of waves
	        }
	    }
	}
	else{
	    $.backctx.fillStyle = "#000";
	    $.backctx.strokeStyle = $.backctx.fillStyle;
		$.backctx.fillRect(0,0,$.W,$.H);
	}
	
	if($.currentMap.canReverse && $.Player.canReverse){
		document.getElementById('btnReverse').style.display="block";
	}
	else{
		document.getElementById('btnReverse').style.display="none";
	}
	
	if(!$.currentMap.lighting)
	{
			$.frontctx.save();
	    $.frontctx.fillStyle = "#000";
	    $.frontctx.strokeStyle = $.frontctx.fillStyle;
		$.frontctx.fillRect(0,0,$.W,$.H);
		
	    $.frontctx.fillStyle = 'rgba(0, 0, 0, .55)';
		$.frontctx.globalCompositeOperation = 'destination-out';
	    $.frontctx.strokeStyle = $.frontctx.fillStyle;
		$.frontctx.arc(($.H/2) + 50, ($.W/2)-25, 75, 0, Math.PI*2, true);
		$.frontctx.fill();
		$.frontctx.restore();
		
	}
	else{
		$.frontctx.clearRect(0,0,$.W,$.H);
	}
}

$.worldCreator.prototype.draw = function(){
	 if($.reverse && $.currentMap.canReverse){
		// 9 = 10, 10 = 9, 8 = 11, 11 = 8
	 	for (var y = 0; y < $.currentMap.graph.length; y++) {
	        for (var x = $.currentMap.graph[y].length; x > -1; x--) {
				if ($.currentMap.graph[y][x]){
					var tile = $.currentMap.graph[y][x];
					if(tile==9){tile=10;}
					else if(tile==10){tile=9;}
					else if(tile==28){tile=9;}
					else if(tile==8){tile=11;}
					else if(tile==11){tile=8;}
					else if(tile==19){tile=20;}
					else if(tile==20){tile=19;}
					else if(tile==24){tile=25;}
					else if(tile==25){tile=24;}
					 $.mainctx.drawImage($.types[tile], ($.currentMap.graph[y].length-x)*tileSize, (y)*tileSize);

				}
	        }
	    }
	 	//$.frontctx.clearRect(0,0,$.W,$.H);
	    //$.frontctx.fillStyle = 'rgba(0, 0, 0, .65)';
	   // $.frontctx.strokeStyle = $.frontctx.fillStyle;
	//	$.frontctx.fillRect(0,0,$.W,$.H);
	 }
	 else
	 {
	     for (var y = 0; y < $.currentMap.graph.length; y++) {
	         for (var x = 0; x < $.currentMap.graph[y].length; x++) {
	 			if ($.currentMap.graph[y][x]){
	 				 $.mainctx.drawImage($.types[$.currentMap.graph[y][x]], x*tileSize, y*tileSize);
	 			}
	         }
	     }
	 }
}