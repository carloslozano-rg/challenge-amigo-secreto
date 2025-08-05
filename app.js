// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declara una variable de tipo array, que almacenará los nombres de los amigos ingresados.
let amigos = [];

// Crea una función pata limpiar la caja de texto.
function limpiarCaja() {
    let valorCaja = document.querySelector("#amigo");
    valorCaja.value = "";
}

// Agrega la lista de amigos debajo de la caja de texto, en forma de una sola cadena de texto.
function listaAmigosCadena() {
    amigosCadena = "";
    for (let index in amigos) {
        amigosCadena += amigos[index] + "<br>";
        // La línea siguiente funciona en consola, pero en la página solo separa los nombres por espacio.
        // amigosCadena += amigos[index] + "\n"; 
    }
    // console.log(amigosCadena)
    document.getElementById("listaAmigos").innerHTML = amigosCadena;
}

// Agrega la lista de amigos debajo de la caja de texto, creando un nuevo list item por cada amigo.
function listaAmigosLi() {
    let listaDesordenada = document.getElementById("listaAmigos");  
    listaDesordenada.innerHTML = "";
    // Debido a que en Chrome solo muestra el estado final de la 'ul' cuando solo ingresamos 'console.log(listaDesordenada);', se tiene que llamar a un atributo.
    // console.log("Lista limpia: ",listaDesordenada.textContent);

    for (let amigo of amigos) {
        // Crea un nuevo 'li' por cada amigo.
        let listaElemento = document.createElement("li");
        listaElemento.textContent = amigo;
        listaDesordenada.appendChild(listaElemento);
    }
    // console.log("Lista completa: ", listaDesordenada.textContent)
}

// Crea una función para agregar amigos.
function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;

    if (amigo == "") {
        // Si 'amigo' es una cadena vacía, se mostrara una alerta.
        alert("Por favor, inserte un nombre.");
    } else {
        // Si 'amigo' no es una cadena vacía, lo agregará a la lista 'amigos'.
        amigos.push(amigo);
        // Limpia el valor de la caja de texto.
        limpiarCaja();
        // Cualquiera de los 2 métodos funciona, pero 'listaAmigosLi()' cumple con los requisitos del challenge.
        // listaAmigosCadena();
        listaAmigosLi();
    
    }
}

