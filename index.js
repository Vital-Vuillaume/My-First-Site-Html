//if (window.location.protocol != "https:") {
//   window.location.protocol="https:";
//}

console.log("Bonjour la console");



const nav = document.querySelector('nav');

window.addEventListener('scroll',() => {

    if (window.scrollY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-80px";
    }
});