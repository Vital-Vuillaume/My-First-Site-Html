//pour que le site soit sécurisé

if (window.location.protocol != "https:") {
   window.location.protocol="https:";
}

//pour voir si la console fonctionne

console.log("Bonjour la console");

//musique 

var audio = document.getElementById("my-audio");
var pauseBtn = document.getElementById("pause-btn");

pauseBtn.addEventListener("click", function() {

    if (audio.paused) {
        audio.play();
        pauseBtn.style.backgroundImage = "url(son-activer.png)";
    } else {
        audio.pause();
        pauseBtn.style.backgroundImage = "url(son-désactiver.png)";
    }
});

//barre de scroll

const nav = document.querySelector('nav');

window.addEventListener('scroll',() => {

    if (window.scrollY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-80px";
    }
});