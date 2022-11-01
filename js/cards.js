let portfolio = {
    nestor: {
        nombre: "Nestor Martinez",
        src: "img/foto_nestor.jpeg",
        hechoCon: "html css js",
        link: "https://nestormartinez1.com"
    },
    mecanica: {
        nombre: "Mecanica Dental",
        src: "img/mecanica-dental.jpeg",
        hechoCon: "html css js",
        link: "https://mecanicadental.ml"
    },
    typing: {
        nombre: "Typing Timing",
        src: "img/typing-timing.jpg",
        hechoCon: "html css js",
        link: "https://desarrolladorweb.ml"
    }
}

let miniProyectos = {}

function agregarPortfolio() {
    let card = document.querySelectorAll(".card")
    card[0].innerHTML = `
    <div class="img_card">
        <img src="${portfolio.nestor.src}" alt="Página de ${portfolio.nestor.nombre}">
    </div>
    <div class="p_card"><p>${portfolio.nestor.hechoCon}</p></div>
    <div class="titulo_card">
        <h2>${portfolio.nestor.nombre}</h2>
        <a target="_blank" href="${portfolio.nestor.link}">Ver ~~></a>
    </div>`

    card[1].innerHTML = `
    <div class="img_card">
        <img src="${portfolio.mecanica.src}" alt="Página de ${portfolio.mecanica.nombre}">
    </div>
    <div class="p_card"><p>${portfolio.mecanica.hechoCon}</p></div>
    <div class="titulo_card">
        <h2>${portfolio.mecanica.nombre}</h2>
        <a target="_blank" href="${portfolio.mecanica.link}">Ver ~~></a>
    </div>`

    card[2].innerHTML = `
    <div class="img_card">
        <img src="${portfolio.typing.src}" alt="Página de ${portfolio.typing.nombre}">
    </div>
    <div class="p_card"><p>${portfolio.typing.hechoCon}</p></div>
    <div class="titulo_card">
        <h2>${portfolio.typing.nombre}</h2>
        <a target="_blank" href="${portfolio.typing.link}">Ver ~~></a>
    </div>`
}
agregarPortfolio()

function agregarMiniProyects() {
    let cardMini = document.querySelectorAll(".cardMini")
    cardMini[0].innerHTML = `
    <div class="p_card"><p>${miniProyectos}</p></div>
    <div class="titulo_card">
        <h2>${miniProyectos}</h2>
        <a href="${miniProyectos}">Ver ~~></a>
    </div>`
}