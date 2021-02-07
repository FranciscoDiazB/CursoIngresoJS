/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let precio; 
	let descuento;
	let preciofinal; 
    //asigno variables
	precio = parseFloat(document.getElementById("txtIdImporte").value);
	//le doy valor numerico a la variable precio
	descuento = 75/100;
    //el descuento es del 25%, quiere decir 75/100
	preciofinal = precio * descuento;
	//el precio final, con descuento incluido es la multiplicacion de el precio inicial
	//y el descuento
	document.getElementById("txtIdResultado").value = preciofinal;
	//se tiene que mostrar en la caja de texto ID
}
