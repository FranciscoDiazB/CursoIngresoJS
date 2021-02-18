function mostrar()
{
	let numero;
	let maximo = 10; 
	let minimo = 1; 

	numero = Math.round(Math.random() * (maximo - minimo) + minimo); 

	if (numero == 9 || numero == 10){
		
		alert(`Excelente nota, es un ${numero}`);
	}
	else if(numero >= 4 && numero <= 8){
		
		alert(`Aprobo, es un ${numero}`);
	}
	else{
		
		alert(`Vamos, la proxima se puede. Es un ${numero}`);
	}



}