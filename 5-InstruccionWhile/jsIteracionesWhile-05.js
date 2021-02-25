/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar(){


	
	let sexo;

	sexo = prompt("Ingrese su Sexo f/m");

	while(sexo != "f" && sexo !="m"){       
		
		sexo = prompt(`Sexo invalido. Ingrese "f" para femenino y "m" para masculino`);
	}

	if(sexo == "f"){
		document.getElementById("txtIdSexo").value = "Femenino";
	}
	else{
		document.getElementById("txtIdSexo").value = "Masculino";
	}



}
