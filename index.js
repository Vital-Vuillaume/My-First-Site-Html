alert("Bienvenue sur le site de Vital.");

console.log("Bonjour la console");

let prenom = "Vital";

console.log(prenom);

let number = 24 

console.log(number);

let objet = {
    prenom: "Vital",
    age: 33,
    ville: "Bordeaux"
}

console.log(objet);

const nav = document.querySelector('nav');

window.addEventListener('scroll',() => {
    console.log(window.scrollY);

    if (window.scrollY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-90px";
    }
});
