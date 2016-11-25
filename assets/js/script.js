//Position x e y do canvas
var charX = localStorage.getItem('charX'); //1 unit=32px
var charY = localStorage.getItem('charY'); //1 unit=32px

var charStep = 2; //1=1st foot, 2=stand, 3=2nd foot, 4=stand
var charSpeed = 400; //Velocidade de caminhada do personage,

//Variaveis globais do jogo
var stageWidth = 640;
var stageHeight = 480;
var mapWidth = 800;//largura mapa
var mapHeight = 800;//altura do mapa

//Load dos commandos do blockly
var workspace = Blockly.inject('DivBlockly',{ toolbox: document.getElementById('toolbox') });
Blockly.JavaScript.addReservedWords('code','move_top','move_bottom','move_right','move_left');
	
	Blockly.Blocks['move_top'] = {
		init: function() {
			this.appendDummyInput()
				.appendField("mover para cima");
			this.setInputsInline(false);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(290);
			this.setTooltip('');
	  	}
	}
	
	Blockly.Blocks['move_bottom'] = {
		init: function() {
			this.appendDummyInput()
				.appendField("mover para baixo");
			this.setInputsInline(false);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(290);
			this.setTooltip('');
	  	}
	}


	Blockly.Blocks['move_right'] = {
		init: function() {
			this.appendDummyInput()
				.appendField("mover para a direita");
			this.setInputsInline(false);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(290);
			this.setTooltip('');
	  	}
	}

	Blockly.Blocks['move_left'] = {
		init: function() {
			this.appendDummyInput()
				.appendField("mover para a esquerda");
			this.setInputsInline(false);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(290);
			this.setTooltip('');
	  	}
	}


	Blockly.JavaScript['move_top'] = function(block) {

		$('#guildo').removeAttr('class').addClass('back-stand');

		if (chkMove('back') == 'mapa') {
			var codeMoveTop = "$(\"#mapa\").animate({\n top: \"+=32\"}, "+charSpeed+", \"linear\", function() {\n "+(charY--)+"; });";

		}else if (chkMove('back') == 'guildo') {
			var codeMoveTop = "$(\"#guildo\").animate({\n top: \"-=32\"}, "+charSpeed+", \"linear\", function() {\n "+(charY--)+"; });"
		}

		return codeMoveTop;
		
	};


	Blockly.JavaScript['move_bottom'] = function(block) {
		
		$('#guildo').removeAttr('class').addClass('front-stand');

		if (chkMove('front') == 'mapa') {
			var codeMoveBottom = "$(\"#mapa\").animate({\n top: \"-=32\"}, "+charSpeed+", \"linear\", function() {\n "+(charY++)+"; });";

		}else if (chkMove('front') == 'guildo') {
			var codeMoveBottom = "$(\"#guildo\").animate({\n top: \"+=32\"}, "+charSpeed+", \"linear\", function() {\n "+(charY++)+"; });"
		}

		return codeMoveBottom;
		
	};


	Blockly.JavaScript['move_left'] = function(block) {
		
		$('#guildo').removeAttr('class').addClass('left-stand');

		if (chkMove('left') == 'mapa') {
			var codeMoveLeft = "$(\"#mapa\").animate({\n left: \"+=32\"}, "+charSpeed+", \"linear\", function() {\n "+(charX--)+"; });";

		}else if (chkMove('left') == 'guildo') {
			var codeMoveLeft = "$(\"#guildo\").animate({\n left: \"-=32\"}, "+charSpeed+", \"linear\", function() {\n "+(charX--)+"; });"
		}

		return codeMoveLeft;
		
	};

	Blockly.JavaScript['move_right'] = function(block) {
		
		$('#guildo').removeAttr('class').addClass('right-stand');

		if (chkMove('right') == 'mapa') {

			var codeMoveRight = "$(\"#mapa\").animate({\n left: \"-=32\"}, "+charSpeed+", \"linear\", function() {\n "+(charX++)+"; });";

		}else if (chkMove('right') == 'guildo') {
			var codeMoveLeft = "$(\"#guildo\").animate({\n left: \"+=32\"}, "+charSpeed+", \"linear\", function() {\n "+(charX++)+"; });"
		}

		return codeMoveRight;

	};

 	//http://stackoverflow.com/questions/31988318/google-blockly-jsinterpreter-and-interpreter-step-code
	//http://stackoverflow.com/questions/36499757/how-can-i-make-an-instance-of-a-block-of-blockly-with-javascript
	//http://stackoverflow.com/questions/20129236/creating-functions-dynamically-in-js
	//https://developers.google.com/blockly/guides/app-integration/running-javascript
	function showCode(){
		Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
		var code = Blockly.JavaScript.workspaceToCode(workspace);
		alert(code);
	}

	function runCode(){
		window.LoopTrap = 1000;
		Blockly.JavaScript.INFINITE_LOOP_TRAP = 'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
		
		var code = Blockly.JavaScript.workspaceToCode(workspace);
		Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
		try {
			
			eval(code);
			
		} catch (e) {
			alert('Erro:'+e);
		}
	}
	
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