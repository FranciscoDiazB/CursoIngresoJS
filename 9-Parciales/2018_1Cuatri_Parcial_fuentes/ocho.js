function mostrar()
{
    let letra; 
    let numero; 
    let acuPos = 0;
    let acuNeg = 0; 
    let contPar = 0;
    let contImpar = 0; 
    let contCeros = 0; 
    let contPos = 0;
    let promedioPos; 
    let minimo; 
    let maximo; 
    let seguir; 
    let i = 0;
    let letraMaximo; 
    let letraMinimo; 

    
    do{
        letra = prompt("Ingrese una letra"); 
        while(letra == String){
                letra = prompt("Dato invalido. Ingrese una letra"); 
        }

        numero = parseInt(prompt("Ingrese un numero entre los valores -100 y 100")); 
        while(numero > 100 || numero < -100 || isNaN(numero)){
                numero = parseInt(prompt("Numero invalido. Ingrese un numero entre los valores -100 y 100"));
        }
        

        if(numero >= 0){
            acuPos += numero;
            contPos++ ;
        }

        if(numero < 0){
            acuNeg += numero;
        }

        if(numero == 0){
            contCeros++;
        }

        if(numero % 2 == 0){
            contPar++ ;
        }
        
        if(numero % 2 != 0){
            contImpar++ ;
        }

        if(i == 0 || numero > maximo){
            maximo = numero;
            letraMaximo = letra;
        }

        if(i == 0 || numero < minimo){
            minimo = numero;
            letraMinimo = letra; 
        }
        
        seguir = prompt(`Ingrese la letra 's' para seguir ingresando datos`);
        i++

    } while(seguir == 's'); 

    promedioPos = acuPos / contPos;

    alert(`
    A) ${contPar}
    B) ${contImpar}
    C) ${contCeros}
    D) ${promedioPos}
    E) ${acuNeg}
    F) Maximo = ${maximo} ${letraMaximo}    Minimo = ${minimo} ${letraMinimo}`);
    



    



}    