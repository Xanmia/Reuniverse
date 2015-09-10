$.per1 = 1;
$.per2 = 1;
$.per3 = 1;
$.per4 = 1;
$.cityMapping = ///done
 {
	 name:'city',
	 canReverse:0,
	 danger:false,
	 background:0,
	 lighting:1,
	 graph:
	 [[15,14,14,14,14,14,14,14,14,14,15,15,15,15,15],
	 [15,26,26,26,26,26,26,26,26,26,15,15,15,15,15],
	 [15,26,26,26,26,26,26,26,26,26,15,15,15,15,15],
	 [15,26,15,14,14,15,14,14,15,26,14,14,14,14,15],
	 [15,26,15,1,30,15,30,1,15,26,1,1,1,1,15],
	 [14,26,14,17,5,14,5,27,14,1,1,1,1,1,15],
	 [5,5,5,5,5,5,5,1,1,1,1,1,1,1,15],
	 [15,7,7,7,7,7,11,26,1,1,1,1,1,26,15],
	 [15,6,6,6,6,6,10,26,1,1,1,1,30,26,15],
	 [15,6,6,6,6,6,10,26,1,1,1,26,26,26,15],
	 [14,14,14,14,14,14,14,14,14,14,14,14,14,14,14]],
	 PlayerInit:{x:25,y:150},
	 POI:[{x:0,y:6,map:undefined, returnX:875 , returnY:475}],
	 People:[
{x:100,y:100,image:10,text:function() {$.newStore = new $.store(0, function() { $.newStore.exit(); $.newMessage = new $.message("Thank you for your business, your new item is already equiped.");})}},
{x:150,y:100,image:9,text:function() {$.newStore = new $.store(1, function() { $.newStore.exit(); $.newMessage = new $.message("You are now back to normal, HP and MP full.");});}},
{x:300,y:200,image:7,text:function() {$.newMessage = new $.message("I hear you can get the Epic Shield and Epic Sword for free, you just have to find them. However, for the Epic Armor you will need  to face a dangerous cave dwelling ninja.");} }
//,
	 		// {x:200,y:200,image:8,alive:function() {return $.per1;},text:function() {$.newMessage = new $.message("hi go somewhere", function() {$.battle = new $.battleSystem(4); $.per1=0;});}}
			//
		 ]
 }
 
$.city2Mapping = 
 {
	 name:'city',
	 canReverse:0,
	 danger:false,
	 background:0,
	 lighting:1,
	 graph:
	 [[15,15,15,15,15,15,15,15,15,15,15,15,15,15,15],
	 [15,14,14,15,15,15,15,15,15,15,15,15,14,14,15],
	 [15,1,30,15,15,14,14,14,14,14,15,15,30,1,15],
	 [15,17,16,14,14,26,26,26,26,26,14,14,16,27,15],
	 [15,1,16,1,1,26,6,6,6,26,1,1,16,1,15],
	 [14,1,16,1,1,26,6,6,6,26,1,1,16,1,15],
	 [16,16,16,16,16,26,6,6,6,26,16,16,16,1,15],
	 [15,4,1,1,16,26,26,26,26,26,16,1,1,4,15],
	 [15,4,4,1,16,16,16,16,16,16,16,1,4,4,15],
	 [15,4,4,4,4,4,4,4,4,4,4,4,4,4,15],
	 [14,14,14,14,14,14,14,14,14,14,14,14,14,14,14]],
	 PlayerInit:{x:25,y:150},
	 POI:[{x:0,y:6,map:undefined, returnX:1125 , returnY:400}],
	 People:[{x:50,y:50,image:10,text:function() {$.newStore = new $.store(2, function() { $.newStore.exit(); $.newMessage = new $.message("Thank you for your business, your new item is already equiped.");})}},
	 		{x:300,y:50,image:9,text:function() {$.newStore = new $.store(1, function() { $.newStore.exit(); $.newMessage = new $.message("You are now back to normal, HP and MP full.");});}}
		]
 };
 
