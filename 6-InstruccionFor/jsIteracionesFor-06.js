function mostrar()
{
	let numero;
	let contnumero = 0; 
	

	numero = parseInt(prompt("Ingrese un numero")); 
	while (isNaN(numero) || numero < 0){
		numero = parseInt(prompt("Ingrese un numero valido"));
	}

	for(let i = 1; i <= numero; i++){

		if(i % 2 == 0){
		alert(i);
		contnumero++
		}

	}
    
	alert(`La cantidad de numeros pares es ${contnumero}`);
	


}