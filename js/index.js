const logoWords = document.querySelector('.words-box>img')
let logoWordsLoaded = false
let indexLoaded = false

const intro = document.getElementById('intro')
console.log(indexLoaded);
window.addEventListener("load", function (event) {
    indexLoaded = true
    console.log(indexLoaded);
});

logoWords.addEventListener('animationend', (event) => {

    logoWordsLoaded = true

    if (logoWordsLoaded && indexLoaded) {
        intro.classList.add('noact')
    }

});



let scrollBtn = document.querySelector('.scroll-btn')
let scrollIntro = document.querySelector('.intro')

scrollBtn.addEventListener('click', function (e) {
    e.preventDefault();

    window.scroll({
        top: scrollIntro.offsetTop,
        left: 0,
        behavior: 'smooth'
    })
})



let idxHeader = document.querySelector('header');
let idxSection = document.querySelector('#index');

if (window.innerWidth <= 468) {
    idxSection.prepend(idxHeader);
} else {
    window.onscroll = function () {
        let roll = document.documentElement.scrollTop || document.body.scrollTop
        if (roll >= (scrollIntro.offsetTop)) {
            idxHeader.style.top = '0px'
        }
        else {
            idxHeader.style.top = '-75px'
        }
    }
}