/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	 
	let numero; 
	let maximo;
	let minimo; 
	let seguir;
	let i = 0;

	do {
		numero = parseFloat(prompt("Ingrese un Numero"));

		if (isNaN(numero)){
			numero = parseFloat(prompt("Ingrese un Numero valido"));
		}

        if (i == 0){
			maximo = numero;
			minimo = numero;
			i++
		}		

		else if (numero > maximo){
			maximo = numero;
		}
		else if (numero < minimo){
			minimo = numero;
		}
		
        seguir = prompt("Quiere ingresar otro numero? Oprima 's'");

	} while (seguir == 's');

	document.getElementById("txtIdMinimo").value = minimo;
	document.getElementById("txtIdMaximo").value = maximo;
}