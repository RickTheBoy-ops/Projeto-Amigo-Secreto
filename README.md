# Sorteio de Amigos Secretos

Este é um projeto simples de sorteio de amigo secreto, onde você pode adicionar amigos à lista e sortear quem vai tirar quem.

## Tabela de Conteúdos
1. [Instalação](#instalação)
2. [Uso](#uso)
3. [Estrutura do Código](#estrutura-do-código)
   - [HTML](#html)
   - [CSS](#css)
   - [JavaScript](#javascript)
4. [Licença](#licença)
5. [Contato](#contato)

## Instalação

1. Clone o repositório:

2. Navegue até o diretório do projeto:

cd nome-do-repositorio

3. Abra o arquivo index.html em um navegador para rodar o projeto.

Uso

Abra o arquivo index.html no seu navegador.
1. Digite o nome de um amigo no campo de entrada e clique em "Adicionar Amigo" para adicioná-lo à lista.
2. Após adicionar os amigos, clique no botão "Sortear Amigo Secreto" para realizar o sorteio.
3. O resultado será exibido abaixo.

Estrutura do Código
HTML
O HTML do projeto é simples, com uma estrutura de layout básico e um campo de entrada para adicionar os nomes dos amigos. O botão de sorteio é exibido abaixo da lista de amigos, e o resultado do sorteio será mostrado em uma lista abaixo.

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amigo Secreto</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700;900&display=swap" rel="stylesheet">
</head>

<body>
    <main class="main-content">
        <header class="header-banner">
            <h1 class="main-title">Amigo Secreto</h1>
            <img src="assets/amigo-secreto.png" alt="Imagem representativa de amigo secreto">
        </header>
        
        <section class="input-section">
            <h2 class="section-title">Digite o nome dos seus amigos</h2>
            <div class="input-wrapper">
                <input type="text" id="amigo" class="input-name" placeholder="Digite um nome">
                <button class="button-add" onclick="adicionarAmigo()">Adicionar</button>
            </div>
           
            <ul id="listaAmigos" class="name-list"></ul>

            <div class="button-container">
                <button class="button-draw" onclick="sortearAmigo()">
                    <img src="assets/play_circle_outline.png" alt="Ícone para sortear">
                    Sortear amigo
                </button>
            </div>

            <ul id="resultado" class="result-list" aria-live="polite"></ul>
        </section>
    </main>

    <script src="app.js" defer></script>
</body>
</html>

CSS
O projeto utiliza um estilo moderno e limpo, com cores vibrantes e botões interativos. Aqui estão os principais detalhes de estilo:

Variáveis de Cores

:root {
    --color-primary: #4B69FD;
    --color-secondary: #FFF9EB;
    --color-tertiary: #C4C4C4;
    --color-button: #fe652b;
    --color-button-hover: #e55720;
    --color-text: #444444;
    --color-white: #FFFFFF;
}



Estilos Gerais
O layout é centralizado e flexível, com um banner no topo e uma seção de entrada logo abaixo:

body {
    height: 100vh;
    background-color: var(--color-primary);
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}


body {
    height: 100vh;
    background-color: var(--color-primary);
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}


Estilos de Botão e Listas
Os botões têm um design moderno e interativo, com uma cor de fundo que muda ao passar o mouse:

button {
    padding: 15px 30px;
    font-family: "Inter", sans-serif;
    font-size: 16px;
    border: 2px solid #000;
    border-radius: 25px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
}

.button-add {
    background-color: var(--color-tertiary);
    color: var(--color-text);
    border-radius: 0 25px 25px 0;
}

.button-add:hover {
    background-color: #a1a1a1;
}

As listas de amigos e resultados têm um estilo claro e fácil de ler:

ul {
    list-style-type: none;
    color: var(--color-text);
    font-family: "Inter", sans-serif;
    font-size: 18px;
    margin: 20px 0;
}

.result-list {
    margin-top: 15px;
    color: #05DF05;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
}

JavaScript
O código JavaScript é responsável por adicionar amigos à lista, realizar o sorteio de amigo secreto e exibir o resultado no HTML.

Função: adicionarAmigo

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
    atualizarListaAmigos();
    input.value = "";
}

Função: atualizarListaAmigos

function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}


Função: sortearAmigo

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


Função: exibirResultado

function exibirResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";

    for (const [amigo, sorteado] of Object.entries(resultado)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} tirou ${sorteado}`;
        listaResultado.appendChild(li);
    }
}


Licença
Este projeto está licenciado sob a licença XYZ - veja o arquivo LICENSE para mais detalhes.

Contato
Se você tiver alguma dúvida, entre em contato:

Nome: Erick Vinicius.
Email: erickvinicius965@gmail.com
GitHub: @RickTheBoy-ops

