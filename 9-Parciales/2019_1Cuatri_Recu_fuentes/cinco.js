function mostrar()
{

    let destino; 
    let pago; 
    const precio = 100; 
    let dias; 
    let descuentoLugar = 0; 
    let descuentoPago = 0;
    let aumentoLugar = 0; 
    let aumentoPago = 0; 
    let preciofinal; 
    let preciototal;
    

    destino = document.getElementById("selecContinente").value; 

    pago = document.getElementById("selecPago").value; 

    dias = parseInt(prompt("Ingrese la cantidad de dias del viaje")); 
    while(isNaN(dias) || dias < 1){
        dias = parseInt(prompt("Dato invalido. Ingrese la cantidad de dias del viaje")); 
    }

    switch(destino){
        case "America": 
          descuentoLugar = 15;
          if(pago == "Débito"){
              descuentoPago = 10;
          }
          else if(pago == "Cheque"){
                aumentoPago = 15; 
          }
          break; 
        
        case "África":
        case "Oceania":
          descuentoLugar = 30; 
          if(pago == "Efectivo" || pago == "MercadoPago"){
              descuentoPago = 15;
          }
          else if(pago == "Cheque"){
            aumentoPago = 15; 
          }
          break; 

        case "Europa": 
          descuentoLugar = 20;
          if(pago == "Débito"){
              descuentoPago = 15;
          }
          else if(pago == "MercadoPago"){
              descuentoPago = 10;
          }
          else if(pago == "Cheque"){
              aumentoPago = 15; 
          }
          else{
              descuentoPago = 5;
          }
          break; 

        default:
            aumentoLugar = 20
            if(pago == "Cheque"){
                aumentoPago = 15; 
            }
        
    }

    preciofinal = precio - (precio * (descuentoLugar/100)) - (precio * (descuentoPago/100)) + (precio * (aumentoPago/100)) + (precio * (aumentoLugar/100));

    preciototal = preciofinal * dias;

    alert(`El precio total es de $${preciototal}. Siendo $${preciofinal} el precio por dia`);



}
