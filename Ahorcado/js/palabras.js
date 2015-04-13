var error = 0;
var contador=0;
var ganar=0;
var palabras = [
			"GATO", "AVION", "VIDEOJUEGO", "AHORCADO", "HOLA", "MARIO", "NINJA", "SISTEMAS"
		]

var pistas = [
	"Animal con mayor vidas que tu", "Medio de transporte rápido pero costoso", "Entretenimiento virtual", "Sentencia del Viejo Oeste", 
	"Saludo informal entre amigos", "Fontanero famoso que salva a una princesa", "Guerrero silencioso del antiguo Japón", 
	"Carrera donde una de sus ramas son las telecomunicaciones"
]

var numero = Math.round(Math.random()*(palabras.length-1));
var palabra =palabras[ numero];

var audio = Math.round(Math.random()*2);

$(document).ready( //funcion anonima o explicida
	function(){
		
		$('#audio').attr('src', 'audio/'+audio+'.mp3');

		$("#Palabra").prepend('<h2 class="pista">'+pistas[numero]+'</h2>');
		
			for (var i = palabra.length - 1; i >= 0; i--) 
			{
				$("#Palabra").prepend('<input type="text" id="'+i+'" name="'+i+'" value="" readonly="readonly" class="parte" size="5">');
			};
		$("#Palabra").prepend('<br>');

		$('.letra').click(function(){
			var x = $(this).html();
			$(this).hide();


		for (var i = 1; i <= palabra.length ; i++) 
		{
			if (x == palabra.charAt(i-1)) {
				contador ++;
				$('#'+(i-1)+'').val(x);
				ganar++;
			};
		};

		
		if (contador > 0) {
			contador = 0;
		}
		else{
			error++;
		};

		if (ganar == palabra.length) {
			$("#Estado").prepend('<h2 class"estatus">Para jugar nuevamente recarga la pagina :D</h2>');
			$("#Estado").prepend('<h2 class"estatus">Felicidades!!! :) has ganado y salvaste al sentenciado :D</h2>');
			$('#botones').find('button').attr('disabled','disabled');
		};

		if (error == 0) {
		$('#dibAhorcado').attr('src', 'img/dib0.jpg')
		};

		if (error == 1) {
		$('#dibAhorcado').attr('src', 'img/dib1.jpg')
		};

		if (error == 2) {
		$('#dibAhorcado').attr('src', 'img/dib2.jpg')
		};

		if (error == 3) {
		$('#dibAhorcado').attr('src', 'img/dib3.jpg')
		};

		if (error == 4) {
		$('#dibAhorcado').attr('src', 'img/dib4.jpg')
		};

		if (error == 5) {
		$('#dibAhorcado').attr('src', 'img/dib5.jpg')
		};

		if (error == 6) {
		$('#dibAhorcado').attr('src', 'img/dib6.jpg');
		$("#Estado").prepend('<h2 class"estatus">Para jugar nuevamente recarga la pagina :D</h2>');
		$("#Estado").prepend('<h2 class"estatus">Lo siento, has perdido :(</h2>');
		$('#botones').find('button').attr('disabled','disabled');

		};

		}

		); //cierra el clic de la letra

	}

);