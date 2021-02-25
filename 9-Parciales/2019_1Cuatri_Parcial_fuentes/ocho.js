function mostrar()
{

    let numero; 
    let letra;
    let contPares = 0;
    let contImpares = 0; 
    let contCeros = 0; 
    let acuPos = 0; 
    let contPos = 0; 
    let acuNeg = 0;
    let maxNum;
    let minNum;
    let maxLetra;
    let minLetra; 
    let seguir;
    let flag = 0;
    let promedio;

    do {

        letra = prompt("Ingrese una letra").toUpperCase(); 

        numero = parseInt(prompt("Ingrese un numero entre -100 y 100"));
        while(isNaN(numero) || numero < -100 || numero > 100){
            numero = parseInt(prompt("Dato invalido. Ingrese un numero entre -100 y 100"));
        }

        if(numero % 2 == 0){
            contPares++;
        }
        else{
            contImpares++;
        }

        if(numero > 0){
            acuPos += numero;
            contPos++;
        }
        else if (numero < 0){
            acuNeg += numero; 
        }
        else{
            contCeros++;
        }

        if(flag == 0 || numero > maxNum){
            maxNum = numero;
            maxLetra = letra;
        }

        if(flag == 0 || numero < minNum){
            minNum = numero;
            minLetra = letra;
        }

        seguir = prompt("Desea continuar? Aprete la letra 's'");
        flag++

    } while (seguir == 's');

    promedio = acuPos / contPos;

    document.write(`A) La cantidad de numero pares es ${contPares} <br>`); 
    document.write(`B) La cantidad de numeros impares es ${contImpares} <br>`);
    document.write(`C) La cantidad de ceros es ${contCeros} <br>`);
    document.write(`D) El promedio de los numeros positivos es ${promedio} <br>`);
    document.write(`E) La suma de todos los numeros negativos es ${acuNeg} <br>`);
    document.write(`F) Maximo = ${maxNum} y su letra ${maxLetra}. Minimo = ${minNum} y su letra ${minLetra}`);






}
