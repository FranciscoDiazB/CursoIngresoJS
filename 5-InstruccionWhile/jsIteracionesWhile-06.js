function mostrar()
{
	
	let number;
	let promedio;
	let total = 0;   // acumulador
	let i = 0;       // contador

	while(i < 5){

		number = parseInt(prompt("Ingrese numero"));
		
		total = total + number ;
		i++ ; 
	}

	promedio = total / 5
	
	document.getElementById("txtIdSuma").value = total;
	document.getElementById("txtIdPromedio").value = promedio; 


}



/*  let n;
	let n2;   
	let n3;        
	let n4;        
	let n5;      
		
	  n = parseInt(prompt(n)); 
	  n2 = parseInt(prompt(n2)); 
	  n3 = parseInt(prompt(n3)); 
	  n4 = parseInt(prompt(n4)); 
	  n5 = parseInt(prompt(n5)); 

	  let suma = n + n2 + n3 + n4 + n5;
	  let promedio = suma / 5;

	 document.getElementById("txtIdSuma").value = suma;

	 document.getElementById("txtIdPromedio").value = promedio;*/