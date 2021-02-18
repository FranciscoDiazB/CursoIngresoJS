function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes){
		case "Febrero":
			alert("Mes con 28 dias");
			break; 
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Mes con 30 dias");
			break; 
		default:
			alert("Mes con 31 dias");
			
	}
	



}//FIN DE LA FUNCIÓN