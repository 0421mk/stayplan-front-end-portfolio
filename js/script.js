$(document).ready(function () {
    // Header 공용
    $('#bt_menu').click(function (e) {
        $('#menu').toggleClass('on');
    });
    $('#menu .bt_close').click(function (e) {
        $(this).parent().removeClass('on');
    });
    $('.tm>li>a.bt_account').click(function (e) {
        $(this).parent().toggleClass('on');
    });
    $('.tm li .mu_bg').click(function (e) {
        $(this).parent().removeClass('on');
    });

    $('#header .login').click(function () {
        $('.login-pop').addClass('on');
        $('.bg').addClass('on');
        $('html, body').css({
            'overflow': 'hidden',
            'height': '100%'
        });
    });

    $('.login-pop .close, .bg').click(function () {
        $('.login-pop').removeClass('on');
        $('.bg').removeClass('on');
        $('html, body').css({
            'overflow': 'auto',
            'height': '100%'
        });
    });

    $('.login-pop .input-module .input-wrap ul li:nth-child(3) a').click(function () {
        $('.pw-find-pop').addClass('on');
        $('.login-pop').removeClass('on');
        $('.bg').addClass('on');
        $('html, body').css({
            'overflow': 'hidden',
            'height': '100%'
        });
    });

    $('.pw-find-pop .close, .bg').click(function () {
        $('.pw-find-pop').removeClass('on');
        $('.bg').removeClass('on');
        $('html, body').css({
            'overflow': 'auto',
            'height': '100%'
        });
        $('.pw-find-pop .input-wrap').show();
        $('.pw-find-pop .complete').hide();
        $('.pw-find-pop .email input').val('');
    });

    // 재설정 메일 발송 클릭시
    $('.pw-find-pop .btn-wrap button').click(function () {
        $('.pw-find-pop .input-wrap').hide();
        $('.pw-find-pop .complete').show();
    });

    $('.login-pop .sign-wrap a').click(function () {
        $('.sign-pop').addClass('on');
        $('.login-pop').removeClass('on');
        $('.bg').addClass('on');
        $('html, body').css({
            'overflow': 'hidden',
            'height': '100%'
        });
    });

    $('.sign-pop .close, .bg').click(function () {
        $('.sign-pop').removeClass('on');
        $('.bg').removeClass('on');
        $('html, body').css({
            'overflow': 'auto',
            'height': '100%'
        });
    });

    // 비밀번호 변경 이메일 입력 - input 값 변경 감지
    $("#pw-email-input").on("propertychange change keyup paste input", function () {
        if ($(this).val() == "") {
            $(this).removeClass('val');
            $(this).parent().siblings('.btn-wrap').find('button').removeClass('val');
        } else {
            $(this).addClass('val');
            $(this).parent().siblings('.btn-wrap').find('button').addClass('val');
        }
    });
});