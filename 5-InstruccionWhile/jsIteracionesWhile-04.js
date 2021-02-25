/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero; 

	numero = parseInt(prompt("Ingrese numero entre el 0 y 9 inclusive"));

	while (numero > 9 || numero < 0 || isNaN(numero)){ 
		

	       numero = parseInt(prompt("Dato no valido. Reingrese un numero entre el 0 y el 9 inclusive esta vez"));
	    
	}

	document.getElementById("txtIdNumero").value = numero;

	
}