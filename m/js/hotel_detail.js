$(document).ready(function () {
    //    $(window).scroll(function() {
    //        var scroll = $(window).scrollTop();
    //        var os = $('.calc-wrap').offset();
    // 
    //        if(scroll > os.top) {
    //            $('.calc-action').addClass('scroll');
    //        }
    //    });

    // 모듈 포커스시 이동
    $('dl dd input').focus(function () {
        var offset = $(this).closest('dl').offset();

        $('html, body').animate({
            scrollTop: offset.top - 10
        }, 400);
    });

    // 모듈 포커스시 이동
    $('.calc-module > .contents > input').focus(function () {
        var offset = $(this).offset();

        $('html, body').animate({
            scrollTop: offset.top - 10
        }, 400);
    });

    $('.total_pp_number input').focus(function () {
        var offset = $(this).offset();

        $('html, body').animate({
            scrollTop: offset.top - 10
        }, 400);
    });

    // 요금 계산 placeholder 이동
    $('.hotel-detail-wrap > .calc-wrap > .calc-module > .contents > .form-control').focus(function () {
        $(this).siblings('.placeholder').addClass('on');
    });

    $('.hotel-detail-wrap > .calc-wrap > .calc-module > .contents .total_pp_number > input').focus(function () {
        $(this).siblings('.placeholder').addClass('on');
    });

    // 검색 재설정 팝업
    $('.selected-info').click(function () {
        $('.search-module').addClass('on');
    });

    $('.search-module > .close-btn').click(function () {
        $('.search-module').removeClass('on');
    });

    // 검색 모듈 이동 이벤트

    $('.search-module .date input[type="text"]').focus(function (e) {
        $(this).parent().parent().addClass("on");
    });

    // 숙박요금 계산 slide 
    $('.calc-wrap .calc-module .calc-action').click(function () {
        $(this).toggleClass('on');

        if ($(this).hasClass('on')) {
            $('.calc-wrap').addClass('clicked');
            $('.calc-wrap .calc-module .close-btn').addClass('on');
            $('.calc-wrap .calc-module .contents').slideDown('');
            $('.calc-wrap .content-plan-list').slideDown('');
            $('html, body').css({
                'overflow': 'hidden',
                'height': '100%'
            });
        } else {
            $('.calc-wrap').removeClass('clicked');
            $('.calc-wrap .calc-module .close-btn').removeClass('on');
            $('.calc-wrap .calc-module .contents').slideUp('');
            $('.calc-wrap .content-plan-list').slideUp('');
            $('html, body').css({
                'overflow': 'visible',
                'height': 'auto'
            });
        }
    });

    // 총 숙박요금 계산 버튼 position fixed 해지
    $(window).scroll(function () {
        var scrollBottom = $(window).scrollTop() + $(window).height();
        var oh = $('.hotel-detail-wrap').height() + 100;

        if (scrollBottom > oh) {
            $('.calc-wrap').addClass('on');
        }

        if (scrollBottom < oh - 200) {
            $('.calc-wrap').removeClass('on');
        }
    });

    // 상단 슬라이드
    new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        paginationClickable: true,
        simulateTouch: false,
        observer: true,
        observeParents: true,
        // Navigation arrows
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
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

    inputNumber($('.total-input-number_01'));
    inputNumber($('.total-input-number_02'));

    nightNumber($('.night-number-day1-01'));

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
    $('.hotel-detail-wrap > .calc-wrap > .content-plan-list > .add-plan .close-btn').click(function () {
        $(this).parent().css('display', 'none');
        $(this).siblings('.plan-contents').slideUp('slow').removeClass('on');
    });

    // 인원 수 입력
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

    // 더보기 버튼
    $('.intro-more-btn').click(function () {
        $('.intro-box .text').css('height', '100%').css('-webkit-line-clamp', 'unset');
        $(this).hide();
    });

    // 위시리스트 버튼
    $('.wish-btn').click(function () {
        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            $(this).find('img').attr('src', '/images/icon_detail_wish_nor.png');
        } else {
            $(this).addClass('on');
            $(this).find('img').attr('src', '/images/icon_detail_wish_sel.png');
        }

    });

    // 인원 수 입력
    $('.pp_number input').focus(function () {
        $('.people-select').addClass('on');
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

    $('.people-select').mouseover(function () {
        $('.pp_number').addClass('on');
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

    $('.people-select .container ul .people-age > .input-wrap label').click(function () {
        if (toggle) {
            $(this).siblings('select').attr('size', 17); // show all 17 options
            toggle = false;
        } else {
            $(this).siblings('select').attr('size', 1); // show only the selected option
            toggle = true;
        }
    });

    $('.people-select .container ul .people-age > .input-wrap select').change(function () {
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

    $('body').click(function (e) {
        if (isNotInMyArea([$(".pp_number dd input"), $(".people-select")])) {
            $(".people-select").removeClass('on');
        }
    });

});