	var currentKey;
	var charStep = 2; //1=1st foot, 2=stand, 3=2nd foot, 4=stand
	var charSpeed = 400; //Velocidade de caminhada do personagem

	//Posicao x,y canvas
	var charX = 4;//localStorage.getItem('charX');
	var charY = 6;//localStorage.getItem('charY');

	//Variaveis globais do jogo
	var stageWidth = 640;
	var stageHeight = 480;
	var mapWidth = 800;//largura mapa
	var mapHeight = 800;//altura do mapa
	
	Blockly.JavaScript['decisao'] = function(block) {

		var dropdown_option = block.getFieldValue('OPTION');
		var statements_fa_a = Blockly.JavaScript.statementToCode(block, 'FAÇA');
		
		if(dropdown_option == 'LEFT'){
			var code = 'if (existeCaminhoEsquerda()){\n'+statements_fa_a+'}\n';
		}else{
			var code = 'if (existeCaminhoDireita()){\n'+statements_fa_a+'}\n';
		}
		return code;
	};

	/*
	Blockly.JavaScript['loop'] = function(block) {

		var statements_fa_a = Blockly.JavaScript.statementToCode(block, 'FAÇA');
		var code = 'if(!encontrouDestino()){\n '+statements_fa_a+'}\n';
		return code;

	};
	*/

	Blockly.JavaScript['mover_cima'] = function(block) {
		var code = "moverTopo();\n";
		return code;
	};

	Blockly.JavaScript['mover_baixo'] = function(block) {
		var code = "moverBaixo();\n";
		return code;
	};

	Blockly.JavaScript['mover_direita'] = function(block) {
		var code = "moverDireita();\n";
		return code;
	};

	Blockly.JavaScript['mover_esquerda'] = function(block) {
		var code = "moverEsquerda();\n";
		return code;
	};

	Blockly.JavaScript['vire'] = function(block) {
		var direcao = block.getFieldValue('VIRE');
		if( direcao == 'LEFT' ){
			var code = "vireEsquerda();\n";
		}else{
			var code = "vireDireita();\n";
		}
		return code;
	};

	function moverDireita(){

		$('#guildo').removeAttr('class').addClass('right-stand');
		
		var dir = 'right';
		moveChar(dir);

		if (chkMove(dir) == 'mapa') {
			$('#mapa').animate({left: '-=32'}, charSpeed, "linear", function() {
				charX++;
				$('#top').html(charY);
				$('#left').html(charX);
				//moveChar(dir);
			});

		}else if (chkMove(dir) == 'guildo') {
			$('#guildo').animate({left: '+=32'}, charSpeed, "linear", function() {
				charX++;
				$('#top').html(charY);
				$('#left').html(charX);
				//moveChar(dir);
			});

		}
	}

	function moverEsquerda(){
		
		$('#guildo').removeAttr('class').addClass('left-stand');
		
		var dir = 'left';
		moveChar(dir);

		if (chkMove(dir) == 'mapa') {
			$('#mapa').animate({left: '+=32'}, charSpeed, "linear", function() {
				charX--;
				$('#top').html(charY);
				$('#left').html(charX);
				//moveChar(dir);
			});

		}else if (chkMove(dir) == 'guildo') {
			$('#guildo').animate({left: '-=32'}, charSpeed, "linear", function() {
				charX--;
				$('#top').html(charY);
				$('#left').html(charX);
				//moveChar(dir);
			});

		}
	}

	function moverTopo(){

		$('#guildo').removeAttr('class').addClass('back-stand');
		
		var dir = 'up';
		moveChar(dir);

		if (chkMove(dir) == 'mapa') {
			$('#mapa').animate({top: '+=32'}, charSpeed, "linear", function() {
				charY--;
				$('#top').html(charY);
				$('#left').html(charX);
				//moveChar(dir);
			});

		}else if (chkMove(dir) == 'guildo') {
			$('#guildo').animate({top: '-=32'}, charSpeed, "linear", function() {
				charY--;
				$('#top').html(charY);
				$('#left').html(charX);
				//moveChar(dir);
			});

		}

	}

	function moverBaixo(){
			
		$('#guildo').removeAttr('class').addClass('front-stand');
		
		var dir = 'down';
		moveChar(dir);

	    if (chkMove(dir) == 'mapa') {
	  		$('#mapa').animate({top: '-=32'}, charSpeed, "linear", function() {
				charY++;
				$('#top').html(charY);
				$('#left').html(charX);
	    		//moveChar(dir);
		  	});

		} else if (chkMove(dir) == 'guildo') {
	  		$('#guildo').animate({top: '+=32'}, charSpeed, "linear", function() {
	  			charY++;
				$('#top').html(charY);
				$('#left').html(charX);
		    	//moveChar(dir);
		  	});

		}	
	}

	function vireEsquerda(){
		$('#guildo').removeAttr('class').addClass('left-stand');
	}

	function vireDireita(){
		$('#guildo').removeAttr('class').addClass('right-stand');
	}

	function encontrouDestino(){
		if( (charX == 23) && (charY == 5)){
			return true;
		}else{
			return false;
		}
	}

	function existeCaminhoEsquerda(){
		if( (charX > 24 || charX < 0) && (charY > 24 || charY < 0) ){
			return false;
		}else{
			return true;
		}
	}

	function existeCaminhoDireita(){
		if( (charX > 24 || charX < 0) && (charY > 24 || charY < 0) ){
		 	return false;
		}else{
			return true;
		}
	}

	//Restaurando valor inicial das variaveis setadas no localStorage
	function atualizaValores() {
		
		if(!localStorage.getItem('pontuacao')){
			localStorage.setItem('pontuacao', 0);
		}

		if(!localStorage.getItem('percentual_vida')){
			localStorage.setItem('percentual_vida', 100);
		}
		/*
		if(!localStorage.getItem('charX')){
			localStorage.setItem('charX', 4);
		}

		if(!localStorage.getItem('charY')){
			localStorage.setItem('charY', 6);
		}
		*/
		$("#pontuacao-atual").html( localStorage.getItem('pontuacao') );
		$("#barra-vida").css("width", localStorage.getItem('percentual_vida')+"%");

	}


	function moveChar(dir) {

		//Armazena key inicial de animacao
		// var currentKeyCheck = currentKey;

		//ajuste de direçoes
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

				setTimeout(function(){
					charStep++;
					if (charStep == 5) charStep = 1;
					$('#guildo').removeAttr('class');
					$('#guildo').addClass(dir+'-right'); 
				},(charSpeed/3));

				setTimeout(function(){
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
		/*
		switch(dir) {
				
		    case 'front':
		    	if( charX == 4 && charY == 2) return false;
			    if (chkMove(dir) == 'mapa') {
			  		$('#mapa').animate({top: '-=32'}, charSpeed, "linear", function() {
						charY++;
						$('#top').html(charY);
						$('#left').html(charX);
			    		// if (currentKey == currentKeyCheck) moveChar(dir);
				  	});
				} else if (chkMove(dir) == 'guildo') {
			  		$('#guildo').animate({top: '+=32'}, charSpeed, "linear", function() {
			  			charY++;
						$('#top').html(charY);
						$('#left').html(charX);
				    	// if (currentKey == currentKeyCheck) moveChar(dir);
				  	});
				}
				break;
				
			case 'back':
				if( charX == 4 && charY == 4) return false;
				if (chkMove(dir) == 'mapa') {
					$('#mapa').animate({top: '+=32'}, charSpeed, "linear", function() {
						charY--;
						$('#top').html(charY);
						$('#left').html(charX);
						// if (currentKey == currentKeyCheck) moveChar(dir);
					});
				}else if (chkMove(dir) == 'guildo') {
					$('#guildo').animate({top: '-=32'}, charSpeed, "linear", function() {
						charY--;
						$('#top').html(charY);
						$('#left').html(charX);
						// if (currentKey == currentKeyCheck) moveChar(dir);
					});
				}
				break;

			case 'left':
				if( charX == 5 && charY == 3) return false;
				if (chkMove(dir) == 'mapa') {
					$('#mapa').animate({left: '+=32'}, charSpeed, "linear", function() {
						charX--;
						$('#top').html(charY);
						$('#left').html(charX);
						// if (currentKey == currentKeyCheck) moveChar(dir);
					});
				}
				else if (chkMove(dir) == 'guildo') {
					$('#guildo').animate({left: '-=32'}, charSpeed, "linear", function() {
						charX--;
						$('#top').html(charY);
						$('#left').html(charX);
						// if (currentKey == currentKeyCheck) moveChar(dir);
					});
				}
				break;

			case'right':
				if( charX == 3 && charY == 3) return false;
				if (chkMove(dir) == 'mapa') {
					$('#mapa').animate({left: '-=32'}, charSpeed, "linear", function() {
						charX++;
						$('#top').html(charY);
						$('#left').html(charX);
						// if (currentKey == currentKeyCheck) moveChar(dir);
					});
				}
				else if (chkMove(dir) == 'guildo') {
					$('#guildo').animate({left: '+=32'}, charSpeed, "linear", function() {
						charX++;
						$('#top').html(charY);
						$('#left').html(charX);
						// if (currentKey == currentKeyCheck) moveChar(dir);
					});
				}
				break;

		}
		*/

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