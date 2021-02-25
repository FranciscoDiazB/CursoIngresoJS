/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
let random; 
let maximo = 3;
let minimo = 1;


random = Math.round(Math.random() * (maximo - minimo) + minimo); 

function comenzar()
{
	


}
function piedra()
{    
    let piedra = 1;
    let papela = 2; 
    let tijera = 3; 

    if(piedra == random){
        alert("Usted empato");
    }
    else if (random == papela){
        alert("Usted perdio");
    }
    else if(random == tijera){
        alert("Usted gano");
    }
	

}
function papel()
{    
    
    let piedra = 1;
    let papela = 2; 
    let tijera = 3; 

    if(piedra == random){
        alert("Usted gano");
    }
    else if (random == papela){
        alert("Usted empato");
    }
    else if(random == tijera){
        alert("Usted perdio");
    }
   
}
function tijera()
{
    let piedra = 1;
    let papela = 2; 
    let tijera = 3; 

    if(piedra == random){
        alert("Usted perdio");
    }
    else if (random == papela){
        alert("Usted gano");
    }
    else if(random == tijera){
        alert("Usted empato");
    }

}