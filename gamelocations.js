//Global Variables
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
	
//Initialization Function
	function init() {
		look();
	}
	function playerCommand() {
		var command = document.getElementById("txtCommand").value;
			command = command.trim();
			command = command.toLowerCase();
			command = command.substr(0,2);			
					if (command == "n") {
						btnNorth_click();
					} else if (command == "s") {
						btnSouth_click();
					} else if (command == "e") {
						btnEast_click();
					} else if (command == "w") {
						btnWest_click();
					} else {
						displayMessage("Please enter N, S, E, or W as a direction or click the button of the direction that you want to go. Type list to display your inventory.");
					}
				}	
	
	// Directional Button Event Handlers 
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
	//there are too many locations!
	
	//Help Button
	function btnHelp_click () {
		window.alert ("Please enter N, S, E, or W as a direction or click the button of the direction that you want to go. Type list to display your inventory.");
		}
		
	
	        // Location Functions
         function look() {
            var loc = "";
            switch(currentLoc) {
            case 0: loc0 (); break;
            case 1: loc1 (); break; 
            case 2: loc2 (); break;
            case 3: loc3 (); break;
            case 4: loc4 (); break;
			case 5: loc5 (); break;
			case 6: loc6 (); break;
			case 7: loc7 (); break;
			case 8: loc8 (); break;
			case 9: loc9 (); break;
            default: loc  = "You cannot go that way. Please choose or type a different direction.";
            }}
			
			
//LOC Functions
	function loc0() {
	var loc = "You are standing in the desert: no food, no water. Type in a direction or Click a button below.";
	checkScore();
	loc = loc + "\n" + "Score: " + score ;
	displayMessage(loc);
	document.getElementById("btnNorth").disabled = false;
    document.getElementById("btnSouth").disabled = false;
    document.getElementById("btnWest").disabled = false;
    document.getElementById("btnEast").disabled = false;
	}	
	function loc1() {
	var loc = "You lay low in the sand, still deciding what to do.";
	checkScore();
	loc = loc + "\n" + "Score: " + score ;
	displayMessage(loc);
	document.getElementById("btnNorth").disabled = false;
    document.getElementById("btnSouth").disabled = true;
    document.getElementById("btnWest").disabled = false;
    document.getElementById("btnEast").disabled = true;
	}
	function loc2() {
	var loc = "After walking for miles, you spot a caravan in the distance.";
	checkScore();
	loc = loc + "\n" + "Score: " + score ;
	displayMessage(loc);
	document.getElementById("btnNorth").disabled = false;
    document.getElementById("btnSouth").disabled = true;
    document.getElementById("btnWest").disabled = false;
    document.getElementById("btnEast").disabled = false;
	}
	function loc3() {
	var loc = "The caravan is not friendly. They decide to take you prisoner.";
	checkScore();
	loc = loc + "\n" + "Score: " + score ;
	displayMessage(loc);
	document.getElementById("btnNorth").disabled = false;
    document.getElementById("btnSouth").disabled = true;
    document.getElementById("btnWest").disabled = true;
    document.getElementById("btnEast").disabled = false;
	}	
	function loc4() {
	var loc = "After hours of walking, you stumble upon a grouping of cacti.";
	checkScore();
	loc = loc + "\n" + "Score: " + score ;
	displayMessage(loc);
	document.getElementById("btnNorth").disabled = false;
    document.getElementById("btnSouth").disabled = false;
    document.getElementById("btnWest").disabled = true;
    document.getElementById("btnEast").disabled = false;
	}
	function loc5() {
	var loc = "You begin to hack away at the cacti and water pours out.";
	checkScore();
	loc = loc + "\n" + "Score: " + score ;
	displayMessage(loc);
	document.getElementById("btnNorth").disabled = true;
    document.getElementById("btnSouth").disabled = false;
    document.getElementById("btnWest").disabled = true;
    document.getElementById("btnEast").disabled = false;
	}
	function loc6() {
	var loc = "You only encounter more desert...and some cacti. In the distance, you see smoke.";
	checkScore();
	loc = loc + "\n" + "Score: " + score ;
	displayMessage(loc);
	document.getElementById("btnNorth").disabled = true;
    document.getElementById("btnSouth").disabled = false;
    document.getElementById("btnWest").disabled = false;
    document.getElementById("btnEast").disabled = false;
	}
	function loc7() {
	var loc =  "You walk toward the smoke. It get's thicker and the air is harder to breathe.";
	checkScore();
	loc = loc + "\n" + "Score: " + score ;
	displayMessage(loc);
	document.getElementById("btnNorth").disabled = true;
    document.getElementById("btnSouth").disabled = false;
    document.getElementById("btnWest").disabled = false;
    document.getElementById("btnEast").disabled = true;
	}
	function loc8() {
	var loc = "You encounter more desert until, on the other side of a sand dune, you see a tower of smoke.";
	checkScore();
	loc = loc + "\n" + "Score: " + score ;
	displayMessage(loc);
	document.getElementById("btnNorth").disabled = false;
    document.getElementById("btnSouth").disabled = false;
    document.getElementById("btnWest").disabled = false;
    document.getElementById("btnEast").disabled = false;
	}
   	function loc9() {
	var loc = "You approach an airplane crash site. You see that the pilot is gone but he left supplies behind as well as a hatchett."
	checkScore();
	loc = loc + "\n" + "Score: " + score ;
	displayMessage(loc);
	document.getElementById("btnNorth").disabled = true;
    document.getElementById("btnSouth").disabled = true;
    document.getElementById("btnWest").disabled = false;
    document.getElementById("btnEast").disabled = true;
	}   
	
	function navigationError() {
		navigationErrorCount = navigationErrorCount + 1;
			if (navigationErrorCount >= 1){
			displayMessage("You cannot go that way. Please choose or type a different direction.");           
         }}
		 
	function checkScore() {
		if (! hasVisitedLoc0) {            
		if (currentLoc === 0) {
		score = score + 5;
        hasVisitedLoc0 = true;
     }
	} else if ( (! hasVisitedLoc1) && (currentLoc === 1) ) {            
        score = score + 5;
        hasVisitedLoc1 = true;
	} else if ( (! hasVisitedLoc2) && (currentLoc === 2) ) {            
        score = score + 5;
        hasVisitedLoc2 = true;
	} else if ( (! hasVisitedLoc3) && (currentLoc === 3) ) {            
        score = score + 5;
        hasVisitedLoc3 = true;
	} else if ( (! hasVisitedLoc4) && (currentLoc === 4) ) {            
        score = score + 5;
        hasVisitedLoc4 = true;
	} else if ( (! hasVisitedLoc5) && (currentLoc === 5) ) {            
        score = score + 5;
        hasVisitedLoc5 = true;
	} else if ( (! hasVisitedLoc6) && (currentLoc === 6) ) {            
        score = score + 5;
        hasVisitedLoc6 = true;
	} else if ( (! hasVisitedLoc7) && (currentLoc === 7) ) {            
        score = score + 5;
        hasVisitedLoc7 = true;
	} else if ( (! hasVisitedLoc8) && (currentLoc === 8) ) {            
        score = score + 5;
        hasVisitedLoc8 = true;
	} else if ( (! hasVisitedLoc9) && (currentLoc === 9) ) {            
        score = score + 5;
        hasVisitedLoc9 = true;
  }            
}
		function displayMessage(msg) {
			var target = document.getElementById("taMain");
			target.value = msg + "\n\n" + target.value;
			}
	</script>