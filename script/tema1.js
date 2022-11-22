
//es necesario para que se pinte de rojo al cargar la pagina
let opciones = document.getElementById("opciones");
verificarColor(opciones);

//recibimos una referencia de el elemento select
function verificarColor(elemento){
    console.log(elemento);
    console.log(elemento.value);
    //rojo
    if(elemento.value == "color1"){
        elemento.style.backgroundColor = "red";
    }else if(elemento.value == "color2"){
        elemento.style.backgroundColor = "green";
    }else{
        elemento.style.backgroundColor = "blue";
    }
}


//juego de numeros
//
//el numero aleatorio sera el mismo hasta que se adivine
let numeroCorrecto = generaNumeroAleatorio();
function verificarNumero(){
    
    
    console.log("El numero correcto es: " + numeroCorrecto);
    let numeroIngresado = document.getElementById("numero").value;
    console.log("Valor del usuario: " + numeroIngresado);

    if(numeroCorrecto == numeroIngresado){
        console.log("Felicidades, has ganado");
        numeroCorrecto = generaNumeroAleatorio();
    }else if(numeroCorrecto != numeroIngresado){
        console.log("Intenta de nuevo");
    }

    if(numeroCorrecto > numeroIngresado){
        console.log("Pista: el numero correcto es mayor");
    }else if(numeroCorrecto < numeroIngresado){
        console.log("Pista: el numero correcto es menor");
    }

}


function generaNumeroAleatorio(){
    let numero = Math.floor(Math.random() * 4) + 1;
    return numero;
}