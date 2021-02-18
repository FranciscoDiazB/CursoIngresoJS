function mostrar()
{
	let estacion;
	let destino;
	const precio = 15000;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	let aumen20 = precio + (precio * 0.2);
	let descuen20 = precio - (precio * 0.2);
	let aumen10 = precio + (precio * 0.1);
    let descuen10 = precio - (precio * 0.1);


    switch(destino){
		case "Bariloche":
			if (estacion == "Verano"){
				alert(` $${descuen10}` );
			}
			else if (estacion == "Invierno"){
				alert(`$${aumen20}`);
			}
			else{
				alert(`$${aumen10}`);
			}
			break;

		case "Cordoba":
			if (estacion == "Verano"){
				alert(`$${aumen10}`);
			}
			else if(estacion == "Invierno"){
				alert(`$${descuen10}`);
			}
			else{
				alert(`$${precio}`);
			}
			break;

        case "Mar del plata":
			if (estacion == "Verano"){
				alert(`$${aumen20}`);
            }
			else if (estacion == "Invierno"){
				alert(`$${descuen20}`);
			}
			else {
				alert(`$${aumen10}`);
			}
			break;

		case "Cataratas":
			if (estacion == "Invierno"){
				alert(`$${descuen10}`);
			}
			else{
				alert(`$${aumen10}`);
			}
			
			break; 
			
	}
			
			
			

	
	


	/*if(estacion == "Invierno" && destino == "Bariloche"){
		alert(barinv);
    }
	else if(estacion == "Verano" && destino == "Bariloche"){
		alert(barver)
	}
	else if(estacion == "Primavera" && destino == "Bariloche" || estacion == "Otoño" && destino == "Bariloche"){
		alert(barpriot)
	}*/

}//FIN DE LA FUNCIÓN