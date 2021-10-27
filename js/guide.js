// 컨텐츠 visible, invisible
var gnbIndex;

$(".guide_gnb").on({
    "click": function() {
            gnbIndex = $(this).index();
            if (gnbIndex != undefined) {
                switch(gnbIndex) {
                    case 0:
                        op_cl_ui();
                        break;
                    case 1:
                        map_ui();
                        break;
                }
            } 
            $('.guide_gnb').removeClass('current');
            $(this).addClass('current');
    }   
});

/* 개폐막식 안내 */
function op_cl_ui() {
    if ($(".content_open_close").is(":visible")) {
        $(".content_map").hide();
    } else {
        $(".content_open_close").show();
        $(".content_map").hide();
    }
}

/* 지도 */
function map_ui() {
    if ($(".content_map").is(":visible")) {
        $(".content_open_close").hide();
    } else {
        $(".content_open_close").hide();
        $(".content_map").show();
    }
    map.relayout();
    setCenter();
}
