function mostrar()
{
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 13 & edad <=17){

		alert("Y, compra escabio en el chino");
	}
	else if(edad < 13){

		alert("Y, tas re quemado bro")
	}
	else{

		alert("Ya podes comprar escabio en el super")
	}



	
}