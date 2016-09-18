var iw = 2000; // Image width
var ih = 600; // Image height
var sw = 570; // Canvas width
var sh = 600; // Canvas height
var cw = 30; // Personagem width
var ch = 31; // Personagem height
var speed = 10; // Character speed

var img = new Image(iw, ih);
var personagem = new Image(cw, ch);

img.src = "images/paisagem.jpg";
personagem.src = "images/guildo.png";

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var pos = {x: 0, y: ih - 160};
var camera = {x: 0, y: 0}

function draw() {
	// Faz a esquerda da câmera começar meia tela antes do personagem,
	// mas somente se tiver imagem suficiente pra isso
	camera.x = Math.min(iw - sw, Math.max(0,pos.x - sw/2));
	
	// Reseta as transformações do canvas
	ctx.setTransform(1,0,0,1,0,0);

	// Limpa o canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	// Desloca o mundo inteiro, simulando uma câmera
	ctx.translate(-camera.x, -camera.y);

	// Desenha o fundo
	ctx.drawImage(img, 0, 0, sw, sh, 0, 0, iw, ih);

	// Desenha um pixel preto no cenário
	// representando o personagem do jogo
	//ctx.fillRect(pos.x, pos.y, cw, ch);

	//Agora sim, desenhando o personagem :)
	ctx.drawImage(personagem, 0, 30, cw, ch, 0, 500, cw, ch);

	window.requestAnimationFrame(draw);

}

document.addEventListener('keydown', function(e) {
	var key = e.which || e.key || e.keyCode;
	switch(key) {
		case 37:
			console.log('left');
			pos.x-=speed; 
			break;

		case 39:
			console.log('right');
			pos.x+=speed;
			break;
	}

	pos.x = Math.max(0, Math.min(iw - cw,pos.x));

});

window.requestAnimationFrame(draw);