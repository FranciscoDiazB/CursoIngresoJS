function mostrar()
{

    let nombre;
    let edad;
    let sexo;
    let nota; 
    let contVarApr = 0;
    let acuNotaMenor = 0;
    let contNotaMenor = 0;
    let acuNotaAdol = 0;
    let contNotaAdol = 0;
    let acuNotaMayor = 0;
    let contNotaMayor = 0;
    let acuNotaVaron = 0;
    let contNotaVaron = 0;
    let acuNotaMujer = 0;
    let contNotaMujer = 0; 
    let promedioMenores;
    let promedioAdol;
    let promedioMayor; 
    let promedioVaron;
    let promedioMujer; 
    let seguir;

    do{

        nombre = prompt("Ingrese su Nombre");

        edad = parseInt(prompt("Ingrese su edad")); 
        while(isNaN(edad)){
            edad = parseInt(prompt("Edad incorrecta. Ingrese su edad"));
        }

        sexo = prompt("Ingrese 'f' para sexo femenino. Sino 'm' para el masculino.").toLowerCase();
        while(sexo != 'f' && sexo != 'm'){
            sexo = prompt("Dato invalido. Ingrese 'f' para sexo femenino. Sino 'm' para el masculino.");
        }

        nota = parseInt(prompt("Ingrese nota (entre el 1 y el 10). Superior a 6 es aprobado"));
        while(isNaN(nota) || nota > 10 || nota < 1){
            nota = parseInt(prompt("Nota invalida. Ingrese nota (entre el 1 y el 10)"));
        }

        switch(sexo){
            case 'm': 
              acuNotaVaron += nota; //E 1)
              contNotaVaron++; 

              if(nota >= 6){
                  contVarApr++; //A)
              }
              break; 
            
            case 'f': 
              acuNotaMujer += nota; //E 2)
              contNotaMujer++;
              break;
        }

        if(edad < 18){
            acuNotaMenor += nota;
            contNotaMenor++;     //B)
        }

        if(edad > 12 && edad < 18){
            acuNotaAdol += nota;    //C)
            contNotaAdol++; 
        }
        else if(edad >= 18){
            acuNotaMayor += nota;  //D)
            contNotaMayor++;
        }

        seguir = prompt("Desea continuar? Ingrese 's'");

    } while (seguir == 's'); 

    promedioMenores = acuNotaMenor / contNotaMenor;
    promedioMayor = acuNotaMayor / contNotaMayor; 
    promedioAdol = acuNotaAdol / contNotaAdol; 
    promedioMujer = acuNotaMujer / contNotaMujer; 
    promedioVaron = acuNotaVaron / contNotaVaron; 

    document.write(`A) La cantidad de varones que aprobaron fueron ${contVarApr} <br>`);

    if(isNaN(promedioMenores)){
        document.write(`B) No se introdujeron menores <br>`);
    }
    else{
        document.write(`B) El promedio de las nota de los menores de edad es ${promedioMenores} <br>`);
    }
    
    if(isNaN(promedioAdol)){
        document.write(`C) No se introdujeron adolescentes <br>`);
    }
    else{
        document.write(`C) El promedio de la nota de los adolescentes es ${promedioAdol} <br>`);
    }
    
    if(isNaN(promedioMayor)){
        document.write(`D) No se introdujeron menores de edad <br>`);
    }
    else{
        document.write(`D) El promedio de la nota de los mayores de edad es ${promedioMayor} <br>`);
    }
    
    if(isNaN(promedioMujer)){
        document.write(`E1) No se introdujeron mujeres <br>`)
    }
    else{
        document.write(`E1) Promedio de las mujeres es ${promedioMujer} <br>`);
    }
    
    if(isNaN(promedioVaron)){
        document.write(`E2) No se introdujeron varones <br>`)
    }
    else{
        document.write(`E2) Promedio de los varones es ${promedioVaron} <br>`);
    }


    


}
