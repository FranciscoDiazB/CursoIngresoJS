function mostrar()
{
	let nombre;
	let nacionalidad;
	let sexo;
	let edad;
	let estado;
	let temp; 
	let maxTem;
	let maxNaTem; 
	let contMayoresSol = 0; 
	let contMujSV = 0; 
	let cont38 = 0; 
	let acuMujCas = 0;
	let contMujCas = 0; 
	let flag = 0;
	let promedio;  
	let seguir;

	do {
		nombre = isNaN(prompt("Ingrese su nombre")); 

		nacionalidad = (prompt("Ingrese su nacionalidad").toUpperCase());

		sexo = prompt("Ingrese su sexo. 'f' para femenino y 'm' para masculino");
		while(sexo != 'm' && sexo != 'f'){
			sexo = prompt("Dato invalido. Ingrese su sexo. 'f' para femenino y 'm' para masculino");
		}

		edad = parseInt(prompt("Ingrese su edad")); 
		while(edad < 1 || isNaN(edad)){
			edad = parseInt(prompt("Edad invalida. Ingrese su edad")); 
		}

		temp = parseInt(prompt("Ingrese una temperatura corporal"));
		while(isNaN(temp) || temp < 33 || temp > 43){
			temp = parseInt(prompt("Ingrese una temperatura corporal"));
		}

		estado = prompt("Ingrese su estado civil: soltero, casado o viudo").toLowerCase(); 
		while(estado != "soltero" && estado != "casado" && estado != "viudo"){
			estado = prompt("Ingrese su estado civil: soltero, casado o viudo").toLowerCase(); 
		}

		if(flag == 0 || temp > maxTem ){
			maxTem = temp; 
			maxNaTem = nacionalidad;
		}

		if(edad > 18 && estado == "soltero"){
			contMayoresSol++;
		}

		if(edad > 60 && temp > 38){
			cont38++;
		}
        
		//c y e
		if(sexo == 'f'){
			switch(estado){
				case "casado":
					acuMujCas += edad;
					contMujCas++;
					break;
				
				default:
					contMujSV++;
					break; 
			}
			
		}

		seguir = prompt("Desea continuar? Ingrese 's'"); 
		flag++

	} while (seguir == 's');

	promedio = acuMujCas / contMujCas; 

	alert(`
	A) Nacionalidad = ${maxNaTem}
	B) Mayores Solteros = ${contMayoresSol}
	C) Mujeres no casadas = ${contMujSV} 
	D) Mayores de 60 años y temperatura mayor de 38 grados = ${cont38}
	E) Promedio de edad entre mujeres casadas = ${promedio}`);



} 

