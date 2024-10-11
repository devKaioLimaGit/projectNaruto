import { bancoPersonagem } from './bancoDeDadosPersonagens.js';

(() => {
    const buttonKakashi = document.querySelector("#kakashi-hatake");
    const buttonSakura = document.querySelector("#sakura-haruno");
    const buttonSasuke = document.querySelector("#sasuke-uchiha");
    const buttonNaruto = document.querySelector("#naruto-uzumaki");
    const buttonItachi = document.querySelector("#itachi-uchiha");
    const buttonMadara = document.querySelector("#madara-uchiha");
    const container = document.querySelector("#container-apresentação");

    function criaMolde(imgSrc, nome, descrição) {
        const div = document.createElement('div');
        div.classList.add("card-personagem");

        const carregaImagem = new Promise((resolve, reject) => {
            const imagem = new Image()
            imagem.src = imgSrc;
            imagem.onload = () => {
                resolve(div.innerHTML = `<img class="imagem-personagem" src="${imgSrc}" alt="imagem do personagem de naruto chamado ${nome}">`);
            };
            imagem.onerror = reject;
        });

        // Depois que a imagem estiver carregada, adicione os textos
        carregaImagem.then(() => {
            div.innerHTML += `<h2 class="nome-personagem">${nome}</h2><p class="descrição-personagem">${descrição}</p>`;
            container.appendChild(div);
        }).catch((error) => {
            console.error('Erro ao carregar imagem:', error);
        });


    }


    buttonKakashi.addEventListener("click", (e) => {
        const nomePersoangem = e.target.id.replace("-", " ");
        removerCardsAntigos();
        const audio = new Audio('assets/audio/Kakashi Hatake.mp3');
        audio.play();
        const filtro = bancoPersonagem.filter((item) => item.nome.toLowerCase() === nomePersoangem);
        filtro.forEach(item => criaMolde(item.img, item.nome, item.descrição));
    });

    buttonSakura.addEventListener("click", (e) => {
        const nomePersoangem = e.target.id.replace("-", " ");
        removerCardsAntigos();
        const audio = new Audio('assets/audio/Sakura Haruno.mp3');
        audio.play();
        const filtro = bancoPersonagem.filter((item) => item.nome.toLowerCase() === nomePersoangem);
        filtro.forEach(item => criaMolde(item.img, item.nome, item.descrição));
    });

    buttonSasuke.addEventListener("click", (e) => {
        const nomePersoangem = e.target.id.replace("-", " ");
        removerCardsAntigos();
        const audio = new Audio('assets/audio/Sasuke Uchiha.mp3');
        audio.play();
        const filtro = bancoPersonagem.filter((item) => item.nome.toLowerCase() === nomePersoangem);
        filtro.forEach(item => criaMolde(item.img, item.nome, item.descrição));
    });

    buttonNaruto.addEventListener("click", (e) => {
        const nomePersoangem = e.target.id.replace("-", " ");
        removerCardsAntigos();
        const audio = new Audio('assets/audio/Naruto Uzumaki.mp3');
        audio.play();
        const filtro = bancoPersonagem.filter((item) => item.nome.toLowerCase() === nomePersoangem);
        filtro.forEach(item => criaMolde(item.img, item.nome, item.descrição));
    });

    buttonItachi.addEventListener("click", (e) => {
        const nomePersoangem = e.target.id.replace("-", " ");
        removerCardsAntigos();
        const audio = new Audio('assets/audio/Itachi Uchiha.mp3');
        audio.play();
        const filtro = bancoPersonagem.filter((item) => item.nome.toLowerCase() === nomePersoangem);
        filtro.forEach(item => criaMolde(item.img, item.nome, item.descrição));
    });

    buttonMadara.addEventListener("click", (e) => {
        const nomePersoangem = e.target.id.replace("-", " ");
        removerCardsAntigos();
        const audio = new Audio('assets/audio/Madara Uchiha.mp3');
        audio.play();
        const filtro = bancoPersonagem.filter((item) => item.nome.toLowerCase() === nomePersoangem);
        filtro.forEach(item => criaMolde(item.img, item.nome, item.descrição));
    });


    function removerCardsAntigos() {
        const cardsAntigos = document.querySelectorAll(".card-personagem");
        cardsAntigos.forEach(card => {
            card.parentNode.removeChild(card);
        });
    };
})();



