// window.addEventListener('resize', changeTravelMap())

window.onresize = function(){
    let ww = window.innerWidth

    const travelMapPC = document.querySelector('img[usemap="#image-map"]')
    const travelMapMobile = document.querySelector('img[usemap="#image-map-phone"]')
    if (ww >= 769) {
        travelMapMobile.classList.add('hidden')
        travelMapMobile.classList.remove('openblock')
        travelMapPC.classList.add('openblock')
        travelMapPC.classList.remove('hidden')
    } else {
        travelMapMobile.classList.add('openblock')
        travelMapMobile.classList.remove('hidden')
        travelMapPC.classList.add('hidden')
        travelMapPC.classList.remove('openblock')
    }
}

function changeTravelMap() {
    let ww = window.innerWidth

    const travelMapPC = document.querySelector('img[usemap="#image-map"]')
    const travelMapMobile = document.querySelector('img[usemap="#image-map-phone"]')
    if (ww >= 769) {
        travelMapMobile.classList.add('hidden')
        travelMapMobile.classList.remove('openblock')
        travelMapPC.classList.add('openblock')
        travelMapPC.classList.remove('hidden')
    } else {
        travelMapMobile.classList.add('openblock')
        travelMapMobile.classList.remove('hidden')
        travelMapPC.classList.add('hidden')
        travelMapPC.classList.remove('openblock')
    }
}
