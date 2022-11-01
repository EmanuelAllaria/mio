let icon_menu = document.querySelector("#icon_menu")
let icon_cierre_menu = document.querySelector("#icon_cierre_menu")

let comillaJodida = document.querySelector(".comilla1")

let nav = document.querySelector(".nav")
let redes = document.querySelector(".redes_nav")

let abierto = false

icon_menu.addEventListener("click", function() {
    abierto = true

    if (!abierto) {
        return icon_menu.style.display = "block",
        icon_cierre_menu.style.display = "none",
        nav.style.display = "none",
        comillaJodida.style.display = "block"
    } else {
        return icon_menu.style.display = "none",
        icon_cierre_menu.style.display = "block",
        nav.style.display = "flex",
        redes.style.display = "block",
        comillaJodida.style.display = "none"
    }
})

icon_cierre_menu.addEventListener("click", function() {
    abierto = false


    if (!abierto) {
        return icon_menu.style.display = "block",
        icon_cierre_menu.style.display = "none",
        nav.style.display = "none",
        comillaJodida.style.display = "block"
    } else {
        return icon_menu.style.display = "none",
        icon_cierre_menu.style.display = "block",
        nav.style.display = "flex",
        redes.style.display = "block",
        comillaJodida.style.display = "none"
    }
})