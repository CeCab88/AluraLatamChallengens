// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Se declara un arreglo para almacenar los nombres los amigos. 
let amigos = [];

// Se implementa una función para agregar a nuestros amigos al juego.
/* Se implementa una función para validar que nuestra entrada(input) no esté vacía a digitar el nombre 
de nuestros amigos y si no lo está, se agrega nuestro amigo a nuestro areeglo y se limpia el input.*/
function agregarAmigo() {
    //Se captura el valor del imput donde ingresamos el nombre de nuestro amigo.
    let nombreDeAmigo = document.getElementById("amigo").value;

    // Se valida que el contenido del input no esté vacío y si lo está se lanza una alerta. 
    if (nombreDeAmigo.trim() === '') {
        alert('Por favor, inserte un nombre.');
    }else{
        // En caso de que el input no esté vacío, se agrega el nombre de nuestro amigo al arreglo 'amigos'. 
        amigos.push(nombreDeAmigo);
        actualizarLista();
    }
    /* Se hace una llamada a la función 'LimpiarCaja', que se encarga de limpiar el input, luego de añadir
    el nombre de nuestro amigo, como método.*/
    LimpiarCaja();
    return;
}

function LimpiarCaja(){
    document.querySelector('#amigo').value = '';
    return; 
}

// Se implementa una función para actualizar la lista de amigos.
function actualizarLista() {
    // Se obtiene el elmenteo con el Id 'listaAmigos' para mostrar todos los nombres de nuestros amigos.
    let lista = document.getElementById('listaAmigos');
    // Al momento de actualizar, se limpia la lista existente para que no haya duplicados.
    lista.innerHTML = "";
    // Este for sirve para iterar cada elemento del arreglo 'amigos' y mostrarlo en el campo 'listaAmigos'.
    for (let i = 0; i < amigos.length; i++) {
        const nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = amigos[i];
        lista.appendChild(nuevoAmigo);
    }
}

// Se implementa una función para sortear los nombres de nuestros amigos.
function sortearAmigo() {
    // Se valida que nuestro array no esté vacío.
    if (amigos.length > 0) {
        /* Se genera un número aleatorio que nos dará acceso al índice que definirá quien será nuestro 
        amigo secreto.*/
        amigoSorteado = amigos[(Math.floor(Math.random() * amigos.length))];
        // Se obtiene el campo con el Id 'resultado' para mostrar a nuestro amigo secreto en pantalla.
        let amigoSecreto = document.querySelector('#resultado');
        amigoSecreto.innerHTML = `El amigo secreto es: ${amigoSorteado}.`;
    }
}