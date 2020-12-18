$(function () {


    $('.blog-page__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="9pt" height="14pt" viewBox="0 0 9 14" version="1.1"><g><path d="M 3.613281 7 L 7.074219 2.113281 C 7.386719 1.628906 7.386719 0.847656 7.074219 0.363281 C 6.765625 -0.121094 6.261719 -0.121094 5.949219 0.363281 L 1.921875 6.046875 C 1.753906 6.308594 1.679688 6.660156 1.695312 7 C 1.679688 7.34375 1.753906 7.691406 1.921875 7.953125 L 5.949219 13.640625 C 6.261719 14.121094 6.765625 14.121094 7.074219 13.640625 C 7.386719 13.15625 7.386719 12.371094 7.074219 11.886719 Z M 3.613281 7 "/></g></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="9pt" height="14pt" viewBox="0 0 9 14" version="1.1">< g > <path d="M 7.078125 6.046875 L 3.050781 0.363281 C 2.738281 -0.121094 2.234375 -0.121094 1.925781 0.363281 C 1.613281 0.847656 1.613281 1.628906 1.925781 2.113281 L 5.386719 7 L 1.925781 11.886719 C 1.613281 12.371094 1.613281 13.15625 1.925781 13.636719 C 2.234375 14.121094 2.738281 14.121094 3.050781 13.636719 L 7.078125 7.953125 C 7.246094 7.691406 7.320312 7.34375 7.308594 7 C 7.320312 6.660156 7.246094 6.308594 7.078125 6.046875 Z M 7.078125 6.046875 " /></></svg ></button > ',
        infinite: false,
    });



    $('.product-tabs__top-item').on('click', function (e) {

        e.preventDefault();
        $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
        $(this).addClass('product-tabs__top-item--active');

        $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
        $($(this).attr('href')).addClass('product-tabs__content-item--active');

    });

    $('.product-slide__thumb').slick({
        asNavFor: '.product-slide__big',
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        draggable: false
    });
    $('.product-slide__big').slick({
        asNavFor: '.product-slide__thumb',
        draggable: false,
        arrows: false,
        fade: true
    });

    $('.shop-content__filter-btn').on('click', function () {
        $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
        $(this).addClass('shop-content__filter-btn--active');
    });

    $('.button-list').on('click', function () {
        $('.product-item').addClass('product-item--list');
    });

    $('.button-grid').on('click', function () {
        $('.product-item').removeClass('product-item--list');
    });

    $('.select-style, .product-one__item-num').styler();

    $('.filter-price__input').ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
        onChange: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
    });



    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        // autoplay: true,
        // autoplaySpeed: 3500
    });

    $(".star").rateYo({
        starWidth: "17px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        readOnly: true,
        starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18pt" height="16pt" viewBox="0 0 18 16" version="1.1"> <g id="surface1"> <path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 " /> </g> </svg>'
    });


    // TIMER !!!

    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function initializeClock(id, endtime) {
        const clock = document.querySelector('.promo__clock');
        const daysSpan = clock.querySelector('.promo__days');
        const hoursSpan = clock.querySelector('.promo__hours');
        const minutesSpan = clock.querySelector('.promo__minutes');
        const secondsSpan = clock.querySelector('.promo__seconds');

        function updateClock() {
            const t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
    }

    const deadline = $('.promo__clock').attr('data-time');
    initializeClock('promo__clock', deadline);

    // END TIMER !!!


});