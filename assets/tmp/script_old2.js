var currentKey; // Armazena opção atual de comando informado(via teclado "teclas direcionais")
var charStep = 2; //1=1st foot, 2=stand, 3=2nd foot, 4=stand
var charSpeed = 400; //Velocidade de caminhada do personage,

//[x,y], posicao inicial do personagem no cenario
var charX = localStorage.getItem('charX'); //1 unit=32px
var charY = localStorage.getItem('charY'); //1 unit=32px

var stageWidth = 640;
var stageHeight = 480;
var mapWidth = 800;//largura mapa
var mapHeight = 800;//altura do mapa

//Funçao movimenta o personagem
function moveChar(dir) {

	//Armazena key inicial de animacao
	var currentKeyCheck = currentKey;
	
	//ajuste por parte da position up/down, via codigo
	if (dir == 'up') dir = 'back';
	if (dir == 'down') dir = 'front';

	charStep++;
	if (charStep == 5) charStep = 1;
	
	//Remove classe atual do personagem
	$('#guildo').removeAttr('class');
	
	console.log("charStep: "+charStep);

	//Adiciona nova classe
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

	//currentKey = currentKey+1;

    console.log("currentKey: "+currentKey);
    console.log("currentKeyCheck: "+currentKeyCheck);

	//Move personagem conforme direcao informada pela variavel dir
	switch(dir) {
		
	    case 'front':
		    if (chkMove(dir) == 'mapa') {
		  		$('#mapa').animate({top: '-=32'}, charSpeed, "linear", function() {
					charY++;
					console.log("front1: "+charX+","+charY);
		    		if (currentKey == currentKeyCheck) moveChar(dir);
			  	});
			} else if (chkMove(dir) == 'guildo') {
		  		$('#guildo').animate({top: '+=32'}, charSpeed, "linear", function() {
		  			charY++;
					console.log("front2: "+charX+","+charY);
			    	if (currentKey == currentKeyCheck) moveChar(dir);
			  	});
			}
			break;
			
		case 'back':
			if (chkMove(dir) == 'mapa') {
				$('#mapa').animate({top: '+=32'}, charSpeed, "linear", function() {
					charY--;
					console.log("back1: "+charX+","+charY);
					if (currentKey == currentKeyCheck) moveChar(dir);
				});
			}else if (chkMove(dir) == 'guildo') {
				$('#guildo').animate({top: '-=32'}, charSpeed, "linear", function() {
					charY--;
					console.log("back2: "+charX+","+charY);
					if (currentKey == currentKeyCheck) moveChar(dir);
				});
			}
			break;

		case 'left':
			if (chkMove(dir) == 'mapa') {
				$('#mapa').animate({left: '+=32'}, charSpeed, "linear", function() {
					charX--;
					console.log("left1: "+charX+","+charY);
					if (currentKey == currentKeyCheck) moveChar(dir);
				});
			}
			else if (chkMove(dir) == 'guildo') {
				$('#guildo').animate({left: '-=32'}, charSpeed, "linear", function() {
					charX--;
					console.log("left2: "+charX+","+charY);
					if (currentKey == currentKeyCheck) moveChar(dir);
				});
			}
			break;

		case'right':
			if (chkMove(dir) == 'mapa') {
				$('#mapa').animate({left: '-=32'}, charSpeed, "linear", function() {
					charX++;
					console.log("right1: "+charX+","+charY);
					if (currentKey == currentKeyCheck) moveChar(dir);
				});
			}
			else if (chkMove(dir) == 'guildo') {
				$('#guildo').animate({left: '+=32'}, charSpeed, "linear", function() {
					charX++;
					console.log("right2: "+charX+","+charY);
					if (currentKey == currentKeyCheck) moveChar(dir);
				});
			}
			break;

	}

}// fim da function moveChar()

function chkMove(dir) {

    switch(dir) {

	  case 'front':
	  case 'down':
		//Se o personagem é maior do que ou igual a 64px a partir do fundo do mapa
		//e o personagem não é menos do que ou igual a 64px a partir do topo da fase
		//e o "mapa" gráfico não é na parte inferior
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

	  case 'back':
	  case 'up':
		//Se o personagem é maior do que ou igual a 64px a partir do fundo do mapa
		//e o personagem não é menos do que ou igual a 64px a partir do topo da fase
		//e o "mapa" gráfico não é na parte superior
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

	  case 'left':
	    //Se o personagem é maior do que ou igual a 64px a partir da esquerda da fase
		//e o personagem não é menos do que ou igual a 64px da direita da fase
		//e o "mapa" gráfico não é à direita
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

	  case 'right':
	    //Se o carácter é maior do que ou igual a 64px a partir da esquerda da fase
		//e o carácter não é menos do que ou igual a 64px da direita da fase
		//e o "mapa" gráfico não está à esquerda
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

}// fim da function chkMove()
