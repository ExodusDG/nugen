particlesJS.load('particles-js', 'js/particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
});

particlesJS.load('particles-js-2', 'js/particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
});

particlesJS.load('particles-js-3', 'js/particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
});

$("html, body").animate({ scrollTop: 0 }, "fast")

$('.specialCard').hover(function () {
    $('.specialCard').removeClass('spCardActive')
    $(this).addClass('spCardActive')
}, function () {

})


var $page = $('html, body');
$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);
    setTimeout(() => {
        allowScroll()
    }, 600);
    return false;
}); //плавный скролл

var swiper = new Swiper(".swiper", {
    direction: "vertical",
    loop: true,
    autoplay: {
        delay: 2000,
    },
    slidesPerView: 2,
    spaceBetween: 40,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$.fn.isInViewport2 = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height() - 200;

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

var leftSide = true;
var rightSide = false;

/* STEP */

$(window).on('resize scroll', function () {

    if ($(this).scrollTop() > 50) {
        $('.menu').addClass('menuFixed')
    } else {
        $('.menu').removeClass('menuFixed')
    }

    if ($('.step-1').isInViewport()) {
        setTimeout(() => {
            $('.step-1').addClass('stepActive')
            $('.stepsLineCenter').attr('style', 'height: 33%')
        }, 500);
    }

    if ($('.step-2').isInViewport()) {
        setTimeout(() => {
            $('.step-2').addClass('stepActive')
            $('.stepsLineCenter').attr('style', 'height: 66%')
        }, 500);
    }

    if ($('.step-3').isInViewport()) {
        setTimeout(() => {
            $('.step-3').addClass('stepActive')
            $('.stepsLineCenter').attr('style', 'height: 100%')
        }, 500);
    }

    if ($('.sliderText_2').isInViewport2()) {
        if (rightSide == true) {
            return false;
        } else {
            blockScroll()
            vertScroll()
            vertScrollFirefox()
        }
    }

    if ($('.special').isInViewport()) {
        blackTheme()
    } else {
        whiteTheme()
    }


    if ($('.life').isInViewport()) {
        blackTheme()
    } else {

    }

    if ($('.stores').isInViewport()) {
        blackTheme()
    } else {

    }

});

function blockScroll() {
    $('body').addClass('scrollDisabled')
}
function allowScroll() {
    $('body').removeClass('scrollDisabled')
}

function vertScrollFirefox() {
    window.addEventListener("wheel", function (e) {
        wDelta = e.wheelDelta < 0 ? 'down' : 'up';
        if (wDelta == 'down') {
            if (rightSide == true) {
                allowScroll()
            } else {
                scrollRight()
            }
        }
    }, { passive: false });
}


function vertScroll() {
    window.addEventListener("mousewheel", function (e) {
        wDelta = e.wheelDelta < 0 ? 'down' : 'up';
        if (wDelta == 'down') {
            if (rightSide == true) {
                allowScroll()
            } else {
                scrollRight()
            }
        }
    }, { passive: false });
}

var screenWidth = $(window).width()
var maxWidth = 0;

$.each($('.sliderItem'), function (key, value) {
    maxWidth = maxWidth + $(this).width() + 100
})





function scrollRight() {
    var currentTranslate = Number($('.worldsSliderWrapper').attr('style').replace('transform: translateX(-', '').replace('px);', ''))
    var newTranslate = currentTranslate + 30;

    if (newTranslate > (maxWidth - screenWidth)) {
        rightSide = true;
        leftSide = false;
        return false;
    } else {
        $('.worldsSliderWrapper').attr('style', 'transform: translateX(-' + newTranslate + 'px);')
    }
}


function blackTheme() {
    $('.sliderItemBlock').addClass('sliderItemBlack')
    $('.world').addClass('worldBlack')
    $('.life').addClass('worldBlack')
    $('.stores').addClass('worldBlack')
    $('.menu').addClass('menuBlack')
    $('.special').addClass('specialBlack')

}

function whiteTheme() {
    $('.sliderItemBlock').removeClass('sliderItemBlack')
    $('.world').removeClass('worldBlack')
    $('.menu').removeClass('menuBlack')
    $('.special').removeClass('specialBlack')
}

new Skroll()
    .add(".headerText h1", {
        delay: 500,
        duration: 1000,
        animation: "slideInLeft"
    })
    .init();

new Skroll()
    .add(".headerText p", {
        delay: 700,
        duration: 1000,
        animation: "slideInLeft"
    })
    .init();

new Skroll()
    .add(".siteTitle p", {
        delay: 300,
        duration: 500,
        animation: "fadeInDown"
    })
    .init();

new Skroll()
    .add(".siteTitle h1", {
        delay: 100,
        duration: 500,
        animation: "fadeInDown"
    })
    .init();

new Skroll()
    .add(".nmvcText-1", {
        delay: 100,
        duration: 500,
        animation: "fadeInDown"
    })
    .init();

new Skroll()
    .add(".nmvcText-2", {
        delay: 200,
        duration: 500,
        animation: "fadeInDown"
    })
    .init();

new Skroll()
    .add(".nmvcText-3", {
        delay: 300,
        duration: 500,
        animation: "fadeInDown"
    })
    .init();

new Skroll()
    .add(".plotTable", {
        delay: 300,
        duration: 700,
        animation: "slideInLeft"
    })
    .init();


new Skroll()
    .add(".plotImage", {
        delay: 300,
        duration: 700,
        animation: "slideInRight"
    })
    .init();



new Skroll()
    .add(".specialCard-01", {
        delay: 100,
        duration: 500,
        animation: "fadeInDown"
    })
    .init();


new Skroll()
    .add(".specialCard-02", {
        delay: 300,
        duration: 500,
        animation: "fadeInDown"
    })
    .init();

new Skroll()
    .add(".specialCard-03", {
        delay: 500,
        duration: 500,
        animation: "fadeInDown"
    })
    .init();

new Skroll()
    .add(".specialCard-04", {
        delay: 700,
        duration: 500,
        animation: "fadeInDown"
    })
    .init();

new Skroll()
    .add(".quoteTitle-1", {
        delay: 100,
        duration: 900,
        animation: "slideInLeft"
    })
    .init();


new Skroll()
    .add(".quoteTitle-2", {
        delay: 300,
        duration: 900,
        animation: "slideInRight"
    })
    .init();

new Skroll()
    .add(".quoteTextBottom", {
        delay: 600,
        duration: 400,
        animation: "fadeInUp"
    })
    .init();


new Skroll()
    .add(".goldHeader img", {
        delay: 100,
        duration: 900,
        animation: "slideInLeft"
    })
    .init();

new Skroll()
    .add(".goldHeaderText", {
        delay: 100,
        duration: 900,
        animation: "slideInRight"
    })
    .init();


new Skroll()
    .add(".gold-item-1", {
        delay: 200,
        duration: 400,
        animation: "fadeInUp"
    })
    .init();

new Skroll()
    .add(".gold-item-2", {
        delay: 400,
        duration: 400,
        animation: "fadeInUp"
    })
    .init();

new Skroll()
    .add(".gold-item-3", {
        delay: 600,
        duration: 400,
        animation: "fadeInUp"
    })
    .init();

new Skroll()
    .add(".gold-item-4", {
        delay: 800,
        duration: 400,
        animation: "fadeInUp"
    })
    .init();

new Skroll()
    .add(".storesContent img", {
        delay: 400,
        duration: 400,
        animation: "slideInLeft"
    })
    .init();

new Skroll()
    .add(".storesText", {
        delay: 400,
        duration: 400,
        animation: "slideInRight"
    })
    .init();

new Skroll()
    .add(".stepsContent h1", {
        delay: 400,
        duration: 400,
        animation: "fadeInDown"
    })
    .init();