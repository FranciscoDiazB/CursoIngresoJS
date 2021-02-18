function mostrar()
{
	let mes; 

	mes = document.getElementById("txtIdMes").value;

	switch(mes){

		case "Enero":
			alert("Que comiences bien el año");
			break; 

		case "Marzo":
			alert("A clases");
			break; 

		case "Julio": 
		    alert("Vacaciones de invierno");
			break; 

		case "Diciembre": 
		    alert("Felices Fiestas"); 
			break; 
	}

       




}




	/*if (mes == "Enero"){
		alert("Que comiences bien el Año");
	}
	else if( mes == "Marzo"){
		alert("A clases");
	}
	else if (mes == "Julio"){
		alert("Se vienen las vacaciones");
	}
	else if(mes == "Diciembre"){
		alert("Felices Fiestas");
	}
	else{
		alert("Intente devuelta con algun Mes Valido")
	}*/


