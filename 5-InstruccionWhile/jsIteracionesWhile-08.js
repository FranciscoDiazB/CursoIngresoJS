/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
    
	let numero; 
	let total = 0;
	let total2 = 1; 
	let i = 0; 
	let seguir;
	let flag;

	do {

		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero)){
			numero = parseInt(prompt("Ingrese un numero valido"));
		}

		if (numero >= 0){
            flag = 0;
			total = total + numero; 
		}
		else{
            flag = 1;
			total2 = total2 * numero;
		}
		
		
		i++;
     	seguir = prompt("Quiere seguir?")


	} while(seguir == 's'); 
   
	
	    if (flag == 0){
			total2 = 0
		}
	    document.getElementById("txtIdSuma").value = total;
	

		document.getElementById("txtIdProducto").value = total2;
    
	
	

}

	/*let numero; 
	let total = 0;
	let total2 = 1; 
	let total3;
	let i = 0; 
	let seguir = 's'

	while(seguir == 's'){

		numero = parseInt(prompt("Ingrese un numero"));

		if (numero > 0){
            
			total = total + numero; 

		}
		else if (numero < 0){

			total2 = total2 * numero;
		}
		else{

			total3 = 0

		}

		i++;

		seguir = prompt("Quiere seguir?")


	}
    if (numero > 0){
	    document.getElementById("txtIdSuma").value = total;
	}
	else if (numero < 0 ){
		document.getElementById("txtIdProducto").value = total2;
    }
	else{
		document.getElementById("txtIdSuma").value = total3
		document.getElementById("txtIdProducto").value = total3
	}*/
