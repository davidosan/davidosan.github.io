$(document).ready(function () {
            $('.animcontainer').slick({
                dots: true,
                autoplay: true,
                autoplaySpeed: 3000,
                accessibility: true,
                pauseOnFocus: true,
                infinite: true,
                speed: 100,
                useTransform: true,
                useCSS: true,
                swipe: true,
                fade: true,
                cssEase: 'linear',
                lazyLoad: true
            });
        });