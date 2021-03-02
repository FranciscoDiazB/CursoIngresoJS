function mostrar()
{

    let nota;
    let sexo;
    let acuNotas = 0;
    let contNotas = 0; 
    let minNota;
    let minSexo;
    let contVar6 = 0;
    let promedio;


    for(let i = 0; i < 5; i++){
        
        nota = parseInt(prompt("Ingrese nota entre el 1 y el 10"));
        while(isNaN(nota) ||  nota < 1 || nota > 10){
            nota = parseInt(prompt("Dato invalido. Ingrese nota entre el 1 y el 10"));
        }

        sexo = prompt("Ingrese 'f' para femenino y 'm' para masculino").toLowerCase();
        while(sexo != 'm' && sexo != 'f'){
            sexo = prompt("Ingrese 'f' para femenino y 'm' para masculino").toLowerCase();
        }

        acuNotas += nota; 

        if(i == 0 || nota < minNota){
            minNota = nota; 
            minSexo = sexo;
        }

        if(sexo == 'm' && nota >= 6){
            contVar6++;
        }

    }

    promedio = acuNotas / 5; 

    if(sexo == 'f'){
        sexo = "Femenino"
        minSexo = "Femenino"
    }
    else{
        sexo = "Masculino"
        minSexo = "Masculino"
    }

    document.write(`A) El promedio de las notas totales es ${promedio} <br>`);

    document.write(`B) La nota mas baja es ${minNota} siendo su sexo ${minSexo} <br>`);

    document.write(`C) La cantidad de varones cuya nota fue igual o mayor a 6 es ${contVar6}`);



}
