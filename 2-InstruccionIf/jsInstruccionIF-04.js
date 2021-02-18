function mostrar()
{
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 13 && edad <=17){

		alert("Usted esta en la adolescencia, gratz");
	}

}

/* SIno se puede utilizar 

if (!(edad < 13 || edad > 17)){

	alert("Usted esta en al adolescencia");
}

O

if (edad >= 13){

	if (edad <= 17){
		
		alert("Usted es adolescente")
	}
}
Aunque con los operadores logicos "&&" es mas facil
*/