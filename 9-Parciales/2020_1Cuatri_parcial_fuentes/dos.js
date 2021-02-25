function mostrar()
{
  let precio;
  let tipo;
  let cantidad; 
  let seguir;
  let acuCal = 0;
  let contCal = 0;
  let acuArena = 0;
  let contArena = 0; 
  let acuCemento = 0;
  let contCemento = 0;
  let acuBCal = 0;
  let acuBCemento = 0;
  let acuBArena = 0;
  let flag = 0; 
  let maximoprecio; 
  let tipomaximo;
  let precioNoDes;
  let CantBolsas;
  let PrecioDes;  
  let MaximaBolsa; 
  let tipoMaximoBolsa;
  let preciototal = 0; 
  
  do{

    precio = parseInt(prompt("Ingrese un precio"));
    while(isNaN(precio) || precio <= 0){
      precio = parseInt(prompt("Precio invalido. Vuelva a ingresar un precio"));
    }

    tipo = prompt("Ingrese el tipo de bolsa: cal / arena / cemento").toLowerCase();
    while(tipo != "cal" && tipo != "arena" && tipo != "cemento"){
      tipo = prompt("Dato invalido. Ingrese el tipo de bolsa entre: cal / arena / cemento").toLowerCase();
    }

    cantidad = parseInt(prompt("Ingrese una cantidad de bolsas que desea comprar superior a 0"));
    while(isNaN(cantidad) || cantidad <= 0){
      cantidad = parseInt(prompt("Dato invalido. Ingrese una cantidad de bolsas que desea comprar superior a 0"));
    }

    switch(tipo){
      case "cal": 
          acuCal += precio;
          acuBCal += cantidad;
          contCal++;
          break; 

      case "cemento":
          acuCemento += precio;
          acuBCemento += cantidad;
          contCemento++;
          break;

      case "arena":
          acuArena += precio;
          acuBArena += cantidad;
          contArena++;
          break;    
    }

    if(flag == 0 || precio > maximoprecio){
      maximoprecio = precio;
      tipomaximo = tipo.toUpperCase();
    }

    preciototal += precio * cantidad;

    seguir = prompt("Ingrese 's' para continuar"); 
    flag++

  } while (seguir == 's'); 

  precioNoDes = preciototal; 
  CantBolsas = acuBArena + acuBCal + acuBCemento;

  document.write(`A) El precio total, sin descuento es $${precioNoDes} <br>`);

  if(CantBolsas < 10){
     PrecioDes = precioNoDes;
  }
  else if (CantBolsas >= 10 && CantBolsas < 30){
     PrecioDes = precioNoDes - (precioNoDes * 0.15);
  }
  else{
     PrecioDes = precioNoDes - (precioNoDes * 0.25);
  }

  if (acuBCemento > acuBCal && acuBCemento > acuBArena){
     MaximaBolsa = acuBCemento;
     tipoMaximoBolsa = "Cemento";
  }
  if (acuBCal > acuBCemento && acuBCal >= acuBArena){
     MaximaBolsa = acuBCal;
     tipoMaximoBolsa = "Cal";
  }
  if (acuBArena > acuBCemento && acuBArena > acuBCal){
     MaximaBolsa = acuBArena;
     tipoMaximoBolsa = "Arena";
  }

  document.write(`B) El precio con descuento es de $${PrecioDes} y la cantidad de bolsas totales es de ${CantBolsas} <br>`);

  document.write(`C) El tipo con mayor cantidad de bolsas es ${tipoMaximoBolsa} con un total de ${MaximaBolsa} bolsas <br>`); 

  document.write(`D) El tipo mas caro es ${tipomaximo} valiendo su bolsa, de mayor precio, $${maximoprecio}`);







  
}
