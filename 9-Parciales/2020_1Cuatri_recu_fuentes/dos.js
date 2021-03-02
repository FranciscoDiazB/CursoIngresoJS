function mostrar()
{

  let tipo;
  let cantidad;
  let precio; 
  let acuPrecio = 0; 
  let acuCantidad = 0; 
  let acuCantidadA = 0;
  let acuCantidadCal = 0;
  let acuCantidadCem = 0;
  let PrecioDes; 
  let maxCantTipo; 
  let maxTipoBolsa; 
  let maxPrecio;
  let maxPrecioTipo; 
  let seguir;
  flag = true; 

  do{
    
    tipo = prompt("Ingrese el tipo: cal / cemento / arena").toLowerCase();
    while(tipo != "cal" && tipo != "cemento" && tipo != "arena"){
      tipo = prompt("Dato invalido. Ingrese el tipo: cal / cemento / arena").toLowerCase();
    }

    cantidad = parseInt(prompt("Ingrese la cantidad de bolsas (mayor a 0)"));
    while(isNaN(cantidad) || cantidad < 1){
      cantidad = parseInt(prompt("Dato invalido. Ingrese la cantidad de bolsas (mayor a 0)"));
    }

    precio = parseInt(prompt("Ingrese el precio de la bolsa (mayor a 0)"));
    while(isNaN(precio) || precio < 1){
      precio = parseInt(prompt("Dato invalido. Ingrese el precio de la bolsa (mayor a 0)"));
    }

    acuPrecio += precio * cantidad; 
    
    switch(tipo){
      case "arena":
        acuCantidadA += cantidad;
        break;
      case "cal":
        acuCantidadCal += cantidad;
        break;
      default:
        acuCantidadCem += cantidad;
    }
    
    if(flag == true || precio > maxPrecio){
      maxPrecio = precio; 
      maxPrecioTipo = tipo; 
      flag = false; 
    }
    
    acuCantidad += cantidad;
    
    seguir = prompt("Desea continuar? Ingrese 's'");
    
  } while (seguir == 's');

  if(acuCantidad > 10 && acuCantidad <= 30){
    PrecioDes = acuPrecio - (acuPrecio * 0.15);
  }
  else if(acuCantidad > 30){
    PrecioDes = acuPrecio - (acuPrecio * 0.25);
  }
  else{
    PrecioDes = acuPrecio; 
  }  

  if(acuCantidadCem > acuCantidadA && acuCantidadCem > acuCantidadCal0){
    maxTipoBolsa = acuCantidadCem;
    maxCantTipo = "Cemento"
  }
  if(acuCantidadCal >= acuCantidadCem && acuCantidadCal > acuCantidadA){
    maxTipoBolsa = acuCantidadCal; 
    maxCantTipo = "Cal"
  }
  if(acuCantidadA >= acuCantidadCal && acuCantidadA > acuCantidadCem){
    maxTipoBolsa = acuCantidadA;
    maxCantTipo = "Arena"
  }

  alert(`
  A) El importe total a pagar es de $${acuPrecio} y la cantidad de bolsas totales ${acuCantidad}
  B) El importe a pagar con descuento es de $${PrecioDes}
  C) El tipo con mayor cantidad de bolsas es ${maxCantTipo} con ${maxTipoBolsa} bolsas
  D) El tipo mas caro es ${maxPrecioTipo.toUpperCase()} costando $${maxPrecio} la bolsa en alguna de sus compras`);

}
