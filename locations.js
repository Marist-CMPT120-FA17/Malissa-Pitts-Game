	var currentLoc = 0;
	var score = 0;
	var navigationErrorCount = 0;

	var hasVisitedLoc0 = false;
	var hasVisitedLoc1 = false;
	var hasVisitedLoc2 = false;
	var hasVisitedLoc3 = false;
	var hasVisitedLoc4 = false;
	var hasVisitedLoc5 = false;
	var hasVisitedLoc6 = false;
	var hasVisitedLoc7 = false;
	var hasVisitedLoc8 = false;
	var hasVisitedLoc9 = false;
	
//Global Array
	var Location = [];
	var Items = [];
	var Inventory = [];
	
//Location
	Location [0] = Desert;
	Location [1] = Hiding;
	Location [2] = Walking;
	Location [3] = Caravan;
	Location [4] = Cacti;
	Location [5] = Water;
	Location [6] = Mult;
	Location [7] = Smoke;
	Location [8] = Sandune;
	Location [9] = Airplane;
	
	Location.push (Desert, Hiding, Walking, Caravan, Cacti, Water, Mult, Smoke, Sandune, Airplane);
		
//Items
	Items [0] = Life;
	Items [1] = Sand;
	Items [2] = Water;
	Items [3] = Tools;
	
	takeItems.push ();

	//Initialization Function
	function init() {
		look();
	}
	
//Add Locations

function Location (id, name, description, items)
		this .id = id;
		this .name = name;
		this .description = description;
		this .items = items;
		locations.toString = function () {
			return this .id + "" + this .name + this .description + "" + this .items
		}
		
	var Desert = new Location (0, "Desert", "You are standing in the desert: no food, no water. Type in a direction or Click a button below.", life);
	var Hiding = new Location (1, "Hiding", "You lay low in the sand, still deciding what to do.", sand);
	var Walking = new Location (2, "Walking","After walking for miles, you spot a caravan in the distance.", null);
	var Caravan = new Location (3, "Caravan","The caravan is not friendly. They decide to take you prisoner.", null);
	var Cacti = new Location (4, "Cacti","After hours of walking, you stumble upon a grouping of cacti.", sansItems, false);
	var Water = new Location (5, "Water","You begin to hack away at the cacti and water pours out.", water);
	var Mult = new Location (6, "Mult","You only encounter more desert...and some cacti. In the distance, you see smoke.", null);
	var Smoke = new Location (7, "Smoke","You walk toward the smoke. It get's thicker and the air is harder to breathe.", null);
	var Sandune = new Location (8, "Sandune","You encounter more desert until, on the other side of a sand dune, you see a tower of smoke.", null);
	var Airplane = new Location (9, "Airplane", "You approach an airplane crash site. You see that the pilot is gone but he left tools behind.",tools);
	}
	
//Add Items
	function Items (id, name, description, items) {
		this .id = id;
		this .name = name;
		this .description = description;
		this .items = items;
		items.toString = function () {
		  return this.id + "" + this.name + "" + this.description + "" + this.items
		}
	var life = new Items ("Life", "You have gained a life",life); 
	var sand = new Items ("Sand", "You have collected some sand", sand); 
	var water = new Items ("Water", "You have stored some water", water);
	var tools = new Items ("Tools", "You have obtatined some tools.", tools);
	}
	
//Command Box
	function playerCommand() {
		var command = document.getElementById("txtCommand").value;
			command = command.trim();
			command = command.toLowerCase();
			command = command.substr(0,2);			
					if (command == "n") {
						btnNorth_click ();
					} else if (command == "s") {
						btnSouth_click;
					} else if (command == "e") {
						btnEast_click;
					} else if (command == "w") {
						btnWest_click;
					}else if (command == "take") {
						takeItem ();
					} else if (command == "list") {
						listInventory ();
					} else {
						displayMessage("Please enter N, S, E, or W as a direction or click the button of the direction that you want to go. Type list to display your inventory.");
					}}
//Buttons
function btnNorth_click() {
	if (currentLoc === 1) {
		currentLoc = 8;
		look();               
	} else {
	if (currentLoc === 2) {
		currentLoc = 0;
		look();  
	} else {
	if (currentLoc === 3) {
		currentLoc = 4;
		look(); 
	} else {
	if (currentLoc === 8) {
		currentLoc = 7;
		look(); 
	} else {
	if (currentLoc === 0) {
		currentLoc = 6;
		look(); 
	} else {
	if (currentLoc === 4) {
		currentLoc = 5;
		look(); 		
    } else {
		navigationError(); 
    }}}}}}}           

	function btnSouth_click() {
	if (currentLoc === 5) {
		currentLoc = 4;
		look();               
	} else {
	if (currentLoc === 6) {
		currentLoc = 0;
		look();  
	} else {
	if (currentLoc === 7) {
		currentLoc = 8;
		look(); 
	} else {
	if (currentLoc === 4) {
		currentLoc = 3;
		look(); 
	} else {
	if (currentLoc === 0) {
		currentLoc = 2;
		look(); 
	} else {
	if (currentLoc === 8) {
		currentLoc = 1;
		look(); 		
    } else {
		navigationError(); 
    }}}}}}}

function btnEast_click() {
	if (currentLoc === 5) {
		currentLoc = 6
		look();               
	} else {
	if (currentLoc === 4) {
		currentLoc = 0;
		look();  
	} else {
	if (currentLoc === 3) {
		currentLoc = 2;
		look(); 
	} else {
	if (currentLoc === 6) {
		currentLoc = 7;
		look(); 
	} else {
	if (currentLoc === 0) {
		currentLoc = 8;
		look(); 
	} else {
	if (currentLoc === 2) {
		currentLoc = 1;
		look(); 	
	} else {
	if (currentLoc === 8) {
		currentLoc = 9;
		look();
    } else {
		navigationError(); 
    }}}}}}}}

	function btnWest_click() {
	if (currentLoc === 9) {
		currentLoc = 8;
		look();               
	} else {
	if (currentLoc === 7) {
		currentLoc = 6;
		look();  
	} else {
	if (currentLoc === 8) {
		currentLoc = 0;
		look(); 
	} else {
	if (currentLoc === 1) {
		currentLoc = 2;
		look(); 
	} else {
	if (currentLoc === 6) {
		currentLoc = 5;
		look(); 
	} else {
	if (currentLoc === 0) {
		currentLoc = 4;
		look(); 	
	} else {
	if (currentLoc === 2) {
		currentLoc = 3;
		look();
    } else {
		navigationError(); 
    }}}}}}}}

//Take Function
function Take() {
	var takeItem = Location[currentLoc];
	if (takeItem.item === null) {
		displayMessage("There is no item here.")
	} else {
	userInventory.push(items[currentLoc],Name);
	displayMessage("Item has been added to your inventory." + items[currentLoc].description);
	Location[currentLoc].item = null;
	}
}

//Inventory Function
function Inventory() {
   itemDesc("In your inventory you have" + player.Inventory);
   }
 
function directionError {
	navigationErrorCount = navigationErrorCount + 1;
	if (navigationErrorCount >= 1)
		displayMessage ("You cannot go that way. Please choose or type a different direction.");
		}

function displayMessage(msg) {
	var target = document.getElementById("taMain");
	target.value = msg + "\n\n" + target.value;
			}
//Help Button
	function btnHelp_click () {
		window.alert ("Please enter N, S, E, or W as a direction or click the button of the direction that you want to go. Type list to display your inventory.");
		}
</script>