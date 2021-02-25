function mostrar()
{ 
    let marca;
    let peso;
    let temperatura; 
    let contTempPar = 0;
    let contTempMenor = 0; 
    let acuPeso = 0;
    let promedioPeso; 
    let maximo;
    let minimo; 
    let MarcaMaximo; 
    let seguir;
    let i = 0;
    
    do{
        marca = prompt("Ingrese Marca"); 
        peso = parseInt(prompt("Ingrese un peso entre 1 y 100"));
        while(!(peso >= 1 && peso <=100)){
            peso = parseInt(prompt("Peso invalido. Ingrese un peso entre 1 y 100"));
        }

        temperatura = parseInt(prompt("Ingrese una temperatura entre -30 y 30")); 
        while(!(temperatura >= -30 && temperatura <= 30)){
            temperatura = parseInt(prompt("Temperatura invalida. Ingrese una temperatura entre -30 y 30"));  
        }
        
        acuPeso += peso;

        if(temperatura % 2 == 0){
            contTempPar++
        }

        if(temperatura < 0){
            contTempMenor++
        }

        if(i == 0 || peso > maximo){
            maximo = peso;
            MarcaMaximo = marca;
        }
        
        if(i == 0 || peso < minimo){
            minimo = peso;
        }
    

        seguir = prompt("Desea seguir. Oprima s");
        i++

    } while (seguir == 's'); 

    promedioPeso = acuPeso / i; 

    alert(`
    A) ${contTempPar}
    B) ${MarcaMaximo}
    C) ${contTempMenor}
    D) ${promedioPeso}
    F) Maximo = ${maximo}  Minimo = ${minimo} `);


}
