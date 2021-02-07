/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	let sueldo; 
	let aumento;
	let sueldoaumento; 
	
	sueldo = parseFloat(document.getElementById("txtIdSueldo").value); 

	aumento = sueldo * 10/100 
	sueldoaumento = sueldo + aumento

	document.getElementById("txtIdResultado").value = sueldoaumento 

}
 
/* Identifico las variables 
  
   num1 va a corresponder a la primer caja de texto (el sueldo pre aumento)
   
   El aumento del 10% es aplicar una regla de tres simple en donde 
   a la cantidad que ya tenes (en este caso tu sueldo, que seria el 100% 
   de dinero total), lo multiplicas por 110 (el 100% "tu sueldo" + el 10%
   "el aumento") y lo dividis por 100 
   ej:     100% --------- 1200$
		   110% --------- X (sueldo post aumento)
		   
   Uno puede simplificar todo esto diciendo que el aumento del 10% de algo, es lo 	
   mismo que multiplicar el "algo" por 1.1. 

   A la variable num1 le tengo que dar un valor numero , atraves de la funcion 
   parseInt 

   Asigno una nueva variable que, a la que le voy a dar un valor numero





*/