function mostrar()
{
    
    let pais; 
    let habitantes; 
    let temperatura; 
    let seguir; 
    let acuHabi = 0; 
    let contTempPar = 0; 
    let contTemp40 = 0; 
    let contHabi = 0;
    let minHabi; 
    let minPaisHabi; 
    let minTemp; 
    let minPaisTemp; 
    let flag = 0; 
    let promedio; 


    do {

        pais = prompt("Ingrese nombre de un Pais"); 
        
        habitantes = parseInt(prompt("Ingrese cantidad de habitantes entre 1 y 7000 (son inerpretados como millon)"));
        while(isNaN(habitantes) || habitantes < 1 || habitantes > 7000){
            habitantes = parseInt(prompt("Dato invalido. Ingrese cantidad de habitantes entre 1 y 7000 (son interpretados como millon"));
        }

        temperatura = parseInt(prompt("Ingrese una temperatura entre - 50 y 50 (grados)")); 
        while(isNaN(temperatura) || temperatura < -50 || temperatura > 50){
            temperatura = parseInt(prompt("Temperatura invalida. Ingrese una temperatura entre - 50 y 50 (grados)")); 
        }

        if(temperatura % 2 == 0){
            contTempPar++;
        }

        if(flag == 0 || habitantes < minHabi){
            minHabi = habitantes; 
            minPaisHabi = pais; 
        }

        acuHabi+= habitantes; 
        contHabi++;

        if(temperatura > 40){
            contTemp40++;
        }

        if(flag == 0 || temperatura < minTemp){
            minTemp = temperatura;
            minPaisTemp = pais;
        }

        seguir = prompt("Ingrese la letra 's' para seguir"); 
        flag++

    } while (seguir == 's');

    promedio = acuHabi / contHabi; 

    document.write(`A) La cantidad de temperaturas pares es ${contTempPar} <br>`); 

    document.write(`B) El nombre del pais con menos habitantes es ${minPaisHabi} con ${minHabi} millones de habitantes <br>`); 

    document.write(`C) La cantidad de paises que superan los 40 grados son ${contTemp40} <br>`);

    document.write(`D) El promedio de los habitantes entre los paises es de ${promedio} millones <br>`); 

    document.write(`E) La temperatura minima es de ${minTemp} grados del pais ${minPaisTemp} <br>`);

}
