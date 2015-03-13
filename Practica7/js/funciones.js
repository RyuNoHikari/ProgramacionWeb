$(document).ready( //funcion anonima o explicida
	function(){

		setInterval( //para definir un tiempo, lleva dos parametros, una funcion y los milisegundos
			function(){
				console.log('Hola'); //consola en forma de bitacora, y se le envia un parametro
				var num1 = Math.random()*10;
				var num2 = Math.round(num1);
				console.log(num2); 
			}, 2000
		);

	}

);