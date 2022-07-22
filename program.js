// // EJERCICIO: PREGUNTAR AL USUARIO EL AÑO DE SU VEIVULOO
// //SI EL VEHIVULO TIENE MENOS DE 10 AÑOS DE ANTIGÜEDAD LE AVISAMOS QUE ABONA 200 DOLARES DE PATENTE
// //DE LO CONTRATIO, ABONA 100 DOLARES DE PATENTE ANUAL

// const ANIOACTUAL = 2022;
// let anioAuto = parseInt (prompt ("Ingresa el año de tu vehivulo"));
// let antiguedad = ANIOACTUAL - anioAuto;

// if (antiguedad < 10)
// {
//     console.log("Abona 200 dolares de patente");
// }

// else
// {
//     console.log ("Abona 100 dolares");
// }
let ingr = 0;
let numero = prompt ("Ingrese un numero para saber si es par o impar. Para salir ingrese x");
while (numero != "x")
{

    if ((numero % 1 == 0) || (numero % 1 == 1) || (numero % 1 == 2) || (numero % 1 == 3) || (numero % 1 == 4) || (numero % 1 == 5) || (numero % 1 == 6) || (numero % 1 == 7) || (numero % 1 == 8) || (numero % 1 == 9)) 
    {
        let numero2 = numero/2;

        if (numero2 % 1 == 0)
        {
         numero = prompt("El numero Ingresado es Par \nIngrese otro numero o escriba x para salir");
        }

        else if (numero2 % 1 != 0)
        {
            numero = prompt("El numero ingresado es Impar \nIngrese otro numero o escriba x para salir")
        }
    }
    else
    {
        numero = prompt("No a ingresado ni un numero, ni la letra desiganada para salir del codigo.\n Ingrese un numero para saber si es par o impar, o ingrese x para salir. ")
    }
} 

if (numero == "x")
{
alert ("¡Gracias por Jugar!");
}