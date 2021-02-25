function mostrar()
{
	
	let numero;
	let contanumero = 0; 
	let cantnumero = 0; 

	numero= parseInt(prompt("Ingrese un numero"));
	while(isNaN(numero)){
		numero= parseInt(prompt("Ingrese un numero valido"));
	}

	for(let i = 1; i <= numero; i++){
         
		if(numero % i == 0){

			contanumero++; 
			cantnumero = contanumero;
		}



	}
      
	if (cantnumero == 2){
      alert(`${numero} es un numero primo`);
   }
   else{
      alert(`${numero} no es un numero primo`);
   }


}