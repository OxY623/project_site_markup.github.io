var slider1= sliderFactory.getNewsSlider();
var slider2= sliderFactory.getNewsSlider();
slider1.init('sliderA');
slider2.init('sliderB');
/*

//find elements
const btnShowPrev = document.getElementById('slidePrev');
const btnShowNext = document.getElementById('slideNext');
var slideImg = document.getElementById('slideImg');
var currentImgIndex = 0;
//create imagess array
var imagesUrl = ['img/img_a.png', 'img/img_b.jpg', 'img/img_c.jpg'];

slideImg.src = imagesUrl[currentImgIndex];
//subsride to events
btnShowPrev.addEventListener('click', onShowBtnPrevClick);
btnShowNext.addEventListener("click", onShowBtnNextClick);

//functions definitions
function onShowBtnPrevClick() {
    currentImgIndex--;
    slideImg.src = imagesUrl[currentImgIndex];
    if (currentImgIndex < 0) {
        currentImgIndex = imagesUrl.length -1;
        slideImg.src = imagesUrl[currentImgIndex];
    }
}

function onShowBtnNextClick() {
    currentImgIndex++;
    slideImg.src = imagesUrl[currentImgIndex];
    if (currentImgIndex > imagesUrl.length - 1) {
        currentImgIndex = 0;
        slideImg.src = imagesUrl[currentImgIndex];
    }
}


*/