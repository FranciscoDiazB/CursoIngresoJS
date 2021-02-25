/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numero;
	let sumaneg = 0;
	let sumapos = 0;
	let cantidadpos = 0;
	let ceros; 
	let cantidadcer = 0; 
	let cantidadneg = 0; 
	let promediopos = 0;
	let pormedioneg= 0; 
	let diferencia; 
	let seguir; 
	let pos = 0; 
	let neg = 0;
	let cer = 0;
	let par; 
	let cantidadpar = 0; 
	let pars = 0; 

	


	do {

		numero = parseFloat(prompt("Ingrese un numero..."));

		while(isNaN(numero)){
			numero = parseFloat(prompt("Ingrese un nuevo numero..."));
		}

		if(numero > 0){
			sumapos = sumapos + numero;
            
			pos++
			cantidadpos = pos;
		}
		else if(numero < 0){
			sumaneg = sumaneg + numero;
            
			neg++
			cantidadneg = neg;
		}
		else{
			ceros = numero;
            
			cer++
			cantidadcer = cer; 		
		}

		if(numero % 2 == 0){
			pars++
			cantidadpar = pars; 
		}
		
		seguir = prompt("Desearia continuar? Oprima 's'");

	} while (seguir == 's');
	 
    if(cantidadpos > 0){
		promediopos = sumapos / cantidadpos;
	}
    
	if(cantidadneg > 0){
		pormedioneg = sumaneg / cantidadneg;
	}
	

	diferencia = cantidadpos - cantidadneg;
	

	alert(`
    1) ${sumaneg}
    2) ${sumapos}
    3) ${cantidadpos}
	4) ${cantidadneg}
	5) ${cantidadcer}
	6) ${cantidadpar}
	7) ${promediopos}
	8) ${pormedioneg}
	9) ${diferencia}`); 
}