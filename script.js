    var typed = new Typed("#multiple-text", {
    strings: ["Tutoriais", "Sobre Desenvolvimento Web", "Ferramentas"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
}) 

 /* var trocat = 0;
var txt = ["tutoriais", "oi", "text2", "txt3"];
var spantext = document.querySelector("#text1");
setInterval(() => {
    trocat == 0 ? trocat = 1 : trocat =  0
    spantext.innerHTML = txt[trocat]    

}, 5000) */

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    var windowheight = window.innerHeight;
    var revealtop;
    var revealpoint = 150;

    for (var i = 0; i < reveals.length; i++) {
        revealtop = reveals[i].getBoundingClientRect().top;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }

}
