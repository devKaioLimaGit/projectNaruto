import { bancoPersonagem } from './dbCharacter.js';

(() => {
    const buttonKakashi = document.querySelector("#kakashi-hatake");
    const buttonSakura = document.querySelector("#sakura-haruno");
    const buttonSasuke = document.querySelector("#sasuke-uchiha");
    const buttonNaruto = document.querySelector("#naruto-uzumaki");
    const buttonItachi = document.querySelector("#itachi-uchiha");
    const buttonMadara = document.querySelector("#madara-uchiha");
    const container = document.querySelector("#container-presentation");

    function createTemplate(imgSrc, name, description) {
        const div = document.createElement('div');
        div.classList.add("card-character");

        const loadImage = new Promise((resolve, reject) => {
            const image = new Image();
            image.src = imgSrc;
            image.onload = () => {
                resolve(div.innerHTML = `<img class="image-character" src="${imgSrc}" alt="Image of the Naruto character named ${name}">`);
            };
            image.onerror = reject;
        });

        // After the image has loaded, add the texts
        loadImage.then(() => {
            div.innerHTML += `<h2 class="name-character">${name}</h2><p class="description-character">${description}</p>`;
            container.appendChild(div);
        }).catch((error) => {
            console.error('Error loading image:', error);
        });
    }

    buttonKakashi.addEventListener("click", (e) => {
        const characterName = e.target.id.replace("-", " ");
        removeOldCards();
        const audio = new Audio('assets/audio/Kakashi Hatake.mp3');
        audio.play();
        const filter = bancoPersonagem.filter((item) => item.nome.toLowerCase() === characterName);
        filter.forEach(item => createTemplate(item.img, item.nome, item.descrição));
    });

    buttonSakura.addEventListener("click", (e) => {
        const characterName = e.target.id.replace("-", " ");
        removeOldCards();
        const audio = new Audio('assets/audio/Sakura Haruno.mp3');
        audio.play();
        const filter = bancoPersonagem.filter((item) => item.nome.toLowerCase() === characterName);
        filter.forEach(item => createTemplate(item.img, item.nome, item.descrição));
    });

    buttonSasuke.addEventListener("click", (e) => {
        const characterName = e.target.id.replace("-", " ");
        removeOldCards();
        const audio = new Audio('assets/audio/Sasuke Uchiha.mp3');
        audio.play();
        const filter = bancoPersonagem.filter((item) => item.nome.toLowerCase() === characterName);
        filter.forEach(item => createTemplate(item.img, item.nome, item.descrição));
    });

    buttonNaruto.addEventListener("click", (e) => {
        const characterName = e.target.id.replace("-", " ");
        removeOldCards();
        const audio = new Audio('assets/audio/Naruto Uzumaki.mp3');
        audio.play();
        const filter = bancoPersonagem.filter((item) => item.nome.toLowerCase() === characterName);
        filter.forEach(item => createTemplate(item.img, item.nome, item.descrição));
    });

    buttonItachi.addEventListener("click", (e) => {
        const characterName = e.target.id.replace("-", " ");
        removeOldCards();
        const audio = new Audio('assets/audio/Itachi Uchiha.mp3');
        audio.play();
        const filter = bancoPersonagem.filter((item) => item.nome.toLowerCase() === characterName);
        filter.forEach(item => createTemplate(item.img, item.nome, item.descrição));
    });

    buttonMadara.addEventListener("click", (e) => {
        const characterName = e.target.id.replace("-", " ");
        removeOldCards();
        const audio = new Audio('assets/audio/Madara Uchiha.mp3');
        audio.play();
        const filter = bancoPersonagem.filter((item) => item.nome.toLowerCase() === characterName);
        filter.forEach(item => createTemplate(item.img, item.nome, item.descrição));
    });

    function removeOldCards() {
        const oldCards = document.querySelectorAll(".card-character");
        oldCards.forEach(card => {
            card.parentNode.removeChild(card);
        });
    }
})();
