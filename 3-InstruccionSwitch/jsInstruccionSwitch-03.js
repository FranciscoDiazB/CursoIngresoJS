function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value; 
	
	if (mes == "Febrero"){
		alert("Este mes no tiene mas de 29 dias"); 
	}
	else{
		alert("Este mes tiene 30 dias o mas");
	}


	/*switch(mes){
	case "Febrero":
		alert("Este mes no tiene mas de 29 dias");
		break; 
	case "Marzo":                                                       
	case "Abril":
	case "Mayo":	             
	case "Junio":                                                      case "Febrero":
	case "Julio":                                                         alert ("No mas de 29 dias");
	case "Agosto":                                   o                    break;
	case "Septiembre":
	case "Octubre":                                                    default:
	case "Noviembre":                                                     alert ("30 dias o mas")
	case "Diciembre":
	case "Enero":
		alert("Este mes tiene 30 o mas dias")             
		break;}*/

}//FIN DE LA FUNCIÓN