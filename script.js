let numero = parseInt(prompt("ingrese un numero del 1 al 10"));

let numEscondido = (Math.floor(Math.random() * 10)+1);

let cont = 1;

while (numero !== numEscondido) {
    cont =cont+ 1
    if (numero < numEscondido) {
        alert("es mayor");
        numero = parseInt(prompt("ingrese un numero del 1 al 10"));
    } else {
        alert("es menor");
        numero = parseInt(prompt("ingrese un numero del 1 al 10"));
    }
}
alert("Felicidades!!!\nhas acertado el numero " + numero + " en:  " + cont + " intentos");