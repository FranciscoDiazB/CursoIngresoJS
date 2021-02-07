/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{ 
    let largo;
    let ancho; 

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);

    let perimetro = (largo * 2) + (ancho * 2);
    let reforzado = perimetro * 3;

    alert(reforzado + " Alambres");


 

}
function Circulo () 
{ 
    let radio; 

    radio = parseInt(document.getElementById("txtIdRadio").value);

    let circun = 2 * radio * 3.1416; 
    let alamb = 3 * circun;

    alert(alamb + " Alambres");
	
}
function Materiales () 
{
    let largo;
    let ancho; 

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);

    let cemento = largo * ancho * 2 
    let cal = largo * ancho * 3
     
    alert(`${cemento} Bolsas de Cemento y ${cal} Bolsas de Cal`)




}