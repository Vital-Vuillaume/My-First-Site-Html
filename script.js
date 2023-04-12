//pour que le site soit sécurisé

if (window.location.protocol != "https:") {
   window.location.protocol="https:";
}

//pour voir si la console fonctionne

console.log("Bonjour la console");

//barre de scroll

const nav = document.querySelector('nav');

window.addEventListener('scroll',() => {

    if (window.scrollY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-80px";
    }
});