$.city3Mapping = 
 {
	 name:'city',
	 canReverse:0,
	 danger:false,
	 background:0,
	 lighting:1,
	 graph:
	 [[15,14,14,14,14,14,14,14,14,14,14,14,14,14,15],
	 [15,18,18,18,18,18,18,18,18,18,18,18,18,6,15],
	 [15,5,5,5,5,5,5,5,5,5,5,5,5,9,15],
	 [15,1,1,1,26,26,26,26,26,26,26,1,5,9,15],
	 [15,1,1,1,15,14,15,26,15,14,14,1,5,9,15],
	 [14,1,1,1,17,1,15,26,15,30,1,1,5,9,15],
	 [1,1,1,1,1,30,15,26,15,1,27,1,5,9,15],
	 [15,1,1,1,14,14,14,26,14,14,14,1,5,9,15],
	 [15,26,1,1,26,26,26,26,26,26,26,1,5,9,15],
	 [15,26,26,1,1,1,1,1,1,1,1,1,5,9,15],
	 [14,14,14,14,14,14,14,14,14,14,14,14,14,14,14]],
	 PlayerInit:{x:25,y:150},
	 POI:[{x:0,y:6,map:undefined, returnX:100 , returnY:400}],
	 People:[
		 	{x:125,y:150,image:10,text:function() {$.newStore = new $.store(3, function() { $.newStore.exit(); $.newMessage = new $.message("Thank you for your business, your new item is already equiped.");})}},
	 		{x:225,y:125,image:9,text:function() {$.newStore = new $.store(1, function() { $.newStore.exit(); $.newMessage = new $.message("You are now back to normal, HP and MP full.");});}}
		]
 }
 
 
$.city4Mapping = 
 {
	 name:'city',
	 canReverse:0,
	 danger:false,
	 background:0,
	 lighting:1,
	 graph:
	 [[15,14,14,14],
	  [15,30,1,1],
	 [14,14,14,14]],
	 PlayerInit:{x:50,y:25},
	 POI:[{x:3,y:1,map:undefined, returnX:25 , returnY:375}],
	 People:[
 		 {x:25,y:25,image:7,alive:function() {return $.per4;},text:function() {$.newMessage = new $.message("Haha! You found me, now take this epic sword, equip it and kill that wizard!", function() {$.Player.addInventory(weapon[3]);$.per4=0;});}}
	 
		]
 };
$.endcityMapping = //done///
 {
	 name:'city',
	 canReverse:0,
	 danger:false,
	 background:0,
	 lighting:1,
	 graph: $.cityMapping.graph,
	 PlayerInit:{x:25,y:150},
	 POI:[{x:0,y:6,map:undefined, returnX:350 , returnY:475}],
	 People:[{x:300,y:200,image:11, text: function() {$.newMessage = new $.message("You're me??? So you're the evil wizard invading these people's land! Off with your head!", function() {$.battle = new $.battleSystem(8, function(){document.getElementById('endScreen').style.display = "block";} );} );}}]
 }
 
$.caveMapping = ///done//////////
 {
	 name:'cave 1',
	 canReverse:0,
	 danger:true,
	 background:0,
	 lighting:0,
	 graph:
	 [[14,14,14,14,14,14,14,14,14,14,14,14,14,14,15],
	 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,15],
	 [15,1,15,14,14,14,14,14,14,14,14,14,14,1,15],
	 [15,1,15,1,1,1,1,1,1,1,1,1,1,1,15],
	 [15,1,15,1,14,14,14,15,14,14,14,1,14,14,15],
	 [15,1,15,1,1,1,1,15,1,1,1,1,1,1,15],
	 [15,1,15,1,1,1,1,15,1,1,1,1,1,1,15],
	 [15,1,15,1,1,1,1,15,14,14,14,14,14,1,15],
	 [15,1,15,1,1,1,1,15,1,1,1,1,1,1,15],
	 [15,1,15,1,1,1,1,15,30,1,1,1,1,1,15],
	 [14,14,14,14,14,14,14,14,14,14,14,14,14,14,14]],
	 PlayerInit:{x:25,y:25},
	 POI:[{x:0,y:1,map:$.cave2Mapping, returnX:1025 , returnY:100}],
	 People:[
 		 {x:200,y:225,image:9,alive:function() {return $.per2;},text:function() {$.newMessage = new $.message("Our land is being invaded by an evil wizard. I believe you have been sent to save us. His world, REVearth, is just like our Earth but backwards.  I give you the portal machine, use it while in the main map to travel between worlds and reach new islands. Just beware, the water mountains and trees are impassable and you will die if you stay in it too long.", function() {$.Player.canReverse=true;$.per2=0;});}}
	 
	 
	 ],
	 enemylocations:[{x:0,y:0,w:10000,h:10000,type:[0,1]}]
 }
