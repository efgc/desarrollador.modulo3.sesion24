//es necesario para que se pinte de rojo al cargar la pagina
let opciones = document.getElementById("opciones");
verificarColor(opciones);

//recibimos una referencia de el elemento select
function verificarColor(elemento){
    console.log(elemento);
    console.log(elemento.value);

    switch(elemento.value){
        case "1":
            elemento.style.backgroundColor = "red";
            console.log("rojo");
            break;
        case "2":
            elemento.style.backgroundColor = "green";
            console.log("verde");
            break;
        case "3":
            elemento.style.backgroundColor = "blue";
            console.log("azul");
            break;
        default:
            console.log("Opcion incorrecto");
    }
}