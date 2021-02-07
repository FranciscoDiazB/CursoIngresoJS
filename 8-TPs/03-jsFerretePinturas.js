/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temp; 
    let grad; 

    temp = parseFloat(document.getElementById("txtIdTemperatura").value);

    grad = (temp - 32) * 5/9;

    alert(`${temp} Fahrenheit son ${grad} Centigrados`);



}

function CentigradosFahrenheit () 
{
    let temp;
    let far; 

    temp = parseFloat(document.getElementById("txtIdTemperatura").value);
    
    far = (temp * 9/5) + 32; 

    alert(`${temp} Centigrados son ${far} Fahrenheit`);



    
}
