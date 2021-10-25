// 컨텐츠 visible, invisible
var gnbIndex;

$(".guide_gnb").on({
    "click": function() {
            gnbIndex = $(this).index();
            if (gnbIndex != undefined) {
                switch(gnbIndex) {
                    case 0:
                        op_cl();
                        break;
                    case 1:
                        map();
                        break;
                }
            } 
            $('.guide_gnb').removeClass('current');
            $(this).addClass('current');
    }   
});

/* 개폐막식 안내 */
function op_cl() {
    if ($(".content_open_close").is(":visible")) {
        $(".map").hide();
    } else {
        $(".content_open_close").show();
        $(".map").hide();
    }
}

/* 지도 */
function map() {
    if ($(".map").is(":visible")) {
        $(".content_open_close").hide();
    } else {
        $(".content_open_close").hide();
        $(".map").show();
    }
}