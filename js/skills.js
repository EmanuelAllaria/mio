let skills = {
    lenguajes: "JavaScript Python <br> PHP Rubí",
    bd: "MySQL",
    otros: "HTML CSS SCSS",
    tools: "VSCode Figma <br> Git GitHub <br> Font Awesome"
}

function agregarSkills() {
    let skill = document.querySelectorAll(".skill")
    skill[0].innerHTML = `
    <h2>Lenguajes</h2>
    <p>${skills.lenguajes}</p>`

    skill[1].innerHTML = `
    <h2>Bases de Datos</h2>
    <p>${skills.bd}</p>`
    
    skill[2].innerHTML = `
    <h2>Otros</h2>
    <p>${skills.otros}</p>`
    
    skill[3].innerHTML = `
    <h2>Tools</h2>
    <p>${skills.tools}</p>`
}


agregarSkills()