// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declara una variable de tipo array, que almacenará los nombres de los amigos ingresados.
let amigos = [];

// Crea una función pata limpiar la caja de texto
function limpiarCaja() {
    let valorCaja = document.querySelector("#amigo");
    valorCaja.value = "";
}

// Crea una función para agregar amigos
function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;

    if (amigo == "") {
        // Si 'amigo' es una cadena vacía, se mostrara una alerta
        alert("Por favor, inserte un nombre.");
    } else {
        // Si 'amigo' no es una cadena vacía, lo agregará a la lista 'amigos'
        amigos.push(amigo);
        // Limpia el valor de la caja de texto
        limpiarCaja();
    
        /* console.log(amigo);
        console.log(typeof(amigo))
        console.log(amigos); */
    }
}

