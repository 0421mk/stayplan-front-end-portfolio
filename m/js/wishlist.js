$(document).ready(function () {
    // 위시리스트 버튼
    $('.good-btn').click(function () {
        $(this).toggleClass('on');

        if ($(this).hasClass('on')) {
            $(this).find('img').attr('src', './images/icon_detail_wish_sel.png');
        } else {
            $(this).find('img').attr('src', './images/btn_wish_nor.png');
        }
    });
});