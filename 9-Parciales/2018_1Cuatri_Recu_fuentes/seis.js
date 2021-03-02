function mostrar()
{

    let hora; 
    let notificacion;

    hora = parseInt(document.getElementById("laHora").value);

    switch(hora){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            notificacion = "Es de Madrugada";
            break;
        case 6:
        case 7:
        case 8: 
        case 9:
        case 10:
        case 11:
            notificacion = "Es de Mañana";
            break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            notificacion = "Es de Tarde";
            break;
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:    
            notificacion = "Es de Noche";
            break; 
        default:
            notificacion = "Hora invalida"
 
    } 

    alert(notificacion); 

    if(hora > 19 && hora < 24){
        alert("A dormir");
    }
 	
}
