/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar(){


	
	let sexo;

	sexo = prompt("Ingrese su Sexo");

	while(sexo != "f" && sexo !="m"){
		
		sexo = prompt(`Ingrese "f" para femenino y "m" para masculino`);
	}

	if(sexo == "f"){
		alert("Usted es de sexo femenino");
	}
	else{
		alert("Usted es de sexo masculino");
	}



}
