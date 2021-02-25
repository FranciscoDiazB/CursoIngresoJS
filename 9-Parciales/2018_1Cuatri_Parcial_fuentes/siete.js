function mostrar()
{

    let sexo; 
    let nota; 
    let acumunota = 0; 
    let promedio; 
    let minimo;
    let cantvaron6 = 0; 
    let contvaron = 0; 
    let sexomenorvalor; 
    

    for (let i = 0; i < 5; i++){

        nota = parseInt(prompt("Ingrese nota")); 
        while (nota < 1 || nota > 10 || isNaN(nota)){
            nota = parseInt(prompt("Ingrese un numero valido, del 1 al 10 inclusive")); 
        }
        
        acumunota += nota;

        sexo = prompt(`Ingrese sexo "f" (para femenino) y "m" (para masculino)`); 
        while (sexo != "f" && sexo != "m"){
            sexo = prompt(`Ingrese sexo valido. "f" o "m"`); 
        }

        if(sexo == "m" && nota >= 6){ 
            contvaron++;
            cantvaron6 = contvaron;
        }  
        
        if(nota < minimo || i == 0){
            minimo = nota;
            sexomenorvalor = sexo;
        }
    }
    
    if(sexomenorvalor == "m"){
        sexomenorvalor = "Masculino"
    }
    if(sexomenorvalor == "f"){
        sexomenorvalor = "Femenino"
    }
    
    promedio = acumunota / 5;
    
    alert(`
    A)${promedio}
    B)${minimo} ${sexomenorvalor} 
    C)${cantvaron6}`);



}
