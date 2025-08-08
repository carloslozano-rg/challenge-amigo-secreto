// Declara una variable de tipo array, que almacenará los nombres de los amigos ingresados.
let amigos = [];

// Crea una función para limpiar la única caja de texto.
function limpiarCaja() {
    let valorCaja = document.querySelector("#amigo");
    valorCaja.value = "";
}

// Crea una función para limpiar listas.
function limpiarLista(id) {
    let listaLimpia = document.getElementById(id);
    listaLimpia.innerHTML = "";
}

// Agrega la lista 'amigos' a la lista desordenada 'listaAmigos', en forma de una sola cadena de texto.
// Es una alternativa a 'listaAmigosLi', no se uso.
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

// Agrega la lista 'amigos' a la lista desordenada 'listaAmigos', creando un list item por cada elemento de 'amigos'.
function listaAmigosLi() {
    let listaDesordenada = document.getElementById("listaAmigos");  
    listaDesordenada.innerHTML = "";
    // console.log("Lista limpia: ",listaDesordenada.textContent);

    // Crea un nuevo 'li' por cada amigo.
    for (let amigo of amigos) {
        let listaElemento = document.createElement("li");
        listaElemento.textContent = amigo;
        listaDesordenada.appendChild(listaElemento);
    }
    // console.log("Lista completa: ", listaDesordenada.textContent);
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
        // En caso de que ya obtuviesemos un 'resultado' previo.
        limpiarLista("resultado");
    }
}

// Función para escoger un amigo secreto.
function sortearAmigo() {
    numeroAmigos = amigos.length;
    if (numeroAmigos === 0) {
        // Si la lista 'amigos' esta vacía.
        alert("Por favor, inserte un nombre.");
    } else {
        // Si no, se elige un elemento de dicha lista.  
        amigoSecretoIndex = Math.floor(Math.random() * numeroAmigos);
        // console.log(amigoSecretoIndex);
        // console.log(amigos);
        amigoSecreto = amigos[amigoSecretoIndex];
        
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = amigoSecreto;
        
        // Se reinician las listas, para que el botón de 'Sortear amigo' sirva también como reset.
        limpiarLista("listaAmigos"); 
        amigos = [];
    }
}