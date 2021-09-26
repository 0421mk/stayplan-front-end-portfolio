$(document).ready(function () {
    // 모듈 포커스시 이동
    $('dl dd input').focus(function () {
        var offset = $(this).closest('dl').offset();

        $('html, body').animate({
            scrollTop: offset.top - 10
        }, 400);
    });

    // 검색 재설정 팝업
    $('.selected-info').click(function () {
        $('.main-calc-wrap').addClass('view');
        $('body').css({
            'height': '100%',
            'overflow': 'hidden'
        });
    });

    $('.main-calc-wrap .main-calc-module > .close-btn').click(function () {
        $('.main-calc-wrap').removeClass('view');
        $('body').css({
            'height': 'auto',
            'overflow': 'visible'
        });
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

    // 객실변경
    $('.hotel-change-action').click(function () {
        $(this).closest('.plan-li').toggleClass('change');

        if ($(this).closest('.plan-li').hasClass('change')) {
            $(this).closest('.left-box').siblings().html('<span class="move-btn"></span>');

            $(this).text('닫기').css({
                'background': '#ea5416',
                'color': '#fff',
                'border': '1px solid #ea5416'
            });

            $('.change').find('.hotel-change-pop').slideDown('');

            var height1 = $(this).closest('.container').siblings('.hotel-change-pop').find('.contents > ul > li:nth-child(1)').height();
            var height2 = $(this).closest('.container').siblings('.hotel-change-pop').find('.contents > ul > li:nth-child(2)').height();

            $(this).closest('.container').siblings('.hotel-change-pop').find('.contents').css('height', height1 + height2 - 1);
        } else {
            $(this).closest('.left-box').siblings().html('<a href="">보기</a>');

            $(this).text('객실변경').css({
                'background': '#fff',
                'color': '#777',
                'border': '1px solid #ddd'
            });

            $(this).closest('.plan-li').find('.hotel-change-pop').slideUp('');
            $(this).closest('.plan-li').find('.hotel-change-pop .contents').removeClass('more');
            $(this).closest('.plan-li').find('.hotel-change-pop .more-btn').text('더보기 +');
        }
    });

    $('.hotel-change-pop .more-btn').click(function () {
        $(this).closest('.plan-li').find('.hotel-change-pop .contents').toggleClass('more');

        if ($(this).closest('.plan-li').find('.hotel-change-pop .contents').hasClass('more')) {
            $(this).text('접기 -');
        } else {
            $(this).text('더보기 +');
        }

    });

    // 검색 모듈 이동 이벤트
    $('.search-module .area input').focus(function () {
        $('.area-auto').addClass('on');
    });
    $('.search-module .area input').blur(function () {
        $('.area-auto').removeClass('on');
    });
    $('.search-module .area input[type="text"], .search-module .pp_number input[type="text"]').focus(function (e) {
        $(this).parent().parent().addClass("on");
    });
    $('.search-module .area input[type="text"], .search-module .pp_number input[type="text"]').blur(function () {
        if ($(this).val()) {

        } else {
            $(this).parent().parent().removeClass("on");
        }
    });
    $('.search-module .date input[type="text"]').focus(function (e) {
        $(this).parent().parent().addClass("on");
        console.log($(this).val());
    });

    // 플랜 히스토리 스와이퍼
    $('.calc-swiper-container').each(function (i) {
        var mySwiper = new Swiper($('.calc-swiper-container')[i], {

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

    $("#header").load("/m/header.html");
    $("#footer").load("/m/footer.html");

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

    // 인원 선택
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

    // radio 선택
    $('.calc-after-wrap .plan-list-wrap .plan > .contents > .list-wrap > ul > li > .hotel-change-pop .contents > ul > li .right').click(function () {
        $(this).siblings('.left').find('.check-wrap input').prop('checked', true);
    });

    $('.main-calc-module > .contents > div > input').focus(function () {
        $(this).parent().addClass('on');
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