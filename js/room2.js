window.addEventListener('load', function () {
    let ww = window.innerWidth

    var swiper = new Swiper(".mySwiper", {
        //循環播放
        loop: true,

        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,

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

        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 45,
            }
        }

    });

    //網頁寬度小於768以下的時候不顯示slide文字說明

    const slideSpanLoad = document.querySelectorAll('.swiper-slide>span')
    if(ww < 769){
        slideSpanLoad.forEach(e => {
            e.classList.add('noShow')
        })
    }


    //最後的點點不要出現讀取條
    const Swiperbullet = document.querySelectorAll('.swiper-pagination-bullet')

    Swiperbullet.forEach((element, index) => {
        if (index == Swiperbullet.length - 1) {
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
})


window.onresize = function () {
    console.log('resize!');
    let ww = window.innerWidth
    const slideSpanLoad = document.querySelectorAll('.swiper-slide>span')
    if (ww < 769) {
        slideSpanLoad.forEach(e => {
            e.classList.add('noShow')
        })
    } else {
        slideSpanLoad.forEach(e => {
            e.classList.remove('noShow')
        })
    }
}
