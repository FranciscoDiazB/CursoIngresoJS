function mostrar()
{  
	let edad
	edad = parseInt(document.getElementById("txtIdEdad").value)

	if(edad>=18){

		alert("Felicidades, Usted es Mayor de edad")
	}

	else{

		alert("Todavia le falta crecer un poco mas")
	}
	
}