
var swiper = new Swiper(".mySwiper", {
    //循環播放
    loop: true,

    //淡出效果
    effect: "fade",

    //進度條＆點點相關
    pagination: {
        el: ".swiper-pagination",
        clickable: true, renderBullet: function (i, className) {
            return `
         <button class="${className}">
        <div class="progress">
            <div class="line-origin">
                <div class="fill-bar"></div>
            </div>
            <span></span>
        </div>
      </button>
            `;
        }
    },

    //自動播放
    autoplay: {
        delay: 3700,
        disableOnInteraction: false,
    },

    //前後換頁
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});


const swiperJs = document.querySelector('.swiper-wrapper')
const gridbox = document.querySelector('.gridbox')
const leftImg = document.querySelector('.left-side')
const rightTopImg = document.querySelector('.right-side-top')
const rightBottomImg = document.querySelector('.right-side-bottom')

swiperJs.addEventListener('transitionstart', function () {

    if (gridbox.classList.contains('swiper-slide-active')) {
        leftImg.classList.add('Ltrans')
        rightTopImg.classList.add('RTtrans')
        rightBottomImg.classList.add('RBtrans')
    } else {
        leftImg.classList.remove('Ltrans')
        rightTopImg.classList.remove('RTtrans')
        rightBottomImg.classList.remove('RBtrans')
    }

})



//點點動畫相關判斷(最後一個點不出現進度條)
const Swiperbullet = document.querySelectorAll('.swiper-pagination-bullet')
console.log(Swiperbullet);

Swiperbullet.forEach((element,index)=>{
    if(index == Swiperbullet.length - 1){
        element.innerHTML = `
        <div class="progress">
        <div class="line-origin noShow">
            <div class="fill-bar"></div>
        </div>
        <span></span>
    </div>
        `
    }
})