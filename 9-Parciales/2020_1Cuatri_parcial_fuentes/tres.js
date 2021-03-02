function mostrar()
{
	let nombre;
	let sexo; 
	let edad;
	let temperatura;
	let estado; 
	let maxTemp;
	let maxTempNom;
	let contMayV = 0; 
	let contHSV = 0; 
	let cont38 = 0; 
	let acuEdadS = 0; 
	let contEdadS = 0; 
	let seguir;
	let flag = 0;
	let promedio; 

	do {
		nombre = prompt("Ingrese su nombre"); 

		sexo = prompt("Ingrese su sexo: 'f' para femenino y 'm' para masculino").toLowerCase();
		while(sexo != 'f' && sexo != 'm'){
			sexo = prompt("Sexo invalido. Ingrese su sexo: 'f' para femenino y 'm' para masculino").toLowerCase();
		}

		edad = parseInt(prompt("Ingrese su edad")); 
		while(edad < 1 || isNaN(edad)){
			edad = parseInt(prompt("Edad invalida. Ingrese su edad")); 
		}

		temperatura = parseInt(prompt("Ingrese una temperatura corporal"));
		while(isNaN(temperatura) || temperatura < 33 || temperatura > 43){
			temperatura = parseInt(prompt("Ingrese una temperatura corporal"));
		}

		estado = prompt("Ingrese su estado civil: soltero, casado o viudo").toLowerCase(); 
		while(estado != "soltero" && estado != "casado" && estado != "viudo"){
			estado = prompt("Ingrese su estado civil: soltero, casado o viudo").toLowerCase(); 
		}

		if(flag == 0 || temperatura > maxTemp){
			maxTemp = temperatura;
			maxTempNom = nombre;
			flag = 1;
		}

		if(edad > 17 && estado == "viudo"){
			contMayV++;
		}

		if(edad > 60 && temperatura > 38){
			cont38++;
		}

		if(sexo == "m"){
			switch(estado){
				case "soltero":
					acuEdadS += edad;
					contEdadS++;
					contHSV++;
					break;
				case"viudo":
				    contHSV++;
					break; 

			}
		}
		seguir = prompt("Desea continuar. Ingrese 's'.");

	} while (seguir == 's');

	promedio = acuEdadS / contEdadS; 
	if(isNaN(promedio)){
		promedio = 0;
	}

	alert(`
	A) El nombre de la persona con mayor temperatura es ${maxTempNom} con ${maxTemp} grados de temperatura.
	B) Hay ${contMayV} personas mayores y viudas.
	C) Hay ${contHSV} hombres viudos o solteros.
	D) Hay ${cont38} personas mayores de 60 años con mas de 38 grados de temperatura.
	E) El promedio de edad entre los hombres solteros es: ${promedio} (Si el resultado es 0, no se ingresaron hombres solteros)`); 
 



	
}
