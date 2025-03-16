let amigos = [];

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value;
    
    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    // Actualizar el array de amigos
    amigos.push(nombre);
    //Para visualizar el array en la consola
    console.log(amigos); 
    
    // Limpiar el campo de entrada
    inputNombre.value = "";
    
    // Actualizar la lista visible en la página
    actualizarListaAmigos();
}

// Funcion que actualiza la lista de amigos
function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("Por favor, agregue a sus amigos.");
        return;
    } else {
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        console.log(`el numero aleatorio es ${numeroAleatorio}, y el amigo secreto sería ${amigos[numeroAleatorio]}`);
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "El amigo secreto es: " + amigos[numeroAleatorio];
    }
}