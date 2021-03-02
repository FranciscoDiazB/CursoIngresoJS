
function mostrar()
{
	let tipo;
	let precio;
	let unidades;
	let marca;
	let fabricante;
	let maxJabon;
	let maxCantidadJabon = 0;
	let maxJabonFabr;
	let acuJabon = 0;
	let acuBarbijo = 0;
	let acuAlcohol = 0; 
	let contJabon = 0;
	let contBarbijo = 0;
	let contAlcohol = 0;
	let promedio; 
	let flag = true; 
	let preciototal = 0;
	let tipoMaxCant; 
	
	for(let i = 0; i < 5; i++){

		tipo = prompt("Ingrese el tipo: jabon / barbijo / alcohol");
		while(tipo != "jabon" && tipo != "barbijo" && tipo != "alcohol"){
			tipo = prompt("Dato invalido. Ingrese el tipo: jabon / barbijo / alcohol");
		}

		precio = parseInt(prompt("Ingrese el precio (entre 100 y 300)"));
		while(precio < 100 || precio > 300 || isNaN(precio)){
			precio = parseInt(prompt("Dato invalido. Ingrese el precio (entre 100 y 300)"));
		}

		unidades = parseInt(prompt("Ingrese cantidad de unidades (entre 1 y 1000)"));
		while(unidades < 1 || unidades > 1000 || isNaN(unidades)){
			unidades = parseInt(prompt("Dato invalido. Ingrese cantidad de unidades (entre 1 y 1000)"));
		}

		marca = prompt("Ingrese marca");

		fabricante = prompt("Ingrese fabricante"); 
		
		if(tipo == "jabon"){
			if(flag == true || precio > maxJabon){
				maxJabon = precio; 
				maxCantidadJabon = unidades; 
				maxJabonFabr = fabricante; 
				flag = false;
			}

			acuJabon += unidades;
			contJabon++; 
		}
		else if(tipo == "barbijo"){
			acuBarbijo += unidades;
			contBarbijo++
		}
		else{
			acuAlcohol += unidades;
			contAlcohol++
		}
		
		preciototal += precio * unidades;
	}

	
	if(acuJabon > acuAlcohol && acuJabon > acuBarbijo){
		promedio = acuJabon / contJabon;
		tipoMaxCant = "Jabon"

	}
	else if(acuAlcohol >= acuBarbijo && acuAlcohol > acuJabon){
		promedio = acuAlcohol / contAlcohol;
		tipoMaxCant = "Alcohol"
	}
	else{
		promedio = acuBarbijo / contBarbijo; 
		tipoMaxCant = "Barbijo"
	}

	if(maxCantidadJabon == 0){
		document.write(`A) No se ingresaron jabones <br>`);
	}
	else{
		document.write(`A) El fabricante del jabon mas caro es ${maxJabonFabr} y la cantidad de unidades son ${maxCantidadJabon} <br>`);
	}

	document.write(`B) El promedio del tipo de producto con mayor unidades es ${promedio} unidades por compra. Ese producto es ${tipoMaxCant} <br>`);
	
	if(acuBarbijo == 0){
        document.write(`C) No se compraron barbijos <br>`);
	}
	else{
		document.write(`C) Se compraron ${acuBarbijo} barbijos en total <br>`);
	}

	document.write(`D) El precio total de la compra es ${preciototal} <br>`);




}
