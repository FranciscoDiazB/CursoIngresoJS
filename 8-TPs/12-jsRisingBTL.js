/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	let edad; 
	let sexo;
	let estado;
	let sueldo;	
	let legajo;
	let nacio; 
	let seguir; 

	do {
		edad = parseInt(prompt("Ingrese una edad"));
		while(isNaN(edad) || edad < 18 || edad > 90){
			edad = parseInt(prompt("Dato incorrecto. Ingrese una edad"));
		}

		sexo = prompt("Ingrese 'M' para Masculino y 'F' para femenino").toUpperCase(); 
		while(sexo != 'M' && sexo != 'F'){
			sexo = prompt("Dato invalido. Ingrese 'M' para Masculino y 'F' para femenino").toUpperCase(); 
		}

		estado = parseInt(prompt("Ingrese numero representando el estado civil: 1 (Soltero/a), 2 (Casado/a), 3 (Divorciado/a) y 4 (Viudo/a)"));
		while(estado != 1 && estado != 2 && estado != 3 && estado != 4){
			estado = parseInt(prompt("Dato invalido. Ingrese numero representando su estado civil: 1 (Soltero/a), 2 (Casado/a), 3 (Divorciado/a) y 4 (Viudo/a)"));
		}

		sueldo = parseInt(prompt("Ingrese su sueldo")); 
		while(isNaN(sueldo) || sueldo < 8000){
			sueldo = parseInt(prompt("Dato invalido. Ingrese su sueldo")); 
		}

		legajo = parseInt(prompt("Ingrese su N° de legajo"));
		while(isNaN(legajo) || legajo < 1000 || legajo > 9999){
			legajo = parseInt(prompt("Dato invalido. Ingrese su N° de legajo"));
		}

		nacio = prompt("Ingrese su nacionalidad representada en letra: 'A' (Argentino/a), 'E' (Extranjero/a) y 'N' (Nacionalizado/a)").toUpperCase();
		while(nacio != 'A' && nacio != 'E' && nacio != 'N'){
			nacio = prompt("Dato invalido. Ingrese su nacionalidad representada en letra: 'A' (Argentino/a), 'E' (Extranjero/a) y 'N' (Nacionalizado/a)").toUpperCase();
		}



		seguir = prompt("Desea continuar? Ingrese 's'").toLowerCase(); 

	} while (seguir == 's'); 

	switch(estado){
		case 1: estado = "Soltero/a";
		break; 
        case 2: estado = "Casado/a";
		break;
		case 3: estado = "Divirciado/a";
		break;
		case 4: estado = "Viudo/a";
		break;
	}

	if(sexo == 'F'){
		sexo = "Femenino";
	}
	else{
		sexo = "Masculino";
	}

	if(nacio == 'A'){
		nacio = "Argentino/a";
	}
	else if(nacio == 'E'){
		nacio = "Extranjero/a";
	}
	else{
		nacio = "Nacionalizado/a"
	}


	document.getElementById("txtIdEdad").value = `${edad} años`;
	document.getElementById("txtIdSexo").value = sexo;
	document.getElementById("txtIdEstadoCivil").value = estado;
	document.getElementById("txtIdSueldo").value = `$${sueldo}`;
	document.getElementById("txtIdLegajo").value = `Nº ${legajo}`;
	document.getElementById("txtIdNacionalidad").value = nacio;
}
