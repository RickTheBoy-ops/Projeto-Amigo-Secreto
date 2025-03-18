const amigos = [];

// Adicionar amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já está na lista.");
        return;
    }

    amigos.push(nome);
    atualizarListaAmigos(); // <-- Linha adicionada
    input.value = "";
}

// Atualizar a lista de amigos no HTML
function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Sortear amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário pelo menos 2 pessoas para realizar o sorteio.");
        return;
    }

    const amigosCopiados = [...amigos];
    const resultado = {};

    amigos.forEach((amigo) => {
        let sorteado;
        do {
            sorteado = amigosCopiados[Math.floor(Math.random() * amigosCopiados.length)];
        } while (sorteado === amigo);

        resultado[amigo] = sorteado;
        amigosCopiados.splice(amigosCopiados.indexOf(sorteado), 1);
    });

    exibirResultado(resultado);
}

// Exibir resultado no HTML
function exibirResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";

    for (const [amigo, sorteado] of Object.entries(resultado)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} tirou ${sorteado}`;
        listaResultado.appendChild(li);
    }
}
