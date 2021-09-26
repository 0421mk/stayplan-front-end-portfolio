$(document).ready(function () {
    // 상단 슬라이드
    new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 0,
        paginationClickable: true,
        simulateTouch: false,
        observer: true,
        observeParents: true,
        // Navigation arrows
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });


    // 검색창 나오도록
    $('.selected-info').click(function () {
        $('.re-search-wrap').addClass('on');
    });
    $('.re-search-wrap .btn-wrap ul li:nth-child(1) a').click(function () {
        $('.re-search-wrap').removeClass('on');
    });

    // input_number - 명
    (function () {

        window.inputNumber = function (el) {
            var min = el.attr('min') || false;
            var max = el.attr('max') || false;

            var els = {};

            els.dec = el.prev();
            els.inc = el.next();

            el.each(function () {
                init($(this));
            });

            function init(el) {

                els.dec.on('click', decrement);
                els.inc.on('click', increment);

                function decrement() {
                    var value = el[0].value;
                    var number = value.replace(/[^0-9]/g, '');
                    number--;
                    if (!min || number >= min) {
                        el[0].value = number;
                        el[0].value += "명";
                    }
                }

                function increment() {
                    var value = el[0].value;
                    var number = value.replace(/[^0-9]/g, '');
                    number++;
                    if (!max || number <= max) {
                        el[0].value = number;
                        el[0].value += "명";
                    }
                }
            }
        }
    })();
    // input_number - 세
    (function () {

        window.inputNumber2 = function (el) {
            var min = el.attr('min') || false;
            var max = el.attr('max') || false;

            var els = {};

            els.dec = el.prev();
            els.inc = el.next();

            el.each(function () {
                init($(this));
            });

            function init(el) {

                els.dec.on('click', decrement);
                els.inc.on('click', increment);

                function decrement() {
                    var value = el[0].value;
                    var number = value.replace(/[^0-9]/g, '');
                    number--;
                    if (!min || number >= min) {
                        el[0].value = number;
                        el[0].value += "세";
                    }
                }

                function increment() {
                    var value = el[0].value;
                    var number = value.replace(/[^0-9]/g, '');
                    number++;
                    if (!max || number <= max) {
                        el[0].value = number;
                        el[0].value += "세";
                    }
                }
            }
        }
    })();


    // input_number - 박 선택하는 함수
    (function () {

        window.nightNumber = function (el) {
            var min = el.attr('min') || false;
            var max = el.attr('max') || false;

            var els = {};

            els.dec = el.prev();
            els.inc = el.next();

            el.each(function () {
                init($(this));
            });

            function init(el) {

                els.dec.on('click', decrement);
                els.inc.on('click', increment);

                function decrement() {
                    var value = el[0].value;
                    var number = value.replace(/[^0-9]/g, '');
                    number--;
                    if (!min || number >= min) {
                        el[0].value = number;
                        el[0].value += "박";
                    }
                }

                function increment() {
                    var value = el[0].value;
                    var number = value.replace(/[^0-9]/g, '');
                    number++;
                    if (!max || number <= max) {
                        el[0].value = number;
                        el[0].value += "박";
                    }
                }
            }
        }
    })();

    inputNumber($('.input-number_01'));
    inputNumber($('.input-number_02'));
    inputNumber2($('.input-number_03'));
    inputNumber2($('.input-number_04'));

    inputNumber($('.total-input-number_01'));
    inputNumber($('.total-input-number_02'));
    inputNumber2($('.total-input-number_03'));
    inputNumber2($('.total-input-number_04'));

    nightNumber($('.night-number-day1-01'));
    nightNumber($('.night-number-day1-02'));
    nightNumber($('.night-number-day1-03'));

    nightNumber($('.night-number-day2-01'));
    nightNumber($('.night-number-day2-02'));
    nightNumber($('.night-number-day2-03'));

    nightNumber($('.night-number-day3-01'));
    nightNumber($('.night-number-day3-02'));
    nightNumber($('.night-number-day3-03'));


    // 인원수 뜨도록
    $('.pp_number input').focus(function () {
        $('.people-select').addClass('on');
    });

    $('.total_pp_number input').focus(function () {
        $('.total-people-select').addClass('on');
    });

    $('.people-select .complete').click(function () {
        var op = $(this).siblings('.container').find('.people-type:nth-child(1) .input-wrap input').val();
        var yp = $(this).siblings('.container').find('.people-type:nth-child(2) .input-wrap input').val();

        op = op.replace(/[^0-9]/g, '');
        yp = yp.replace(/[^0-9]/g, '');

        var returnVal = "성인 " + op + ", 아동 " + yp;

        $('.pp_number dd input').val(returnVal);
        $('.people-select').removeClass('on');
    });

    $('.total-people-select .complete').click(function () {
        var op = $(this).siblings('.container').find('.people-type:nth-child(1) .input-wrap input').val();
        var yp = $(this).siblings('.container').find('.people-type:nth-child(2) .input-wrap input').val();

        op = op.replace(/[^0-9]/g, '');
        yp = yp.replace(/[^0-9]/g, '');

        var returnVal = "성인 " + op + ", 아동 " + yp;

        $('.total_pp_number > input').val(returnVal);
        $('.total-people-select').removeClass('on');
    });

    // 플랜 1, 2, 3 오픈탭
    $('.top-plan-list ul li').click(function () {
        $('.top-plan-list ul li').removeClass('on');
        $(this).addClass('on');

        var index = $(this).index() + 1;
        $('.content-plan-list ul').removeClass('on');
        $('.content-plan-list ul:nth-child(' + index + ')').addClass('on');
    });

    // 리뷰 마우스오버시 img 변경
    $('.hotel-info-wrap .review-wrap .contents > ul > li').mouseenter(function () {
        $(this).find('.icon img').attr('src', '/images/btn_detail_go_hover.png');
    });
    $('.hotel-info-wrap .review-wrap .contents > ul > li').mouseleave(function () {
        $(this).find('.icon img').attr('src', '/images/btn_detail_go_nor.png');
    });

    // 위시리스트 추가버튼
    $('.wish-btn').click(function () {
        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            $(this).find('img').attr('src', '/images/icon_detail_wish_nor.png');
            $(this).find('.text').text('위시리스트 추가').css('left', '48px');
        } else {
            $(this).addClass('on');
            $(this).find('img').attr('src', '/images/icon_detail_wish_sel.png');
            $(this).find('.text').text('위시로 저장됨').css('left', '55px');
        }

    });

    // 더보기 버튼
    $('.intro-more-btn').click(function () {
        $('.intro-wrap .content').css('height', '100%').css('-webkit-line-clamp', 'unset');
        $(this).hide();
    });

    // 검색 자동완성
    $('.area input').focus(function () {
        $('.area-auto').addClass('on');
    });

    $('.area input').blur(function () {
        $('.area-auto').removeClass('on');
    });

    // 호텔 추가 버튼
    $('.hotel-detail-wrap > .hotel-info-wrap .right .calc-module .plan-wrap .content-plan-list > ul .add-li .search-btn-wrap').click(function () {
        $('.hotel-add-pop').addClass('on');
        $('.bg').addClass('on');
        $('html, body').css({
            'overflow': 'hidden',
            'height': '100%'
        });
    });

    $('.bg').click(function () {
        $('html, body').css({
            'overflow': 'auto',
            'height': '100%'
        });
        $(this).removeClass('on');
        $('.hotel-add-pop').removeClass('on');
    });

    $('.hotel-add-pop .top .close-btn').click(function () {
        $('html, body').css({
            'overflow': 'auto',
            'height': '100%'
        });
        $('.hotel-add-pop').removeClass('on');
        $('.bg').removeClass('on');
    });
});