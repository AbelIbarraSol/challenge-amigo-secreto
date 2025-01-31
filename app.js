let nombres = [];

function accesoElemento(idElemento) {
    return document.getElementById(idElemento);
}

function agregarAmigo() {
    let inputNombre = accesoElemento('amigo').value;
    if (inputNombre == '') {
        alert('Por favor, inserte un nombre');
    }else if(nombres.includes(inputNombre)){
        alert('El nombre ingresado ya se encuentra en la lista');
        accesoElemento('amigo').value = '';
    } else {
        accesoElemento('amigo').value = '';
        nombres.push(inputNombre);
        mostrarNombre(inputNombre);
        console.log(nombres);
    }
    
}

function sortearAmigo() {
    if (nombres.length === 0 || nombres.length === 1) {
        alert('Ingresa como minimo el nombre de dos amigos para poder iniciar con el sorteo');
    }else{
        let numAleatorio = Math.floor(Math.random()*nombres.length);
            let mostrarResultado = accesoElemento('resultado');
            let lista = accesoElemento('listaAmigos');
            lista.innerHTML = '';
            mostrarResultado.innerHTML = `El amigo secreto sorteado es: ${nombres[numAleatorio]}`;
            console.log(nombres[numAleatorio]);
        }        
}
function reiniciarSorteo() {
    nombres.splice(0,nombres.length);
    accesoElemento('listaAmigos').innerHTML = "";
    accesoElemento('resultado').innerHTML = "";
}

function mostrarNombre(nombre) {
    let lista = accesoElemento('listaAmigos');
    let nuevoNombre = document.createElement("li");
    nuevoNombre.textContent = nombre;
    lista.appendChild(nuevoNombre);
}






