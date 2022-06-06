var sliderFactory = {
    getNewsSlider: function(){
        var newSlider = {
            imagesUrl: ['img/img_a.png', 'img/img_b.jpg', 'img/img_c.jpg'],
            currentImgIndex: 0,
            btnShowPrev: null, // document.querySelectory('slidePrev'),
            btnShowNext: null, //document.querySelectory('slideNext'),
            slideImg: null, //document.querySelectory('slideImg'),
            init: function (elId) {
                var that = this;
                var element = document.querySelector('#' + elId);
                this.btnShowPrev = element.querySelector('.slidePrev');
                this.btnShowNext = element.querySelector('.slideNext');
                this.slideImg = element.querySelector('.slideImg');
                this.slideImg.src = this.imagesUrl[this.currentImgIndex];
                //subsride to events
                this.btnShowPrev.addEventListener('click', function (x) {
                    that.onShowBtnPrevClick(x)
                });
                this.btnShowNext.addEventListener("click", function (x) {
                    that.onShowBtnNextClick(x)
                });
            },
            onShowBtnPrevClick: function (x) {
                this.currentImgIndex--;
                this.slideImg.src = this.imagesUrl[this.currentImgIndex];
                if (this.currentImgIndex < 0) {
                    this.currentImgIndex = this.imagesUrl.length - 1;
                    this.slideImg.src = this.imagesUrl[this.currentImgIndex];
                }
            },

            onShowBtnNextClick: function (x) {
                this.currentImgIndex++;
                this.slideImg.src = this.imagesUrl[this.currentImgIndex];
                if (this.currentImgIndex > this.imagesUrl.length - 1) {
                    this.currentImgIndex = 0;
                    this.slideImg.src = this.imagesUrl[this.currentImgIndex];
                }
            }

        }
        return newSlider;
    }
};

