//alert('Holiwis :D'); //comentario 1
        /* comentario de muchas lineas :D */

        



        var suma=operador1 + operador2;

        function calcula(operacion){  //para crear un mpetodo se usa function nombre (parametro){}

        //los valores se optienen a travez del atributo name
        var operador1 = document.calc.operador1.value; //no es necesario decir de que tipo es la variable, a menos de que sea un arreglo
        var operador2 = document.calc.operador2.value; //se usa para buscar un valor en la pagina y asignarlo a una variable


        //los valores se optienen a travez del id
        var operador1 = document.getElementById('operador1').value;
        var operador2 = document.getElementById('operador2').value;

        var result = eval(operador1 + operacion + operador2); //crea la variable resultado, se usa la instruccion eval para una operación
                                                            // los signos de "+" son solamente concatenadores, no operadores

        document.calc.resultado.value=result;

        alert('operador 1 '+operador1+' operador 2 '+operador2); 

        }


        //convierte grados celcius a Fahrenheit
        function Fahrenheit()
        {
            var centigrados = document.getElementById('grados').value;

            var resulF = eval(centigrados * 1.8 + 32);

            document.gradosC.resulF.value = resulF;
        }

        
        //convierte de metros a kilometros
        function convAKil()
        {
            var metr=document.getElementById('metros').value;

            var resulk = eval(metr / 1000);

            document.Km.kilom.value = resulk;
        }

        //convierte de pesos mexicanos a dolares
        function PesosDol()
        {
            var pesos=document.getElementById('pesos').value;

            var resulk = eval(pesos * 14);

            document.Dol.dolar.value = resulk;
        }


        /*
        El alerta no se usa, en este caso es solo para ejemplo, para imprimir el valor por esta vez
        El uso de los alert no se usaran en el curo D:
        Alert bloquea totalmente al navegador
        */
