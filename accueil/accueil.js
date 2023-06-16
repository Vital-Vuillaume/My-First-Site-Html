//pour que le site soit securise

/*if (window.location.protocol != "https:") {
   window.location.protocol="https:";
}*/

//pour voir si la console fonctionne

console.log("Bonjour la console");

//fcjgbusfdvbljvrbwlrvbresjbrhjes

let Easteregg = "ESSAYE DE TROUVER LE PLUS D'EASTEREGGS POSSIBLE!" 

let Vital = "Vital est beaucoup trop intelligent. Il a 300 de QI"

//barre de scroll

const nav = document.querySelector('nav');

window.addEventListener('scroll',() => {

    if (window.scrollY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-80px";
    }
});