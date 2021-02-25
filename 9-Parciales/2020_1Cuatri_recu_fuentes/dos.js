function mostrar()
{
  let tipobolsa;
  let cantidad; 
  let precio; 
  let i = 0;
  let pregunta; 
  let total = 0; 

  while(i >= 0){

    tipobolsa = prompt("El tipo de bolsa: arena, cal o cemento");

    cantidad = parseInt(prompt("Cantidad de Bolsas")); 

    precio = parseInt(prompt("Precio de la Bolsa")); 

  

    total = total + (precio * cantidad);
   
   
    pregunta = prompt(`Desea seguir? Oprima "SI". Si no oprima "Enter"`); 
    if(pregunta !=  "SI"){
      break;
    }
    i++




  }

  if (cantidad < 10){

    total = total;
  } 
  else if (cantidad > 29 ){
    total = total - (total * 0.25);
  } 
  else{
    total = total - (total * 0.15);
  }

  alert(total);


}
