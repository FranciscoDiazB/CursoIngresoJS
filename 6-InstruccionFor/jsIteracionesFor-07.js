function mostrar()
{

	let numero;
	let contanumero = 0;  

	numero= parseInt(prompt("Ingrese un numero"));
	while(isNaN(numero)){
		numero= parseInt(prompt("Ingrese un numero valido"));
	}

	for(let i = 1; i <= numero; i++){
         
		if(numero % i == 0){

			alert(i); 
			contanumero++; 
		}



	}
      
	alert(`La cantidad de numeros divisores es ${contanumero}`);

}