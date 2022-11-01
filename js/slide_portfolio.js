let card = document.querySelectorAll(".card")
let is = document.querySelectorAll(".cualestamos i")

let cards = 1

function slidePortfolio() {
    cards ++
    if(cards > 3){
        cards = 1
    }
    is[0].addEventListener("click", function() {
        cards = 1
        
        return card[0].style.display = "block",
        card[1].style.display = "none",
        card[2].style.display = "none",
        is[0].style.border = "1px solid #808080",
        is[1].style.border = "none",
        is[2].style.border = "none"
    })
    is[1].addEventListener("click", function() {
        cards = 2
        
        return card[1].style.display = "block",
        card[0].style.display = "none",
        card[2].style.display = "none",
        is[1].style.border = "1px solid #808080",
        is[0].style.border = "none",
        is[2].style.border = "none"
    })
    is[2].addEventListener("click", function() {
        cards = 3
        
        return card[2].style.display = "block",
        card[0].style.display = "none",
        card[1].style.display = "none",
        is[2].style.border = "1px solid #808080",
        is[0].style.border = "none",
        is[1].style.border = "none"
    })
    if (cards == 1){
        return card[0].style.display = "block",
        card[1].style.display = "none",
        card[2].style.display = "none",
        is[0].style.border = "1px solid #808080",
        is[1].style.border = "none",
        is[2].style.border = "none"
    } else if (cards == 2){
        return card[1].style.display = "block",
        card[0].style.display = "none",
        card[2].style.display = "none",
        is[1].style.border = "1px solid #808080",
        is[0].style.border = "none",
        is[2].style.border = "none"
    } else if (cards == 3){
        return card[2].style.display = "block",
        card[0].style.display = "none",
        card[1].style.display = "none",
        is[2].style.border = "1px solid #808080",
        is[0].style.border = "none",
        is[1].style.border = "none"
    }
}
setInterval(slidePortfolio,2000)