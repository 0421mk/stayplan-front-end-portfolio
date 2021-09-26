 $(document).ready(function () {
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

     $('.mt_area .info_box .area input').focus(function () {
         $('.area-auto').addClass('on');
     });
     $('.mt_area .info_box .area input').blur(function () {
         $('.area-auto').removeClass('on');
     });
     $('.info_box .area input[type="text"], .info_box .pp_number input[type="text"]').focus(function (e) {
         $(this).parent().parent().addClass("on");
     });
     $('.info_box .area input[type="text"], .info_box .pp_number input[type="text"]').blur(function () {
         if ($(this).val()) {

         } else {
             $(this).parent().parent().removeClass("on");
         }
     });
     $('.info_box .date input[type="text"]').focus(function (e) {
         $(this).parent().parent().addClass("on");
         console.log($(this).val());
     });

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

     inputNumber($('.input-number_01'));
     inputNumber($('.input-number_02'));
     inputNumber2($('.input-number_03'));
     inputNumber2($('.input-number_04'));
 });