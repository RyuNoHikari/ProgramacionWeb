$(document).ready( //funcion anonima o explicida
	function(){

		var nuevacarta = 'loteria-1.jpg';
		var cont = 1;
		var ganar = 0;

		setInterval( //para definir un tiempo, lleva dos parametros, una funcion y los milisegundos
			function(){
				//console.log('Hola'); //consola en forma de bitacora, y se le envia un parametro
				//var num1 = Math.random()*10;
				//var num2 = Math.round(num1);

				nuevacarta = 'loteria-'+cont+'.jpg'
				$('#cartaMaestra').attr('src', 'img/'+nuevacarta);
				cont++;

				if (cont == 55 ) {
					cont = 1;
				};
			}, 1000
		);

		$('.carta').click(
			function(){
				
				$(this).attr('src', 'img/g1.jpg');
				ganar++;

				if (ganar == 8) {
					document.loteria.estado.value='GANASTE';
				};
			}
		);

	}

);