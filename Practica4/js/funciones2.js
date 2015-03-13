/*function hola(){sdfsdf} funcion explisita */
var bandera=t

$(document).ready( function(){ /* funcion implisita */

	//alert('hola desde jqueri');
	$('h1').hide(); //desaparecen las etiquetas h1
	$('h1').show(); //apareceran las etiquetas h1
	$('h1').click(function(){

		$(this).hide('slow'); //solo funcionara con el que se le de clic, ocultara la etiqueta
		$('#consola').html($(this).css('fontSize'));

		if ($(this).css('fontSize')==50px) {//cambiara el tamaño de la letra si el tamaño actual es de 50px
			$(this).css('fontSize','32px');//cambiara el tamaño de la letra a 32
		}else{
			$(this).css('fontSize','50px');//cambiara el tamaño de la letra a 50
		}

		$(this).show('fast'); //solo funcionara con el que se le de clic, esto mostrara la etiqueta
	}); //al dar clic sobre cualquier h1 se ejecutara la funcion


	$('#btn2').clic(function(){
		$('#img1').attr('src','img/2.jpg');
	})



});