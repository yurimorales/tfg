//Global variables that will be accessed in the functions below.
var currentKey; // records the current key pressed
var charStep = 2; // 1=1st foot, 2=stand, 3=2nd foot, 4=stand
var charSpeed = 400; // how fast the character will move

var charX = 4; // 1 unit = 32px
var charY = 6; // 1 unit = 32px

var stageWidth = 640;
var stageHeight = 480;
var mapWidth = 800;
var mapHeight = 800;

//Character Walk Function
function moveChar(dir) {

	//a player could switch key mid-animation
	//record the key that was down when animation started
	var currentKeyCheck = currentKey;

	//adjust from lang to code
	if (dir == 'up') dir = 'back';
	if (dir == 'down') dir = 'front';

	charStep++;
	if (charStep == 5) charStep = 1;

	//remove the current class
	$('#guildo').removeAttr('class');

	//add the new class
	switch(charStep) {

		case 1: 
			$('#guildo').addClass(dir+'-stand'); 

			setTimeout(function() { 
				charStep++;
				if (charStep == 5) charStep = 1;
				$('#guildo').removeAttr('class');
				$('#guildo').addClass(dir+'-right'); 
			}, (charSpeed/3));

			setTimeout(function() { 
				charStep++;
				if (charStep == 5) charStep = 1;
				$('#guildo').removeAttr('class');
				$('#guildo').addClass(dir+'-stand'); 
			}, ((charSpeed/3)*2));
			break;

		case 2: 
			$('#guildo').addClass(dir+'-right');

			setTimeout(function() { 
				charStep++;
				if (charStep == 5) charStep = 1;
				$('#guildo').removeAttr('class');
				$('#guildo').addClass(dir+'-stand'); 
			}, (charSpeed/3));

			setTimeout(function() { 
				charStep++;
				if (charStep == 5) charStep = 1;
				$('#guildo').removeAttr('class');
				$('#guildo').addClass(dir+'-left'); 
			}, ((charSpeed/3)*2));
			break;

		case 3: 
	      	$('#guildo').addClass(dir+'-stand');

			setTimeout(function() { 
				charStep++;
				if (charStep == 5) charStep = 1;
				$('#guildo').removeAttr('class');
				$('#guildo').addClass(dir+'-left'); 
			}, (charSpeed/3));

			setTimeout(function() { 
				charStep++;
				if (charStep == 5) charStep = 1;
				$('#guildo').removeAttr('class');
				$('#guildo').addClass(dir+'-stand'); 
				}, ((charSpeed/3)*2)); 
	    	break;

		case 4: 
			$('#guildo').addClass(dir+'-left');

			setTimeout(function() { 
				charStep++;
				if (charStep == 5) charStep = 1;
				$('#guildo').removeAttr('class');
				$('#guildo').addClass(dir+'-stand'); 
				}, (charSpeed/3));

			setTimeout(function() { 
				charStep++;
				if (charStep == 5) charStep = 1;
					$('#guildo').removeAttr('class');
					$('#guildo').addClass(dir+'-right'); 
				}, ((charSpeed/3)*2));
			break;
	}
 
	//move the char
	switch(dir) {

		case 'front':
		    if (chkMove(dir) == 'mapa') {
		  		$('#mapa').animate({top: '-=32'}, charSpeed, "linear", function() {
					charY++;
					$('#top').html(charY);
					$('#left').html(charX);
		    		if (currentKey == currentKeyCheck) moveChar(dir);
			  	});
			}
			else if (chkMove(dir) == 'guildo') {
		  		$('#guildo').animate({top: '+=32'}, charSpeed, "linear", function() {
		  			charY++;
					$('#top').html(charY);
					$('#left').html(charX);
			    	if (currentKey == currentKeyCheck) moveChar(dir);
			  	});
			}
			break;

		case 'back':
			if (chkMove(dir) == 'mapa') {
				$('#mapa').animate({top: '+=32'}, charSpeed, "linear", function() {
					charY--;
					$('#top').html(charY);
					$('#left').html(charX);
					if (currentKey == currentKeyCheck) moveChar(dir);
				});
			}else if (chkMove(dir) == 'guildo') {
				$('#guildo').animate({top: '-=32'}, charSpeed, "linear", function() {
					charY--;
					$('#top').html(charY);
					$('#left').html(charX);
					if (currentKey == currentKeyCheck) moveChar(dir);
				});
			}
			break;

		case 'left':
			if (chkMove(dir) == 'mapa') {
				$('#mapa').animate({left: '+=32'}, charSpeed, "linear", function() {
					charX--;
					$('#top').html(charY);
					$('#left').html(charX);
					if (currentKey == currentKeyCheck) moveChar(dir);
				});
			}
			else if (chkMove(dir) == 'guildo') {
				$('#guildo').animate({left: '-=32'}, charSpeed, "linear", function() {
					charX--;
					$('#top').html(charY);
					$('#left').html(charX);
					if (currentKey == currentKeyCheck) moveChar(dir);
				});
			}
			break;

		case'right':
			if (chkMove(dir) == 'mapa') {
				$('#mapa').animate({left: '-=32'}, charSpeed, "linear", function() {
					charX++;
					$('#top').html(charY);
					$('#left').html(charX);
					if (currentKey == currentKeyCheck) moveChar(dir);
				});
			}
			else if (chkMove(dir) == 'guildo') {
				$('#guildo').animate({left: '+=32'}, charSpeed, "linear", function() {
					charX++;
					$('#top').html(charY);
					$('#left').html(charX);
					if (currentKey == currentKeyCheck) moveChar(dir);
				});
			}
			break;

	}

}// end function moveChar()

