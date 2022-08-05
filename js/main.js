const element = document.querySelector(".worldContent");
var scrollCounter = 0;


function blockScroll() {
    $('body').addClass('scrollDisabled')
}
function allowScroll() {
    $('body').removeClass('scrollDisabled')
}

element.addEventListener('wheel', (e) => {
    e.preventDefault();

    if (scrollCounter > 9) {

        if ($('.worldContent').hasClass('horizontalScrollOff')) {

        } else {
            $('.worldContent').addClass('horizontalScrollOff')

            setTimeout(() => {
                $('.worldContent').removeClass('horizontalScrollOff')
            }, 500);
        }

        scrollCounter = 9;

    } else if (scrollCounter < 0) {
        scrollCounter = 0;

        if ($('.worldContent').hasClass('horizontalScrollOff')) {

        } else {
            $('.worldContent').addClass('horizontalScrollOff')

            setTimeout(() => {
                $('.worldContent').removeClass('horizontalScrollOff')
            }, 500);
        }
    } else {
        wDelta = e.wheelDelta < 0 ? 'down' : 'up';
        if (wDelta == 'down') {
            scrollCounter++;
            var counterTranslate = scrollCounter * 10;
            $('.worldsSliderWrapper').attr('style', 'transform: translate3d(-' + counterTranslate + '%, 0px, 0px);')
        } else {
            scrollLeft()
        }
    }

    function scrollLeft() {
        scrollCounter--;
        var counterTranslate = scrollCounter * 10;
        $('.worldsSliderWrapper').attr('style', 'transform: translate3d(-' + counterTranslate + '%, 0px, 0px);')
    }
});

var screenWidth = $(window).width()
var mobile;
if (screenWidth < 490) {
    mobile = true;
}

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
    }

    if ($('.nmvcContent img').isInViewport()) {
        $('.nmvcContent img').addClass('imageShow')
    } else {
        $('.nmvcContent img').removeClass('imageShow')
    }

});



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


websiteAnimations()

function websiteAnimations() {
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
}

function init() {
    new SmoothScroll(document, 120, 12)
}

function SmoothScroll(target, speed, smooth) {
    if (target === document)
        target = (document.scrollingElement
            || document.documentElement
            || document.body.parentNode
            || document.body) // cross browser support for document scrolling

    var moving = false
    var pos = target.scrollTop
    var frame = target === document.body
        && document.documentElement
        ? document.documentElement
        : target // safari is the new IE

    target.addEventListener('mousewheel', scrolled, { passive: false })
    target.addEventListener('wheel', scrolled, { passive: false })
    target.addEventListener('DOMMouseScroll', scrolled, { passive: false })

    function scrolled(e) {
        e.preventDefault(); // disable default scrolling

        var delta = normalizeWheelDelta(e)

        pos += -delta * speed
        pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling

        if (!moving) update()
    }

    function normalizeWheelDelta(e) {
        if (e.detail) {
            if (e.wheelDelta)
                return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) // Opera
            else
                return -e.detail / 3 // Firefox
        } else
            return e.wheelDelta / 120 // IE,Safari,Chrome
    }

    function update() {
        moving = true

        var delta = (pos - target.scrollTop) / smooth

        target.scrollTop += delta

        if (Math.abs(delta) > 0.5)
            requestFrame(update)
        else
            moving = false
    }

    var requestFrame = function () { // requestAnimationFrame cross browser
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (func) {
                window.setTimeout(func, 1000 / 50);
            }
        );
    }()
}