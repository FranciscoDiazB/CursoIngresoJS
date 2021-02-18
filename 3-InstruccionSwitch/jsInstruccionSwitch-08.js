function mostrar()
{
	let destino; 

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
			alert("Frio");
			break;
		case "Cataratas":
			alert("Calor"); 
			break;
		case "Mar del plata":
			alert("Calor");
			break;
		case "Ushuaia":
			alert("Frio");
			break;
	}

}//FIN DE LA FUNCIÓN