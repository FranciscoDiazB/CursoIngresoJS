
function mostrar()
{
	let tipo;
    let precio;
    let unidades;
    let marca;
    let fabricante;  
    let minprAlcohol; 
    let cantminAlcohol; 
    let fabrAlcohol; 
    let acuJabon = 0;
    let contJabon = 0;
    let acuAlcohol = 0;
    let contAlcohol = 0;
    let acuBarbijo = 0;
    let contBarbijo = 0;   
    let promedio;
    let tipoMaximo;
    let flagAlcohol = 1; 

    for(let i = 0; i < 5; i++){

        tipo = prompt(`Ingrese "barbijo", "alcohol" o "jabon".`).toLowerCase();
        while(tipo != "barbijo" && tipo != "alcohol" && tipo != "jabon"){
            tipo = prompt(`Dato invalido. Ingrese "barbijo", "alcohol" o "jabon".`).toLowerCase();
        }

        precio = parseInt(prompt("Ingrese un numero entre el 100 y 300"));
        while(isNaN(precio) || precio < 100 || precio > 300){
            precio = parseInt(prompt("Dato invalido. Ingrese un numero entre el 100 y 300"));
        }

        unidades = parseInt(prompt("Ingrese un numero entre el 1 y el 1000"));
        while(isNaN(unidades) || unidades <= 0 || unidades > 1000){
            unidades = parseInt(prompt("Dato invalido. Ingrese un numero entre el 1 y el 1000"));
        }

        marca = prompt("Ingrese una marca");
        
        fabricante = prompt("Ingrese un fabricante"); 

        if(tipo == "alcohol"){
            if (flagAlcohol == 1 || precio < minprAlcohol ){
                minprAlcohol = precio;
                cantminAlcohol = unidades;
                fabrAlcohol = fabricante;
                flagAlcohol = 0
            }
             
            acuAlcohol += unidades;
            contAlcohol++;
        }
        else if(tipo == "jabon"){
            acuJabon += unidades;
            contJabon++;
        }
        else{
            acuBarbijo += unidades;
            contBarbijo++;

        }

    }

    if (acuJabon > acuBarbijo && acuJabon > acuAlcohol){
        promedio = acuJabon / contJabon
        tipoMaximo = "Jabon"
    }
    if (acuJabon <= acuBarbijo && acuBarbijo > acuAlcohol){
        promedio = acuBarbijo / contBarbijo
        tipoMaximo = "Barbijo"
    }
    if (acuAlcohol > acuBarbijo && acuAlcohol > acuJabon){
        promedio = acuAlcohol / contAlcohol
        tipoMaximo = "Alcohol"
    }

    if(flagAlcohol){
        alert("A) No se compraron jabones");
    }
    else{
        alert(`A) Se compraron ${cantminAlcohol} unidades del fabricante ${fabrAlcohol} <br>`);
    }

    alert(`B) El promedio es de ${promedio} unidades del tipo ${tipoMaximo} <br>`);

    alert(`C) La cantidad de jabones es de ${acuJabon} <br>`);

    
    
}
