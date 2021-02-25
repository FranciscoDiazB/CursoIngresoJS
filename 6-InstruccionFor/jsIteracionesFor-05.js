function mostrar()
{
	let numero;

	for(let i = 0;  ; i++){
        
		numero = parseInt(prompt("Ingrese el numero 9 para salir"));
		while(isNaN(numero)){
			numero = parseInt(prompt("Ingrese un numero valido"));
		}

        console.log(numero);

		if(numero == 9){
			break;
		}
		


	}



}//FIN DE LA FUNCIÓN