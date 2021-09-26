$(document).ready(function () {
    // 호텔추가 팝업
    $('.content-plan-list > ul > li > .search-btn-wrap').click(function () {
        $('.hotel-add-pop').addClass('on');
        $('#hotel-search-input').focus().select();
        $('html, body').css({
            'overflow': 'hidden',
            'height': '100%'
        });
    });

    $('.hotel-add-pop .top .close-btn').click(function () {
        $('.hotel-add-pop').removeClass('on');
        $('html, body').css({
            'overflow': 'auto',
            'height': '100%'
        });
    });

    // 모듈 포커스시 이동
    $('.main-calc-module > .contents > input').focus(function () {
        var offset = $(this).offset();

        $('html, body').animate({
            scrollTop: offset.top - 10
        }, 400);
    });

    $('.total_pp_number > input').focus(function () {
        var offset = $(this).offset();

        $('html, body').animate({
            scrollTop: offset.top - 10
        }, 400);
    });

    // 요금 계산 placeholder 이동
    $('.main-calc-wrap .main-calc-module > .contents > input').focus(function () {
        $(this).siblings('.placeholder').addClass('on');
    });

    $('.main-calc-wrap .main-calc-module > .contents .total_pp_number > input').focus(function () {
        $(this).siblings('.placeholder').addClass('on');
    });

    // 플랜 히스토리 스와이퍼
    $('.index2-swiper-container').each(function (i) {
        var mySwiper = new Swiper($('.index2-swiper-container')[i], {

            // Navigation arrows
            nextButton: $('.swiper-button-next')[i],
            prevButton: $('.swiper-button-prev')[i],

            // Optional parameters
            slidesPerView: 1,
            simulateTouch: false,
            spaceBetween: 0,
            paginationClickable: true,

        });
    });

    // people-select
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

    // input + "박" 함수

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

    nightNumber($('.night-number-day1-01'));
    nightNumber($('.night-number-day1-02'));

    // 총 인원 수 입력
    $('.total_pp_number input').focus(function () {
        $('.total-people-select').addClass('on');
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

    $('.total-people-select').mouseover(function () {
        $('.total_pp_number').addClass('on');
    });

    // 플랜 추가
    $('.content-plan-list .plan-add-btn').click(function () {
        $('.add-plan').css({
            'display': 'block'
        });
    });

    $('.content-plan-list .add-plan').click(function () {
        $(this).find('.plan-contents').slideToggle('slow').toggleClass('on');
        
        if($(this).find('.plan-contents').hasClass('on')) {
            $(this).find('.plan-contents').siblings('.plan-title').addClass('on');
        } else {
            $(this).find('.plan-contents').siblings('.plan-title').removeClass('on');
        }
    });
    
    // 추가 플랜 삭제 close
    $('.main-calc-wrap > .content-plan-list > .add-plan .close-btn').click(function () {
        $(this).parent().css('display', 'none');
        $(this).siblings('.plan-contents').slideUp('slow').removeClass('on');
    });

    // 인원 수 - label 클릭시 dropdown
    toggle = true;

    $('.total-people-select .container ul .people-age > .input-wrap label').click(function () {
        if (toggle) {
            $(this).siblings('select').attr('size', 17); // show all 17 options
            toggle = false;
        } else {
            $(this).siblings('select').attr('size', 1); // show only the selected option
            toggle = true;
        }
    });

    $('.total-people-select .container ul .people-age > .input-wrap select').change(function () {
        $(this).attr('size', 1);
        toggle = true;
    });

    // 다른 곳 클릭시 사라지게 하는 함수
    function isNotInMyArea($targetObj) {
        var isIn = true;
        var $objArr = Array();
        var opts = {
            left: 99999,
            right: 0,
            top: 99999,
            bottom: 0
        }

        if ($targetObj) {
            if ($targetObj.length == 1) {
                $objArr.push($targetObj);
            } else {
                $objArr = $targetObj;
            }

            $.each($objArr, function (i, $obj) {
                var obj_position = $obj.offset();
                obj_position.right = parseInt(obj_position.left) + ($obj.width());
                obj_position.bottom = parseInt(obj_position.top) + parseInt($obj.height());

                if (obj_position.left < opts.left) opts.left = obj_position.left;
                if (obj_position.right > opts.right) opts.right = obj_position.right;
                if (obj_position.top < opts.top) opts.top = obj_position.top;
                if (obj_position.bottom > opts.bottom) opts.bottom = obj_position.bottom;
            });

            if ((opts.left <= event.pageX && event.pageX <= opts.right) &&
                (opts.top <= event.pageY && event.pageY <= opts.bottom)) {
                isIn = false;
            }
        }

        return isIn;
    }

    $('body').click(function (e) {
        if (isNotInMyArea([$(".total_pp_number input"), $(".total-people-select")])) {
            $(".total-people-select").removeClass('on');
        }
    });
});