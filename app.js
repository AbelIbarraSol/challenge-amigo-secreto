let nombres = [];
let nombresSorteados = [];

function accesoElemento(idElemento) {
    return document.getElementById(idElemento);
}

function agregarAmigo() {
    let inputNombre = accesoElemento('amigo').value;
    if (inputNombre == '') {
        alert('Por favor, inserte un nombre');
    }
    if (nombres.includes(inputNombre)) {
        alert('El nombre ingresado ya se encuentra en la lista');
        accesoElemento('amigo').value = '';
    } else {
        nombres.push(inputNombre);
        accesoElemento('amigo').value = '';
        let lista = accesoElemento('listaAmigos');
        lista.innerHTML = '';
        for (let i = 0; i < nombres.length; i++) {
            let nuevoNombre = document.createElement("li");
            nuevoNombre.textContent = nombres[i];
            lista.appendChild(nuevoNombre);
        }
    }
}

function sortearAmigo() {
    if (nombres.length <= 1) {
        alert('Ingresa como minimo el nombre de dos amigos para poder iniciar con el sorteo');
        return;
    } else {
        if (nombresSorteados.length === nombres.length) {
            alert("Todos los amigos han sido sorteados.");
            return;
        }
        let nombreSorteado;
        do {
            let numAleatorio = Math.floor(Math.random() * nombres.length);
            nombreSorteado = nombres[numAleatorio];
        } while (nombresSorteados.includes(nombreSorteado));
        nombresSorteados.push(nombreSorteado);
        accesoElemento('listaAmigos').innerHTML = "";
        let mostrarResultado = accesoElemento('resultado');
        mostrarResultado.innerHTML = `El amigo secreto sorteado es: ${nombreSorteado}`;
        console.log(nombreSorteado);
    }
}

function reiniciarSorteo() {
    nombres = [];
    nombresSorteados = [];
    accesoElemento('amigo').innerHTML = "";
    accesoElemento('listaAmigos').innerHTML = "";
    accesoElemento('resultado').innerHTML = "";
}






