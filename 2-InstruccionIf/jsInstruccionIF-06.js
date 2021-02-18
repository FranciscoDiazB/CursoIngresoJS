function mostrar()
{
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 13 & edad <=17){

		alert("Adolescente");
	}
	else if(edad < 13){

		alert("Nene");
	}
	else{

		alert("Adulto");
	}



	
}