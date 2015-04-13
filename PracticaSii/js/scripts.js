var D = document;
var altoPag;
var altoVen;

$(D).ready(
	//Se crea la función anómima para la carga de la página
		function(){

			$('#cuerpo').hide(0);
			$('#cuerpo').fadeIn(700);



			//Ocultar componentes
			D.getElementById('APLICACIONES').style.opacity=0;
			for( var i=1 ; i<7 ; i++ ){
				D.getElementById(i).style.opacity=0;
			}

			$('#usuario').hide(0);

			//Obtener propiedades de la ventana y de la página
			altoPag = $(D).height();
			altoVen = $(window).height();
			
			//En esta parte hacemos aparecer las calificaciones con las materias de manera secuencial


				for( var i=1 ; i<8 ; i++ ){
					var id='#C'+i
					$(id).hide(0);	
				}
				crg();
			}
	);

function crg(){

		for( var i=1 ; i<8 ; i++ )
		{
		var id='#C'+i
		$(id).show(500*i);
		}

		var intervalo=setInterval( 

			function(){

				$('#usuario').slideDown(500);
				clearInterval(intervalo);
			}

		,1000);

}


//Funcion que captura el scroll de la página y va desvanece los componentes conforme se desplaza
$(D).scroll(
	function(){
		//	alert( $(window).height()); DEVUELVE EL ALTO "VISIBLE" DE LA VENTANA
		//	alert( $(D).height() );		DEVUELVE EL ALTO DE LA PÁGINA
			var actual=altoPag-$(this).scrollTop();
			D.getElementById('APLICACIONES').style.opacity=((altoPag-actual))/423;
			for( var i=1 ; i<7 ; i++ ){
			D.getElementById(i).style.opacity=((altoPag-actual))/423;
			}
		}//Termina Scroll
	);
