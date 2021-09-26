$(document).ready(function () {
    $('.header-wrap .menu').click(function () {
        $('.header-contents').addClass('on');
    });
    $('.header-contents .close').click(function () {
        $('.header-contents').removeClass('on');
    });

    $('.header-wrap .menu').click(function () {
        $('.header-contents').addClass('on');
        $('html, body').css({
            'overflow': 'hidden',
            'height': '100%'
        });
    });
    $('.header-contents .close').click(function () {
        $('.header-contents').removeClass('on');
        $('html, body').css({
            'overflow': 'visible',
            'height': 'auto'
        });
    });

    $('.login-action').click(function () {
        $('.login-pop').addClass('on');
        $('html, body').css({
            'overflow': 'hidden',
            'height': '100%'
        });
    });
    $('.login-pop .top .close').click(function () {
        $('.login-pop').removeClass('on');
        $('html, body').css({
            'overflow': 'visible',
            'height': 'auto'
        });
    });

    // 비밀번호 변경 이메일 입력 - input 값 변경 감지
    $("#pw-email-input").on("propertychange change keyup paste input", function () {
        if ($(this).val() == "") {
            $(this).removeClass('val');
            $(this).parent().siblings('.btn-wrap').find('button').removeClass('val');
            $(this).parent().siblings('p').find('span').css('color', '#777');
        } else {
            $(this).addClass('val');
            $(this).parent().siblings('.btn-wrap').find('button').addClass('val');
            $(this).parent().siblings('p').find('span').css('color', '#2f2f2f');
        }
    });

    $('.pw-find-btn a').click(function () {
        $('.pw-find-pop').addClass('on');
        $('html, body').css({
            'overflow': 'hidden',
            'height': '100%'
        });
    });
    $('.pw-find-pop .top .close').click(function () {
        $('.pw-find-pop').removeClass('on');
        $('html, body').css({
            'overflow': 'visible',
            'height': 'auto'
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

    $('.sign-action').click(function () {
        $('.sign-pop').addClass('on');
        $('html, body').css({
            'overflow': 'hidden',
            'height': '100%'
        });
    });
    $('.sign-pop .top .close').click(function () {
        $('.sign-pop').removeClass('on');
        $('html, body').css({
            'overflow': 'visible',
            'height': 'auto'
        });
    });

});