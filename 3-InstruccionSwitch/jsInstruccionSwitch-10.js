function mostrar()
{
	let estacion;
	let destino; 
	let condicion; //let seViaja;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion){
		case "Invierno": if(destino == "Bariloche"){
			condicion = "Se viaja"; // seViaja = true
		} 
		else{
			condicion = "No se viaja"; // seViaja = false
		}
		break; 

		case "Verano": if(destino == "Cataratas" || destino == "Mar del plata"){
			condicion = "Se viaja"; // seViaja = true
		}
		else{
			condicion = "No se viaja"; // seViaja = false
		}
		break; 

		case "Primavera": if(destino == "Bariloche"){
			condicion = "No se viaja"; // seViaja = false
		}
		else{
			condicion = "Se viaja"; // seViaja = true
		}
		break; 

		default:
			condicion = "Se viaja"; // seViaja = true
	}

	alert(condicion); /*  if (seViaja) {
                             alert("Se viaja");
	                      } else {
							 alert("No se viaja");
						  }*/



}//FIN DE LA FUNCIÓN