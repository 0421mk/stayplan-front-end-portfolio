$(document).ready(function () {
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

    $('.good-btn').click(function () {
        $(this).toggleClass('on');

        if ($(this).hasClass('on')) {
            $(this).find('img').attr('src', '/images/icon_detail_wish_sel.png');
        } else {
            $(this).find('img').attr('src', '/images/btn_wish_nor.png');
        }
    });

    // 클릭하면 나오도록
    $('.price-range .content').click(function () {
        $('.price-range-pop').addClass('on');
    });
    $('.select-module .price-range-pop .btn-wrap button').click(function () {
        $('.price-range-pop').removeClass('on');
    });

    $('.rate-range .content').click(function () {
        $('.rate-range-pop').addClass('on');
    });
    $('.select-module .rate-range-pop .btn-wrap button').click(function () {
        $('.rate-range-pop').removeClass('on');
    });

    $('.review-range .content').click(function () {
        $('.review-range-pop').addClass('on');
    });
    $('.select-module .review-range-pop .btn-wrap button').click(function () {
        $('.review-range-pop').removeClass('on');
    });
    
     $('body').click(function (e) {
            if (isNotInMyArea([ $(".review-range"), $(".review-range-pop") ])) {
                $(".review-range-pop").removeClass('on');
            }
        });
    
    $('body').click(function (e) {
            if (isNotInMyArea([ $(".rate-range"), $(".rate-range-pop") ])) {
                $(".rate-range-pop").removeClass('on');
            }
        });
    
    $('body').click(function (e) {
            if (isNotInMyArea([ $(".price-range"), $(".price-range-pop") ])) {
                $(".price-range-pop").removeClass('on');
            }
        });

    // 검색창 focus, blur 시 효과
    $('.info_box .area input[type="text"], .info_box .pp_number input[type="text"]').focus(function (e) {
        $(this).parent().parent().addClass("on");
    });
    $('.info_box .area input[type="text"], .info_box .pp_number input[type="text"]').blur(function () {
        if ($(this).val()) {
            $(this).parent().parent().addClass("on");
        }
    });
    $('.info_box .date input[type="text"]').focus(function (e) {
        $(this).parent().parent().addClass("on");
        console.log($(this).val());
    });

    // 검색창 나오도록

    $('.selected-info .info-wrap').click(function () {
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

    inputNumber($('.input-number_01'));
    inputNumber($('.input-number_02'));
    inputNumber2($('.input-number_03'));
    inputNumber2($('.input-number_04'));

    // 검색 자동완성
    $('.area input').focus(function () {
        $('.area-auto').addClass('on');
    });

    $('.area input').blur(function () {
        $('.area-auto').removeClass('on');
    });

    // 인원수 뜨도록
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
});