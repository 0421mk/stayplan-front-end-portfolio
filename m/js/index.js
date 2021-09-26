$(document).ready(function () {
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

    // 모듈 포커스시 이동
    $('dl dd input').focus(function () {
        var offset = $(this).closest('dl').offset();

        $('html, body').animate({
            scrollTop: offset.top - 10
        }, 400);
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

    inputNumber($('.input-number_01'));
    inputNumber($('.input-number_02'));

    // 인원 수 선택
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

    $('.people-select .container ul .people-age > .input-wrap label').click(function () {
        if (toggle) {
            $(this).siblings('select').attr('size', 17); // show all 3 options
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
        if (isNotInMyArea([$(".pp_number dd input"), $(".people-select")])) {
            $(".people-select").removeClass('on');
        }
    });

});