//if (window.location.protocol != "https:") {
//   window.location.protocol="https:";
//}

console.log("Bonjour la console");

let Easteregg = "Bien jouer mais ce n'est que le début de l'énigme!                    indice: bouton Xbox Series X"

let Vital = "Vital est beaucoup trop intelligent. il a 300 de Q1"

const nav = document.querySelector('nav');

window.addEventListener('scroll',() => {

    if (window.scrollY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-80px";
    }
});