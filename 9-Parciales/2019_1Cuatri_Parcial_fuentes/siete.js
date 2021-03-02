function mostrar()
{

    let altura;
    let sexo; 
    let acuAltura = 0;
    let minAltura;
    let minAltSexo; 
    let contMuj190 = 0; 
    let promedio; 

    for (let i = 0; i < 5; i++){

        altura = parseInt(prompt("Ingrese altura (en cm)"));
        while(isNaN(altura) || altura < 0 || altura > 250){
            altura = parseInt(prompt("Altura invalida. Ingrese altura (en cm)"));
        }

        sexo = prompt("Ingrese 'f' para femenino y 'm' para masculino");
        while(sexo != 'f' && sexo != 'm'){
            sexo = prompt("Sexo invalido. Ingrese 'f' para femenino y 'm' para masculino");
        }

        acuAltura += altura;

        if(i == 0 || altura < minAltura){
            minAltura = altura;
            minAltSexo = sexo;
        }

        if(sexo == 'f' && altura > 190){
            contMuj190++;
        }
    }

    if(minAltSexo == 'f'){
        minAltSexo = "Femenino";
    }
    else{
        minAltSexo = "Masculino";
    }

    promedio = acuAltura / 5;

    alert(`
    A) El promedio de las alturas es ${promedio}cm
    B) La altura mas baja es de ${minAltura}cm y el sexo es ${minAltSexo}
    C) La cantidad de mujeres que superan los 190 cm son ${contMuj190}`);


}