$.cave2Mapping = 
 {
	 name:'cave 1',
	 canReverse:0,
	 danger:true,
	 background:0,
	 lighting:0,
	 graph:
	 [[15,14,14,14,14,14,14,14,14,14,14,14,14,14,15],
	 [15,1,1,1,1,1,1,1,1,1,1,1,1,1,15],
	 [15,1,14,14,14,14,14,14,15,1,15,1,1,1,15],
	 [15,1,1,1,1,1,1,1,15,1,15,1,1,1,15],
	 [15,14,14,15,1,1,1,1,15,1,15,1,1,1,15],
	 [15,1,1,15,1,1,1,15,14,1,14,14,14,14,14,14,14,14,14,14,14,15],
	 [15,1,1,14,1,1,1,15,1,1,1,1,1,1,1,1,1,1,1,1,30,15],
	 [15,1,14,1,1,15,14,14,14,1,15,14,14,14,15,14,14,14,14,14,14,14],
	 [14,14,1,1,1,15,1,1,1,1,14,1,1,1,15],
	 [1,1,1,1,1,15,1,1,1,1,1,1,1,1,15],
	 [14,14,14,14,14,14,14,14,14,14,14,14,14,14,14]],
	 PlayerInit:{x:25,y:225},
	 POI:[{x:0,y:9,map:undefined, returnX:850 , returnY:150}],
	 People:[ {x:500,y:150,image:8,alive:function() {return $.per1;},text:function() {$.battle = new $.battleSystem(9); $.per1=0;}}
		],
	 enemylocations:[{x:0,y:0,w:10000,h:10000,type:[3,5]}]
 }
$.cave3Mapping = 
 {
	 name:'cave 1',
	 canReverse:0,
	 danger:true,
	 background:0,
	 lighting:0,
	 graph:
	 [[14,14,14,14,14,14,14,14,14,14,14,14,14,14,15],
	 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,15],
	 [15,1,15,14,14,14,14,14,14,14,14,14,14,1,15],
	 [15,1,15,1,1,1,1,1,1,1,1,1,1,1,15],
	 [15,1,15,1,15,14,14,14,14,14,14,14,14,1,15],
	 [15,1,15,1,15,1,1,1,1,1,1,1,1,1,15],
	 [15,1,15,1,15,1,15,14,14,14,14,14,14,1,15],
	 [15,1,15,1,15,1,15,1,1,1,1,1,1,1,15],
	 [15,1,14,1,14,1,14,1,14,14,14,14,14,1,15],
	 [15,1,1,1,1,1,1,1,1,1,1,1,1,30,15],
	 [14,14,14,14,14,14,14,14,14,14,14,14,14,14,14]],
	 PlayerInit:{x:25,y:25},
	 POI:[{x:0,y:1,map:undefined, returnX:325 , returnY:150}],
	 People:[
 		 {x:325,y:225,image:7,alive:function() {return $.per3;},text:function() {$.newMessage = new $.message("Please stop that evil wizard, take this Epic Shield to help. Remember to equip it from your inventory menu.", function() {$.Player.addInventory(shield[3]);$.per3=0;});}}
	 ],
	 enemylocations:[{x:0,y:0,w:10000,h:10000,type:[3,4,5]}]
 }
 
$.endcaveMapping = 
 {
	 name:'cave 1',
	 canReverse:0,
	 danger:true,
	 background:0,
	 lighting:0,
	 graph:$.caveMapping.graph,
	 PlayerInit:{x:25,y:25},
	 POI:[{x:0,y:1,map:undefined, returnX:150 , returnY:100}],
	 People:[{x:200,y:225,image:9,text:function() {$.newMessage = new $.message("You again... Quit wasting time and go save our world!");}}
	 ],
	 enemylocations:[{x:0,y:0,w:10000,h:10000,type:[5,6,7]}]
 }
 
