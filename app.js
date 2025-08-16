// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let amigo = document.querySelector('#amigo').value;

    if (!amigo.trim()){
        alert('Por favor, inserte un nombre.');
    }
    else{
        amigos.push(amigo)
        document.querySelector('#amigo').value = "";
        actualizarListaAmigosHTML();
    }
    document.querySelector('#amigo').focus();
    console.log(amigo);
    console.log(amigos);
}

function actualizarListaAmigosHTML(){
    let listaHTML = document.querySelector('#listaAmigos');

    // Limpiar la lista antes de agregar nuevos elementos
    listaHTML.innerHTML = "";

    // Recorrer el arreglo y agregar cada amigo como <li>
    for (let i = 0; i < amigos.length; i++) {
        listaHTML.innerHTML += `<li>${amigos[i]}</li>`;
    }

    console.log(listaHTML.innerHTML);

}

function sortearAmigo() {
    if (amigos.length > 0){
        let indiceAmigoSorteado = Math.floor(Math.random() * amigos.length);
        let nombreAmigoSorteado = amigos[indiceAmigoSorteado];

        console.log(nombreAmigoSorteado);

        let resultado = document.querySelector('#resultado');

        resultado.innerHTML = `El amigo sorteado es: ${nombreAmigoSorteado}`;
    }
    
}