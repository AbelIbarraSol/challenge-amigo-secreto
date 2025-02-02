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
    nombres = []
    accesoElemento('listaAmigos').innerHTML = "";
    accesoElemento('resultado').innerHTML = "";
}






