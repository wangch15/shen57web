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

const scrollBtn = document.querySelector('.scroll-btn')
const scrollIntro = document.querySelector('.intro')

scrollBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scroll({
        top: scrollIntro.offsetTop,
        left: 0,
        behavior: 'smooth'
    })
})