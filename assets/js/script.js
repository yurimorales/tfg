var currentKey;
var charStep = 2; //1=1st foot, 2=stand, 3=2nd foot, 4=stand
var charSpeed = 400; //Velocidade de caminhada do personagem

//Position x e y canvas
var charX = 4;//localStorage.getItem('charX');
var charY = 6;//localStorage.getItem('charY');

//Variaveis globais do jogo
var stageWidth = 640;
var stageHeight = 480;
var mapWidth = 800;//largura mapa
var mapHeight = 800;//altura do mapa
	
	Blockly.JavaScript['repeticao'] = function(block) {
	  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
	  // TODO: Assemble JavaScript into code variable.
	  var code = 'console.log("while");\n';
	  return code;
	};

	Blockly.JavaScript['avancar'] = function(block) {

		//$('#guildo').removeAttr('class').addClass('fron-stand');

		// if (chkMove('back') == 'mapa') {
		// 	var codeMoveTop = "$(\"#mapa\").animate({\n top: \"+=32\"}, "+charSpeed+", \"linear\", function() {\n "+(charY--)+"; });";

		// }else if (chkMove('back') == 'guildo') {
		// 	var codeMoveTop = "$(\"#guildo\").animate({\n top: \"-=32\"}, "+charSpeed+", \"linear\", function() {\n "+(charY--)+"; });"
		// }

		//console.log( charX + "," + charY );
		var codeMove = "console.log('mover');\n";
		return codeMove;
			
	};

	Blockly.JavaScript['vire'] = function(block) {
		
		//$('#guildo').removeAttr('class').addClass('left-stand');

		// if (chkMove('left') == 'mapa') {

		// 	var codeMoveLeft = "$(\"#mapa\").animate({\n left: \"+=32\"}, "+charSpeed+", \"linear\", function() {\n "+(charX--)+"; });";

		// } else if (chkMove('left') == 'guildo') {

		// 	var codeMoveLeft = "$(\"#guildo\").animate({\n left: \"-=32\"}, "+charSpeed+", \"linear\", function() {\n "+(charX--)+"; });"

		// }

		//console.log( charX + "," + charY );
		var retorno = "console.log('vire left/right');\n";
		return retorno;//codeMoveLeft;
	};
	
	Blockly.JavaScript['condicional'] = function(block) {
		var dropdown_direcao = block.getFieldValue('direcao');
		var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
		// TODO: Assemble JavaScript into code variable.
		var code = 'console.log("condicional if");\n';
		return code;
	};

	// Blockly.JavaScript['move_top'] = function(block) {
		
	// 	$('#guildo').removeAttr('class').addClass('back-stand');

	// 	if (chkMove('front') == 'mapa') {
	// 		var codeMoveTop = "$(\"#mapa\").animate({\n top: \"-=32\"}, "+charSpeed+", \"linear\", function() {\n "+(charY++)+"; });";

	// 	}else if (chkMove('front') == 'guildo') {
	// 		var codeMoveTop = "$(\"#guildo\").animate({\n top: \"+=32\"}, "+charSpeed+", \"linear\", function() {\n "+(charY++)+"; });"
	// 	}
	// 	return codeMoveTop;
	// };	


	// Blockly.JavaScript['move_bottom'] = function(block) {
		
	// 	$('#guildo').removeAttr('class').addClass('front-stand');

	// 	if (chkMove('front') == 'mapa') {
	// 		var codeMoveBottom = "$(\"#mapa\").animate({\n top: \"-=32\"}, "+charSpeed+", \"linear\", function() {\n "+(charY++)+"; });";

	// 	}else if (chkMove('front') == 'guildo') {
	// 		var codeMoveBottom = "$(\"#guildo\").animate({\n top: \"+=32\"}, "+charSpeed+", \"linear\", function() {\n "+(charY++)+"; });"
	// 	}
	// 	return codeMoveBottom;
	// };


	//Restaurando valor inicial das variaveis setadas no localStorage
	function updateAllValues() {
		
		if(!localStorage.getItem('pontuacao')){
			localStorage.setItem('pontuacao', 0);
		}

		if(!localStorage.getItem('percentual_vida')){
			localStorage.setItem('percentual_vida', 100);
		}

		if(!localStorage.getItem('charX')){
			localStorage.setItem('charX', 4);
		}

		if(!localStorage.getItem('charY')){
			localStorage.setItem('charY', 6);
		}

		$("#pontuacao-atual").html( localStorage.getItem('pontuacao') );
		$("#barra-vida").css("width", localStorage.getItem('percentual_vida')+"%");

	}


function moveChar(dir) {

	//Armazena key inicial de animacao
	var currentKeyCheck = currentKey;

	//ajuste por parte da longitude, via codigo
	if (dir == 'up') dir = 'back';
	if (dir == 'down') dir = 'front';

	charStep++;
	if (charStep == 5) charStep = 1;

	//Remove classe atual do personagem
	$('#guildo').removeAttr('class');

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


	//Move personagem conforme direcao informada pela variavel dir
	switch(dir) {
		
	    case 'front':
		    if (chkMove(dir) == 'mapa') {
		  		$('#mapa').animate({top: '-=32'}, charSpeed, "linear", function() {
					charY++;
					$('#top').html(charY);
					$('#left').html(charX);
		    		if (currentKey == currentKeyCheck) moveChar(dir);
			  	});
			} else if (chkMove(dir) == 'guildo') {
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

	}// fim da function chkMove