function chkMove(dir) {

    switch(dir) {

	  case'front':
		// if the character is greater than or equal to 64px from the bottom of the stage
		// AND the character is not less than or equal to 64px from the top of the stage
		// AND the "map" graphic is not at the bottom
		if ($('#guildo').position().top <= (stageHeight - 64) 
		    && $('#guildo').position().top >= 64
		    && (Math.abs($('#mapa').position().top) + stageHeight) < mapHeight) {
	  		return 'mapa';
		} else if ($('#guildo').position().top + 32 < stageHeight) { 
	  		return 'guildo';
		} else {
	  		return false;
		}
	    break;

	  case'back':
		// if the character is greater than or equal to 64px from the bottom of the stage
		// AND the character is not less than or equal to 64px from the top of the stage
		// AND the "map" graphic is not at it's top
		if ($('#guildo').position().top >= 64 
	      && $('#guildo').position().top < (stageHeight - 64)
		  && $('#mapa').position().top < 0) {
			return 'mapa';
		} else if ($('#guildo').position().top - 32 >= 0) { 
			return 'guildo';
		} else {
			return false;
		}
	    break;

	  case'left':
	    // if the character is greater than or equal to 64px from the left of the stage
		// AND the character is not less than or equal to 64px from the right of the stage
		// AND the "map" graphic is not at the right
		if ($('#guildo').position().left < (stageWidth - 64) 
		    && $('#guildo').position().left >= 64
		    && $('#mapa').position().left < 0) {
      		return 'mapa';
		} else if ($('#guildo').position().left - 32 >= 0) { 
			return 'guildo';
		} else {
			return false;
		}
	    break;

	  case'right':
	    // if the character is greater than or equal to 64px from the left of the stage
		// AND the character is not less than or equal to 64px from the right of the stage
		// AND the "map" graphic is not at the left
		if ($('#guildo').position().left <= (stageWidth - 64) 
		    && $('#guildo').position().left >= 64
		    && (Math.abs($('#mapa').position().left) + stageWidth) < mapWidth) {
			return 'mapa';
		} else if ($('#guildo').position().left + 32 < stageWidth) { 
			return 'guildo';
		} else {
  			return false;
		}
	    break;

	}

}// end function chkMove()
