function mostrar()
{
	let edad;
	let estado; 

	edad = parseInt(document.getElementById("txtIdEdad").value); 

	estado = document.getElementById("estadoCivil").value; 

	if (!(edad < 18) && estado == "Soltero"){

		alert("Es Soltero y no es Menor")


	}
	
	
	
	/*if ( !(edad < 18 || estado != "Soltero")){

		alert("Es Soltero y no es Menor")
	}
	
	Ya sea que la edad sea menor o el estado difernte a "soltero", se va a negar
	la condicion. Si la condicion es Falsa, seria Verdadera. Si la condicion es 
	Verdadera, seria Falsa. 
	*/
	
    

}