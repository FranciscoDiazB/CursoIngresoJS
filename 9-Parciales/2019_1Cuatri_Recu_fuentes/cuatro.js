function mostrar()
{
    let numero1;
    let numero2;
    let cuadrado;  
    let resta; 
    let resto = 0; 

    numero1 = parseInt(prompt("Ingrese un primer numero"));
    while(isNaN(numero1)){
        numero1 = parseInt(prompt("Dato invalido. Ingrese un primer numero"));
    }

    numero2 = parseInt(prompt("Ingrese un segundo numero"));
    while(isNaN(numero2)){
        numero2 = parseInt(prompt("Dato invalido. Ingrese un segundo numero"));
    }

    if(numero1 == numero2){
        cuadrado = numero1 * numero2;
        alert(`${numero2} al cuadrado es ${cuadrado}`);
    }

    if(numero1 % numero2 == 0){
        resta = numero1 - numero2;
        alert(`La resta de ${numero1} y ${numero2} es ${resta}`);
    }
    else{
        resto = numero1 % numero2
        alert(`Como ${numero1} no es divisible por ${numero2} el resto es ${resto}`); 
        if(resto > 3){
            alert(`Resto mayor a 3 = ${resto}`); 
        }
    }

    

}
