function mostrar()
{

    let animal;
    let peso; 
    let temperatura; 
    let contTempPar = 0; 
    let maxAnimP;
    let maxPesoNombre; 
    let maxPesoTemp; 
    let contAnim0 = 0;
    let acuPeso = 0;
    let minPesoTemp0;
    let maxPesoTemp0; 
    let promedio; 
    let flag = true; 
    let seguir;
    let contAnimales = 0; 

    do{
        animal = prompt("Ingrese un animal");

        peso = parseInt(prompt("Ingrese un peso entre 1 y 1000 (interpretado en kg)"));
        while(isNaN(peso) || peso < 1 || peso > 1000){
            peso = parseInt(prompt("Dato invalido. Ingrese un peso entre 1 y 1000 (interpretado en kg)"));
        }

        temperatura = (prompt("Ingrese temperatura del habitat (entre -30 y 30 grados)"));
        while(isNaN(temperatura) || temperatura < -30 || temperatura > 30){
            temperatura = (prompt("Dato invalido. Ingrese temperatura del habitat (entre -30 y 30 grados)"));
        }

        if(temperatura % 2 == 0){
            contTempPar++;
        }

        if(contAnimales == 0 || peso > maxAnimP){
            maxAnimP = peso;
            maxPesoNombre = animal;
            maxPesoTemp = temperatura; 
        }

        if(temperatura < 0){
            contAnim0++;

            if(flag == true || peso > maxPesoTemp0){
                maxPesoTemp0 = peso;
            
            }
            
            if(flag == true || peso < minPesoTemp0){
                minPesoTemp0 = peso;
            }

            flag = false; 

        }

        acuPeso += peso 

        seguir = prompt("Desea seguir. Ingrese 's'");
        contAnimales++;   

    } while (seguir == 's');

    promedio = acuPeso / contAnimales;

    document.write(`A) La cantidad de animales que viven en habitats de temperaturas pares es ${contTempPar} <br>`);
    document.write(`B) El animal mas pesado es ${maxPesoNombre} y vive en un habitat de ${maxPesoTemp} grados <br>`);
    document.write(`C) La cantidad de animales que viven en habitats de menos de 0 grados es ${contAnim0} <br>`);
    document.write(`D) El promedio de peso de todos los animales es de ${promedio}kg <br>`);
    document.write(`E) El peso maximo ${maxPesoTemp0}kg y el peso minimo ${minPesoTemp0}kg de los animales en habitats de temperatura bajo cero <br> `);

}
