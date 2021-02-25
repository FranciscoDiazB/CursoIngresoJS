/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	
	let numero;
	let seguir; 
	let promedio; 
	let i = 0;
	let total = 0; 

	do {

		numero = parseInt(prompt("Ingrese un Numero")); 

		total = total + numero;
		i++

		seguir = prompt(`Quiere ingresar otro numero? Conteste "SI"`);
	} while (seguir == "SI"); 
	
	promedio = total / i

	document.getElementById("txtIdSuma").value = total
	document.getElementById("txtIdPromedio").value = promedio
	
	/*let numero; 
	let i = 0;
	let total = 0; 
	let pregunta;
	let promedio; 


	while(i >= 0){

		numero = parseInt(prompt("Ingrese un numero"));

		total = total + numero; 
		i++;

		pregunta = prompt(`Quiere agregar otro numero?? Responda "NO" si quiere terminar, sino aprete el "Enter"` ); 

		if(pregunta == "NO"){
			break;
			
		}

	}

	promedio = total / i

	document.getElementById("txtIdSuma").value = total
	document.getElementById("txtIdPromedio").value = promedio*/

	/* let numero; 
	let i = 0;
	let total = 0; 
	let pregunta = 's';
	let promedio; 


	while(pregunta == 's'){

		numero = parseInt(prompt("Ingrese un numero"));

		total = total + numero; 
		i++;

		pregunta = prompt(`Quiere agregar otro numero? Oprima "s"` ); 

	}

	promedio = total / i

	document.getElementById("txtIdSuma").value = total
	document.getElementById("txtIdPromedio").value = promedio*/


} 

    