$.worldMapping = {
	name:'main',
	canReverse:1,
	danger:true,
	background:1,
    lighting:1,
	graph:
	[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,18,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,19,1,1,20,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,18,18,18,19,1,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,18,18,19,1,1,1,1,1,20,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,19,1,1,1,1,1,1,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,19,1,1,1,1,1,1,1,1,1,1,20,0,0,0,0],
	[0,0,0,0,0,0,0,0,10,1,1,1,1,1,1,1,1,20,18,18,18,18,18,18,18,18,18,0,0,0,0,0,19,1,1,1,1,1,1,1,1,1,2,1,1,9,0,0,0],
	[0,0,0,0,0,0,0,0,0,11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,9,0,0,0,19,1,1,1,1,1,4,4,1,1,1,1,1,1,20,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,7,11,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,9,0,0,19,1,1,1,1,4,4,5,5,1,1,1,1,1,1,26,9,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,11,1,1,1,1,8,7,7,7,7,7,7,7,7,7,0,0,19,1,1,1,1,1,4,5,5,5,5,1,1,1,1,1,26,9,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,11,1,1,1,9,0,0,0,0,0,0,0,0,0,0,19,1,1,1,1,1,1,4,4,5,5,5,1,1,1,1,1,26,9,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,10,1,1,1,20,0,0,0,0,0,0,0,0,0,19,1,1,1,1,1,1,1,1,4,4,4,4,1,1,1,1,1,1,9,0,0],
	[0,0,0,0,18,0,0,0,0,0,0,0,0,0,11,1,1,1,20,0,0,0,0,0,0,0,10,26,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,12,1,1,9,0,0],
	[0,0,0,19,1,20,0,0,0,0,0,0,0,0,0,11,26,1,26,20,0,0,0,0,0,0,10,26,26,26,1,1,1,1,1,1,1,1,1,1,1,1,8,0,11,1,9,0,0],
	[0,0,19,1,1,1,20,0,0,0,0,0,0,0,0,0,24,1,26,26,9,0,0,0,0,0,10,26,26,26,26,26,1,1,1,1,1,1,1,1,1,8,0,0,0,7,0,0,0],
	[0,19,1,1,1,1,1,20,0,0,0,0,0,0,0,10,26,1,1,26,20,0,0,0,0,0,0,22,22,22,22,22,22,22,22,22,22,22,22,22,22,18,0,0,0,18,0,0,0],
	[10,1,1,8,7,11,1,1,20,0,0,0,0,0,0,0,7,11,1,1,1,9,0,0,0,0,10,26,26,1,1,1,1,1,1,1,1,1,1,1,1,1,20,0,10,1,9,0,0],
	[28,1,8,18,18,18,11,1,26,9,0,0,0,0,0,0,0,10,1,1,1,9,0,0,0,0,10,26,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,9,19,1,9,0,0],
	[10,1,23,3,1,26,23,1,26,9,0,0,0,0,0,0,0,0,7,7,7,0,0,0,0,0,0,11,1,1,1,1,1,1,1,1,1,1,1,4,4,4,1,21,1,1,9,0,0],
	[10,1,20,7,7,22,19,1,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,1,1,1,1,1,1,1,1,1,4,4,4,1,1,1,1,8,0,0,0],
	[10,1,1,20,19,1,1,1,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,1,1,1,1,1,1,1,1,1,4,4,4,1,1,1,8,0,0,0,0],
	[0,11,1,1,1,1,8,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,1,1,1,1,1,1,3,4,4,4,1,1,1,8,0,0,0,0,0],
	[0,0,11,26,26,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,1,1,1,1,26,26,26,26,1,1,1,8,0,0,0,0,0,0],
	[0,0,0,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,1,1,1,1,1,1,1,1,1,8,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,11,1,1,1,1,1,1,8,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,7,7,7,7,7,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],
	PlayerInit:{x:750,y:250},
	POI:[{x:36,y:19,map:$.cityMapping},{x:46,y:16,map:$.city2Mapping},{x:14,y:6,map:$.cave3Mapping},{x:7,y:4,map:$.endcaveMapping},
		 {x:13,y:19,map:$.endcityMapping},{x:42,y:4,map:$.caveMapping},{x:35,y:6,map:$.cave2Mapping},{x:3,y:16,map:$.city3Mapping},{x:0,y:15,map:$.city4Mapping}],
	People:[],
	enemylocations:[{x:0,y:0,w:200,h:625,type:[6,7]},
					{x:200,y:0,w:450,h:625,type:[3,5]},
					{x:650,y:0,w:650,h:325,type:[0,1]},
					{x:650,y:325,w:650,h:325,type:[2,4]}],
	RevEnemylocations:[{x:0,y:0,w:550,h:325,type:[3,5]},
					{x:0,y:325,w:550,h:325,type:[6,7]},
					{x:550,y:0,w:450,h:625,type:[2,4]},
					{x:1000,y:0,w:200,h:625,type:[0,1]}]
	
}
//750,250
//1 land, 2 cave, 3 town, 4 mountains, 5 sand, 6 water, 7 water top land, 8 water left top, 9 water left
//10 water right, 11 top right